export function IntegrationsSection() {
  const integrations = [
    { name: 'PostgreSQL', type: 'Database' },
    { name: 'Redis', type: 'Cache Mesh' },
    { name: 'Kafka', type: 'Event Streams' },
    { name: 'ClickHouse', type: 'Analytics' },
    { name: 'WebAssembly', type: 'Sandbox Runtime' },
    { name: 'Docker', type: 'Containers' },
    { name: 'Kubernetes', type: 'Orchestration' },
    { name: 'MongoDB', type: 'Document DB' },
  ];

  return (
    <section id="integrations" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 reveal-up">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 justify-center">
            <span className="w-8 h-px bg-foreground/30"></span>
            Data connectors
            <span className="w-8 h-px bg-foreground/30"></span>
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Works with your<br/>entire infrastructure.
          </h2>
          <p className="text-xl text-muted-foreground">
            200+ database adapters and execution connectors. Plug into your data mesh in minutes.
          </p>
        </div>
      </div>

      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[1, 2].map((set) => (
            <div key={set} className="flex gap-6 shrink-0">
              {integrations.map((item, i) => (
                <div key={i} className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group rounded-md">
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.type}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
