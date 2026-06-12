import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export function SecuritySection() {
  const securityItems = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'SOC 2 Type II',
      description: 'Independently audited security controls with continuous monitoring.',
      delay: '0ms'
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: 'End-to-end encryption',
      description: 'AES-256 encryption for data at rest and TLS 1.3 in transit.',
      delay: '100ms'
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: 'Zero-trust architecture',
      description: 'Every request is authenticated and authorized. No exceptions.',
      delay: '200ms'
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: 'GDPR & HIPAA',
      description: 'Full compliance with data protection and healthcare regulations.',
      delay: '300ms'
    }
  ];

  return (
    <section id="security" className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="reveal-up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>Security
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Trust is<br />non-negotiable.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Enterprise-grade security isn't optional. It's built into every layer of our platform, from infrastructure to application.
            </p>
            <div className="flex flex-wrap gap-3">
              {['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'CCPA'].map((cert, index) => (
                <span 
                  key={cert}
                  className="px-4 py-2 border border-foreground/10 text-sm font-mono reveal-up"
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {securityItems.map((item, index) => (
              <div 
                key={index} 
                className="p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group reveal-right"
                style={{ transitionDelay: item.delay }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
