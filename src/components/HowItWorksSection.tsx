import { useEffect, useState } from 'react';

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      num: 'I',
      title: 'Define schemas',
      desc: 'Declare your databases and events as clean schemas. Axiom maps typings globally.'
    },
    {
      num: 'II',
      title: 'Deploy handlers',
      desc: 'Run computation directly inside WebAssembly instances. We host and scale instantly.'
    },
    {
      num: 'III',
      title: 'Query instantly',
      desc: 'Access data via global low-latency endpoints. Axiom routes calls dynamically.'
    }
  ];

  const codeSnippet = `import { axiom } from '@axiom/runtime'

axiom.listen({
  event: 'http-request',
  handler: async (req) => {
    return axiom.reply(req)
  }
})`;

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 reveal-up">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30"></span>Process
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Three steps.<br />
            <span className="text-background/50">Zero cold starts.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-0 reveal-up">
            {steps.map((step, idx) => (
              <button 
                key={idx}
                type="button" 
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === idx ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-background/30">{step.num}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      {step.desc}
                    </p>
                    {activeStep === idx && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 bg-background transition-all duration-[5000ms] ease-linear" style={{ width: '100%' }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 self-start reveal-up" style={{ transitionDelay: '200ms' }}>
            <div className="border border-background/10 overflow-hidden rounded-md bg-background/5">
              <div className="jsx-d0fb98a0b853be6f px-6 py-4 border-b border-background/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-background/20"></div>
                  <div className="w-3 h-3 rounded-full bg-background/20"></div>
                  <div className="w-3 h-3 rounded-full bg-background/20"></div>
                </div>
                <span className="text-xs font-mono text-background/40">axiom-handler.ts</span>
              </div>
              <div className="p-8 font-mono text-sm min-h-[280px]">
                <pre className="text-background/70">
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="leading-loose">
                      <span className="text-background/20 select-none w-8 inline-block">{i + 1}</span>
                      <span className="inline-flex">
                        {line.split('').map((char, j) => (
                          <span key={j} className="animate-char-in opacity-0" style={{ animationDelay: `${(i * 20 + j) * 15}ms` }}>
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
              <div className="px-6 py-4 border-t border-background/10 flex items-center gap-3 bg-background/5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs font-mono text-background/40">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
