import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-16 bg-slate-50 dark:bg-slate-900/40 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            {t('about.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('about.titleAccent')}
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Avatar Image with Glowing Borders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] group">
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-secondary opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary via-accent to-secondary animate-pulse opacity-30" />
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 bg-slate-950 p-2">
                <img
                  src="/avatar.png"
                  alt="Beksulton"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Floating Quick Card */}
              <div className="absolute -bottom-6 -right-6 glass-card px-5 py-3.5 rounded-2xl border-slate-200 dark:border-white/10 shadow-xl hidden sm:block">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t('about.location')}</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{t('about.locationValShort')}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('about.subheading')}
            </h3>
            
            <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base">
              {t('about.p1')}
            </p>
            
            <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base">
              {t('about.p2')}
            </p>

            {/* Quality Badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">вњ“</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{t('about.badges.b1_title')}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{t('about.badges.b1_desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">вњ“</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{t('about.badges.b2_title')}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{t('about.badges.b2_desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">вњ“</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{t('about.badges.b3_title')}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{t('about.badges.b3_desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">вњ“</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{t('about.badges.b4_title')}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{t('about.badges.b4_desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
