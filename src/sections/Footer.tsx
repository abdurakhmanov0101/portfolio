import React, { useEffect, useState } from 'react';
import { FiChevronUp, FiGithub, FiInstagram, FiLinkedin, FiSend } from 'react-icons/fi';

export const Footer: React.FC = React.memo(() => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative py-12 bg-slate-50 dark:bg-[#0A0F1D] border-t border-slate-200 dark:border-white/5 overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand/Logo */}
          <div className="text-center md:text-left space-y-2">
            <a
              href="#home"
              className="inline-flex items-center gap-2 group"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-lg blur-[8px] opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-slate-900 rounded-lg border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 40 40" fill="none" stroke="url(#footer-ab-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
                    <path d="M20 10 L10 30" />
                    <path d="M20 10 L30 30" />
                    <path d="M14 22 L26 22" />
                    <path d="M20 10 C 32 8, 34 18, 25 20 C 36 20, 38 32, 30 30" />
                    <defs>
                      <linearGradient id="footer-ab-grad" x1="10" y1="10" x2="35" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4" />
                        <stop offset="0.5" stopColor="#8b5cf6" />
                        <stop offset="1" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="text-lg md:text-xl font-extrabold tracking-wide bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Abduraxmanov Beksulton
              </span>
            </a>
            <p className="text-slate-600 dark:text-slate-500 text-xs font-medium tracking-wide">
              Front-End Developer & Computer Literacy Instructor
            </p>
          </div>

          {/* Social Icons list */}
          <div className="flex space-x-5">
            <a
              href="https://github.com/abdurakhmanov0101"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/beksulton-abdurakhmanov-660b16398"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://t.me/abdurakhmanov_beksulton"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow"
              aria-label="Telegram Channel"
            >
              <FiSend className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://instagram.com/_abb_110"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow"
              aria-label="Instagram Profile"
            >
              <FiInstagram className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-center md:text-right text-slate-600 dark:text-slate-500 text-xs space-y-1">
            <p>&copy; {currentYear} Beksulton. All rights reserved.</p>
            <p className="text-[10px]">
              Crafted with React, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-neon-purple hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce"
          aria-label="Scroll to Top"
        >
          <FiChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </>
  );
});
