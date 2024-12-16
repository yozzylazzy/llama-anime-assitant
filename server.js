import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import { EdgeTTS } from '@andresaya/edge-tts';
import cors from "cors";
import fs from 'fs';  // Add fs for file writing

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();
  const PORT = 5000;

  app.use(express.json());
  app.use(cors());

  // Serve static files from the 'audio' folder
  app.use('/audio', express.static(path.join(__dirname, 'audio')));

  app.post("/api/tts", async (req, res) => {
    const { text, rate, volume, pitch } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required." });
    }

    try {
      // Initialize the EdgeTTS service
      const edgeTTS = new EdgeTTS();
      // Synthesize the speech with provided options
      const audioGenerated = await edgeTTS.synthesize(text, 'en-US-AriaNeural', {
        rate: rate || '0%',  // Speech rate (default to 0%)
        volume: volume || '50%',  // Speech volume (default to 0%)
        pitch: pitch || '10Hz'  // Voice pitch (default to 0Hz)
      });

      // Export synthesized audio in raw format
      const audioBuffer = await edgeTTS.toRaw();  // Get raw audio buffer

      // Decode the base64 audio data
      const audioData = Buffer.from(audioBuffer, 'base64');  // Decode from base64

      // Generate a unique filename for the audio
      const fileName = `voice-${Date.now()}.mp3`;  // Default filename
      const outputPath = path.join(__dirname, 'audio', fileName);  // Path to save the audio file

      // Ensure the directory exists
      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      }

      // Write the decoded audio data to a file
      fs.writeFileSync(outputPath, audioData);  // Write the raw audio data to the file

      // Respond with the audio file URL
      res.status(200).json({
        message: "Text-to-speech generated successfully",
        audioUrl: `/audio/${fileName}`,  // Return the audio URL
      });
    } catch (error) {
      console.error("Error generating TTS:", error);
      res.status(500).json({ error: "Failed to generate text-to-speech." });
    }
  });

  // Route to retrieve audio based on ID
  app.get('/audio/:id', (req, res) => {
    const audioId = req.params.id; // Extract the audio ID from the URL
    const filePath = path.join(__dirname, 'audio', `${audioId}.mp3`); // Construct the file path

    if (fs.existsSync(filePath)) {
      // If the file exists, send it as a response
      res.sendFile(filePath);
    } else {
      // If the file doesn't exist, send a 404 error
      res.status(404).send('Audio file not found');
    }
  });

  app.delete('/audio/:id', (req, res) => {
    const audioId = req.params.id; // Extract the audio ID from the URL
    const filePath = path.join(__dirname, 'audio', `${audioId}.mp3`); // Construct the file path

    if (fs.existsSync(filePath)) {
      // If the file exists, send it as a response
      res.sendFile(filePath);
    } else {
      // If the file doesn't exist, send a 404 error
      res.status(404).send('Audio file not found');
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

createServer();
