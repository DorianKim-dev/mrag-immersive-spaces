import { OrbitControls, PointMaterial, Points, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as THREE from 'three';

const panoramaViewAssets = [
  '/%ED%8C%8C%EB%85%B8%EB%9D%BC%EB%A7%88%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/F%26B%20%ED%8C%8C%EB%85%B8%EB%9D%BC%EB%A7%88%20.png',
  '/%ED%8C%8C%EB%85%B8%EB%9D%BC%EB%A7%88%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/k-beauty%20%20%ED%8C%8C%EB%85%B8%EB%9D%BC%EB%A7%88.png',
  '/%ED%8C%8C%EB%85%B8%EB%9D%BC%EB%A7%88%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/%ED%8C%8C%EB%85%B8%EB%9D%BC%EB%A7%88%20%EC%9A%94%EA%B0%80.png',
];

const posterViewAssets = [
  {
    title: 'NFC',
    image: '/%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/NFC%20%20%ED%95%9C%EA%B8%80%20%EC%83%81%EC%97%85%20%EA%B4%91%EA%B3%A0%20%ED%8F%AC%EC%8A%A4%ED%84%B0.png',
  },
  {
    title: 'POP',
    image: '/%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/POP%20%20%ED%95%9C%EA%B8%80%20%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%20%ED%8F%AC%EC%8A%A4%ED%84%B0.png',
    layers: {
      background: '/%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/poster-pop-bg.png.png',
      main: '/%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/poster-pop-main-alpha.png',
      foreground: '/%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/poster-pop-foreground-alpha.png',
      type: '/%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80/poster-pop-type-alpha.png',
      glow: '',
    },
  },
  {
    title: 'PHOTO',
    image: '/poster-photo.png',
  },
];

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
  onOpenPanorama,
}: {
  position: [number, number, number];
  color: string;
  radius?: number;
  count?: number;
  speed?: number;
  onOpenPanorama: () => void;
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
      <mesh
        onClick={(event) => {
          event.stopPropagation();
          onOpenPanorama();
        }}
      >
        <sphereGeometry args={[radius * 1.25, 18, 18]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} depthWrite={false} />
      </mesh>
    </group>
  );
};

const ContactScene = ({
  onOpenPanorama,
}: {
  onOpenPanorama: (index: number) => void;
}) => {
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
      stageRef.current.position.x = THREE.MathUtils.lerp(stageRef.current.position.x, baseX + pointer.x * 0.22, 0.12);
      stageRef.current.position.y = THREE.MathUtils.lerp(stageRef.current.position.y, -0.22 + pointer.y * 0.14, 0.12);
      stageRef.current.rotation.y = THREE.MathUtils.lerp(stageRef.current.rotation.y, -0.48 + pointer.x * 0.2 + scrollInfluence * 0.18, 0.1);
      stageRef.current.rotation.x = THREE.MathUtils.lerp(stageRef.current.rotation.x, 0.08 - pointer.y * 0.08, 0.1);
      stageRef.current.scale.setScalar(THREE.MathUtils.lerp(stageRef.current.scale.x, baseScale, 0.08));
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

        <ParticleCluster position={[-1.52, 0.98, -0.66]} color="#58e6cf" radius={0.24} count={48} speed={0.24} onOpenPanorama={() => onOpenPanorama(0)} />
        <ParticleCluster position={[-0.52, 1.18, -0.5]} color="#f1d27a" radius={0.2} count={38} speed={0.32} onOpenPanorama={() => onOpenPanorama(1)} />
        <ParticleCluster position={[0.62, 1.1, -0.55]} color="#8ffff0" radius={0.28} count={58} speed={0.2} onOpenPanorama={() => onOpenPanorama(2)} />
        <ParticleCluster position={[1.52, 0.84, -0.76]} color="#48d7bd" radius={0.18} count={34} speed={0.38} onOpenPanorama={() => onOpenPanorama(0)} />
      </group>

      <Points ref={particlesRef} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#bffff4" size={0.022} sizeAttenuation depthWrite={false} opacity={0.58} />
      </Points>
    </>
  );
};

