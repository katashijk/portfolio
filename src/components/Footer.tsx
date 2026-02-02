import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../languages/content';

interface FooterProps {
  language: 'pl' | 'en';
  onOpenContact: () => void;
}

const Footer = ({ language, onOpenContact }: FooterProps) => {
  const t = content[language].footer;

  return (
    <footer className="relative mt-auto w-full overflow-hidden bg-dark-bg pt-24 pb-8 text-white">
      
      {/* Maska górna */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 -translate-y-full bg-gradient-to-b from-transparent to-dark-bg" />
      
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-neon/5 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6">
        
        {/* SEKCJA CTA */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
          
          <p className="mb-8 max-w-xl text-lg text-gray-400">
            {t.desc}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="rounded-full bg-neon px-8 py-4 text-lg font-bold text-dark-bg shadow-[0_0_20px_rgba(33,155,255,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(33,155,255,0.5)]"
          >
            {t.btn_contact}
          </motion.button>
        </div>

        {/* DOLNY PASEK */}
        <div className="flex w-full flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <div className="text-sm font-medium text-gray-600">
            {t.copyright}
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/katashijk" target="_blank" rel="noreferrer" className="text-gray-500 transition-colors hover:text-neon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dawid-marchut/" target="_blank" rel="noreferrer" className="text-gray-500 transition-colors hover:text-neon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:d.marchut.job@gmail.com" className="text-gray-500 transition-colors hover:text-neon">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;