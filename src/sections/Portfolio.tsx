import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    liveUrl: 'https://brain-it.netlify.app',
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
    liveUrl: 'https://pharmacy-management.netlify.app',
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
  {
    title: 'biology - Biology Learning Platform',
    customDesc: 'Open source repository hosted on GitHub. Educational project for Biology.',
    category: 'HTML',
    tags: ['HTML', 'CSS', 'JavaScript', 'Education'],
    githubUrl: 'https://github.com/abdurakhmanov0101/biology',
    liveUrl: 'https://biology-learning.netlify.app',
    bgGradient: 'from-emerald-600 to-teal-900',
    imageUrl: 'https://opengraph.githubassets.com/1/abdurakhmanov0101/biology',
    uiMockup: (
      <svg className="w-full h-full opacity-80" viewBox="0 0 100 60">
        <rect x="10" y="10" width="80" height="40" rx="4" fill="rgba(255,255,255,0.08)" />
        <line x1="20" y1="25" x2="60" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="35" x2="70" y2="35" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Surxon Ilm Tafakkur',
    customDesc: 'Educational and Scientific Platform project. Comprehensive system for education and learning.',
    category: 'TypeScript',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Education'],
    githubUrl: 'https://github.com/abdurakhmanov0101',
    liveUrl: 'https://surxon-ilm-tafakkur.netlify.app',
    bgGradient: 'from-blue-700 to-indigo-950',
    imageUrl: '', // Will fall back to UI mockup if no image
    uiMockup: (
      <svg className="w-full h-full opacity-80" viewBox="0 0 100 60">
        <circle cx="50" cy="30" r="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <path d="M 40 35 L 50 20 L 60 35 Z" fill="#3B82F6" />
        <line x1="35" y1="45" x2="65" y2="45" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>('All');
  const [dynamicProjects, setDynamicProjects] = useState<any[]>([]);

  React.useEffect(() => {
    fetch('https://api.github.com/users/abdurakhmanov0101/repos?sort=updated')
      .then((res) => {
        if (!res.ok) throw new Error('API limit or error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // Exclude profile repo and projects we already hardcoded
          // Only exclude the profile readme repository and forks
          const newProjects = data
            .filter((r: any) => r.name !== 'abdurakhmanov0101' && !r.fork)
            .map((r: any, idx: number) => {
              const gradients = [
                'from-violet-600 to-indigo-900', 
                'from-emerald-600 to-teal-900', 
                'from-blue-600 to-cyan-900',
                'from-rose-600 to-red-950', 
                'from-fuchsia-600 to-pink-900',
                'from-amber-600 to-orange-950'
              ];
              return {
                title: r.name,
                customDesc: r.description || 'Open source repository hosted on GitHub.',
                category: r.language || 'Other',
                tags: [r.language || 'Code', 'GitHub'],
                githubUrl: r.html_url,
                liveUrl: r.homepage || r.html_url, // Takes the live demo link straight from GitHub
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
        // Silently fail and rely on static fallback if API is rate-limited
      });
  }, []);

  // Use the dynamic projects from GitHub profile. If none loaded (e.g. rate limit), use fallback list.
  const projectsList = dynamicProjects.length > 0 ? dynamicProjects : getProjectsList();

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

        {/* Projects Carousel */}
        <div className="relative overflow-hidden flex w-full group py-4">
          <div className="flex gap-8 w-max animate-scroll-x group-hover:pause">
            {[...filteredProjects, ...filteredProjects].map((project, idx) => (
              <div
                key={`${project.title}-${idx}`}
                className="w-[300px] sm:w-[380px] lg:w-[420px] flex-shrink-0 glass-card rounded-2xl border-white/5 overflow-hidden flex flex-col hover:border-primary/30 transition-all duration-300"
              >
                {/* Mockup Preview */}
                <div className={`relative h-48 sm:h-52 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden ${project.imageUrl ? 'p-2 sm:p-3' : 'p-6 sm:p-8'}`}>
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10 hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-950/40 rounded-xl border border-white/10 p-3 flex items-center justify-center hover:scale-105 hover:rotate-1 transition-transform duration-500 shadow-xl">
                      {project.uiMockup}
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow relative bg-slate-900/50">
                  <div className="space-y-3 flex-grow">
                    <span className="inline-block px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 text-xs font-semibold tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors whitespace-normal line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed whitespace-normal line-clamp-2">
                      {project.descKey ? t(project.descKey) : project.customDesc}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-6">
                    {project.tags.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/30 text-[10px] font-mono text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/30 text-[10px] font-mono text-slate-600 dark:text-slate-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors ml-auto"
                    >
                      Live Demo
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Left/Right Fade Edges */}
          <div className="absolute top-0 left-0 h-full w-24 sm:w-32 bg-gradient-to-r from-white dark:from-darkBg to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-24 sm:w-32 bg-gradient-to-l from-white dark:from-darkBg to-transparent pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
};
