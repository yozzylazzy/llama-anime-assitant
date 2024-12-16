import { useEffect } from "react";
import * as PIXI from 'pixi.js'; // Import PIXI
import { Live2DModel } from "pixi-live2d-display";

window.PIXI = PIXI;
Live2DModel.registerTicker(PIXI.Ticker)

const Character2d = () => {
  useEffect(() => {
    const cubism2Model =
      'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json';

    // Initialize PIXI application
    const app = new PIXI.Application({
      view: document.getElementById('canvas'),
      autoStart: true,
      resizeTo: window,
      backgroundAlpha: 0, // Transparent background
    });

    // Load Live2D model
    Live2DModel.from(cubism2Model).then((model) => {
      app.stage.addChild(model);

      // const { width, height } = model;
      // app.renderer.resize(width, height);

      // Center model in canvas
      model.anchor.set(0.5, 0.5);
      // model.position.set(width / 2, height / 2);
      // model.position.set(width / 2, height / 2);
      model.position.set(window.innerWidth / 2, window.innerHeight / 2)
      model.scale.set(0.3, 0.3);

      const canvasElement = document.getElementById('canvas');
      canvasElement.addEventListener('pointermove', event => model.focus(event.clientX, event.clientY));
      canvasElement.addEventListener('pointerdown', event => model.tap(event.clientX, event.clientY));

      // Add interaction
      model.on('hit', (hitAreaNames) => {
        model.motion('tap_body');
        if (hitAreaNames.includes('head')) {
          // the body is hit
        }
      });


      // Responsif terhadap perubahan ukuran layar
      const handleResize = () => {
        // Resize model sesuai ukuran layar
        model.position.set(window.innerWidth / 2, window.innerHeight / 2);
        model.scale.set(0.3, 0.3);  // Anda bisa menyesuaikan skala sesuai dengan ukuran layar
      };
      // Event listener untuk perubahan ukuran layar
      window.addEventListener('resize', handleResize);
      // Menghapus event listener saat komponen dibersihkan
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
  }, []);

  return (
    <div className="flex justify-center items-center mx-auto">
      <canvas id="canvas" style={{ background: "transparent" }}></canvas>
    </div>
  )
}

export default Character2d;
