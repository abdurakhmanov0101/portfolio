import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const statusMessages = [
  'Initializing creative space...',
  'Compiling React components...',
  'Setting up workspace assets...',
  'Configuring educational resources...',
  'Rendering premium visuals...',
  'Ready to launch!'
];

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    // Progress counter animation
    const duration = 2000; // 2 seconds total loader time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400); // short delay after hitting 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Status text switcher based on progress
    const idx = Math.min(
      Math.floor((progress / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    setStatusIdx(idx);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F172A]"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px]" />

      <div className="relative flex flex-col items-center max-w-md w-full px-8 text-center">
        {/* Animated Cybernetic Hexagon or Circles */}
        <div className="relative w-24 h-24 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-4 border-t-primary border-r-secondary border-b-accent border-l-transparent"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="absolute inset-2 rounded-full border-2 border-t-accent border-r-transparent border-b-primary border-l-secondary opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xl font-bold text-white">
            {Math.floor(progress)}%
          </div>
        </div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent uppercase mb-2 font-sans"
        >
          Beksulton
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loader Status message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={statusIdx}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-slate-400 font-mono text-sm tracking-wide h-6"
          >
            {statusMessages[statusIdx]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
