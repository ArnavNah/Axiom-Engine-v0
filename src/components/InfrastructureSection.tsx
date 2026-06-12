export function InfrastructureSection() {
  const regions = [
    { name: 'San Francisco', region: 'US West', latency: '6ms', status: 'operational' },
    { name: 'New York', region: 'US East', latency: '11ms', status: 'operational-secondary' },
    { name: 'London', region: 'Europe', latency: '14ms', status: 'operational-secondary' },
    { name: 'Tokyo', region: 'Asia Pacific', latency: '21ms', status: 'operational-secondary' },
    { name: 'Sydney', region: 'Oceania', latency: '29ms', status: 'operational-secondary' },
    { name: 'Sao Paulo', region: 'South America', latency: '24ms', status: 'operational-secondary' },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal-left">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>Infrastructure
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Decentralized<br />execution.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Compile once, run globally. Axiom distributes execution across 24 localized sandboxes for sub-15ms response times.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">24</div>
                <div className="text-sm text-muted-foreground">Local nodes</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">99.999%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">&lt;15ms</div>
                <div className="text-sm text-muted-foreground">Edge latency</div>
              </div>
            </div>
          </div>
          
          <div className="reveal-right" style={{ transitionDelay: '200ms' }}>
            <div className="border border-foreground/10 rounded-md bg-background overflow-hidden">
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Axiom Edge Mesh</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Active nodes
                </span>
              </div>
              <div>
                {regions.map((item, i) => (
                  <div key={i} className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${i === 0 ? 'bg-foreground/[0.02]' : ''}`}>
                    <div className="flex items-center gap-4">
                      <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === 0 ? 'bg-foreground' : 'bg-foreground/20'}`}></span>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.region}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{item.latency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
