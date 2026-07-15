import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Component imports
import { Loader } from './components/Loader';
import { BackgroundParticles } from './components/BackgroundParticles';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';

// Section imports
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default dark mode
  });

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    void lenis;


    // Sync class list with darkMode state
    if (darkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Dynamic pre-loader */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden">
          {/* Ambient Background Canvas Particles */}
          <BackgroundParticles />

          {/* Interactive Mouse Follow Cursor Glow */}
          <CursorGlow />

          {/* Floating Glass Navbar */}
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Page Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Experience />
            <Education />
            <Testimonials />
            <Contact />
          </main>

          {/* Footer & Scroll-To-Top */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
