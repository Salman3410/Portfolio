import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";

import Scene from "./Scene";
import Loader from "./Loader";

export default function CanvasScene() {
  return (
    <Canvas
      shadows
      dpr={1}
      performance={{ min: 0.5 }}
      camera={{
        position: [0, 1.5, 8],
        fov: 42,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
