import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

interface Skill {
  nameKey: string;
  defaultName: string;
  level: number;
}

const frontendSkills: Skill[] = [
  { nameKey: 'React & Next.js', defaultName: 'React & Next.js', level: 92 },
  { nameKey: 'TypeScript', defaultName: 'TypeScript', level: 85 },
  { nameKey: 'JavaScript (ES6+)', defaultName: 'JavaScript (ES6+)', level: 90 },
  { nameKey: 'Tailwind CSS & Sass', defaultName: 'Tailwind CSS & Sass', level: 95 },
  { nameKey: 'HTML5 & CSS3', defaultName: 'HTML5 & CSS3', level: 98 },
  { nameKey: 'Redux Toolkit', defaultName: 'Redux Toolkit', level: 80 },
  { nameKey: 'REST APIs & Axios', defaultName: 'REST APIs & Axios', level: 88 },
  { nameKey: 'Responsive UI/UX Design', defaultName: 'Responsive UI/UX Design', level: 94 },
];

const toolsSkills: Skill[] = [
  { nameKey: 'Git & GitHub', defaultName: 'Git & GitHub', level: 90 },
  { nameKey: 'Figma (UI Design)', defaultName: 'Figma (UI Design)', level: 80 },
  { nameKey: 'VS Code & Extensions', defaultName: 'VS Code & Extensions', level: 95 },
  { nameKey: 'Vite & Webpack', defaultName: 'Vite & Webpack', level: 85 },
  { nameKey: 'npm & Yarn', defaultName: 'npm & Yarn', level: 90 },
  { nameKey: 'Chrome DevTools', defaultName: 'Chrome DevTools', level: 88 },
];

const literacySkills = (t: any, language?: string): Skill[] => [
  { nameKey: 'Word', defaultName: t('services.list.s8.title').split(' ')[0] + ' Word', level: 95 },
  { nameKey: 'Excel', defaultName: t('services.list.s8.title').split(' ')[0] + ' Excel', level: 90 },
  { nameKey: 'PowerPoint', defaultName: t('services.list.s8.title').split(' ')[0] + ' PowerPoint', level: 95 },
  { nameKey: 'Workspace', defaultName: 'Google Workspace / Email', level: 92 },
  { nameKey: 'Windows', defaultName: 'Windows OS & Security', level: 88 },
  { nameKey: 'Typing', defaultName: language === 'uz' ? 'Yozish tezligi (65+ WPM)' : language === 'ru' ? 'Скорость печати (65+ WPM)' : 'Keyboard Typing Speed (65+ WPM)', level: 90 },
  { nameKey: 'Cybersecurity', defaultName: t('education.list.edu4.degree').split(' & ')[0], level: 82 },
  { nameKey: 'Internet', defaultName: language === 'uz' ? 'Internet va qidiruv tizimlari' : language === 'ru' ? 'Поиск в Интернете' : 'Internet Navigation & Research', level: 96 },
];

interface CircularProgressProps {
  percentage: number;
  name: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, name }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="glass-card p-6 rounded-2xl border-white/5 flex flex-col items-center justify-center space-y-4 hover:scale-[1.05] transition-all duration-300">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-slate-800"
            strokeWidth="6"
            fill="transparent"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-primary"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg text-white">
          {percentage}%
        </div>
      </div>
      <span className="text-sm font-bold text-center text-slate-300">{name}</span>
    </div>
  );
};

interface ProgressBarProps {
  name: string;
  level: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ name, level }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="font-bold text-slate-700 dark:text-slate-300">{name}</span>
        <span className="font-mono text-xs text-primary font-semibold">{level}%</span>
      </div>
      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const { language, t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'frontend' | 'tools' | 'literacy'>('frontend');

  const tabs = [
    { id: 'frontend', name: t('skills.tabs.frontend') },
    { id: 'tools', name: t('skills.tabs.tools') },
    { id: 'literacy', name: t('skills.tabs.literacy') },
  ];

  const computerSkills = literacySkills(t, language);

  return (
    <section id="skills" className="relative py-16 bg-white dark:bg-darkBg">
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

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
            {t('skills.title')} <span className="text-slate-500 font-normal">/</span>{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('skills.titleAccent')}
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

        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full glass-card border-white/5 space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10 shadow-neon-purple"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Lists */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'frontend' && (
              <motion.div
                key="frontend"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[140px]"
              >
                {/* Large Featured Card */}
                <div className="col-span-1 md:col-span-2 row-span-2 glass-card p-8 rounded-[32px] border-white/5 shadow-xl flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Core Stack</h3>
                  <div className="space-y-6">
                    <ProgressBar name={frontendSkills[0].defaultName} level={frontendSkills[0].level} />
                    <ProgressBar name={frontendSkills[1].defaultName} level={frontendSkills[1].level} />
                  </div>
                </div>
                
                {/* Standard Cards */}
                {frontendSkills.slice(2, 6).map((skill) => (
                  <div key={skill.nameKey} className="col-span-1 row-span-1 glass-card p-6 rounded-[24px] border-white/5 flex flex-col justify-center hover:scale-[1.02] transition-transform">
                    <ProgressBar name={skill.defaultName} level={skill.level} />
                  </div>
                ))}

                {/* Wide Card */}
                <div className="col-span-1 md:col-span-2 row-span-1 glass-card p-6 rounded-[24px] border-white/5 flex flex-col justify-center hover:scale-[1.02] transition-transform">
                  <ProgressBar name={frontendSkills[6].defaultName} level={frontendSkills[6].level} />
                </div>
                
                {/* Single Card */}
                <div className="col-span-1 row-span-1 glass-card p-6 rounded-[24px] border-white/5 flex flex-col justify-center hover:scale-[1.02] transition-transform">
                  <ProgressBar name={frontendSkills[7].defaultName} level={frontendSkills[7].level} />
                </div>
              </motion.div>
            )}

            {activeTab === 'tools' && (
              <motion.div
                key="tools"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {/* Bento Tools Grid */}
                <div className="col-span-2 row-span-2 glass-card p-8 rounded-[32px] border-white/5 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">My Toolkit</h3>
                    <p className="text-slate-400">Essential tools for daily development</p>
                  </div>
                </div>
                {toolsSkills.map((skill) => (
                  <CircularProgress key={skill.nameKey} name={skill.defaultName} percentage={skill.level} />
                ))}
              </motion.div>
            )}

            {activeTab === 'literacy' && (
              <motion.div
                key="literacy"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[140px]"
              >
                {/* Wide Featured */}
                <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-2 glass-card p-8 rounded-[32px] border-white/5 shadow-xl flex flex-col justify-center">
                   <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Digital Expertise</h3>
                   <div className="space-y-6">
                     <ProgressBar name={computerSkills[0].defaultName} level={computerSkills[0].level} />
                     <ProgressBar name={computerSkills[1].defaultName} level={computerSkills[1].level} />
                   </div>
                </div>

                {computerSkills.slice(2).map((skill) => (
                  <div key={skill.nameKey} className="col-span-1 row-span-1 glass-card p-6 rounded-[24px] border-white/5 flex flex-col justify-center hover:scale-[1.02] transition-transform">
                    <ProgressBar name={skill.defaultName} level={skill.level} />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