const PanoramaSphere = ({ image }: { image: string }) => {
  const texture = useTexture(image);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.wrapS = THREE.RepeatWrapping;
  }, [texture]);

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[10, 96, 48]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

const ViewerGuide = () => (
  <div className="pointer-events-none absolute bottom-5 left-1/2 z-[1202] -translate-x-1/2 border border-mrag-warm-white/10 bg-mrag-navy/55 px-4 py-2 font-accent text-[10px] uppercase tracking-[0.16em] text-mrag-warm-white/55 backdrop-blur-md">
    ESC or Close to return
  </div>
);

const PanoramaViewer = ({ image, onClose }: { image: string; onClose: () => void }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[1200] bg-mrag-navy"
      role="dialog"
      aria-modal="true"
    >
      <Canvas className="absolute inset-0 h-screen w-screen" camera={{ position: [0, 0, 0.01], fov: 82 }} dpr={[1, 1.75]} gl={{ antialias: true }}>
        <PanoramaSphere image={image} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.18}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={-0.44}
        />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1201] h-24 bg-gradient-to-b from-mrag-navy/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1201] h-24 bg-gradient-to-t from-mrag-navy/70 to-transparent" />
      <ViewerGuide />
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onClose();
        }}
        className="absolute right-5 top-5 z-[1202] border border-mrag-warm-white/20 bg-mrag-navy/80 px-5 py-3 font-accent text-xs uppercase tracking-[0.18em] text-mrag-warm-white backdrop-blur-md transition-colors hover:border-mrag-teal hover:text-mrag-teal"
      >
        Close
      </button>
    </div>,
    document.body,
  );
};

type PosterCard = (typeof posterViewAssets)[number];

const PosterPreview = ({ poster, onClose }: { poster: PosterCard; onClose: () => void }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, px: 0, py: 0 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const hasLayers = Boolean(poster.layers);
  const layerStyle = (depth: number, rotate = 0) => ({
    transform: `translate3d(${tilt.px * depth}px, ${tilt.py * depth}px, ${depth}px) scale(${1 + depth / 900}) rotateZ(${tilt.px * rotate}deg)`,
  });

  return createPortal(
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-mrag-navy/90 p-4 backdrop-blur-xl"
      onClick={onClose}
      onPointerMove={(event) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        setTilt({ x: -y * 15, y: x * 18, px: x, py: y });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0, px: 0, py: 0 })}
    >
      <div
        className="relative flex max-h-[90vh] w-[min(640px,88vw)] items-center justify-center"
        style={{
          perspective: '1100px',
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="relative aspect-[3/4] max-h-[86vh] w-full max-w-[560px] overflow-hidden border border-mrag-teal/28 bg-mrag-navy shadow-[0_32px_140px_rgba(0,0,0,0.62)]"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 120ms ease-out',
          }}
        >
          {hasLayers && poster.layers ? (
            <>
              <img src={poster.layers.background} alt={`${poster.title} poster background`} className="absolute inset-0 h-full w-full object-cover" style={layerStyle(-4)} />
              <img src={poster.layers.main} alt={`${poster.title} poster main subject`} className="absolute inset-0 h-full w-full object-contain" style={layerStyle(28, 1.1)} />
              <img src={poster.layers.foreground} alt={`${poster.title} poster foreground`} className="absolute inset-0 h-full w-full object-contain" style={layerStyle(52, 1.6)} />
              {poster.layers.glow ? (
                <img src={poster.layers.glow} alt={`${poster.title} poster glow`} className="absolute inset-0 h-full w-full object-contain mix-blend-screen" style={layerStyle(66, 2)} />
              ) : null}
              <img src={poster.layers.type} alt={`${poster.title} poster typography`} className="absolute inset-0 h-full w-full object-contain" style={layerStyle(22, 0.7)} />
            </>
          ) : (
            <img src={poster.image} alt={`${poster.title} poster preview`} className="h-full w-full object-contain" />
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--shine-x)_var(--shine-y),rgba(255,255,255,0.28),transparent_28%)] mix-blend-screen"
            style={{
              '--shine-x': `${50 + tilt.px * 48}%`,
              '--shine-y': `${18 + tilt.py * 42}%`,
            } as CSSProperties}
          />
          <div className="pointer-events-none absolute inset-0 border border-mrag-warm-white/10 shadow-[inset_0_0_52px_rgba(255,255,255,0.08)]" />
        </div>
      </div>
      <ViewerGuide />
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onClose();
        }}
        className="absolute right-5 top-5 z-[1202] border border-mrag-warm-white/20 bg-mrag-navy/80 px-5 py-3 font-accent text-xs uppercase tracking-[0.18em] text-mrag-warm-white backdrop-blur-md transition-colors hover:border-mrag-teal hover:text-mrag-teal"
      >
        Close
      </button>
    </div>,
    document.body,
  );
};

