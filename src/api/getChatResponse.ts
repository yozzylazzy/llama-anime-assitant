import axios from "axios";
import { aiPreferences } from "../constants";

const MAX_MESSAGE_LENGTH = 1000;

const getChatResponse = async (selectedModel: string, userMessage: string) => {
  const isProduction = import.meta.env.MODE === "production";

  if (isProduction && userMessage.length > MAX_MESSAGE_LENGTH) {
    return `I'm sorry, your message is too long, the maximal message send is ${MAX_MESSAGE_LENGTH} char.`;
  }

  const character = aiPreferences.find((char) => char.id === selectedModel);
  const modelDesc = character ? character.modelDescriptionBehaviour : "";

  try {
    const prompt = `
      You are the character called ${character?.name}. 
      Your behavior is as follows:
      ${modelDesc}
    `;

    const response = await axios.post("/api/chat", {
      model: import.meta.env.VITE_AI_MODEL,
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: userMessage },
      ],
    });

    const chatResponse =
      response.data.choices[0]?.message?.content?.trim() ||
      "Sorry, there was a problem!";
    return chatResponse;
  } catch (error) {
    console.error("Error in API request:", error);
    return "Sorry, I couldn't fetch a response.";
  }
};

export default getChatResponse;
