import { useEffect } from "react";
import * as PIXI from 'pixi.js'; // Import PIXI
import { Live2DModel } from "pixi-live2d-display";

window.PIXI = PIXI;

const Character2d = () => {
  useEffect(() => {
    const cubism2Model =
      'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json';

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Initialize PIXI application
    const app = new PIXI.Application({
      view: document.getElementById('canvas'),
      autoStart: true,
      backgroundAlpha: 0, // Transparent background
      width: 0.4 * width,
    });

    // Load Live2D model
    Live2DModel.from(cubism2Model).then((model) => {
      app.stage.addChild(model);

      const { width, height } = model;
      app.renderer.resize(width, height);

      // Center model in canvas
      model.anchor.set(0.5, 0.5);
      model.position.set(width / 2, height / 2);
      model.scale.set(0.3, 0.3);

      // Add interaction
      model.on('hit', () => {
        model.expression('f05'); // Example expression
        console.log("Character clicked!");
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center mx-auto">
      <canvas id="canvas" style={{ background: "transparent" }}></canvas>
    </div>
  )
}

export default Character2d;
