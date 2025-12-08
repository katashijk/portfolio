import { useState } from 'react';
import { Globe, ChevronDown, Menu, X, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../languages/content';

interface NavbarProps {
  language: 'pl' | 'en';
  setLanguage: (lang: 'pl' | 'en') => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = content[language].nav;

  const links = [
    { name: t.about, href: '#about' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className="relative z-50 w-full border-b border-white/5 bg-dark-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="group flex items-center gap-2">
            <div className="rounded-lg bg-neon/10 p-2 text-neon transition-colors group-hover:bg-neon group-hover:text-dark-bg">
              <Briefcase size={24} />
            </div>
            <span className="text-xl font-bold tracking-wider text-white transition-colors group-hover:text-neon">
              {t.logo}
            </span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden items-center lg:flex lg:gap-x-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium leading-6 text-white transition-colors hover:text-neon"
            >
              {link.name}
            </a>
          ))}

          <div className="relative ml-4">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 rounded-full bg-neon px-4 py-2 text-sm font-bold text-dark-bg transition hover:bg-neon/90"
            >
              <Globe size={18} />
              {language === 'pl' ? 'PL' : 'EN'}
              <ChevronDown
                size={16}
                className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5"
                >
                  <button
                    onClick={() => {
                      setLanguage('pl');
                      setIsLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-100"
                  >
                    Polski
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-100"
                  >
                    English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-dark-bg lg:hidden"
          >
            <div className="space-y-1 px-6 py-6 pb-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-4 text-lg font-semibold leading-7 text-white hover:bg-white/5 hover:text-neon"
                >
                  {link.name}
                </a>
              ))}

              <div className="mt-8 flex gap-4 border-t border-white/10 pt-8">
                <button
                  onClick={() => setLanguage('pl')}
                  className={`rounded-full border px-4 py-2 ${
                    language === 'pl'
                      ? 'border-neon bg-neon text-dark-bg'
                      : 'border-white/20 text-white'
                  }`}
                >
                  Polski
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`rounded-full border px-4 py-2 ${
                    language === 'en'
                      ? 'border-neon bg-neon text-dark-bg'
                      : 'border-white/20 text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;