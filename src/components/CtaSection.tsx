import { ArrowRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]} scale={1.2}>
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.9}
        wireframe={true}
      />
    </TorusKnot>
  );
}

export function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative border border-foreground/10 bg-background reveal-up overflow-hidden">
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: 'radial-gradient(600px circle at 0% 0%, rgba(255,255,255,0.15), transparent 40%)'
            }}
          ></div>
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                  Ready to deploy<br />your first handler?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Join thousands of teams running code at the edge with Axiom. Start free, scale infinitely.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all px-8 h-14 bg-foreground hover:bg-foreground/90 text-background text-base rounded-full group">
                    Start deploying free
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all px-8 h-14 border border-foreground/20 bg-background hover:bg-foreground/5 text-base rounded-full">
                    Talk to sales
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  No credit card required
                </p>
              </div>

              {/* 3D Canvas element */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16 opacity-50 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} />
                  <AnimatedTorus />
                </Canvas>
              </div>
            </div>
          </div>

          {/* Corner borders */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10"></div>
        </div>
      </div>
    </section>
  );
}
