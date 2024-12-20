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
      console.log('model resized');
      const model = pixiApp.stage.children[0];
      console.log(model);

      const canvasWidth = canvasRef.current.offsetWidth;
      const canvasHeight = canvasRef.current.offsetHeight;

      if (model) {
        console.log('Masuk ke perubahan');
        model.position.set(canvasWidth / 2, canvasHeight / 2);
        // Hitung skala dinamis berdasarkan ukuran container
        const modelWidth = model.width;
        const modelHeight = model.height;

        const scaleX = canvasWidth / modelWidth;
        const scaleY = canvasHeight / modelHeight;
        console.log(`ukuran Canvas saat ini: ${canvasWidth}, ${canvasHeight}`);
        console.log(`ukuran model saat ini: ${modelWidth}, ${modelHeight}`);
        console.log(`ukuran Scale x dan ScaleY: ${scaleX}, ${scaleY}`);
        console.log(canvasWidth, canvasHeight);
        const uniformScale = Math.min(scaleX, scaleY);
        console.log(`ukuran uniformScale saat ini: ${uniformScale}`);

        // Tetapkan skala maksimum
        model.scale.set(uniformScale);
        // model.scale.set(0.2, 0.2);
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

      // model.scale.set(0.2, 0.2);
      // Hitung skala dinamis berdasarkan ukuran container
      const modelWidth = model.width;
      const modelHeight = model.height;
      const scaleX = canvasWidth / modelWidth;
      const scaleY = canvasHeight / modelHeight;
      const uniformScale = Math.min(scaleX, scaleY); // *0.9 untuk memberikan sedikit margin

      model.scale.set(uniformScale, uniformScale);

      // interaction
      model.on('hit', (hitAreas) => {
        if (hitAreas.length > 0) {
          console.log(`Area hit: ${hitAreas}`);

          // Ambil grup motion yang ada
          const motionGroups = model.internalModel.motionManager.groups;
          console.log("Motion groups:", motionGroups);

          // Pilih grup animasi yang sesuai (contoh: 'Tap')
          const motionGroup = motionGroups["Tap"] || motionGroups["Idle"] || [];

          if (motionGroup.length > 0) {
            // Pilih animasi secara acak
            const randomMotionIndex = Math.floor(Math.random() * motionGroup.length);
            const motionName = motionGroup[randomMotionIndex];

            console.log(`Playing motion: ${motionName}`);
            model.motion("Tap", motionName);
          } else {
            console.log("No available motions in group 'Tap'.");
          }
        }
      });

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
