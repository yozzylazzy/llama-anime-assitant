import OpenAI from "openai";
import { aiPreferences } from "../constants";

const getChatResponse = async (selectedModel: string, userMessage: string) => {
  const client = new OpenAI({
    apiKey: "ollama",
    baseURL: "http://localhost:11434/v1",
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

    console.log(`prompt: ${prompt}`);

    const chatResponse = await client.chat.completions.create({
      model: "llama3",
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
    });

    const response =
      chatResponse.choices[0]?.message?.content?.trim() ||
      "Sorry, there was a problem!";
    return response;
  } catch (error) {
    console.error("Error in API request:", error);
    return "Sorry, I couldn't fetch a response.";
  }
};

export default getChatResponse;