export const ContactThreeBackdrop = () => {
  const [panoramaImage, setPanoramaImage] = useState<string | null>(null);
  const [posterIndex, setPosterIndex] = useState<number | null>(null);
  const panoramaPortals = [
    {
      left: '69%',
      top: '29%',
      action: () => setPanoramaImage(panoramaViewAssets[0]),
      label: 'Open 360 space view',
      title: 'F&B',
      aura: 'conic-gradient(from 120deg, rgba(72,187,164,0), rgba(72,187,164,0.85), rgba(245,241,229,0.45), rgba(72,187,164,0))',
    },
    {
      left: '82%',
      top: '43%',
      action: () => setPanoramaImage(panoramaViewAssets[1]),
      label: 'Open 360 campaign view',
      title: 'BEAUTY',
      aura: 'conic-gradient(from 210deg, rgba(241,210,122,0), rgba(241,210,122,0.78), rgba(245,241,229,0.45), rgba(241,210,122,0))',
    },
    {
      left: '70%',
      top: '61%',
      action: () => setPanoramaImage(panoramaViewAssets[2]),
      label: 'Open 360 media room view',
      title: 'YOGA',
      aura: 'conic-gradient(from 20deg, rgba(128,255,240,0), rgba(128,255,240,0.78), rgba(72,187,164,0.5), rgba(128,255,240,0))',
    },
  ];
  const posterPortals = [
    {
      left: '49%',
      top: '74%',
      action: () => setPosterIndex(0),
      label: 'Open content poster',
      kicker: 'POSTER',
      title: 'NFC',
      aura: 'linear-gradient(135deg, rgba(72,187,164,0.78), rgba(245,241,229,0.22), rgba(72,187,164,0))',
    },
    {
      left: '64%',
      top: '74%',
      action: () => setPosterIndex(1),
      label: 'Open campaign poster',
      kicker: 'POSTER',
      title: 'POP',
      aura: 'linear-gradient(135deg, rgba(241,210,122,0.78), rgba(245,241,229,0.22), rgba(241,210,122,0))',
    },
    {
      left: '79%',
      top: '74%',
      action: () => setPosterIndex(2),
      label: 'Open photo poster',
      kicker: 'POSTER',
      title: 'PHOTO',
      aura: 'linear-gradient(135deg, rgba(128,255,240,0.72), rgba(72,187,164,0.34), rgba(128,255,240,0))',
    },
  ];

  return (
    <>
      <div className="contact-three-backdrop absolute inset-0 z-[2] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_74%_46%,rgba(72,187,164,0.4),transparent_36%),radial-gradient(circle_at_88%_26%,rgba(241,210,122,0.18),transparent_28%),linear-gradient(90deg,transparent_0%,rgba(6,10,18,0.22)_48%,rgba(6,10,18,0.04)_100%)]" />
        <div className="contact-scan pointer-events-none" />
        <Canvas
          className="relative z-10"
          camera={{ position: [0, 0.2, 6.4], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ContactScene
            onOpenPanorama={(index) => setPanoramaImage(panoramaViewAssets[index])}
          />
        </Canvas>
        <div className="pointer-events-none absolute inset-0 z-20">
          {panoramaPortals.map((portal, index) => (
            <button
              key={portal.label}
              type="button"
              aria-label={portal.label}
              title={portal.label}
              onClick={portal.action}
              className="group pointer-events-auto absolute z-30 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-mrag-warm-white/15 bg-mrag-navy/25 shadow-[0_24px_80px_rgba(72,187,164,0.2)] outline-none backdrop-blur-md transition duration-300 hover:scale-110 hover:border-mrag-teal/70 hover:bg-mrag-teal/10 focus-visible:border-mrag-teal focus-visible:ring-2 focus-visible:ring-mrag-teal/40 max-sm:size-20"
              style={{ left: portal.left, top: portal.top }}
            >
              <span
                className="absolute inset-[-8px] rounded-full opacity-55 blur-[1px] transition duration-300 group-hover:animate-spin group-hover:opacity-90"
                style={{ background: portal.aura }}
              />
              <span className="absolute inset-2 rounded-full border border-mrag-warm-white/15 bg-mrag-navy/45 shadow-[inset_0_0_28px_rgba(255,255,255,0.08)]" />
              <span
                className="absolute inset-5 rounded-full bg-mrag-teal/20 blur-md transition duration-300 group-hover:scale-125 group-hover:bg-mrag-teal/35"
                style={{ animationDelay: `${index * 180}ms` }}
              />
              <span className="relative flex flex-col items-center gap-1 font-accent uppercase tracking-[0.16em] text-mrag-warm-white">
                <span className="text-[10px] text-mrag-teal">360</span>
                <span className="text-[11px]">{portal.title}</span>
              </span>
            </button>
          ))}
          {posterPortals.map((portal) => (
            <button
              key={portal.label}
              type="button"
              aria-label={portal.label}
              title={portal.label}
              onClick={portal.action}
              className="group pointer-events-auto absolute z-30 flex h-20 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden border border-mrag-warm-white/15 bg-mrag-navy/28 shadow-[0_20px_70px_rgba(72,187,164,0.16)] outline-none backdrop-blur-md transition duration-300 hover:-translate-y-[58%] hover:scale-105 hover:border-mrag-teal/70 hover:bg-mrag-teal/10 focus-visible:border-mrag-teal focus-visible:ring-2 focus-visible:ring-mrag-teal/40 max-sm:h-16 max-sm:w-24"
              style={{ left: portal.left, top: portal.top }}
            >
              <span
                className="absolute inset-0 opacity-50 transition duration-300 group-hover:opacity-90"
                style={{ background: portal.aura }}
              />
              <span className="absolute inset-[5px] border border-mrag-warm-white/15 bg-mrag-navy/50 shadow-[inset_0_0_24px_rgba(255,255,255,0.08)]" />
              <span className="absolute left-2 top-2 h-1 w-1 bg-mrag-teal/70 transition group-hover:bg-mrag-warm-white" />
              <span className="absolute right-2 top-2 h-1 w-1 bg-mrag-teal/70 transition group-hover:bg-mrag-warm-white" />
              <span className="absolute bottom-2 left-2 h-1 w-1 bg-mrag-teal/70 transition group-hover:bg-mrag-warm-white" />
              <span className="absolute bottom-2 right-2 h-1 w-1 bg-mrag-teal/70 transition group-hover:bg-mrag-warm-white" />
              <span className="relative flex flex-col items-center gap-1 font-accent uppercase tracking-[0.14em] text-mrag-warm-white">
                <span className="text-[9px] text-mrag-teal">{portal.kicker}</span>
                <span className="text-[11px]">{portal.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {panoramaImage ? <PanoramaViewer image={panoramaImage} onClose={() => setPanoramaImage(null)} /> : null}
      {posterIndex !== null ? <PosterPreview poster={posterViewAssets[posterIndex]} onClose={() => setPosterIndex(null)} /> : null}
    </>
  );
};
