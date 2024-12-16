import express from "express";
import * as tsImport from 'ts-import';
// import edgeTTS from "edge-tts"; // need to be import by tsImport
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  // Correctly create the absolute path to edge-tts module
  const edgeTtsPath = path.join(__dirname, 'node_modules', 'edge-tts', 'index.ts');
  try {
    // Dynamically import edgeTTS using ts-import
    const edgeTTS = await tsImport.load(edgeTtsPath);
    console.log("edgeTTS module loaded successfully.");
    // Now you can use edgeTTS here
  } catch (error) {
    console.error("Error loading edgeTTS:", error);
  }

  const app = express();
  const PORT = 5000;

  app.use(express.json());
  app.use(cors());

  // Ensure the audio directory exists
  const audioDir = path.join(__dirname, "public", "audio");
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  // Endpoint to convert text to speech
  app.post("/api/tts", async (req, res) => {
    const { text, fileName } = req.body;

    if (!text || !fileName) {
      return res.status(400).json({ error: "Text and fileName are required." });
    }

    const outputPath = path.join(__dirname, "public", "audio", fileName);

    try {
      const stream = await edgeTTS.generateStream(text, { voice: "en-US-JennyNeural" });
      const fileStream = fs.createWriteStream(outputPath);

      stream.pipe(fileStream);

      fileStream.on("finish", () => {
        res.status(200).json({
          message: "Text-to-speech generated successfully",
          audioUrl: `/audio/${fileName}`,
        });
      });
    } catch (error) {
      console.error("Error generating TTS:", error);
      res.status(500).json({ error: "Failed to generate text-to-speech." });
    }
  });

  // Serve static audio files
  app.use("/audio", express.static(path.join(__dirname, "public", "audio")));

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

createServer();
