import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const languages = [
  { code: 'FR', label: 'Français' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'IT', label: 'Italiano' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('FR');
  const location = useLocation();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isDarkSection = location.pathname === '/';

  const textColor = scrolled
    ? 'text-foreground-900'
    : isDarkSection
      ? 'text-foreground-50'
      : 'text-foreground-900';

  const logoColor = scrolled ? 'text-foreground-950' : isDarkSection ? 'text-foreground-50' : 'text-foreground-950';

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/laboratoire', label: 'Le Laboratoire' },
    { to: '/collection', label: 'Collection' },
    { to: '/distribution', label: 'Distribution' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md border-b border-foreground-100/30'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className={`font-heading text-2xl tracking-[0.3em] font-light transition-colors duration-500 ${logoColor}`}>
            TRANDMI
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] tracking-[0.15em] font-light transition-colors duration-300 whitespace-nowrap ${
                  location.pathname === link.to
                    ? textColor
                    : scrolled
                      ? 'text-foreground-500 hover:text-foreground-900'
                      : isDarkSection
                        ? 'text-foreground-300 hover:text-foreground-50'
                        : 'text-foreground-500 hover:text-foreground-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`text-[12px] tracking-[0.2em] font-light transition-colors duration-300 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  scrolled ? 'text-foreground-500 hover:text-foreground-900' : isDarkSection ? 'text-foreground-300 hover:text-foreground-50' : 'text-foreground-500 hover:text-foreground-900'
                }`}
              >
                {activeLang}
                <i className={`ri-arrow-down-s-line text-[10px] transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-3 bg-background-50 border border-foreground-100/40 py-2 min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setActiveLang(lang.code); setLangOpen(false); }}
                      className={`block w-full text-left px-5 py-2 text-[12px] tracking-[0.1em] font-light transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                        activeLang === lang.code ? 'text-primary-600' : 'text-foreground-600 hover:text-foreground-900 hover:bg-background-100'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/devis"
              className="text-[12px] tracking-[0.2em] font-light text-accent-400 hover:text-accent-300 border-b border-accent-400/40 hover:border-accent-300 transition-all duration-300 pb-0.5 whitespace-nowrap"
            >
              Demande de Devis
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden cursor-pointer ${textColor}`}
            aria-label="Menu"
          >
            <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background-50/98 backdrop-blur-md border-t border-foreground-100/20">
          <div className="px-8 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-[0.15em] font-light transition-colors duration-200 ${
                  location.pathname === link.to ? 'text-foreground-950' : 'text-foreground-500 hover:text-foreground-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-2 border-t border-foreground-100/20">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setActiveLang(lang.code)}
                  className={`text-[11px] tracking-[0.15em] font-light transition-colors duration-200 cursor-pointer ${
                    activeLang === lang.code ? 'text-primary-600' : 'text-foreground-400 hover:text-foreground-700'
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
            <Link
              to="/devis"
              className="text-sm tracking-[0.15em] font-light text-accent-400 hover:text-accent-300 transition-colors duration-200 pt-2"
            >
              Demande de Devis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}