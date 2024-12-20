import { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display-lipsyncpatch";
import { catPixel } from "../assets/images";
import { aiPreferences } from "../constants";

window.PIXI = PIXI;

const CharacterSelection = () => {
  const canvasRef = useRef(null); // referensi untuk ukuran canvasnya
  const [app, setApp] = useState(null);
  const [selectedModel, setSelectedModel] = useState(aiPreferences[0].modelData);

  useEffect(() => {
    // Inisialisasi PIXI Application
    const pixiApp = new PIXI.Application({
      transparent: true,
      resizeTo: canvasRef.current,
      // backgroundAlpha: 0
      background: '#4a628a',
    });
    canvasRef.current.appendChild(pixiApp.view);
    setApp(pixiApp);

    // Add resize re render 
    const handleResize = () => {
      const model = pixiApp.stage.children[0];

      const canvasWidth = canvasRef.current.offsetWidth;
      const canvasHeight = canvasRef.current.offsetHeight;

      if (model) {
        model.position.set(canvasWidth / 2, canvasHeight / 2);
        const modelWidth = model.width;
        const modelHeight = model.height;

        const scaleX = canvasWidth / modelWidth;
        const scaleY = canvasHeight / modelHeight;
        const uniformScale = Math.min(scaleX, scaleY);

        // TODO: Perbaiki useEffect ini karena modelnya disaat dikecilkan berubah besar sekali dulu baru jadi kecil lagi
        model.scale.set(uniformScale);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      if (pixiApp.stage.children.length > 0) {
        pixiApp.stage.children.forEach((child) => {
          if (child instanceof Live2DModel) {
            child.destroy();
          }
        });
      }
      window.removeEventListener("resize", handleResize);
      pixiApp.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, []);

  useEffect(() => {
    if (!app || !selectedModel) return;

    if (app.stage) {
      app.stage.removeChildren();
    }

    const canvasWidth = canvasRef.current.offsetWidth;
    const canvasHeight = canvasRef.current.offsetHeight;

    Live2DModel.from(selectedModel).then((model) => {
      model.anchor.set(0.5, 0.5);
      model.position.set(canvasWidth / 2, canvasHeight / 2);

      const modelWidth = model.width;
      const modelHeight = model.height;
      const scaleX = canvasWidth / modelWidth;
      const scaleY = canvasHeight / modelHeight;
      const uniformScale = Math.min(scaleX, scaleY); // *0.9 untuk memberikan sedikit margin

      model.scale.set(uniformScale);

      try {
        app.stage.addChild(model);
      } catch (error) {
        console.log(error);
      }
    });
  }, [app, selectedModel]);


  return (
    <div className="flex gap-4 flex-col items-center justify-center w-full h-full">
      {/* Model Canvas */}
      <div
        id="canvas"
        ref={canvasRef}
        className="w-full md:w-5/6 h-[400px] bg-transparent mx-auto rounded-2xl"
        style={{ overflow: "hidden" }}
      />

      {/* Character Selection */}
      <div className="w-full md:w-3/4 overflow-x-auto py-5">
        <section className="flex gap-4 justify-center w-max">
          {aiPreferences.map((char, index) => (
            <div key={index} className="flex flex-col items-center">
              <button
                onClick={() => setSelectedModel(char.modelData)}
                className={`flex flex-col items-center p-2 border border-gray-300 rounded-2xl shadow hover:bg-gray-100 w-28 h-36 overflow-hidden ${selectedModel === char.modelData ? 'bg-[#b9e5e8]' : 'bg-[#7ab2d3]'}`}
              >
                <img
                  src={catPixel}
                  alt={char.name}
                  className="object-cover w-20 h-20 mb-4"
                />
                <span className="text-center text-sm font-bold uppercase">{char.name}</span>
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CharacterSelection;
