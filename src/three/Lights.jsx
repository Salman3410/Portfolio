import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      {/* Ambient Fill */}
      <ambientLight intensity={0.35} />

      {/* Main Key Light */}
      <directionalLight
        position={[5, 8, 6]}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Blue Rim */}
      <pointLight position={[-5, 2, 3]} intensity={20} color="#3B82F6" />

      {/* Cyan Rim */}
      <pointLight position={[5, 2, 4]} intensity={16} color="#22D3EE" />

      {/* Top Glow */}
      <spotLight
        position={[0, 8, 2]}
        intensity={18}
        angle={0.4}
        penumbra={1}
        color="#ffffff"
      />

      {/* HDR Environment */}
      <Environment preset="city" />
    </>
  );
}
