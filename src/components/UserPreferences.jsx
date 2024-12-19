import { useState } from "react";
import { catPixel } from "../assets/images"
import { aiPreferences } from "../constants"
import { useChat } from "../context/ChatContext";

const UserPreferences = () => {
  const { selectedCharacter, setSelectedCharacter } = useChat();

  const handleSelectedCharacter = (characterId) => {
    setSelectedCharacter(characterId);
  }

  return (
    <div className="w-full h-full py-5 px-3 overflow-y-auto flex justify-center items-start">
      <section className="flex flex-col gap-4 justify-center items-center w-max">
        {aiPreferences.map((char, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => setSelectedCharacter(char.id)}
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
