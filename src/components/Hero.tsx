import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-white">
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-500 sm:text-7xl">
        Cześć, jestem [Twoje Imię]
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-slate-400 sm:text-xl">
        Frontend Developer skupiony na tworzeniu nowoczesnych aplikacji webowych przy użyciu React i TypeScript.
      </p>
      
      <div className="flex gap-4">
        <a href="https://github.com" target="_blank" className="rounded-full bg-slate-800 p-3 hover:bg-slate-700 hover:text-blue-400 transition">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" className="rounded-full bg-slate-800 p-3 hover:bg-slate-700 hover:text-blue-400 transition">
          <Linkedin size={24} />
        </a>
        <a href="mailto:twoj@email.com" className="rounded-full bg-slate-800 p-3 hover:bg-slate-700 hover:text-blue-400 transition">
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;