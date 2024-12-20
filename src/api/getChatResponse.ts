import OpenAI from "openai";
import { aiPreferences } from "../constants";

const MAX_MESSAGE_LENGTH = 1000;

const getChatResponse = async (selectedModel: string, userMessage: string) => {
  const isProduction = import.meta.env.MODE === "production";

  if (isProduction && userMessage.length > MAX_MESSAGE_LENGTH) {
    return `I'm sorry, your message is too long, the maximal message send is ${MAX_MESSAGE_LENGTH} char.`;
  }

  const client = new OpenAI({
    apiKey: `${import.meta.env.VITE_OPEN_API_KEY}`,
    baseURL: `${import.meta.env.VITE_OPEN_API_HOST}`,
    dangerouslyAllowBrowser: true,
  });

  const character = aiPreferences.find((char) => char.id === selectedModel);
  const modelDesc = character ? character.modelDescriptionBehaviour : "";

  try {
    // Combine the model description and user message to form the prompt
    const prompt = `
      You are the character called ${character?.name}. 
      Your behavior is as follows:
      ${modelDesc}

      Respond to the following user message in your character's voice and tone:
      User: "${userMessage}"
    `;

    // console.log(`prompt: ${prompt}`);

    const chatResponse = await client.chat.completions.create({
      model: `${import.meta.env.VITE_AI_MODEL}`,
      // model: "mistrall",
      // messages: message,
      messages: [
        {
          role: "user",
          // content: userMessage,
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 300, // Batas jumlah token untuk respons
    });

    const response =
      chatResponse.choices[0]?.message?.content?.trim() ||
      "Sorry, there was a problem!";
    return response;
  } catch (error) {
    // console.error("Error in API request:", error);
    return "Sorry, I couldn't fetch a response.";
  }
};

export default getChatResponse;
