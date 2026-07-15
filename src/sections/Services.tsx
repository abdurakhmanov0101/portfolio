import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCode,
  FiSmartphone,
  FiLayers,
  FiCpu,
  FiLayout,
  FiZap,
  FiBookOpen,
  FiFileText,
  FiGlobe,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { useTranslation } from '../context/LanguageContext';

interface Service {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  color: string;
}

const servicesList: Service[] = [
  {
    icon: <FiCode />,
    titleKey: 'services.list.s1.title',
    descKey: 'services.list.s1.desc',
    color: 'group-hover:border-primary/50 group-hover:shadow-neon-blue',
  },
  {
    icon: <FiCpu />,
    titleKey: 'services.list.s2.title',
    descKey: 'services.list.s2.desc',
    color: 'group-hover:border-secondary/50 group-hover:shadow-neon-purple',
  },
  {
    icon: <FiSmartphone />,
    titleKey: 'services.list.s3.title',
    descKey: 'services.list.s3.desc',
    color: 'group-hover:border-accent/50 group-hover:shadow-neon-cyan',
  },
  {
    icon: <FiLayers />,
    titleKey: 'services.list.s4.title',
    descKey: 'services.list.s4.desc',
    color: 'group-hover:border-primary/50 group-hover:shadow-neon-blue',
  },
  {
    icon: <FiLayout />,
    titleKey: 'services.list.s5.title',
    descKey: 'services.list.s5.desc',
    color: 'group-hover:border-secondary/50 group-hover:shadow-neon-purple',
  },
  {
    icon: <FiZap />,
    titleKey: 'services.list.s6.title',
    descKey: 'services.list.s6.desc',
    color: 'group-hover:border-accent/50 group-hover:shadow-neon-cyan',
  },
  {
    icon: <FiBookOpen />,
    titleKey: 'services.list.s7.title',
    descKey: 'services.list.s7.desc',
    color: 'group-hover:border-primary/50 group-hover:shadow-neon-blue',
  },
  {
    icon: <FiFileText />,
    titleKey: 'services.list.s8.title',
    descKey: 'services.list.s8.desc',
    color: 'group-hover:border-secondary/50 group-hover:shadow-neon-purple',
  },
  {
    icon: <FiGlobe />,
    titleKey: 'services.list.s9.title',
    descKey: 'services.list.s9.desc',
    color: 'group-hover:border-accent/50 group-hover:shadow-neon-cyan',
  },
];

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(servicesList.length / cardsPerPage);

  // Reset page if bounds change during resize
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

  const startIndex = currentPage * cardsPerPage;
  const currentServices = servicesList.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section id="services" className="relative py-16 bg-slate-50 dark:bg-slate-900/40 overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading & Controls Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              {t('services.title')}{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t('services.titleAccent')}
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0"
            />
          </div>

          {/* Top Carousel Navigation Buttons */}
          <div className="flex justify-center md:justify-end items-center space-x-3 shrink-0">
            <button
              onClick={prevPage}
              className="w-12 h-12 rounded-full glass-card border border-slate-200 dark:border-white/10 hover:border-primary text-slate-600 dark:text-slate-300 hover:text-primary hover:shadow-neon-blue flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Previous Services"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPage}
              className="w-12 h-12 rounded-full glass-card border border-slate-200 dark:border-white/10 hover:border-primary text-slate-600 dark:text-slate-300 hover:text-primary hover:shadow-neon-blue flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Next Services"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Services Carousel Grid */}
        <div className="min-h-[380px] sm:min-h-[360px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentServices.map((service, index) => (
                <motion.div
                  key={startIndex + index}
                  whileHover={{ y: -8 }}
                  className={`group glass-card p-8 rounded-2xl border-white/5 flex flex-col justify-between h-full cursor-default transition-all duration-300 ${service.color}`}
                >
                  <div>
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-2xl text-primary mb-6 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                      {t(service.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>

                  {/* Bottom accent glow strip */}
                  <div className="h-[2px] w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full mt-6 transition-all duration-500 rounded-full" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2.5 mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === idx
                    ? 'w-8 bg-gradient-to-r from-primary to-accent shadow-neon-blue'
                    : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
