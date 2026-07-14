import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaTerminal } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t, language } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const fullText = t('hero.subtitle');
  
  useEffect(() => {
    setTypedText('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        const char = fullText.charAt(index);
        setTypedText((prev) => prev + char);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 75);
    return () => clearInterval(interval);
  }, [language, fullText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden grid-bg"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[100px] glowing-blob" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px] glowing-blob" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[90px] glowing-blob -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider animate-pulse-glow"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white animate-fade-in"
          >
            {t('hero.greeting')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl font-bold font-mono tracking-wide text-slate-705 dark:text-slate-300 h-8"
          >
            <span className="typing-cursor">{typedText}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
          >
            <a
              href="#portfolio"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold text-sm hover:shadow-neon-blue hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              {t('hero.viewPortfolio')}
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-transparent border border-slate-200 dark:border-white/10 hover:border-primary/50 text-slate-800 dark:text-white font-semibold text-sm glass-card hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              {t('hero.contactMe')}
            </a>
            <a
              href="#about"
              className="px-6 py-3.5 rounded-full text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white font-semibold text-sm transition-all duration-300 cursor-pointer"
            >
              {t('hero.downloadCv')}
            </a>
          </motion.div>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] glass-card border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

            {/* Fake editor toolbar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-500 select-none">beksulton-dev.ts</span>
              <FaTerminal className="w-3 h-3 text-slate-500" />
            </div>

            {/* Editor body mock content */}
            <div className="flex-1 font-mono text-[11px] sm:text-xs text-slate-400 py-4 space-y-2.5 overflow-hidden select-none">
              <p className="text-cyan-400">
                <span className="text-purple-400">const</span> developer = {'{'}
              </p>
              <p className="pl-4">
                name: <span className="text-yellow-300">'Beksulton'</span>,
              </p>
              <p className="pl-4">
                {t('hero.editor.skills')}: [<span className="text-yellow-300">'React/Next.js'</span>, <span className="text-yellow-300">'TypeScript'</span>, <span className="text-yellow-300">'Performance'</span>],
              </p>
              <p className="pl-4">
                {t('hero.editor.mission')}: <span className="text-yellow-300">'{t('about.stats.projects')}'</span>,
              </p>
              <p className="pl-4 text-emerald-400">
                {t('hero.editor.impactDriven')}: <span className="text-purple-400">true</span>
              </p>
              <p className="text-cyan-400">{'};'}</p>
              <p>&nbsp;</p>
              <p className="text-purple-400">
                function <span className="text-blue-400">teachStudents</span>() {'{'}
              </p>
              <p className="pl-4 text-slate-500">{t('hero.editor.comment')}</p>
              <p className="pl-4 text-cyan-400">
                return <span className="text-primary-light">student.empower()</span>;
              </p>
              <p className="text-purple-400">{'}'}</p>
            </div>

            {/* Lower panel bar */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500 select-none">
              <span>Ln 12, Col 24</span>
              <span>UTF-8</span>
              <span>TypeScript React</span>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 left-6 p-3 rounded-2xl glass-card border-white/10 text-[#61DAFB] shadow-neon-cyan hover:scale-110 transition-transform"
          >
            <FaReact className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 left-10 p-3 rounded-2xl glass-card border-white/10 text-[#F7DF1E] shadow-lg hover:scale-110 transition-transform"
          >
            <FaJs className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 -left-12 p-3 rounded-2xl glass-card border-white/10 text-[#E34F26] shadow-lg hover:scale-110 transition-transform"
          >
            <FaHtml5 className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-8 top-12 p-3 rounded-2xl glass-card border-white/10 text-[#1572B6] shadow-lg hover:scale-110 transition-transform"
          >
            <FaCss3Alt className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 right-6 p-3 rounded-2xl glass-card border-white/10 text-[#F05032] shadow-neon-purple hover:scale-110 transition-transform"
          >
            <FaGitAlt className="w-6 h-6" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
