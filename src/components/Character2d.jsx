import { useEffect } from "react";
import * as PIXI from 'pixi.js'; // Import PIXI
import { Live2DModel } from "pixi-live2d-display";

window.PIXI = PIXI;

const Character2d = () => {
  useEffect(() => {
    const cubism2Model =
      'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json';

    // Initialize PIXI application
    const app = new PIXI.Application({
      view: document.getElementById('canvas'),
      autoStart: true,
      resizeTo: window,
    });

    // Load Live2D model
    Live2DModel.from(cubism2Model).then((model) => {
      app.stage.addChild(model);

      // Set model position, scale, and events
      model.anchor.set(0.5, 0.5);
      model.position.set(window.innerWidth / 2, window.innerHeight / 2);
      model.scale.set(0.1, 0.1);

      // Add interaction
      model.on('hit', () => {
        model.expression('f05'); // Example expression
      });
    });
  }, []);

  return (
    <div>
      <canvas id="canvas" style={
        {
          background: 'transparent'
        }
      }></canvas>
    </div>
  )
}

export default Character2d;
