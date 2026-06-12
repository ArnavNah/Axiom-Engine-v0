import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { MetricsSection } from './components/MetricsSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { SecuritySection } from './components/SecuritySection';
import { DevelopersSection } from './components/DevelopersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { CtaSection } from './components/CtaSection';
import { FooterSection } from './components/FooterSection';

function App() {
  useScrollReveal();

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-background text-foreground font-sans antialiased">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InfrastructureSection />
      <MetricsSection />
      <IntegrationsSection />
      <SecuritySection />
      <DevelopersSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

export default App;
