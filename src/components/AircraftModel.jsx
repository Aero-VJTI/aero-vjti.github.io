"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function AircraftModel(props) {
  const { scene } = useGLTF("/models/aircraft.glb"); // use consistent filename

  useFrame((_, delta) => {
    scene.rotation.y += delta * 0.2; // slow rotation
  });

  return (
    <primitive
      object={scene}
      scale={[0.3, 0.3, 0.3]} // ✅ smaller size
      {...props}
    />
  );
}

// Preload for performance
useGLTF.preload("/models/aircraft.glb");
