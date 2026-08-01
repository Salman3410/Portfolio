import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 1.1,
      0.04,
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      1.5 + mouse.y * 0.45,
      0.04,
    );

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      8 + mouse.x * 0.2,
      0.04,
    );

    camera.lookAt(0, 0.2, 0);
  });

  return null;
}
