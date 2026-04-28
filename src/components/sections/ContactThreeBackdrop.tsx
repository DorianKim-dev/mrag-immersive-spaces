import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

const ProjectionPanel = ({
  position,
  rotation = [0, 0, 0],
  color,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
}) => (
  <group position={position} rotation={rotation}>
    <mesh>
      <planeGeometry args={[0.92, 1.42]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} side={THREE.DoubleSide} />
    </mesh>
    <mesh position={[0, 0, 0.012]}>
      <boxGeometry args={[0.96, 0.018, 0.018]} />
      <meshBasicMaterial color="#d9fff7" transparent opacity={0.32} />
    </mesh>
    <mesh position={[0, 0.71, 0.012]}>
      <boxGeometry args={[0.96, 0.018, 0.018]} />
      <meshBasicMaterial color="#d9fff7" transparent opacity={0.32} />
    </mesh>
    <mesh position={[0, -0.71, 0.012]}>
      <boxGeometry args={[0.96, 0.018, 0.018]} />
      <meshBasicMaterial color="#d9fff7" transparent opacity={0.32} />
    </mesh>
    <mesh position={[-0.48, 0, 0.012]}>
      <boxGeometry args={[0.018, 1.42, 0.018]} />
      <meshBasicMaterial color="#d9fff7" transparent opacity={0.32} />
    </mesh>
    <mesh position={[0.48, 0, 0.012]}>
      <boxGeometry args={[0.018, 1.42, 0.018]} />
      <meshBasicMaterial color="#d9fff7" transparent opacity={0.32} />
    </mesh>
  </group>
);

const ParticleCluster = ({
  position,
  color,
  radius = 0.28,
  count = 52,
  speed = 0.18,
}: {
  position: [number, number, number];
  color: string;
  radius?: number;
  count?: number;
  speed?: number;
}) => {
  const clusterRef = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const distance = radius * (0.25 + Math.random() * 0.75);
      positions[i * 3] = Math.sin(phi) * Math.cos(theta) * distance;
      positions[i * 3 + 1] = Math.cos(phi) * distance;
      positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * distance;
    }
    return positions;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!clusterRef.current) return;
    clusterRef.current.rotation.y += delta * speed;
    clusterRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.16;
    clusterRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * (0.8 + speed)) * 0.055;
  });

  return (
    <group ref={clusterRef} position={position}>
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial transparent color={color} size={0.045} sizeAttenuation depthWrite={false} opacity={0.86} />
      </Points>
      <mesh>
        <sphereGeometry args={[radius * 0.72, 18, 18]} />
        <meshBasicMaterial color={color} transparent opacity={0.075} depthWrite={false} />
      </mesh>
    </group>
  );
};

