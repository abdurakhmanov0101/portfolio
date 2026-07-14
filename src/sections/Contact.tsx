import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { useTranslation } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#059669', '#10B981', '#F59E0B'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#059669', '#10B981', '#F59E0B'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mock';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mock';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_mock';

    if (serviceId === 'service_mock' || templateId === 'template_mock') {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        triggerConfetti();
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 1500);
    } else {
      if (formRef.current) {
        emailjs
          .sendForm(serviceId, templateId, formRef.current, publicKey)
          .then(
            () => {
              setLoading(false);
              setSubmitted(true);
              triggerConfetti();
              setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            },
            (error) => {
              setLoading(false);
              setErrorMsg(t('contact.form.error'));
              console.error('EmailJS error:', error);
            }
          );
      }
    }
  };

  return (
    <section id="contact" className="relative py-16 bg-slate-50 dark:bg-slate-900/40">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

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
            {t('contact.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t('contact.titleAccent')}
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

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 sm:p-10 rounded-[32px] border-white/5 space-y-8 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t('contact.heading')}</h3>
                <p className="text-slate-655 dark:text-slate-400 text-sm leading-relaxed">
                  {t('contact.desc')}
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-6">
                <a href="tel:+998959440702" className="group flex items-center space-x-4 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                  <span className="w-12 h-12 rounded-[18px] bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300"><FiPhone /></span>
                  <span className="text-sm font-semibold tracking-wide">+998 (95) 944-07-02</span>
                </a>
                <a href="mailto:deephouses101@gmail.com" className="group flex items-center space-x-4 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                  <span className="w-12 h-12 rounded-[18px] bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300"><FiMail /></span>
                  <span className="text-sm font-semibold tracking-wide">deephouses101@gmail.com</span>
                </a>
                <div className="group flex items-center space-x-4 text-slate-700 dark:text-slate-300">
                  <span className="w-12 h-12 rounded-[18px] bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300"><FiMapPin /></span>
                  <span className="text-sm font-semibold tracking-wide">{t('contact.locationVal')}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex space-x-4">
                <a href="https://t.me/abdurakhmanov_beksulton" className="p-3.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-[#229ED9] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors shadow-sm">
                  <FaTelegramPlane className="w-4.5 h-4.5" />
                </a>
                <a href="https://www.linkedin.com/in/beksulton-abdurakhmanov-660b16398" className="p-3.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors shadow-sm">
                  <FaLinkedinIn className="w-4.5 h-4.5" />
                </a>
                <a href="https://github.com/abdurakhmanov0101" className="p-3.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors shadow-sm">
                  <FaGithub className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="glass-card p-3 rounded-[32px] border-white/5 h-64 overflow-hidden shadow-xl group cursor-crosshair">
              <iframe
                title="Google Maps Location - Termiz"
                src="https://maps.google.com/maps?q=Termiz,%20Surxondaryo,%20Uzbekistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full rounded-[24px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-12 rounded-[32px] border-white/5 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1">{t('contact.form.name')}</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-[20px] bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 font-medium text-slate-900 dark:text-white text-sm transition-all outline-none"
                          placeholder={t('contact.form.placeholderName')}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1">{t('contact.form.email')}</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-[20px] bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 font-medium text-slate-900 dark:text-white text-sm transition-all outline-none"
                          placeholder={t('contact.form.placeholderEmail')}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1">{t('contact.form.phone')}</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-[20px] bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 font-medium text-slate-900 dark:text-white text-sm transition-all outline-none"
                          placeholder="+998901234567"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="subject" className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1">{t('contact.form.subject')}</label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-[20px] bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 font-medium text-slate-900 dark:text-white text-sm transition-all outline-none"
                          placeholder={t('contact.form.placeholderSubject')}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1">{t('contact.form.message')}</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-[20px] bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 font-medium text-slate-900 dark:text-white text-sm resize-none transition-all outline-none"
                        placeholder={t('contact.form.placeholderMsg')}
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-red-500 text-xs font-semibold">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm tracking-wider uppercase hover:shadow-neon-purple transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>{t('contact.form.btnSend')}</span>
                          <FiSend className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                  >
                    <FiCheckCircle className="w-20 h-20 text-success animate-bounce" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-white">{t('contact.form.successTitle')}</h3>
                      <p className="text-slate-400 text-sm max-w-sm">
                        {t('contact.form.successDesc')}
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full glass-card border-white/5 hover:border-primary text-xs font-bold text-slate-300 hover:text-white"
                    >
                      {t('contact.form.btnAgain')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
