import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Youtube, 
  Instagram, 
  Figma, 
  Globe, 
  Twitter 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { content } from '../languages/content';

interface ProjectDetailProps {
  projectId: string;
  language: 'pl' | 'en';
  onBack: () => void;
}

// --- IKONY ---
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

// --- KOMPONENT ---
const ProjectDetail = ({ projectId, language, onBack }: ProjectDetailProps) => {
  const project = content[language].projects.items.find((p: any) => p.id === projectId);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative min-h-screen bg-[#1c1c1c] px-6 py-24 text-white selection:bg-neon selection:text-[#1c1c1c] overflow-hidden"
    >
      
      {/* --- BLUEPRINT GRID --- */}
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

      {/* --- CONTENT --- */}
      <div className="relative z-10 mx-auto max-w-5xl">
        
        <button
          onClick={onBack}
          className="group mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-400 transition-all hover:border-neon hover:bg-neon/10 hover:text-neon hover:shadow-[0_0_15px_rgba(33,155,255,0.2)]"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span>
            {language === 'pl' ? 'Wróć do projektów' : 'Back to projects'}
          </span>
        </button>

        <div className="mb-12">
          <h1 className="mb-6 pb-2 text-4xl font-bold md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            {project.title}
          </h1>
          
          <div className="mb-8 flex flex-wrap gap-3">
            {project.tech.map((t: string) => (
              <span 
                key={t} 
                className="cursor-default rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-300 transition-all hover:border-neon hover:bg-neon/10 hover:text-neon hover:shadow-[0_0_15px_-3px_rgba(33,155,255,0.3)]"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            {project.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.links?.map((link: any, i: number) => {
              const IconComponent = iconMap[link.type] || iconMap.default;
              const isHighlight = link.type === 'live';

              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    flex items-center gap-2 rounded-lg border px-6 py-3 font-medium transition-all
                    ${isHighlight 
                      ? 'border-neon bg-neon text-[#1c1c1c] hover:bg-neon/80 hover:shadow-[0_0_20px_rgba(33,155,255,0.4)]' 
                      : 'border-white/10 bg-white/5 text-gray-300 hover:border-neon/50 hover:text-neon hover:bg-white/10'
                    }
                  `}
                >
                  <IconComponent size={20} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* --- GALLERY --- */}
        <div className="space-y-12 pb-12">
          {project.images?.map((img: string, index: number) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition-all hover:border-neon/50 hover:shadow-[0_0_30px_rgba(33,155,255,0.15)]"
            >
              <img 
                src={img} 
                alt={`${project.title} screenshot ${index + 1}`} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-40" />
            
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default ProjectDetail;