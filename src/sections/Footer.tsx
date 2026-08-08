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
              className="group shrink-0 relative flex items-center justify-center w-12 h-12"
              aria-label="Home"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-fuchsia-500 rounded-xl blur-[10px] opacity-40 group-hover:opacity-80 group-hover:blur-[14px] transition-all duration-500" />
              <div className="relative w-full h-full bg-[#0B1120]/90 rounded-xl border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-xl group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
                <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <defs>
                    <linearGradient id="footer-bespoke-grad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00f2fe" />
                      <stop offset="0.5" stopColor="#4facfe" />
                      <stop offset="1" stopColor="#f093fb" />
                    </linearGradient>
                    <filter id="footer-glow-bespoke" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <path d="M 27.5 50 L 62.5 50 C 85 50, 85 80, 57.5 80 L 37.5 20 L 62.5 20 C 80 20, 80 50, 62.5 50" stroke="url(#footer-bespoke-grad)" strokeWidth="8" filter="url(#footer-glow-bespoke)" />
                  <path d="M 37.5 20 L 17.5 80" stroke="url(#footer-bespoke-grad)" strokeWidth="8" filter="url(#footer-glow-bespoke)" />
                </svg>
              </div>
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
