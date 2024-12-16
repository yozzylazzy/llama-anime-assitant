const generateTTS = async (text) => {
  try {
    const response = await fetch("http://localhost:5000/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, rate: "0%", volume: "50%", pitch: "10Hz" }), // Added default options
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