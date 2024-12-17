import { useEffect, useRef, useState } from "react";
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

  // Jangan pakai ini
  useEffect(() => {
    const pixiApp = new PIXI.Application({
      transparent: true,
      resizeTo: canvasRef.current,
    });

    canvasRef.current.appendChild(pixiApp.view);
    setApp(pixiApp);

    // Handler untuk resize
    const handleResize = () => {
      const model = pixiApp.stage.children[0];
      if (model) {
        model.position.set(canvasRef.current.offsetWidth / 2, canvasRef.current.offsetHeight / 2);
        model.scale.set(0.2, 0.2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      pixiApp.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, []);

  // Jangan pakai ini
  useEffect(() => {
    if (!app || !selectedModel) return;

    app.stage.removeChildren();

    Live2DModel.from(selectedModel).then((model) => {
      model.anchor.set(0.5, 0.5);
      model.position.set(canvasRef.current.offsetWidth / 2, canvasRef.current.offsetHeight / 2);
      model.scale.set(0.2, 0.2);

      console.log(canvasRef.current.offsetWidth / 2, canvasRef.current.offsetHeight / 2);

      app.stage.addChild(model);

      const canvasElement = app.view;
      const handlePointerMove = (event) => model.focus(event.clientX, event.clientY);
      const handlePointerDown = (event) => model.tap(event.clientX, event.clientY);

      canvasElement.addEventListener("pointermove", handlePointerMove);
      canvasElement.addEventListener("pointerdown", handlePointerDown);

      // Cleanup pointer events when component updates
      return () => {
        canvasElement.removeEventListener("pointermove", handlePointerMove);
        canvasElement.removeEventListener("pointerdown", handlePointerDown);
      };
    });
  }, [app, selectedModel]);


  return (
    <div className="flex gap-4 flex-col items-center justify-center w-full h-full">
      {/* Model Canvas */}
      <div
        ref={canvasRef}
        className="w-full md:w-1/2 lg:w-3/4 h-[400px] mx-auto rounded-xl"
        style={{
          overflow: "hidden",
          backgroundColor: "#4a628a",
        }}
      />

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
