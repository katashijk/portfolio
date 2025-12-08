import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../languages/content';

interface EducationProps {
  language: 'pl' | 'en';
}

const Education = ({ language }: EducationProps) => {
  const t = content[language].education;

  return (
    <section className="relative overflow-hidden bg-dark-bg py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          <GraduationCap className="text-neon" size={40} />
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:border-neon/50"
            >
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-neon">
                  {item.degree}
                </h3>

                <div className="mb-6 flex items-center gap-2 font-mono text-sm text-gray-400">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="mb-2 flex justify-end">
                  <div className="flex items-center gap-2 rounded-full border border-neon/20 bg-neon/10 px-3 py-1 font-bold text-neon">
                    <GraduationCap size={16} />
                    <span>{item.grade}</span>
                  </div>
                </div>

                {item.desc && (
                  <p className="text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                )}
              </div>

              <div className="mt-auto border-t border-white/10 pt-6">
                <span className="font-medium tracking-wide text-gray-300">
                  {item.school}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;