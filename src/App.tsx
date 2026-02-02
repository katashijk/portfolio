import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import ShortProfile from './components/ShortProfile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import ProjectDetail from './components/ProjectDetail';

// --- KONFIGURACJA CZASU (w ms) ---
const BLUR_IN_TIME = 400;
const WAIT_TIME = 200;

function App() {
  const [language, setLanguage] = useState<'pl' | 'en'>('pl');
  const [view, setView] = useState<'home' | 'contact' | 'project'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetLangDisplay, setTargetLangDisplay] = useState<'PL' | 'EN' | null>(null);

  const handleViewChange = (newView: 'home' | 'contact' | 'project', projectId?: string) => {
    setView(newView);
    if (projectId) {
        setSelectedProjectId(projectId);
    }
  };

  const handleLanguageChange = (newLang: 'pl' | 'en') => {
    if (newLang === language || isTransitioning) return;
    
    setIsTransitioning(true);
    setTargetLangDisplay(newLang === 'pl' ? 'PL' : 'EN');

    setTimeout(() => {
      
      setLanguage(newLang);

      setTimeout(() => {
        setIsTransitioning(false); 
        setTimeout(() => setTargetLangDisplay(null), 500);
      }, WAIT_TIME);

    }, BLUR_IN_TIME);
  };

  // Warianty dla głównej treści (rozmywanie tła przy zmianie języka)
  const contentVariants = {
    normal: { 
      filter: 'blur(0px)', 
      opacity: 1, 
      transform: 'scale(1)',
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    blurred: { 
      filter: 'blur(10px)', 
      opacity: 0.4, 
      transform: 'scale(0.95)',
      transition: { duration: 0.4, ease: "easeIn" } 
    },
  };

  // --- NOWE: WSPÓLNE ANIMACJE STRON (PRZEJŚCIA MIĘDZY WIDOKAMI) ---
  const pageTransition = {
    initial: { opacity: 0, x: 50 },  // Wchodzi z prawej
    animate: { opacity: 1, x: 0 },   // Stoi w miejscu
    exit: { opacity: 0, x: 50 },     // Wychodzi w prawo
    transition: { duration: 0.4, ease: "easeInOut" }
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans text-white selection:bg-neon selection:text-dark-bg overflow-x-hidden">

      {/* --- EKRAN PRZEJŚCIA JĘZYKA --- */}
      <AnimatePresence mode='wait'>
        {isTransitioning && targetLangDisplay && (
          <motion.div
            key="transition-overlay"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-bg/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
             {/* ... (KOD REAKTORA BEZ ZMIAN) ... */}
             <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 20, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.div className="absolute -inset-16 rounded-full border border-dashed border-neon/30" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute -inset-8 rounded-full border border-t-transparent border-b-transparent border-white/20" animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-dark-bg border-2 border-neon shadow-[0_0_50px_rgba(33,155,255,0.4)]">
                <span className="text-4xl font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                  {targetLangDisplay}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- GŁÓWNA ZAWARTOŚĆ --- */}
      <motion.div
        variants={contentVariants}
        initial="normal"
        animate={isTransitioning ? "blurred" : "normal"}
        className="flex min-h-screen flex-col will-change-[filter,opacity,transform]"
      >
      
        <AnimatePresence mode='wait'>
          
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Navbar 
                language={language} 
                setLanguage={handleLanguageChange}
                onOpenContact={() => handleViewChange('contact')}
              />
              <Hero language={language} />
              <Education language={language} />
              <Projects language={language} onProjectClick={(id) => handleViewChange('project', id)} />
              <ShortProfile language={language} />
              <Footer 
                language={language} 
                onOpenContact={() => handleViewChange('contact')} 
              />
            </motion.div>
          )}

          {view === 'contact' && (
            <ContactPage 
              key="contact"
              language={language} 
              onBack={() => handleViewChange('home')} 
            />
          )}

          {view === 'project' && selectedProjectId && (
            <ProjectDetail 
              key="project"
              projectId={selectedProjectId}
              language={language}
              onBack={() => handleViewChange('home')}
            />
          )}

        </AnimatePresence>

      </motion.div>
    </div>
  );
}

export default App;