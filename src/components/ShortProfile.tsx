import { User, Code2, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../languages/content';

interface ShortProfileProps {
  language: 'pl' | 'en';
}

const ShortProfile = ({ language }: ShortProfileProps) => {
  const t = content[language].profile;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="relative overflow-hidden bg-dark-bg py-24 text-white">
      
      {/* GLOW EFFECT */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* NAGŁÓWEK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <User className="text-neon" size={40} />
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          
          {/* KAFEL 1: BIO */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 md:col-span-2 md:row-span-1 transition-colors hover:border-neon/50"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                {/* --- IKONKA Z EFEKTEM HOVER --- */}
                <div className="rounded-full bg-neon/10 p-2 text-neon ring-1 ring-neon/20 transition-colors group-hover:bg-neon group-hover:text-dark-bg">
                  <User size={20} />
                </div>
                {/* ----------------------------- */}
                <h3 className="text-xl font-bold">{t.bio_title}</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-400">
                {t.bio_desc}
              </p>
            </div>
          </motion.div>

          {/* KAFEL 2: LOKALIZACJA */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-colors hover:border-neon/50 md:col-span-1 md:row-span-1"
          >
            <div className="mb-4 rounded-full bg-neon/10 p-4 text-neon ring-1 ring-neon/20 transition-colors group-hover:bg-neon group-hover:text-dark-bg">
              <MapPin size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">{t.location_title}</h3>
            <p className="text-gray-400">{t.location}</p>
          </motion.div>

          {/* KAFEL 3: TECH STACK */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-neon/50 md:col-span-1 md:row-span-1"
          >
            <div className="mb-6 flex items-center gap-3">
              {/* --- IKONKA Z EFEKTEM HOVER --- */}
              <div className="rounded-full bg-neon/10 p-2 text-neon ring-1 ring-neon/20 transition-colors group-hover:bg-neon group-hover:text-dark-bg">
                <Code2 size={20} />
              </div>
              {/* ----------------------------- */}
              <h3 className="text-xl font-bold">{t.tech_title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {t.tech_items.map((tech: string, i: number) => (
                <span 
                  key={i} 
                  className="
                    cursor-default 
                    rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 
                    transition-all duration-300 
                    hover:-translate-y-0.5 hover:border-neon hover:bg-neon/10 hover:text-neon hover:shadow-[0_0_15px_rgba(33, 155, 255,0.4)]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* KAFEL 4: HOBBY */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-neon/50 md:col-span-2 md:row-span-1"
          >
            <div className="mb-6 flex items-center gap-3">
              {/* --- IKONKA Z EFEKTEM HOVER --- */}
              <div className="rounded-full bg-neon/10 p-2 text-neon ring-1 ring-neon/20 transition-colors group-hover:bg-neon group-hover:text-dark-bg">
                <Heart size={20} />
              </div>
              {/* ----------------------------- */}
              <h3 className="text-xl font-bold">{t.hobbies_title}</h3>
            </div>
            <div className="flex flex-wrap gap-4">
               {t.hobbies.map((hobby: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon"></span>
                  {hobby}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ShortProfile;