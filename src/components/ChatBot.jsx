import { useState } from "react";
import getChatResponse from "../api/getChatResponse";
import markdownit from "markdown-it";
import generateTTS from "../services/tts";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // enable everything
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
  })

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const botResponse = await getChatResponse(
        newMessages.map((msg) => `${msg.sender}: ${msg.text}`).join("\n")
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);

      const audioUrl = await generateTTS(botResponse);
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play();
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
