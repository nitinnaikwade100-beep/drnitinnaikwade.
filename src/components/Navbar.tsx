import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export type HeaderSection = 'expertise' | 'gallery' | 'blogs' | null;

interface NavbarProps {
  activeHeaderSection?: HeaderSection;
  onSelectHeaderSection?: (section: HeaderSection) => void;
}

export default function Navbar({ activeHeaderSection = null, onSelectHeaderSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Second Opinion', href: '#second-opinion', type: 'scroll' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'Expertise', href: '#expertise', type: 'section', sectionId: 'expertise' as const },
    { name: 'Gallery', href: '#gallery', type: 'section', sectionId: 'gallery' as const },
    { name: 'Blogs', href: '#blogs', type: 'section', sectionId: 'blogs' as const },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    if (link.type === 'section' && link.sectionId) {
      if (onSelectHeaderSection) {
        onSelectHeaderSection(link.sectionId);
      }
      window.location.hash = link.href;
    } else {
      if (onSelectHeaderSection) {
        onSelectHeaderSection(null);
      }
      if (link.href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(null, '', ' ');
      } else {
        const elem = document.querySelector(link.href);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar - Hidden on mobile, visible on md+ */}
      <div className={`hidden md:block bg-slate-900 text-slate-300 py-2 transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center space-x-6">
            <a href="mailto:nitinnaikwade100@gmail.com" className="flex items-center hover:text-sky-400 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2" />
              nitinnaikwade100@gmail.com
            </a>
            <a href="tel:+919823012307" className="flex items-center hover:text-sky-400 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2" />
              +91 9823012307
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Follow Us:</span>
            <a href="https://www.linkedin.com/in/dr-nitin-naikwade-a6503798" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://instagram.com/dr_nitin7" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://facebook.com/nitin.naikwade" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/919823012307" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://x.com/NaikwadeNitin" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="X (Twitter)">
              <XIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo / Name */}
            <div className="flex-shrink-0 flex flex-col">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSelectHeaderSection) onSelectHeaderSection(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.replaceState(null, '', ' ');
                }}
                className="flex items-center"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 shadow-md border-2 border-sky-600 bg-white">
                  <img 
                    src="/logo.png" 
                    alt="Dr. Nitin Naikwade Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none">
                    Dr. Nitin Naikwade
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-sky-700 uppercase tracking-wider mt-1">
                    Hybrid Neurosurgeon
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => {
                const isCurrent = (link.type === 'section' && activeHeaderSection === link.sectionId) ||
                                  (link.name === 'Home' && !activeHeaderSection);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                      isCurrent
                        ? 'text-sky-600 font-semibold'
                        : 'text-slate-600 hover:text-sky-600'
                    }`}
                  >
                    {link.name}
                    {isCurrent && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
                    )}
                  </button>
                );
              })}
              <a
                href="tel:+919823012307"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Emergency: +91 9823012307
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-sky-700 focus:outline-none p-2 rounded-xl hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 top-[64px] bg-slate-900/40 backdrop-blur-xs z-30" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl left-0 top-full z-40 max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navLinks.map((link) => {
                const isCurrent = (link.type === 'section' && activeHeaderSection === link.sectionId) ||
                                  (link.name === 'Home' && !activeHeaderSection);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors min-h-[44px] flex items-center ${
                      isCurrent
                        ? 'bg-sky-50 text-sky-700 font-semibold'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              
              <div className="pt-3 px-1 space-y-2.5 border-t border-slate-100 mt-2">
                <a
                  href="tel:+919823012307"
                  className="flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 shadow-sm min-h-[46px]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: +91 9823012307
                </a>
                <a
                  href="https://wa.me/919823012307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 min-h-[46px]"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