const ContactScene = () => {
  const stageRef = useRef<THREE.Group>(null);
  const projectorRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  const particles = useMemo(() => {
    const positions = new Float32Array(140 * 3);
    for (let i = 0; i < 140; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 5.4;
      positions[i * 3 + 1] = (Math.random() - 0.1) * 3.5;
      positions[i * 3 + 2] = -2.1 + Math.random() * 3.5;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const pointer = pointerRef.current;
    const scrollInfluence = THREE.MathUtils.clamp(window.scrollY / 1200, 0, 1);
    const isCompact = state.viewport.width < 6;
    const baseX = isCompact ? 0.95 : 1.35;
    const baseScale = isCompact ? 0.76 : 1.02;

    if (stageRef.current) {
      stageRef.current.position.x = THREE.MathUtils.lerp(stageRef.current.position.x, baseX + pointer.x * 0.22, 0.05);
      stageRef.current.position.y = THREE.MathUtils.lerp(stageRef.current.position.y, -0.22 + pointer.y * 0.14, 0.05);
      stageRef.current.rotation.y = THREE.MathUtils.lerp(stageRef.current.rotation.y, -0.48 + pointer.x * 0.2 + scrollInfluence * 0.18, 0.05);
      stageRef.current.rotation.x = THREE.MathUtils.lerp(stageRef.current.rotation.x, 0.08 - pointer.y * 0.08, 0.05);
      stageRef.current.scale.setScalar(THREE.MathUtils.lerp(stageRef.current.scale.x, baseScale, 0.04));
    }

    if (projectorRef.current) {
      projectorRef.current.rotation.z += delta * 0.28;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.025;
    }
  });

  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[2.5, 4, 4]} intensity={2.6} color="#9fffea" />
      <pointLight position={[0, 0.7, 1.8]} intensity={5.2} color="#48d7bd" />
      <pointLight position={[2.2, 1.8, -1.2]} intensity={3} color="#f1d27a" />

      <group ref={stageRef} position={[1.35, -0.22, 0]} rotation={[0.08, -0.48, 0]} scale={[1.02, 1.02, 1.02]}>
        <mesh position={[0, -1.12, -0.05]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4.4, 3.25]} />
          <meshBasicMaterial color="#42c7ae" transparent opacity={0.11} side={THREE.DoubleSide} />
        </mesh>
        <gridHelper args={[4.4, 12, '#6de8d2', '#256b61']} position={[0, -1.1, -0.05]} />

        <mesh position={[0, 0.12, -1.7]}>
          <planeGeometry args={[4.15, 2.45]} />
          <meshBasicMaterial color="#5de0c8" transparent opacity={0.12} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[-2.05, 0.1, -0.62]} rotation={[0, Math.PI / 2.35, 0]}>
          <planeGeometry args={[2.45, 2.4]} />
          <meshBasicMaterial color="#1d766b" transparent opacity={0.15} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[2.05, 0.1, -0.62]} rotation={[0, -Math.PI / 2.35, 0]}>
          <planeGeometry args={[2.45, 2.4]} />
          <meshBasicMaterial color="#c9a85a" transparent opacity={0.13} side={THREE.DoubleSide} />
        </mesh>

        <ProjectionPanel position={[-1.15, 0.1, -1.64]} rotation={[0, 0.08, 0]} color="#52e0c6" />
        <ProjectionPanel position={[0, 0.2, -1.68]} color="#f1d27a" />
        <ProjectionPanel position={[1.15, 0.1, -1.64]} rotation={[0, -0.08, 0]} color="#72f2de" />

        <mesh position={[0, -0.32, 0.65]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[1.55, 3.1, 4, 1, true]} />
          <meshBasicMaterial color="#7cffea" transparent opacity={0.075} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>

        <group ref={projectorRef} position={[0, -0.88, 1.15]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <torusGeometry args={[0.46, 0.022, 12, 96]} />
            <meshBasicMaterial color="#d9fff7" transparent opacity={0.5} />
          </mesh>
          <mesh>
            <circleGeometry args={[0.42, 72]} />
            <meshBasicMaterial color="#48d7bd" transparent opacity={0.16} side={THREE.DoubleSide} />
          </mesh>
        </group>

        <ParticleCluster position={[-1.52, 0.98, -0.66]} color="#58e6cf" radius={0.24} count={48} speed={0.24} />
        <ParticleCluster position={[-0.52, 1.18, -0.5]} color="#f1d27a" radius={0.2} count={38} speed={0.32} />
        <ParticleCluster position={[0.62, 1.1, -0.55]} color="#8ffff0" radius={0.28} count={58} speed={0.2} />
        <ParticleCluster position={[1.52, 0.84, -0.76]} color="#48d7bd" radius={0.18} count={34} speed={0.38} />
      </group>

      <Points ref={particlesRef} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#bffff4" size={0.022} sizeAttenuation depthWrite={false} opacity={0.58} />
      </Points>
    </>
  );
};

export const ContactThreeBackdrop = () => {
  return (
    <div className="contact-three-backdrop pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_74%_46%,rgba(72,187,164,0.4),transparent_36%),radial-gradient(circle_at_88%_26%,rgba(241,210,122,0.18),transparent_28%),linear-gradient(90deg,transparent_0%,rgba(6,10,18,0.22)_48%,rgba(6,10,18,0.04)_100%)]" />
      <div className="contact-scan" />
      <Canvas
        className="relative z-10"
        camera={{ position: [0, 0.2, 6.4], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ContactScene />
      </Canvas>
    </div>
  );
};
