import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from '../context/LanguageContext';

interface BlogPost {
  titleKey: string;
  excerptKey: string;
  categoryKey: string;
  dateKey: string;
  readTimeKey: string;
  accent: string;
}

const blogPosts: BlogPost[] = [
  {
    titleKey: 'blog.list.b1.title',
    excerptKey: 'blog.list.b1.excerpt',
    categoryKey: 'services.list.s8.title', // Microsoft Office
    dateKey: 'July 8, 2026',
    readTimeKey: '6 min read',
    accent: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    titleKey: 'blog.list.b2.title',
    excerptKey: 'blog.list.b2.excerpt',
    categoryKey: 'React',
    dateKey: 'June 28, 2026',
    readTimeKey: '5 min read',
    accent: 'bg-primary/20 text-primary-light border-primary/30',
  },
  {
    titleKey: 'blog.list.b3.title',
    excerptKey: 'blog.list.b3.excerpt',
    categoryKey: 'JavaScript',
    dateKey: 'May 12, 2026',
    readTimeKey: '8 min read',
    accent: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  },
  {
    titleKey: 'blog.list.b4.title',
    excerptKey: 'blog.list.b4.excerpt',
    categoryKey: 'skills.tabs.literacy', // Computer Literacy
    dateKey: 'April 20, 2026',
    readTimeKey: '4 min read',
    accent: 'bg-accent/20 text-accent-light border-accent/30',
  },
];

export const Blog: React.FC = () => {
  const { language, t } = useTranslation();

  const getTranslatedCategory = (key: string) => {
    if (key === 'React' || key === 'JavaScript') return key;
    return t(key);
  };

  const getTranslatedDate = (date: string) => {
    if (language === 'uz') {
      return date
        .replace('July', 'Iyul')
        .replace('June', 'Iyun')
        .replace('May', 'May')
        .replace('April', 'Aprel');
    }
    if (language === 'ru') {
      return date
        .replace('July', 'Июля')
        .replace('June', 'Июня')
        .replace('May', 'Мая')
        .replace('April', 'Апреля');
    }
    return date;
  };

  const getTranslatedReadTime = (time: string) => {
    if (language === 'uz') {
      return time.replace('min read', "daqiqa o'qish");
    }
    if (language === 'ru') {
      return time.replace('min read', 'мин чтения');
    }
    return time;
  };

  return (
    <section id="blog" className="relative py-16 bg-white dark:bg-darkBg">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

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
            {t('blog.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('blog.titleAccent')}
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

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass-card p-6 sm:p-8 rounded-2xl border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Meta stats */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <div className="flex items-center space-x-2">
                    <FiCalendar className="w-3.5 h-3.5" />
                    <span>{getTranslatedDate(post.dateKey)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiClock className="w-3.5 h-3.5" />
                    <span>{getTranslatedReadTime(post.readTimeKey)}</span>
                  </div>
                </div>

                <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-bold font-mono tracking-wider uppercase border ${post.accent}`}>
                  {getTranslatedCategory(post.categoryKey)}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-snug">
                  {t(post.titleKey)}
                </h3>

                <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                  {t(post.excerptKey)}
                </p>
              </div>

              {/* Read button */}
              <div className="flex items-center text-xs font-semibold text-primary group-hover:text-accent transition-colors pt-6 mt-4 border-t border-white/5 cursor-pointer">
                <span>{t('blog.readFull')}</span>
                <FiArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
