import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../languages/content';

interface EducationProps {
  language: 'pl' | 'en';
}

const Education = ({ language }: EducationProps) => {
  const t = content[language].education;

  return (
    <section className="relative overflow-hidden bg-dark-bg py-24 text-white">
      
      {/* GLOW EFFECT */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <GraduationCap className="text-neon" size={40} />
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.items.map((item: any, index: number) => {
            
            // --- LOGIKA IKONKI ---
            const isNumeric = /^[0-9]/.test(item.badge); 
            const BadgeIcon = isNumeric ? Award : GraduationCap;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:border-neon/50"
              >
                <div>
                  {/* --- GÓRNY PASEK: TYTUŁ + BADGE --- */}
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-neon">
                      {item.degree}
                    </h3>

                    <div className={`
                      shrink-0 flex items-center gap-2 rounded-full border px-3 py-1 font-bold text-sm transition-all duration-300
                      
                      /* Styl podstawowy */
                      border-neon/20 bg-neon/10 text-neon
                      
                      /* Efekt Techstack (Glow po najechaniu) */
                      hover:scale-105 hover:border-neon hover:bg-neon/10 hover:shadow-[0_0_15px_rgba(33,155,255,0.5)] cursor-default
                    `}>
                      <BadgeIcon size={16} />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Data pod tytułem */}
                  <div className="mb-6 flex items-center gap-2 font-mono text-sm text-gray-400">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Opis */}
                <div className="mb-8">
                  {item.desc && (
                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.desc}
                    </p>
                  )}
                </div>

                {/* Stopka karty (Szkoła) */}
                <div className="mt-auto border-t border-white/10 pt-6">
                  <span className="font-medium tracking-wide text-gray-300">
                    {item.school}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;