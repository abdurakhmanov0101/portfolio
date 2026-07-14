import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

interface ExperienceItem {
  company: string;
  period: string;
  roleKey: string;
  descKey: string;
  b1Key: string;
  b2Key: string;
  b3Key: string;
}

const experienceList: ExperienceItem[] = [
  {
    company: 'Linko.uz',
    period: '2024 - 2025',
    roleKey: 'experience.list.exp1.role',
    descKey: 'experience.list.exp1.desc',
    b1Key: 'experience.list.exp1.b1',
    b2Key: 'experience.list.exp1.b2',
    b3Key: 'experience.list.exp1.b3',
  },
  {
    company: 'Amusot.uz',
    period: '2022 - 2024',
    roleKey: 'experience.list.exp2.role',
    descKey: 'experience.list.exp2.desc',
    b1Key: 'experience.list.exp2.b1',
    b2Key: 'experience.list.exp2.b2',
    b3Key: 'experience.list.exp2.b3',
  },
];

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            {t('experience.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('experience.titleAccent')}
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

        {/* Timeline Container */}
        <div className="relative">
          <div className="timeline-line hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceList.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center justify-between relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-[45%] hidden md:block" />

                  <div className="absolute left-[20px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-[3px] border-primary z-20 shadow-neon-blue hidden md:block" />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full md:w-[45%] glass-card p-6 sm:p-8 rounded-2xl border-white/5 relative"
                  >
                    <span className="text-xs font-mono font-bold text-accent mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t(exp.roleKey)}</h3>
                    <h4 className="text-sm font-semibold text-primary mb-4">{exp.company}</h4>
                    <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-4">{t(exp.descKey)}</p>
                    
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">вЂў</span>
                        <span>{t(exp.b1Key)}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">вЂў</span>
                        <span>{t(exp.b2Key)}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">вЂў</span>
                        <span>{t(exp.b3Key)}</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
