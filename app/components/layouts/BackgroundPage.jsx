import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { MeshDistortMaterial } from '@react-three/drei';
// import * as THREE from 'three';

export default function BackgroundPage() {
  return (
    <div
      className="fixed -z-10 w-full h-full bg-dark top-0 left-0"
    >
      {/* <Canvas className="blur-xl">
        <mesh scale={1}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <sphereGeometry args={[2, 40, 40]} />
          <MeshDistortMaterial
            color="#8d0020"
            distort={0.6}
            speed={2}
          />
        </mesh>
      </Canvas> */}
    </div>
  );
}
