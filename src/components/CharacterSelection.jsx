import { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display-lipsyncpatch";
import { catPixel } from "../assets/images";

window.PIXI = PIXI;

const CharacterSelection = () => {
  const canvasRef = useRef(null); // referensi untuk ukuran canvasnya
  const [app, setApp] = useState(null);
  const [selectedModel, setSelectedModel] = useState("https://raw.githubusercontent.com/zenghongtu/live2d-model-assets/master/assets/moc/tororo/tororo.model.json");

  // List of character models
  const models = [
    { name: "Tororo", url: "https://raw.githubusercontent.com/zenghongtu/live2d-model-assets/master/assets/moc/tororo/tororo.model.json" },
    { name: "Wanko", url: "http://localhost:5174//cubism/wanko/wanko/runtime/wanko_touch.model3.json" },
    { name: "Senko", url: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json" },
    { name: "Shizuku", url: "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json" },
    { name: "Shizuku", url: "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json" },
    { name: "Shizuku", url: "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json" },
    { name: "Shizuku", url: "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json" },
  ];

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
      console.log('model resized');
      const model = pixiApp.stage.children[0];
      console.log(model);

      const canvasWidth = canvasRef.current.offsetWidth;
      const canvasHeight = canvasRef.current.offsetHeight;

      if (model) {
        console.log('Masuk ke perubahan');
        model.position.set(canvasWidth / 2, canvasHeight / 2);
        model.scale.set(0.2, 0.2);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {

      // Periksa apakah ada model2 di dalam pixiApp ini
      // Jika ada maka hapus agar tidak bertabrakan dengan webGL lainnya saat berpindah halaman
      if (pixiApp.stage.children.length > 0) {
        pixiApp.stage.children.forEach((child) => {
          if (child instanceof Live2DModel) {
            // If instance of Live2DModel then delete the child
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

    // Hapus semua anak sebelum menambahkan yang baru
    // app.stage.removeChildren();

    // Check if app.stage is defined before removing children
    if (app.stage) {
      app.stage.removeChildren(); // Remove all children before adding the new model
    }

    const canvasWidth = canvasRef.current.offsetWidth;
    const canvasHeight = canvasRef.current.offsetHeight;

    // Tambahkan model Live2D
    Live2DModel.from(selectedModel).then((model) => {
      model.anchor.set(0.5, 0.5);
      model.position.set(canvasWidth / 2, canvasHeight / 2);
      model.scale.set(0.2, 0.2);
      console.log(model ? 'Model ditemukan' : 'Tidak ada model')

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
      <div className="flex flex-row items-center justify-center gap-4 pt-5 max-w-md overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {models.map((char, index) => (
          <button
            key={index}
            onClick={() => setSelectedModel(char.url)}
            className=""
          >
            <img
              src={catPixel}
              alt={char.name}
              className="object-cover w-full h-full mb-2"
            />
            <span>{char.name}</span>
          </button>
        ))}
        {/* {models.map((char, index) => (
          <button
            key={index}
            onClick={() => setSelectedModel(char.url)}
            className="flex flex-col items-center p-2 border border-gray-300 rounded-full shadow hover:bg-gray-100 w-20 h-20 overflow-hidden"
          >
            <img
              src={catPixel}
              alt={char.name}
              className="object-cover w-20 h-20 mb-2"
            />
            <span>{char.name}</span>
          </button>
        ))} */}
      </div>
    </div>
  );
};

export default CharacterSelection;
