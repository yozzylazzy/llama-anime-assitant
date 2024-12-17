import React, { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display";

const CharacterSelection = () => {
  const canvasRef = useRef(null);
  const [app, setApp] = useState(null);
  const [selectedModel, setSelectedModel] = useState("/cubism/tororo_hijiki/tororo_hijiki/tororo/runtime/tororo.model3.json");

  // List of character models
  const models = [
    { name: "Tororo", url: "/cubism/tororo_hijiki/tororo_hijiki/tororo/runtime/tororo.model3.json" },
    { name: "Wanko", url: "/cubism/wanko/wanko/runtime/wanko_touch.model3.json" },
    { name: "Senko", url: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json" },
  ];

  useEffect(() => {
    // Inisialisasi PIXI Application
    const pixiApp = new PIXI.Application({ transparent: true, resizeTo: window });
    canvasRef.current.appendChild(pixiApp.view);
    setApp(pixiApp);

    return () => {
      pixiApp.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, []);

  useEffect(() => {
    if (!app || !selectedModel) return;

    // Hapus semua anak sebelum menambahkan yang baru
    app.stage.removeChildren();

    // Tambahkan model Live2D
    Live2DModel.from(selectedModel).then((model) => {
      model.anchor.set(0.5, 0.5);
      model.position.set(window.innerWidth / 2, window.innerHeight / 2);
      model.scale.set(0.3, 0.3);
      app.stage.addChild(model);
    });
  }, [app, selectedModel]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Model Canvas */}
      <div ref={canvasRef} className="w-full h-3/4" />

      {/* Character Selection */}
      <div className="flex gap-4 mt-4">
        {models.map((char, index) => (
          <button
            key={index}
            onClick={() => setSelectedModel(char.url)}
            className="flex flex-col items-center p-2 border border-gray-300 rounded shadow hover:bg-gray-100"
          >
            <img src={char.url.replace(".model3.json", ".png")} alt={char.name} className="w-16 h-16 object-cover mb-2" />
            <span>{char.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;
