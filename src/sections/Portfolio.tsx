import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTranslation } from '../context/LanguageContext';

interface Project {
  title: string;
  descKey?: string;
  customDesc?: string;
  category: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  bgGradient: string;
  imageUrl?: string;
  uiMockup?: React.ReactNode;
}

const getProjectsList = (): Project[] => [
  {
    title: 'brain_IT - IT Academy Dashboard',
    descKey: 'portfolio.desc1',
    category: 'TypeScript',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST API'],
    githubUrl: 'https://github.com/abdurakhmanov0101/brain_IT',
    liveUrl: 'https://github.com/abdurakhmanov0101/brain_IT',
    bgGradient: 'from-violet-600 to-indigo-900',
    imageUrl: '/projects/brain_it.png',
    uiMockup: (
      <svg className="w-full h-full opacity-80" viewBox="0 0 100 60">
        <rect x="5" y="5" width="20" height="50" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="5" width="65" height="15" rx="3" fill="rgba(255,255,255,0.15)" />
        <circle cx="10" cy="12" r="3" fill="#3B82F6" />
        <rect x="30" y="25" width="30" height="25" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="65" y="25" width="30" height="25" rx="3" fill="rgba(255,255,255,0.1)" />
        <line x1="35" y1="35" x2="55" y2="35" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="35" y1="40" x2="48" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'pharmacy - Medical Inventory System',
    descKey: 'portfolio.desc2',
    category: 'TypeScript',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Management', 'UI/UX'],
    githubUrl: 'https://github.com/abdurakhmanov0101/pharmacy',
    liveUrl: 'https://github.com/abdurakhmanov0101/pharmacy',
    bgGradient: 'from-blue-600 to-cyan-900',
    imageUrl: '/projects/pharmacy.png',
    uiMockup: (
      <svg className="w-full h-full opacity-80" viewBox="0 0 100 60">
        <rect x="5" y="5" width="90" height="50" rx="4" fill="rgba(255,255,255,0.05)" />
        <circle cx="15" cy="15" r="4" fill="#8B5CF6" />
        <circle cx="27" cy="15" r="4" fill="#06B6D4" />
        <path d="M 10 50 L 30 35 L 50 42 L 70 25 L 90 32" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
        <circle cx="70" cy="25" r="3.5" fill="#22C55E" />
      </svg>
    ),
  },
  {
    title: 'portfolio - Personal Glassmorphism UI',
    descKey: 'portfolio.desc3',
    category: 'TypeScript',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    githubUrl: 'https://github.com/abdurakhmanov0101/portfolio',
    liveUrl: 'https://abdurakhmanov0101.github.io/portfolio',
    bgGradient: 'from-amber-600 to-orange-950',
    imageUrl: '/projects/portfolio.png',
    uiMockup: (
      <svg className="w-full h-full opacity-80" viewBox="0 0 100 60">
        <rect x="5" y="5" width="90" height="12" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="5" y="22" width="90" height="10" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="5" y="36" width="90" height="10" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="5" y="50" width="90" height="10" rx="2" fill="rgba(255,255,255,0.08)" />
        <circle cx="85" cy="27" r="2.5" fill="#22C55E" />
        <circle cx="85" cy="41" r="2.5" fill="#EF4444" />
        <circle cx="85" cy="55" r="2.5" fill="#22C55E" />
      </svg>
    ),
  },
];

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>('All');
  const [dynamicProjects, setDynamicProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/abdurakhmanov0101/repos?sort=updated')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const existingNames = ['brain_IT', 'pharmacy', 'portfolio', 'abdurakhmanov0101'];
          const newProjects: Project[] = data
            .filter((r) => !existingNames.includes(r.name) && !r.fork)
            .map((r, idx) => {
              const gradients = [
                'from-emerald-600 to-teal-900',
                'from-rose-600 to-red-950',
                'from-fuchsia-600 to-pink-900',
              ];
              return {
                title: r.name,
                customDesc: r.description || 'Open source repository hosted on GitHub.',
                category: r.language || 'Other',
                tags: [r.language || 'Code', 'GitHub'],
                githubUrl: r.html_url,
                liveUrl: r.homepage || r.html_url,
                bgGradient: gradients[idx % gradients.length],
                imageUrl: `https://opengraph.githubassets.com/1/abdurakhmanov0101/${r.name}`,
                uiMockup: (
                  <svg className="w-full h-full opacity-80" viewBox="0 0 100 60">
                    <rect x="10" y="10" width="80" height="40" rx="4" fill="rgba(255,255,255,0.08)" />
                    <line x1="20" y1="25" x2="60" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="20" y1="35" x2="70" y2="35" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              };
            });
          if (newProjects.length > 0) {
            setDynamicProjects(newProjects);
          }
        }
      })
      .catch(() => {
        // Ignore API errors
      });
  }, []);

  const projectsList = [...getProjectsList(), ...dynamicProjects];

  const filteredProjects = projectsList.filter(
    (p) => filter === 'All' || p.category === filter
  );

  const categories = ['All', ...Array.from(new Set(projectsList.map((p) => p.category)))];

  return (
    <section id="portfolio" className="relative py-16 bg-white dark:bg-darkBg">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

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
            {t('portfolio.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('portfolio.titleAccent')}
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

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-neon-blue'
                  : 'glass-card border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'All' ? t('portfolio.all') : cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group glass-card rounded-2xl border-white/5 overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-300"
              >
                {/* Mockup Preview */}
                <div className={`relative h-48 sm:h-52 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden ${project.imageUrl ? 'p-2 sm:p-3' : 'p-6 sm:p-8'}`}>
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-950/40 rounded-xl border border-white/10 p-3 flex items-center justify-center group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 shadow-xl">
                      {project.uiMockup}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    <a
                      href={project.githubUrl}
                      className="p-3.5 bg-slate-900 rounded-full border border-white/10 hover:border-primary text-white hover:text-primary transition-colors shadow-lg cursor-pointer"
                      title="View GitHub Repository"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-3.5 bg-slate-900 rounded-full border border-white/10 hover:border-accent text-white hover:text-accent transition-colors shadow-lg cursor-pointer"
                      title="View Live Demo"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider font-mono">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {project.descKey ? t(project.descKey) : project.customDesc}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/30 text-[10px] font-mono text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
