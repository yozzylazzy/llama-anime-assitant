import Character2d from "../components/Character2d";
import ChatBox from "../components/ChatBot";
import { ChatProvider } from "../context/ChatContext";

const Conversation = () => {
  return (
    <ChatProvider>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 h-screen">
        {/* Left Character */}
        <div className="col-span-2 md:col-span-2 flex justify-center items-center bg-gray-200 p-4">
          <Character2d />
        </div>

        {/* Right Chat */}
        <div className="col-span-2 bg-gray-50 p-6 md:col-span-3 px-5 py-20">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">AI Assistant</h1>
          <ChatBox />
        </div>
      </div>
    </ChatProvider>
  );
};

export default Conversation;
