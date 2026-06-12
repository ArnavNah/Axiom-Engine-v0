import { ArrowRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* 3D Canvas background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className="absolute h-px bg-foreground/10" style={{ top: `${(i + 1) * 12.5}%`, left: 0, right: 0 }}></div>
        ))}
        {[...Array(12)].map((_, i) => (
          <div key={`v-${i}`} className="absolute w-px bg-foreground/10" style={{ left: `${(i + 1) * 8.33}%`, top: 0, bottom: 0 }}></div>
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="mb-8 reveal-up">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30"></span>The global runtime for scale
          </span>
        </div>
        
        <div className="mb-12">
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight reveal-up" style={{ transitionDelay: '100ms' }}>
            <span className="block">The engine</span>
            <span className="block">
              to{' '}
              <span className="relative inline-block">
                <span className="inline-flex">
                  {['e', 'x', 'e', 'c', 'u', 't', 'e'].map((char, index) => (
                    <span 
                      key={index} 
                      className="inline-block animate-char-in opacity-0"
                      style={{ animationDelay: `${index * 50 + 200}ms` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10"></span>
              </span>
            </span>
          </h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl reveal-up" style={{ transitionDelay: '300ms' }}>
            Your distributed runtime to stop managing servers and start running code. Securely compute, route, and persist at scale.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 reveal-up" style={{ transitionDelay: '400ms' }}>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all px-8 h-14 bg-foreground hover:bg-foreground/90 text-background text-base rounded-full group">
              Deploy now
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all px-8 h-14 border border-foreground/20 bg-background hover:bg-foreground/5 text-base rounded-full">
              Read manifest
            </button>
          </div>
        </div>
      </div>

      {/* Stats Marquee */}
      <div className="absolute bottom-12 left-0 right-0 reveal-up" style={{ transitionDelay: '500ms' }}>
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[1, 2].map((set) => (
            <div key={set} className="flex gap-16 shrink-0">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl lg:text-5xl font-display">8ms</span>
                <span className="text-sm text-muted-foreground">
                  global latency<span className="block font-mono text-xs mt-1">NETFLIX</span>
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl lg:text-5xl font-display">99.999%</span>
                <span className="text-sm text-muted-foreground">
                  sandbox isolation<span className="block font-mono text-xs mt-1">STRIPE</span>
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl lg:text-5xl font-display">15M/s</span>
                <span className="text-sm text-muted-foreground">
                  peak throughput<span className="block font-mono text-xs mt-1">LINEAR</span>
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl lg:text-5xl font-display">0ms</span>
                <span className="text-sm text-muted-foreground">
                  cold starts<span className="block font-mono text-xs mt-1">NOTION</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
