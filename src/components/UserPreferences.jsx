import { useState } from "react";
import { catPixel } from "../assets/images"
import { aiPreferences } from "../constants"
import { useChat } from "../context/ChatContext";

const UserPreferences = () => {
  const { selectedCharacter, setSelectedCharacter, isTalking, isTyping } = useChat();
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectedCharacter = (characterId) => {
    // Update character only if it's different
    if (!isTyping && !isTalking) {
      if (selectedCharacter !== characterId) {
        setIsLoading(true);
        setTimeout(() => {
          setSelectedCharacter(characterId);
          setIsLoading(false);
        }, 1000); // Need it to prevent stack model cubism error
      }
    }
  };

  return (
    <div className="w-full h-full py-5 px-3 overflow-y-auto flex justify-center items-start">
      {isLoading && (
        <div className="absolute w-full h-full bg-gray-500 opacity-50 flex justify-center items-center z-50">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div> {/* Spinner */}
        </div>
      )}
      
      <section className="flex flex-col gap-4 justify-center items-center w-max">
        {aiPreferences.map((char, index) => (
          <div key={index} className="flex items-center">
            <button
              disabled={isTalking || isTyping ? true : false}
              onClick={() => handleSelectedCharacter(char.id)} // Call handler explicitly
              className={`flex flex-col items-center p-2 border border-gray-300 rounded-2xl shadow hover:bg-gray-100 w-28 h-36 overflow-hidden
                ${selectedCharacter === char.id ? 'bg-[#b9e5e8]' : 'bg-[#7ab2d3]'}`}
            >
              <img
                src={catPixel}
                alt={char.name}
                className="object-cover w-20 h-20 mb-4"
              />
              <span className="text-center text-sm font-bold uppercase">{char.name}</span>
            </button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default UserPreferences
