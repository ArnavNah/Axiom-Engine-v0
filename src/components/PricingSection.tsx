import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      num: '01',
      name: 'Hobby',
      desc: 'For developers and personal APIs',
      price: 0,
      features: [
        'Up to 100K requests/mo',
        '2 edge execution zones',
        'Shared key-value state',
        'Basic telemetry logs',
        'Public endpoints'
      ],
      btnText: 'Start free',
      popular: false
    },
    {
      num: '02',
      name: 'Production',
      desc: 'For critical APIs and persistent state',
      price: isAnnual ? 29 : 35,
      features: [
        'Unlimited requests (metered)',
        'All 24 execution zones',
        'Dedicated distributed mesh',
        'Real-time debug logs',
        'Custom domains',
        '99.999% uptime SLA',
        'Team access controls'
      ],
      btnText: 'Deploy production',
      popular: true
    },
    {
      num: '03',
      name: 'Enterprise Grid',
      desc: 'For global high-throughput systems',
      price: 'Custom',
      features: [
        'Isolated execution clusters',
        'Dedicated memory sandboxes',
        '24/7 infrastructure support',
        'Custom data connectors',
        'Zero-trust compliance audits',
        'On-premise edge setups',
        'Volume-based pricing',
        'Custom SLA contracts'
      ],
      btnText: 'Contact grid team',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20 reveal-up">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Pricing
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Simple, transparent<br />
            <span className="text-muted-foreground">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-16 reveal-up">
          <span className={`text-sm transition-colors ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20"
            aria-label="Toggle pricing period"
          >
            <div 
              className={`w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${
                isAnnual ? 'translate-x-7' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <span className={`text-sm transition-colors ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
            Annual
          </span>
          <span className="ml-2 px-2 py-1 bg-foreground text-background text-xs font-mono">
            Save 17%
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10 reveal-up">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background flex flex-col justify-between ${
                plan.popular ? 'border-2 border-foreground md:-my-4 md:py-12 lg:py-16 z-10' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <div>
                <div className="mb-8">
                  <span className="font-mono text-xs text-muted-foreground">{plan.num}</span>
                  <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.desc}</p>
                </div>
                
                <div className="mb-8 pb-8 border-b border-foreground/10">
                  <div className="flex items-baseline gap-2">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="font-display text-5xl lg:text-6xl text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground">/month</span>
                      </>
                    ) : (
                      <span className="font-display text-4xl text-foreground">{plan.price}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular 
                    ? 'bg-foreground text-background hover:bg-foreground/90' 
                    : 'border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5'
                }`}
              >
                {plan.btnText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground reveal-up">
          All plans include automatic updates, TLS 1.3, and DDoS protection.{' '}
          <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Compare all features
          </a>
        </p>
      </div>
    </section>
  );
}
