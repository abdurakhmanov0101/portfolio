import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(340);

  // Responsive card offset spacing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(280);
      } else if (window.innerWidth < 1024) {
        setCardWidth(320);
      } else {
        setCardWidth(360);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatic rotation timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesList.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % servicesList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesList.length) % servicesList.length);
  };

  // Compute circular offset distance (-4 to +4) for N=9
  const getCircularOffset = (index: number) => {
    const n = servicesList.length;
    let diff = (index - currentIndex) % n;
    if (diff > Math.floor(n / 2)) diff -= n;
    if (diff < -Math.floor(n / 2)) diff += n;
    return diff;
  };

  return (
    <section id="services" className="relative py-20 bg-slate-50 dark:bg-slate-900/40 overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Centered Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
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
            className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          />
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div
          className="relative h-[440px] sm:h-[460px] flex items-center justify-center [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {servicesList.map((service, index) => {
            const offset = getCircularOffset(index);
            const absOffset = Math.abs(offset);

            // Hide cards far out of view
            if (absOffset > 2) return null;

            // Compute styles based on distance from center (offset 0)
            const isCenter = offset === 0;
            const xPos = offset * cardWidth;
            const scaleVal = isCenter ? 1.04 : absOffset === 1 ? 0.86 : 0.7;
            const opacityVal = isCenter ? 1 : absOffset === 1 ? 0.6 : 0.25;
            const blurVal = isCenter ? '0px' : absOffset === 1 ? '2px' : '4px';
            const zIndexVal = isCenter ? 40 : absOffset === 1 ? 30 : 20;

            return (
              <motion.div
                key={index}
                onClick={() => !isCenter && setCurrentIndex(index)}
                animate={{
                  x: xPos,
                  scale: scaleVal,
                  opacity: opacityVal,
                  filter: `blur(${blurVal})`,
                  zIndex: zIndexVal,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className={`absolute w-[280px] sm:w-[310px] md:w-[340px] glass-card p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-[380px] sm:h-[400px] ${
                  isCenter
                    ? `${service.color} border-2 shadow-2xl cursor-default bg-white/90 dark:bg-slate-800/95`
                    : 'border-white/5 cursor-pointer hover:border-primary/40 bg-white/60 dark:bg-slate-900/60'
                }`}
              >
                <div>
                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 ${
                      isCenter
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 text-primary'
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-3 transition-colors ${
                      isCenter
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm sm:text-[15px] leading-relaxed transition-colors line-clamp-4 ${
                      isCenter
                        ? 'text-slate-650 dark:text-slate-300'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {t(service.descKey)}
                  </p>
                </div>

                {/* Bottom Status / Indicator */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-white/5 mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/80">
                    {t('services.titleAccent')} 0{index + 1}
                  </span>
                  {isCenter && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls & Pagination */}
        <div className="flex flex-col items-center justify-center mt-6 space-y-6">
          {/* Arrows and status row */}
          <div className="flex items-center space-x-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass-card border border-slate-200 dark:border-white/10 hover:border-primary text-slate-700 dark:text-slate-200 hover:text-primary hover:shadow-neon-blue flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous Service"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2">
              {servicesList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to service ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-primary to-accent shadow-neon-blue'
                      : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass-card border border-slate-200 dark:border-white/10 hover:border-primary text-slate-700 dark:text-slate-200 hover:text-primary hover:shadow-neon-blue flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next Service"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
