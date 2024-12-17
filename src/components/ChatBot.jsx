import getChatResponse from "../api/getChatResponse";
import markdownit from "markdown-it";
import generateTTS from "../services/tts";
import { useChat } from "../context/ChatContext";
import { removeEmojisAndPattern } from "../../lib/utils";

const ChatBox = () => {
  const {
    messages, setMessages, input, setInput,
    isTyping, setIsTyping, setIsTalking,
    setAudioUrl
  } = useChat();

  // enable everything
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
  })

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      let botResponse = await getChatResponse(
        newMessages.map((msg) => `${msg.sender}: ${msg.text}`).join("\n")
      );

      // Filter the bot responses
      botResponse = removeEmojisAndPattern(botResponse);

      // Add a bot response message (without audio initially)
      const botMessage = { sender: "bot", text: "" };  // Empty message to simulate typing
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);

      const audioUrl = await generateTTS(botResponse);
      setAudioUrl(audioUrl);

      if (audioUrl) {
        const audio = new Audio(audioUrl);
        // Wait for the audio to finish before proceeding
        audio.onloadedmetadata = () => {
          const audioDuration = audio.duration * 1000; // Duration in milliseconds
          setIsTalking(true); // Set isTalking to true when the bot starts speaking
          // Simulate typing effect by gradually revealing the message
          let charIndex = 0;
          const interval = audioDuration / botResponse.length; // Interval for each character to appear
          const typingInterval = setInterval(() => {
            if (charIndex < botResponse.length) {
              botMessage.text = botResponse.slice(0, charIndex + 1);
              setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages[updatedMessages.length - 1] = botMessage; // Update last message
                return updatedMessages;
              });
              charIndex++;
            } else {
              clearInterval(typingInterval); // Stop typing once the message is fully revealed
            }
          }, interval);
        };
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, there was an error!" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100 rounded-lg shadow-lg max-h-svh overflow-y-scroll">
      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
              }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${message.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-900"
                }`}
              dangerouslySetInnerHTML={{
                __html: md.render(message.text),
              }}
            >
              {/* {textParsed(message.text)} */}
              {/* {message.text} */}
              {/* <div dangerouslySetInnerHTML={{ __html: formatMarkdownToHTML(message.text) }} /> */}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs p-3 rounded-lg bg-gray-300 text-gray-900">
              ...
            </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 border border-gray-300 rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
