const generateTTS = async (text, characterEdgeConfig, rate = "0%", volume = "0%", pitch = "10Hz") => {
  try {
    const response = await fetch("https://llama-anime-assitant-api.vercel.app/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, rate, volume, pitch, characterEdgeConfig }), // Added default options
    });

    const data = await response.json();
    if (response.ok) {
      return `https://llama-anime-assitant-api.vercel.app${data.audioUrl}`; // Return the audio URL
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error("Error calling TTS API:", error);
  }

  return null;
};

export default generateTTS;
