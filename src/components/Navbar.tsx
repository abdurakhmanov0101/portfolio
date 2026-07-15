import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from '../context/LanguageContext';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'services', href: '#services' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'experience', href: '#experience' },
  { key: 'contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const { language, setLanguage, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'experience', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: 'en' | 'uz' | 'ru') => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  const getLanguageLabel = (lang: string) => {
    if (lang === 'en') return 'EN';
    if (lang === 'uz') return 'UZ';
    if (lang === 'ru') return 'RU';
    return 'EN';
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3.5 glass-nav shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-200/20 dark:bg-slate-800/25">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-12 flex justify-between items-center gap-2 lg:gap-3 xl:gap-5">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg lg:text-xl xl:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform shrink-0"
          >
            BEKSULTON
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-4 2xl:gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.key;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  className={`text-[12.5px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-bold tracking-tight whitespace-nowrap transition-all duration-300 relative group py-2 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}

            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="px-2.5 lg:px-3 py-1.5 rounded-full glass-card hover:border-primary/50 text-slate-650 dark:text-slate-300 hover:text-primary dark:hover:text-primary flex items-center space-x-1.5 transition-all text-xs xl:text-sm font-bold whitespace-nowrap shrink-0"
              >
                <FiGlobe className="w-3.5 h-3.5 shrink-0" />
                <span>{getLanguageLabel(language)}</span>
                <FiChevronDown className={`w-3 h-3 transition-transform duration-200 shrink-0 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 py-1.5 w-28 rounded-xl glass-nav shadow-xl border border-slate-200 dark:border-white/5 flex flex-col overflow-hidden z-50"
                  >
                    {(['en', 'uz', 'ru'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`px-4 py-2 text-sm xl:text-base font-bold text-left transition-colors whitespace-nowrap ${
                          language === lang
                            ? 'text-primary bg-primary/10'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        {lang === 'en' ? 'English' : lang === 'uz' ? "O'zbekcha" : 'Русский'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full glass-card hover:border-primary/50 text-slate-650 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all duration-300 shrink-0"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4 text-indigo-500" />}
            </button>

            {/* CTA Hire Me */}
            <a
              href="#contact"
              className="px-3.5 lg:px-4 xl:px-5 py-1.5 xl:py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs xl:text-sm tracking-wider uppercase hover:shadow-neon-purple hover:scale-[1.03] transition-all duration-300 whitespace-nowrap shrink-0"
            >
              {t('nav.hireMe')}
            </a>
          </nav>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Language Selection Mobile Toggle */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="px-2.5 py-1.5 rounded-full glass-card text-slate-655 dark:text-slate-300 hover:text-primary flex items-center space-x-1 text-xs font-bold"
              >
                <FiGlobe className="w-3.5 h-3.5" />
                <span>{getLanguageLabel(language)}</span>
              </button>
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 mt-2 py-1 w-24 rounded-xl glass-nav shadow-xl border border-slate-200 dark:border-white/5 flex flex-col overflow-hidden"
                  >
                    {(['en', 'uz', 'ru'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`px-3 py-2 text-xs font-bold text-left transition-colors ${
                          language === lang
                            ? 'text-primary bg-primary/10'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        {lang === 'en' ? 'EN' : lang === 'uz' ? 'UZ' : 'RU'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full glass-card text-slate-655 dark:text-slate-300 hover:text-primary"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4 text-indigo-500" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full glass-card text-slate-655 dark:text-slate-300 hover:text-primary"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full glass-nav shadow-2xl py-6 px-8 flex flex-col space-y-4 border-t border-slate-200 dark:border-white/5 lg:hidden"
            >
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.key;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-2 border-b border-slate-200 dark:border-white/5 transition-colors ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                  </motion.a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-neon-purple transition-all duration-300"
              >
                {t('nav.hireMe')}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
