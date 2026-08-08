import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Component imports
import { Loader } from './components/Loader';
import { BackgroundParticles } from './components/BackgroundParticles';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';

// Lazy-loaded Section imports for Performance (Code Splitting)
const Hero = lazy(() => import('./sections/Hero').then(module => ({ default: module.Hero })));
const About = lazy(() => import('./sections/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./sections/Skills').then(module => ({ default: module.Skills })));
const Services = lazy(() => import('./sections/Services').then(module => ({ default: module.Services })));
const Portfolio = lazy(() => import('./sections/Portfolio').then(module => ({ default: module.Portfolio })));
const Experience = lazy(() => import('./sections/Experience').then(module => ({ default: module.Experience })));
const Education = lazy(() => import('./sections/Education').then(module => ({ default: module.Education })));
const Testimonials = lazy(() => import('./sections/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('./sections/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./sections/Footer').then(module => ({ default: module.Footer })));

// Fallback loader for lazy chunks
const SectionFallback = () => (
  <div className="w-full h-32 flex items-center justify-center opacity-50">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

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
        <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden bg-darkBg text-white">
          {/* Ambient Background Canvas Particles */}
          <BackgroundParticles />

          {/* Interactive Mouse Follow Cursor Glow */}
          <CursorGlow />

          {/* Floating Glass Navbar (Static for instant load) */}
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Page Sections (Lazy Loaded) */}
          <main>
            <Suspense fallback={<SectionFallback />}>
              <Hero />
              <About />
              <Skills />
              <Services />
              <Portfolio />
              <Experience />
              <Education />
              <Testimonials />
              <Contact />
            </Suspense>
          </main>

          {/* Footer & Scroll-To-Top (Lazy Loaded) */}
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default App;
