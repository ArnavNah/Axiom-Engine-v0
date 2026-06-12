import { useState } from 'react';

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      quote: "Axiom rebuilt our edge architecture from scratch. What used to hit database bottlenecks now returns instantly.",
      author: "Sarah Chen",
      role: "Director of Infrastructure, HashiGroup",
      result: "10x faster execution",
      initial: "S"
    },
    {
      quote: "We were looking for a distributed runtime that scales securely. Axiom delivered that and much more.",
      author: "Alex Rivera",
      role: "Core Platform, CloudNet",
      result: "99.999% sandbox isolation",
      initial: "A"
    },
    {
      quote: "The type safety and local debugging inside Axiom are unmatched. Writing handlers is incredibly fast.",
      author: "Marcus Vance",
      role: "Lead Architect, SysForge",
      result: "60% less latency spikes",
      initial: "M"
    },
    {
      quote: "Our global compute latency dropped from 150ms to less than 12ms instantly. Our users notice the difference.",
      author: "Elena Rostova",
      role: "Principal Engineer, Datacraft",
      result: "5x faster API responses",
      initial: "E"
    }
  ];

  const brands = [
    'HashiGroup',
    'CloudNet',
    'SysForge',
    'Datacraft',
    'GridScale',
    'ByteLabs',
    'Kinetix',
    'SentryEdge'
  ];

  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What engineering leaders say
          </span>
          <div className="flex-1 h-px bg-foreground/10"></div>
          <span className="font-mono text-xs text-muted-foreground">
            0{activeIdx + 1} / 04
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 min-h-[220px] flex flex-col justify-between">
            <blockquote className="transition-all duration-500 opacity-100 translate-y-0">
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                "{testimonials[activeIdx].quote}"
              </p>
            </blockquote>
            <div className="mt-12 flex items-center gap-6 transition-all duration-300 delay-100 opacity-100">
              <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground">
                  {testimonials[activeIdx].initial}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">
                  {testimonials[activeIdx].author}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[activeIdx].role}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="p-8 border border-foreground/10 transition-all duration-300 opacity-100 scale-100">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display text-3xl md:text-4xl text-foreground transition-all">
                {testimonials[activeIdx].result}
              </p>
            </div>
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 transition-all duration-300 ${
                    activeIdx === idx ? 'w-8 bg-foreground' : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By Brands Marquee */}
        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Trusted by teams at
          </p>
          <div className="w-full overflow-hidden">
            <div className="flex gap-16 items-center marquee whitespace-nowrap">
              {[1, 2].map((set) => (
                <div key={set} className="flex gap-16 items-center shrink-0">
                  {brands.map((brand) => (
                    <span 
                      key={brand}
                      className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
