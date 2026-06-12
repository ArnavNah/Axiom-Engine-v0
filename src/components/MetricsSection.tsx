export function MetricsSection() {
  const metrics = [
    { value: '254M', label: 'Invocations processed today', delay: '0ms' },
    { value: '99.999%', label: 'Execution success rate', delay: '100ms' },
    { value: '1.2ms', label: 'Average compute duration', delay: '200ms' },
    { value: '142', label: 'Global edge zones active', delay: '300ms' },
  ];

  return (
    <section id="studio" className="relative py-24 lg:py-32 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>Live telemetry
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight reveal-up">
              Performance you<br/>can measure.
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live
            </span>
            <span className="text-foreground/30">|</span>
            <span>01:59:43 AM</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-background p-8 lg:p-12 reveal-up" style={{ transitionDelay: metric.delay }}>
              <div className="text-6xl lg:text-8xl font-display tracking-tight">{metric.value}</div>
              <div className="mt-4 text-lg text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
