import { createContext, useState, useContext } from 'react';

// Create Context
const ChatContext = createContext();

// Create a Provider Component
// eslint-disable-next-line react/prop-types
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hey there! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isTalking, setIsTalking] = useState(false); // State to track if the character is talking
  const [audioUrl, setAudioUrl] = useState(''); // State for audio URL

  return (
    <ChatContext.Provider value={{
      messages,
      setMessages,
      input,
      setInput,
      isTyping,
      setIsTyping,
      isTalking,
      setIsTalking,
      audioUrl,
      setAudioUrl // Expose audio URL and updater
    }}>
      {children}
    </ChatContext.Provider>
  );
};

// Create a custom hook to access the global state
export const useChat = () => useContext(ChatContext);
