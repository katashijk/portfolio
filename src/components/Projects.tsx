import { useState, useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  Image as ImageIcon, 
  FolderGit2, 
  Youtube, 
  Instagram, 
  Figma, 
  Globe, 
  Twitter 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { content } from '../languages/content';

interface ProjectsProps {
  language: 'pl' | 'en';
  onProjectClick: (id: string) => void;
}

// --- IKONY (SVG) ---
const SteamIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={size} height={size} fill="currentColor" className={className}>
    <path d="M568 320C568 457 456.8 568 319.6 568C205.8 568 110 491.7 80.6 387.6L175.8 426.9C182.2 459 210.7 483.3 244.7 483.3C283.9 483.3 316.6 450.9 314.9 409.8L399.4 349.6C451.5 350.9 495.2 308.7 495.2 256.1C495.2 204.5 453.2 162.6 401.5 162.6C349.8 162.6 307.8 204.6 307.8 256.1L307.8 257.3L248.6 343C233.1 342.1 217.9 346.4 205.1 355.1L72 300.1C82.2 172.4 189.1 72 319.6 72C456.8 72 568 183 568 320zM227.7 448.3L197.2 435.7C202.8 447.3 212.5 456.5 224.4 461.5C251.3 472.7 282.2 459.9 293.4 433.1C298.8 420.1 298.9 405.8 293.5 392.8C288.1 379.8 278 369.6 265 364.2C252.1 358.8 238.3 359 226.1 363.6L257.6 376.6C277.4 384.8 286.8 407.5 278.5 427.3C270.2 447.2 247.5 456.5 227.7 448.3zM401.5 193.8C435.9 193.8 463.8 221.7 463.8 256.1C463.8 290.5 435.9 318.4 401.5 318.4C367.1 318.4 339.2 290.5 339.2 256.1C339.2 221.7 367.1 193.8 401.5 193.8zM401.6 302.8C427.4 302.8 448.4 281.8 448.4 256C448.4 230.2 427.4 209.2 401.6 209.2C375.8 209.2 354.8 230.2 354.8 256C354.8 281.8 375.8 302.8 401.6 302.8z"/>
  </svg>
);

const ArtStationIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={size} height={size} fill="currentColor" className={className}>
    <path d="M66.1 441.4L109.1 515.7C113.4 524.2 119.9 531.4 128 536.4C136.1 541.4 145.4 544 155 544L440.4 544L381.2 441.4L66.1 441.4zM565.9 414L399.7 123.3C395.3 115.1 388.8 108.2 380.8 103.3C372.8 98.4 363.7 96 354.4 96L266 96L523.3 543.6L564 473.1C565.9 469.9 585 443.4 566 414zM339.2 368.5L223.7 168.5L108.2 368.5L339.2 368.5z"/>
  </svg>
);

const iconMap: Record<string, any> = {
  github: Github,
  live: ExternalLink,
  steam: SteamIcon,       
  artstation: ArtStationIcon,
  youtube: Youtube,
  instagram: Instagram,
  twitter: Twitter,
  figma: Figma,
  default: Globe
};

// --- KOMPONENT ZDJĘCIA (Z LOSOWYM CZASEM ZMIANY) ---
const ProjectImage = ({ images, defaultImage, title }: { images?: string[], defaultImage: string, title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesList = (images && images.length > 0) ? images : [defaultImage];

  useEffect(() => {
    if (imagesList.length <= 1) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const cycleImages = () => {
      // 1. Losuj czas: np. od 3000ms do 6000ms
      const minTime = 3000;
      const maxTime = 10000;
      const randomDuration = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);

      // 2. Ustaw timeout
      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % imagesList.length);
        cycleImages(); 
      }, randomDuration);
    };

    // Start pętli
    cycleImages();

    // Czyszczenie przy odmontowaniu
    return () => clearTimeout(timeoutId);
  }, [imagesList.length]);

  return (
    <AnimatePresence>
      <motion.img 
        key={currentIndex} 
        src={imagesList[currentIndex]} 
        alt={title} 
        
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 1.5 }}

        className="absolute inset-0 h-full w-full object-cover" 
      />
    </AnimatePresence>
  );
};

// --- GŁÓWNY KOMPONENT ---
const Projects = ({ language, onProjectClick }: ProjectsProps) => {
  const t = content[language].projects;

  return (
    <section id="projects" className="relative overflow-hidden bg-dark-bg py-24 text-white">
      
      {/* TŁO: GRID */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 60% 50% at center, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at center, #000 70%, transparent 100%)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* NAGŁÓWEK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          <FolderGit2 className="text-neon" size={40} />
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        {/* SIATKA PROJEKTÓW */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((project: any, index: number) => (
            <motion.article
              key={index}
              onClick={() => onProjectClick(project.id)} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-neon/50 hover:shadow-[0_10px_40px_-10px_rgba(33, 155, 255,0.1)] cursor-pointer"
            >
              
              {/* 1. KONTENER ZDJĘCIA */}
              <div className="relative h-56 w-full overflow-hidden bg-black/40">
                {(project.images?.length > 0 || project.image) ? (
                    <ProjectImage 
                      images={project.images} 
                      defaultImage={project.image} 
                      title={project.title} 
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-600 transition-colors duration-300 group-hover:text-neon/50">
                       <ImageIcon size={48} />
                    </div>
                )}
              </div>

              {/* 2. TREŚĆ */}
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4">
                    <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-neon">
                    {project.title}
                    </h3>
                    
                    {/* --- TAGI TECHNOLOGICZNE --- */}
                    <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string, i: number) => (
                        <span 
                        key={i} 
                        className="cursor-default rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-gray-300 transition-all hover:border-neon hover:bg-neon/10 hover:text-neon hover:shadow-[0_0_15px_-3px_rgba(33,155,255,0.3)]"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                
                <p className="mb-8 flex-1 text-sm leading-relaxed text-gray-400">
                  {project.desc}
                </p>

                {/* --- DYNAMICZNE LINKI --- */}
                <div className="mt-auto flex flex-wrap gap-4 border-t border-white/10 pt-6">
                  {project.links && project.links.map((link: any, linkIndex: number) => {
                    
                    const IconComponent = iconMap[link.type] || iconMap.default;
                    const isHighlight = link.type === 'live';
                    
                    const colorClasses = isHighlight 
                      ? "text-neon hover:text-white" 
                      : "text-gray-400 hover:text-neon";

                    return (
                      <a 
                        key={linkIndex}
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()} 
                        className={`flex items-center gap-0.5 text-sm font-medium transition-colors ${colorClasses}`}
                      >
                        <IconComponent size={25} />
                        <span>{link.label}</span>
                      </a>
                    );
                  })}
                </div>

              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;