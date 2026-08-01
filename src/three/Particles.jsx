import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Particles() {
  const ref = useRef();

  const particles = useMemo(() => {
    const p = [];

    for (let i = 0; i < 120; i++) {
      p.push(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 18,
      );
    }

    return new Float32Array(p);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.00035;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        color="#6EE7F9"
      />
    </Points>
  );
}
