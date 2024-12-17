import { useEffect } from "react";
import * as PIXI from 'pixi.js'; // Import PIXI
import { Live2DModel } from "pixi-live2d-display";
import { useChat } from "../context/ChatContext";

window.PIXI = PIXI;
Live2DModel.registerTicker(PIXI.Ticker);

const Character2d = () => {
  const { isTalking } = useChat();

  useEffect(() => {
    // const cubism2Model =
    //   'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json';
    // const cubism2Model =
    //   'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json';
    // const cubism2Model = "/cubism/wanko/wanko/runtime/wanko_touch.model3.json";
    // const cubism2Model = "/cubism/Epsilon/Epsilon/runtime/Epsilon.model3.json";
    // const cubism2Model = "/cubism/koharu_haruto/koharu_haruto/é¦é-éT/runtime/koharu.model3.json";
    const cubism2Model = "/cubism/tororo_hijiki/tororo_hijiki/tororo/runtime/tororo.model3.json";

    // Initialize PIXI application
    const app = new PIXI.Application({
      view: document.getElementById('canvas'),
      autoStart: true,
      resizeTo: window,
      backgroundAlpha: 0, // Transparent background
    });

    console.log(cubism2Model);

    // Load Live2D model
    Live2DModel.from(cubism2Model).then((model) => {
      app.stage.addChild(model);

      // Center model in canvas
      model.anchor.set(0.5, 0.5);
      model.position.set(window.innerWidth / 2, window.innerHeight / 2);
      model.scale.set(0.3, 0.3);

      const canvasElement = document.getElementById('canvas');
      canvasElement.addEventListener('pointermove', event => model.focus(event.clientX, event.clientY));
      canvasElement.addEventListener('pointerdown', event => model.tap(event.clientX, event.clientY));

      // Add interaction
      model.on('hit', (hitAreaNames) => {
        model.motion('tap_body');
        if (hitAreaNames.includes('head')) {
          // head tap
        }
      });

      // Handle window resize
      const handleResize = () => {
        model.position.set(window.innerWidth / 2, window.innerHeight / 2);
        model.scale.set(0.3, 0.3);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
  }, []);

  // useEffect(() => {
  //   const cubism2Model =
  //     'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json';
  //   // Load Live2D model
  //   // Initialize PIXI application
  //   const app = new PIXI.Application({
  //     view: document.getElementById('canvas'),
  //     autoStart: true,
  //     resizeTo: window,
  //     backgroundAlpha: 0, // Transparent background
  //   });
  //   Live2DModel.from(cubism2Model).then((model) => {
  //     app.stage.addChild(model);

  //     // Center model in canvas
  //     model.anchor.set(0.5, 0.5);
  //     model.position.set(window.innerWidth / 2, window.innerHeight / 2);
  //     model.scale.set(0.3, 0.3);

  //     const canvasElement = document.getElementById('canvas');
  //     canvasElement.addEventListener('pointermove', event => model.focus(event.clientX, event.clientY));
  //     canvasElement.addEventListener('pointerdown', event => model.tap(event.clientX, event.clientY));

  //     // Function to trigger talking animation
  //     const triggerTalkingAnimation = (isTalking) => {
  //       if (isTalking) {
  //         console.log('Model is talking');
  //         model.expression('f04'); // Example of using "shake" motion when talking
  //         model.hitTest('mouth'); // Example of using "shake" motion when talking
  //       } else {
  //         console.log('Model is idle');
  //         model.motion('idle'); // Idle motion when not talking
  //       }
  //     };
  //     // Watch for changes in isTalking state
  //     triggerTalkingAnimation(isTalking);
  //   });
  // }, [isTalking])

  return (
    <div className="flex justify-center items-center mx-auto">
      <canvas id="canvas" style={{ background: "transparent" }}></canvas>
    </div>
  )
}

export default Character2d;