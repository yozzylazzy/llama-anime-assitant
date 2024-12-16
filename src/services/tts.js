const generateTTS = async (text) => {
  const fileName = `voice-${Date.now()}.mp3`; // Unique file name for each request

  try {
    const response = await fetch("http://localhost:5000/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, fileName }),
    });

    const data = await response.json();
    if (response.ok) {
      return `http://localhost:5000${data.audioUrl}`; // Return the audio URL
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error("Error calling TTS API:", error);
  }

  return null;
};

export default generateTTS;
