import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';

function App() {
  const [language, setLanguage] = useState<'pl' | 'en'>('en');

  return (
    <main className="flex min-h-screen flex-col bg-dark-bg text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Education language={language} />
    </main>
  );
}

export default App;