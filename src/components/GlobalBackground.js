import { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const GlobalBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,

        /* 🎨 EXACT PREVIEW SETTINGS */
        backgroundColor: 0x07192f,
        backgroundAlpha: 1.0,

        color1: 0xff0000,
        color2: 0x00d1ff,
        colorMode: "varianceGradient",

        quantity: 4.0,
        birdSize: 1.0,
        wingSpan: 30.0,
        speedLimit: 5.0,

        separation: 20.0,
        alignment: 20.0,
        cohesion: 20.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="vanta-bg" />;
};

export default GlobalBackground;
