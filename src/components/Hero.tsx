import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { content } from '../languages/content';
import profilePic from '../assets/mainpic.jpg';

interface HeroProps {
  language: 'pl' | 'en';
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

const Hero = ({ language }: HeroProps) => {
  const t = content[language].hero;

  // --- LOGIKA ZNIKAJĄCEJ STRZAŁKI ---
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // ----------------------------------

  return (
    <div className="relative flex min-h-[calc(100vh-140px)] w-full items-center justify-center overflow-hidden bg-dark-bg text-white">
      {/* TŁO */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 48% at 50% 48%, #000 64%, transparent 100%)'
        }}
      />

      <div className="container relative z-10 mx-auto grid grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-20 lg:px-8 items-center">
        
        {/* SEKCJA TEKSTOWA */}
        <motion.section
          className="order-2 text-center lg:order-1 lg:pl-16 lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-white block">
                {t.greeting} {t.title_prefix}
              </span>
              <span className="text-neon block">
                {t.name}
              </span>
            </h1>
          </motion.div>

          <motion.h2
             variants={itemVariants}
             className="mt-6 mb-1 text-xl sm:text-2xl font-medium text-gray-300 tracking-wider uppercase"
          >
            {t.role}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-10 text-lg text-gray-400 sm:text-xl leading-relaxed max-w-2xl lg:mx-0 mx-auto"
          >
            {/* CZĘŚĆ 1: "Inżynierska precyzja," (GLITCH) */}
            <span 
              className="glitch-effect font-semibold" 
              data-text={`${t.desc_1},`}
            >
              {t.desc_1},
            </span>

            {' '}

            {/* CZĘŚĆ 2: "artystyczny chaos" */}
            <span 
              className="chaos-effect"
              data-text={t.desc_2} 
            >
              {t.desc_2}
            </span>

            {/* Kropka na końcu */}
            <span className="font-semibold text-white">.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <a 
              href="/cv.pdf" 
              download
              className="flex items-center gap-2 rounded-full border-2 border-neon bg-transparent px-8 py-3 text-base font-bold text-neon transition-all hover:bg-neon hover:text-dark-bg hover:shadow-[0_0_20px_rgba(33,155,255,0.4)]"
            >
              <Download size={20} />
              {t.btn_cv}
            </a>

            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/katashijk' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/dawid-marchut/' },
                { icon: Mail, href: 'mailto:d.marchut.job@gmail.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 text-gray-300 transition-all hover:border-neon hover:bg-neon hover:text-dark-bg"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* SEKCJA ZDJĘCIA */}
        <motion.div 
          className="relative order-1 flex items-center justify-center lg:order-2"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
           <div className="relative aspect-square w-full max-w-[400px] flex items-center justify-center sm:max-w-[500px]">
            <motion.div
              className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-neon border-b-neon"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-[5px] border-neon/30 border-l-transparent border-r-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-8 rounded-full border border-neon/50 shadow-[0_0_30px_rgba(33,155,255,0.2)]" />

            <div className="absolute inset-8 z-10 overflow-hidden rounded-full border-4 border-dark-bg bg-dark-bg shadow-2xl">
              <img
                src={profilePic}
                alt="Dawid"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* --- SCROLL DOWN INDICATOR --- */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div 
            className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">Scroll</span>
              <div className="h-6 w-4 rounded-full border-2 border-neon/50 p-1">
                <div className="h-1.5 w-full rounded-full bg-neon" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Hero;