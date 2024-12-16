import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm here to help! Ask me anything." },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100 rounded-lg shadow-lg">
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
            >
              {message.text}
            </div>
          </div>
        ))}
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
