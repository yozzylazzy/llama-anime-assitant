import OpenAI from "openai";

const getChatResponse = async (userMessage) => {
  const client = new OpenAI({
    apiKey: "ollama",
    baseURL: "http://localhost:11434/v1",
    dangerouslyAllowBrowser: true,
  });

  try {
    const chatResponse = await client.chat.completions.create(
      {
        model: "llama3",
        // messages: message,
        messages: [
          {
            "role": "user",
            "content": userMessage,
          }
        ],
        temperature: 0.7
      }
    );

    const response = chatResponse.choices[0]?.message?.content?.trim() || 'Sorry, there was a problem!';
    return response;
  } catch (error) {
    console.error("Error in API request:", error);
    return "Sorry, I couldn't fetch a response.";
  }
}

export default getChatResponse;

