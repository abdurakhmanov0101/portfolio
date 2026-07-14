import React from 'react';
import { motion, type Variants } from 'framer-motion';
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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="relative py-16 bg-slate-50 dark:bg-slate-900/40">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[110px] pointer-events-none" />

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
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
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

      </div>
    </section>
  );
};
