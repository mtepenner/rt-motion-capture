import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function Skeleton({ landmarks }) {
  return (
    <group>
      {landmarks.map((lm, index) => (
        <mesh key={index} position={[lm.x * -5, (1 - lm.y) * 5, lm.z * 5]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="cyan" />
        </mesh>
      ))}
    </group>
  );
}

export default function App() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    socket.on('render_pose', (data) => {
      setPoints(data);
    });
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      <Canvas camera={{ position: [0, 2, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Skeleton landmarks={points} />
      </Canvas>
    </div>
  );
}
