import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState<'install' | 'init' | 'deploy'>('install');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    install: `npm install @axiom/sdk

# or
yarn add @axiom/sdk
pnpm add @axiom/sdk`,
    init: `import { axiom } from '@axiom/sdk'

const client = axiom.init({
  token: process.env.AXIOM_TOKEN
})`,
    deploy: `# deploy handler from CLI
axiom deploy --project my-app

# check live logs
axiom logs`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="reveal-up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>For developers
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Built by devs.<br />
              <span className="text-muted-foreground">For devs.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              A thoughtfully designed SDK that gets out of your way. Ship faster with intuitive APIs and exceptional documentation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'TypeScript native', desc: 'Full type safety with auto-generated types.' },
                { title: 'Zero config', desc: 'Sensible defaults that just work.' },
                { title: 'Edge-ready', desc: 'Runs anywhere: Node, Deno, Bun, browsers.' },
                { title: '12KB gzipped', desc: 'Lightweight with zero dependencies.' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="reveal-up"
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32 reveal-right" style={{ transitionDelay: '200ms' }}>
            <div className="border border-foreground/10 bg-background overflow-hidden rounded-md">
              <div className="flex items-center border-b border-foreground/10">
                {(['install', 'init', 'deploy'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`px-6 py-4 text-sm font-mono transition-colors relative capitalize ${
                      activeTab === tab ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === 'init' ? 'Initialize' : tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground"></span>
                    )}
                  </button>
                ))}
                <div className="flex-1"></div>
                <button
                  type="button"
                  className="px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={copyCode}
                  aria-label="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-8 font-mono text-sm bg-foreground/[0.01] min-h-[220px]">
                <pre className="text-foreground/80 whitespace-pre-wrap leading-loose">
                  {codeSnippets[activeTab].split('\n').map((line, i) => (
                    <div key={i} className="leading-loose">
                      {line.trim().startsWith('#') ? (
                        <span className="text-muted-foreground">{line}</span>
                      ) : (
                        <span>
                          {line.split('').map((char, j) => (
                            <span 
                              key={j} 
                              className="animate-char-in opacity-0"
                              style={{ animationDelay: `${(i * 10 + j) * 15}ms` }}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground hover:underline underline-offset-4">Read the docs</a>
              <span className="text-foreground/20">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
