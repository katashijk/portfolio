import { useMemo } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../languages/content';
import profilePic from '../assets/mainpic.jpg';

interface HeroProps {
  language: 'pl' | 'en';
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 },
  },
};

const Hero = ({ language }: HeroProps) => {
  const t = content[language].hero;
  const rayConfig = [0.8, 0.3, 0.7, 0.2, 0.9, 0.4, 0.6, 0.8, 0.3, 0.5];
  const svgSize = 500;
  const center = svgSize / 2;
  const orbitRadius = 220;
  const circumference = 2 * Math.PI * orbitRadius;

  const rays = useMemo(() => {
    const rayCount = rayConfig.length;
    const segmentSpace = circumference / rayCount;

    return rayConfig.map((multiplier, i) => ({
      id: i,
      length: segmentSpace * multiplier,
      offset: i * segmentSpace,
    }));
  }, [rayConfig, circumference]);

  return (
    <div className="relative flex min-h-[calc(100vh-88px)] w-full items-center justify-center overflow-hidden bg-dark-bg text-white">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1c1c1c_100%)]" />

      <div className="container relative z-10 mx-auto grid grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-0">
        <motion.section
          className="order-2 text-center lg:order-1 lg:pl-16 lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
              <span className="block text-white">
                {t.greeting} {t.title_prefix}
              </span>
              <span className="block text-neon">{t.name}</span>
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-1 mt-6 text-xl font-medium tracking-wider text-gray-300 uppercase sm:text-2xl"
          >
            {t.role}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl lg:mx-0"
          >
            <span className="font-semibold text-white">{t.desc_1}</span>{' '}
            {t.desc_2}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:justify-start"
          >
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 rounded-full border-2 border-neon bg-transparent px-8 py-3 text-base font-bold text-neon transition-all hover:bg-neon hover:text-dark-bg hover:shadow-[0_0_20px_rgba(33,255,166,0.4)]"
            >
              <Download size={20} />
              {t.btn_cv}
            </a>

            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Mail, href: 'mailto:kontakt@example.com' },
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

        <motion.div
          className="order-1 flex justify-center lg:order-2 lg:pr-10"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[500px] sm:w-[500px]">
            <motion.svg
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              {rays.map((ray) => (
                <circle
                  key={ray.id}
                  cx={center}
                  cy={center}
                  r={orbitRadius}
                  fill="none"
                  stroke="#21ffa6"
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeDasharray={`${ray.length} ${circumference - ray.length}`}
                  strokeDashoffset={-ray.offset}
                  transform={`rotate(-90 ${center} ${center})`}
                />
              ))}
            </motion.svg>

            <div className="relative h-[74%] w-[74%] overflow-hidden rounded-full border-[4px] border-dark-bg bg-dark-bg shadow-2xl sm:border-[6px]">
              <img
                src={profilePic}
                alt="Dawid"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;