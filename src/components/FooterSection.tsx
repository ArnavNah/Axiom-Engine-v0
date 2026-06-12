import { ArrowUpRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function WavyGrid() {
  const count = 30;
  const spacing = 0.3;
  const meshRef = useRef<THREE.Points>(null);

  const [positions, step] = useMemo(() => {
    const pos = [];
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        pos.push((x - count / 2) * spacing, 0, (z - count / 2) * spacing);
      }
    }
    return [new Float32Array(pos), 0.05];
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const positionAttribute = meshRef.current.geometry.attributes.position;
      const time = state.clock.getElapsedTime();

      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const z = positionAttribute.getZ(i);
        
        // Apply sine wave based on distance from center
        const dist = Math.sqrt(x * x + z * z);
        const y = Math.sin(dist - time * 2) * 0.2;
        
        positionAttribute.setY(i, y);
      }
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.03}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.3}
      />
    </points>
  );
}

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10 overflow-hidden">
      {/* 3D Wavy Grid Background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
          <WavyGrid />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Axiom</span>
                <span className="text-xs text-muted-foreground font-mono">ENGINE</span>
              </a>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                The high-performance edge execution engine for engineering teams. Run code globally with zero cold starts.
              </p>
              <div className="flex gap-6">
                {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {social}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6">Product</h3>
              <ul className="space-y-4">
                {['Features', 'How it works', 'Pricing', 'Integrations'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6">Developers</h3>
              <ul className="space-y-4">
                {['Documentation', 'API Reference', 'SDK', 'Status'].map((item) => (
                  <li key={item}>
                    <a href="#developers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                    Careers
                    <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full font-mono">Hiring</span>
                  </a>
                </li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Axiom Engine. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
