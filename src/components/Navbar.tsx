import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../languages/content';

interface NavbarProps {
  language: 'pl' | 'en';
  setLanguage: (lang: 'pl' | 'en') => void;
  onOpenContact: () => void;
}

const Navbar = ({ language, setLanguage, onOpenContact }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = content[language].nav;

  const links = [
    { name: t.about, href: '#about' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  // --- BLOKADA SCROLLOWANIA STRONY ---

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Sprzątanie przy odmontowaniu
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === '#contact') {
      onOpenContact();
      setIsMobileMenuOpen(false);
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* --- NAVBAR GŁÓWNY --- */}
      <nav className="relative z-50 w-full bg-dark-bg/80 backdrop-blur-sm py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          
          {/* LOGO */}
          <div className="flex lg:flex-1">
            <div className="flex select-none items-center gap-2 text-2xl font-bold tracking-tight text-white">
              <span className="text-neon">&lt;</span>
              Dawid
              <span className="text-neon">/&gt;</span>
            </div>
          </div>

          {/* MENU DESKTOPOWE */}
          <div className="hidden lg:flex lg:gap-x-12">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="group relative text-lg font-bold leading-6 text-white transition-colors hover:text-neon"
              >
                {link.name}
                <span 
                  className="
                    absolute -bottom-2 left-0 h-[2px] w-full origin-center scale-x-0 
                    bg-neon shadow-[0_0_8px_rgba(33,155,255,0.8)] 
                    transition-transform duration-300 ease-out 
                    group-hover:scale-x-100
                  " 
                />
              </a>
            ))}
          </div>

          {/* PRZEŁĄCZNIK JĘZYKA I HAMBURGER */}
          <div className="flex flex-1 items-center justify-end gap-4">
            
            {/* SWITCH (Desktop) */}
            <div className="hidden items-center gap-1 rounded-full bg-white/5 p-1 border border-white/10 sm:flex">
              {(['pl', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`
                    relative z-10 rounded-full px-4 py-1.5 text-sm font-bold transition-colors duration-300
                    ${language === lang ? 'text-dark-bg' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {lang.toUpperCase()}
                  {language === lang && (
                    <motion.span
                      layoutId="active-lang-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-neon shadow-[0_0_15px_rgba(33,155,255,0.6)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Przycisk Menu Mobilnego */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-neon"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MENU MOBILNE --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col h-[100dvh] bg-[#1c1c1c] px-6 py-6 md:hidden overflow-hidden"
          >
            {/* HEADER MOBILNY */}
            <div className="flex items-center justify-between mb-8 shrink-0">
              <div className="text-2xl font-bold tracking-tighter text-white">
                <span className="text-neon">&lt;</span>
                Dawid
                <span className="text-neon">/&gt;</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              >
                <X size={24} />
              </button>
            </div>

            {/* LINKI */}
            <div className="flex flex-col gap-8 flex-1 overflow-y-auto">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)} 
                  className="text-left text-3xl font-bold text-white transition-colors hover:text-neon"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* WYBÓR JĘZYKA (MOBILE) */}
            <div className="mt-auto border-t border-white/10 pt-8 shrink-0 pb-safe">
                <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Language / Język</span>
                    <button
                        onClick={() => setLanguage(language === 'pl' ? 'en' : 'pl')}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white"
                    >
                        <Globe size={18} />
                        <span>{language === 'pl' ? 'Polski' : 'English'}</span>
                    </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;