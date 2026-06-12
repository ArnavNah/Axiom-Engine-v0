import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 top-0 left-0 right-0 ${
          isScrolled ? 'backdrop-blur-md bg-background/80 border-b border-foreground/10' : ''
        }`}
      >
        <nav className="mx-auto transition-all duration-500 bg-transparent max-w-[1400px]">
          <div className="flex items-center justify-between transition-all duration-500 px-6 lg:px-8 h-20">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-display tracking-tight transition-all duration-500 text-2xl">
                Axiom
              </span>
              <span className="text-muted-foreground font-mono transition-all duration-500 text-xs mt-1">
                ENGINE
              </span>
            </a>
            
            <div className="hidden md:flex items-center gap-12">
              {['Features', 'How it works', 'Developers', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-all duration-500 text-sm">
                Sign in
              </a>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-8 px-6 bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500">
                Start creating
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: 0, height: '100vh' }}
        >
          <div className="flex flex-col h-full px-8 pt-28 pb-8 relative z-50">
            <div className="flex-1 flex flex-col justify-center gap-8">
              {['Features', 'How it works', 'Developers', 'Pricing'].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                    isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            <div 
              className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium border bg-background shadow-xs hover:bg-foreground/5 px-4 py-2 flex-1 rounded-full h-14 text-base">
                Sign in
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium px-4 py-2 flex-1 bg-foreground text-background rounded-full h-14 text-base">
                Start creating
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
