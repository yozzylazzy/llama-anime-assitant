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
    // Combine the model description and user message to form the prompt
    const prompt = `
      You are the character called ${character?.name}. 
      Your behavior is as follows:
      ${modelDesc}
    `;

    // Make the API call using axios
    const response = await axios.post(
      `${import.meta.env.VITE_OPEN_API_HOST}/chat/completions`,
      {
        model: `${import.meta.env.VITE_AI_MODEL}`,
        messages: [
          {
            role: "system",
            content: prompt,
          },
          {
            role: "user",
            content: userMessage, // Use the userMessage for the user prompt
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
        },
      }
    );

    // Handle response
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
