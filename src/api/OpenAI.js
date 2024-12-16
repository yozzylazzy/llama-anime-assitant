import OpenAI from "openai";

const getChatResponse = async () => {
  const client = new OpenAI({
    apiKey: "ollama",
    baseURL: "http://localhost:11434/v1",
  });
  
  const chatResponse = await client.chat.completions.create(
    {
      model: "llama3",
      // messages: message,
      messages: [
        {
          "role": "user",
          "content": "Write a haiku about programming.",
        }
      ],
      temperature: 0.7
    }
  );
  
  const response = chatResponse.choices[0]?.message?.content?.trim() || 'Sorry, there was a problem!';
  return response;
}

export default getChatResponse;

