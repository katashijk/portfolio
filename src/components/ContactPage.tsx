import { useRef, useState, FormEvent } from 'react';
import { ArrowLeft, Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { content } from '../languages/content';

interface ContactPageProps {
  language: 'pl' | 'en';
  onBack: () => void;
}

const ContactPage = ({ language, onBack }: ContactPageProps) => {
  // --- STATE & REFS ---
  const t = content[language].contactPage;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // --- HANDLERS ---
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
        setStatus('success');
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
    }, () => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    });
  };

  // --- RENDER ---
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative flex min-h-screen flex-col bg-dark-bg text-white overflow-hidden"
    >
      {/* --- BACKGROUND GRID (BLUEPRINT) --- */}
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
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-12 lg:px-8">
        
        <button 
          onClick={onBack}
          className="group mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-400 transition-all hover:border-neon hover:bg-neon/10 hover:text-neon hover:shadow-[0_0_15px_rgba(33,155,255,0.2)]"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          {language === 'pl' ? 'Powrót' : 'Back'}
        </button>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
             {/* Lewa Kolumna */}
             <div>
                <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{t.title} <span className="text-neon">.</span></h2>
                <p className="mb-12 text-lg text-gray-400 leading-relaxed">{t.desc}</p>
                <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neon/10 text-neon"><Mail size={24} /></div>
                        <div><p className="text-sm text-gray-400">Email</p><p className="text-lg font-medium">d.marchut.job@gmail.com</p></div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neon/10 text-neon"><MapPin size={24} /></div>
                        <div><p className="text-sm text-gray-400">Lokalizacja</p><p className="text-lg font-medium">Wrocław, Polska</p></div>
                     </div>
                </div>
             </div>

             {/* Prawa Kolumna (FORM) */}
             <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
                    <div><label className="mb-2 block text-sm font-medium text-gray-400">{t.form_name}</label><input type="text" name="user_name" required className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"/></div>
                    <div><label className="mb-2 block text-sm font-medium text-gray-400">{t.form_email}</label><input type="email" name="user_email" required className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"/></div>
                    <div><label className="mb-2 block text-sm font-medium text-gray-400">{t.form_message}</label><textarea name="message" rows={4} required className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"/></div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === 'sending' || status === 'success'} className={`mt-4 flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-bold transition-all ${status === 'success' ? 'bg-green-500 text-white' : status === 'error' ? 'bg-red-500 text-white' : 'bg-neon text-dark-bg hover:shadow-[0_0_20px_rgba(33,155,255,0.4)]'}`}>
                        {status === 'sending' ? <span>Wysyłanie...</span> : status === 'success' ? <><CheckCircle size={20} /><span>Wysłano!</span></> : status === 'error' ? <><AlertCircle size={20} /><span>Błąd, spróbuj ponownie</span></> : <><Send size={20} /><span>{t.btn_send}</span></>}
                    </motion.button>
                </form>
             </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ContactPage;