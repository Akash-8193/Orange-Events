import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, Stars } from "@react-three/drei";
// @ts-ignore - Vercel build missing types
import * as THREE from "three";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const el = state.clock.elapsedTime;
    groupRef.current.rotation.y = el * 0.05;
    groupRef.current.rotation.x = Math.sin(el * 0.1) * 0.1;
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
    groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[0, 0, 0]}>
        <mesh>
          <icosahedronGeometry args={[1.5, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.5}
            anisotropy={0.3}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#ffffff"
            transmission={1}
            roughness={0.1}
          />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1} position={[3, 1, -2]}>
        <mesh>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <MeshTransmissionMaterial
            thickness={0.5}
            color="#F5E6E0"
            transmission={0.9}
            roughness={0.2}
          />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3} position={[-2.5, -1, 1]}>
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <MeshTransmissionMaterial
            thickness={1}
            color="#C9A96E"
            transmission={0.9}
            roughness={0}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ width: "100%", height: "100%" }}>
      <color attach="background" args={["#fafaf8"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#C9A96E" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#F5E6E0" />
      <FloatingShapes />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="apartment" />
    </Canvas>
  );
}
