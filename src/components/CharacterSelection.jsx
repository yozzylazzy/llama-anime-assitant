import { useEffect, useState } from "react";
import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display-lipsyncpatch";

window.PIXI = PIXI;

const CharacterSelection = () => {
  const [selectedModel, setSelectedModel] = useState("https://raw.githubusercontent.com/zenghongtu/live2d-model-assets/master/assets/moc/tororo/tororo.model.json");

  // List of character models
  const models = [
    { name: "Tororo", url: "https://raw.githubusercontent.com/zenghongtu/live2d-model-assets/master/assets/moc/tororo/tororo.model.json" },
    { name: "Wanko", url: "/cubism/wanko/wanko/runtime/wanko_touch.model3.json" },
    { name: "Senko", url: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json" },
    { name: "Shizuku", url: "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json" },
    { name: "Shizuku", url: "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json" },
  ];

  useEffect(() => {
    // Initialize PIXI application
    const app = new PIXI.Application({
      view: document.getElementById('canvas-home'),
      autoStart: true,
      resizeTo: window,
      backgroundAlpha: 0, // Transparent background
    });

    // Load Live2D model
    Live2DModel.from(selectedModel).then((model) => {
      app.stage.addChild(model);

      // Center model in canvas
      model.anchor.set(0.5, 0.5);
      model.position.set(window.innerWidth / 2, window.innerHeight / 2);
      model.scale.set(0.3, 0.3);

      // Handle window resize
      const handleResize = () => {
        model.position.set(window.innerWidth / 2, window.innerHeight / 2);
        model.scale.set(0.3, 0.3);
      };
      window.addEventListener('resize', handleResize);
    });
  }, [selectedModel]);


  return (
    <div className="flex gap-4 flex-col items-center justify-center w-full h-full">
      {/* Model Canvas */}
      <canvas
        id="canvas-home"
        className="w-full md:w-1/2 lg:w-3/4 h-[400px] mx-auto rounded-xl"
        style={{
          overflow: "hidden",
          backgroundColor: "#4a628a",
        }}
      ></canvas>

      {/* Character Selection */}
      <div className="flex flex-row items-center justify-center gap-4 pt-5">
        {models.map((char, index) => (
          <button
            key={index}
            onClick={() => setSelectedModel(char.url)}
            className="flex flex-col items-center p-2 border border-gray-300 rounded-full shadow hover:bg-gray-100"
          >
            <img
              src={char.url.replace(".model3.json", ".png")}
              alt={char.name}
              className="w-16 h-16 object-cover rounded-full mb-2"
            />
            <span>{char.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;
