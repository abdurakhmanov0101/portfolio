import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { useTranslation } from '../context/LanguageContext';

interface Testimonial {
  name: string;
  roleKey: string;
  avatar: string;
  feedbackKey: string;
  rating: number;
  type: 'Student' | 'Client';
}

const testimonialsList: Testimonial[] = [
  {
    name: 'Shaxzod Tursunov',
    roleKey: 'Student', // we can translate types
    avatar: 'S',
    feedbackKey: 'testimonials.list.t1',
    rating: 5,
    type: 'Student',
  },
  {
    name: 'Elena Rostova',
    roleKey: 'Client',
    avatar: 'E',
    feedbackKey: 'testimonials.list.t2',
    rating: 5,
    type: 'Client',
  },
  {
    name: 'Dildora Alieva',
    roleKey: 'Student',
    avatar: 'D',
    feedbackKey: 'testimonials.list.t3',
    rating: 5,
    type: 'Student',
  },
  {
    name: 'Jasur Umarov',
    roleKey: 'Client',
    avatar: 'J',
    feedbackKey: 'testimonials.list.t4',
    rating: 5,
    type: 'Client',
  },
];

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const current = testimonialsList[index];

  const getTranslatedType = (type: string) => {
    if (t('about.stats.experience') === 'Yillik tajriba') {
      return type === 'Student' ? 'O\'quvchi' : 'Mijoz';
    }
    if (t('about.stats.experience') === 'Р›РµС‚ РѕРїС‹С‚Р°') {
      return type === 'Student' ? 'РЎС‚СѓРґРµРЅС‚' : 'РљР»РёРµРЅС‚';
    }
    return type;
  };

  const getTranslatedRole = (name: string, type: string) => {
    if (name === 'Shaxzod Tursunov') {
      return t('about.stats.experience') === 'Yillik tajriba' ? 'Ofis administratori' : t('about.stats.experience') === 'Р›РµС‚ РѕРїС‹С‚Р°' ? 'РћС„РёСЃ-Р°РґРјРёРЅРёСЃС‚СЂР°С‚РѕСЂ' : 'Office Administrator';
    }
    if (name === 'Elena Rostova') {
      return t('about.stats.experience') === 'Yillik tajriba' ? 'Kreativ agentlik direktori' : t('about.stats.experience') === 'Р›РµС‚ РѕРїС‹С‚Р°' ? 'Р”РёСЂРµРєС‚РѕСЂ РєСЂРµР°С‚РёРІРЅРѕРіРѕ Р°РіРµРЅС‚СЃС‚РІР°' : 'Creative Agency Director';
    }
    if (name === 'Dildora Alieva') {
      return t('about.stats.experience') === 'Yillik tajriba' ? 'Universitet talabasi' : t('about.stats.experience') === 'Р›РµС‚ РѕРїС‹С‚Р°' ? 'РЎС‚СѓРґРµРЅС‚РєР° СѓРЅРёРІРµСЂСЃРёС‚РµС‚Р°' : 'University Student';
    }
    if (name === 'Jasur Umarov') {
      return t('about.stats.experience') === 'Yillik tajriba' ? 'E-commerce do\'kon egasi' : t('about.stats.experience') === 'Р›РµС‚ РѕРїС‹С‚Р°' ? 'Р’Р»Р°РґРµР»РµС† РёРЅС‚РµСЂРЅРµС‚-РјР°РіР°Р·РёРЅР°' : 'E-commerce Business Owner';
    }
    return type;
  };

  return (
    <section id="testimonials" className="relative py-16 bg-slate-50 dark:bg-slate-900/40">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

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
            {t('testimonials.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('testimonials.titleAccent')}
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

        {/* Carousel Slider Panel */}
        <div className="relative max-w-4xl mx-auto px-6">
          
          <div className="min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full glass-card p-8 md:p-12 rounded-3xl border-white/5 relative flex flex-col justify-between"
              >
                <span className="absolute -top-12 -left-2 text-[120px] font-serif text-slate-800 pointer-events-none select-none opacity-40">
                  вЂњ
                </span>

                <div className="space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed relative z-10 italic">
                    {t(current.feedbackKey)}
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-8 mt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-extrabold text-white text-lg">
                    {current.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{current.name}</h3>
                    <p className="text-xs text-slate-505 dark:text-slate-400">
                      {getTranslatedRole(current.name, current.roleKey)} вЂў <span className="text-accent">{getTranslatedType(current.type)}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full glass-card border-white/5 hover:border-primary text-slate-400 hover:text-white hover:scale-105 transition-all"
              aria-label="Previous Slide"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full glass-card border-white/5 hover:border-primary text-slate-400 hover:text-white hover:scale-105 transition-all"
              aria-label="Next Slide"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
