import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

interface EducationItem {
  period: string;
  degreeKey: string;
  institution: string;
  detailsKey: string;
  category: 'Degree' | 'Certificate' | 'Workshop';
}

const educationList: EducationItem[] = [
  {
    institution: 'Tashkent University of Information Technologies (TUIT)',
    period: '2020 - 2024',
    degreeKey: 'education.list.edu1.degree',
    detailsKey: 'education.list.edu1.details',
    category: 'Degree',
  },
  {
    institution: 'IT Academy / Modern Dev Course',
    period: '2023',
    degreeKey: 'education.list.edu2.degree',
    detailsKey: 'education.list.edu2.details',
    category: 'Certificate',
  },
  {
    institution: 'Microsoft Certified Training',
    period: '2022',
    degreeKey: 'education.list.edu3.degree',
    detailsKey: 'education.list.edu3.details',
    category: 'Workshop',
  },
  {
    institution: 'Google Professional Certification Program',
    period: '2022',
    degreeKey: 'education.list.edu4.degree',
    detailsKey: 'education.list.edu4.details',
    category: 'Certificate',
  },
];

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="relative py-16 bg-white dark:bg-darkBg">
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

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
            {t('education.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('education.titleAccent')}
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

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border-white/5 relative group hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-slate-400 font-mono bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/50 uppercase">
                    {edu.category === 'Degree' 
                      ? (t('about.stats.experience') === 'Yillik tajriba' ? 'Daraja' : t('about.stats.experience') === 'Р›РµС‚ РѕРїС‹С‚Р°' ? 'РЎС‚РµРїРµРЅСЊ' : 'Degree')
                      : edu.category === 'Certificate'
                      ? (t('about.stats.experience') === 'Yillik tajriba' ? 'Sertifikat' : t('about.stats.experience') === 'Р›РµС‚ РѕРїС‹С‚Р°' ? 'РЎРµСЂС‚РёС„РёРєР°С‚' : 'Certificate')
                      : (t('about.stats.experience') === 'Yillik tajriba' ? 'Seminar' : t('about.stats.experience') === 'Р›РµС‚ РѕРїС‹С‚Р°' ? 'РЎРµРјРёРЅР°СЂ' : 'Workshop')
                    }
                  </span>
                  <span className="text-xs font-mono text-primary font-bold">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {t(edu.degreeKey)}
                </h3>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  {edu.institution}
                </h4>
                
                <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                  {t(edu.detailsKey)}
                </p>
              </div>

              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
