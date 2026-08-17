import React from 'react';
import { motion } from 'framer-motion';

export const Slide15Closing: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-6 sm:p-12 text-center select-none overflow-y-auto">
      {/* Logos Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center space-x-6 sm:space-x-8 mt-4 z-10"
      >
        <img 
          src="/logo unikom.png" 
          alt="Logo UNIKOM" 
          className="h-16 sm:h-24 w-auto object-contain drop-shadow-xl" 
        />
        <div className="h-12 sm:h-16 w-px bg-white/20"></div>
        <img 
          src="/logobrmp.png" 
          alt="Logo BRMP Sayuran" 
          className="h-16 sm:h-24 w-auto object-contain drop-shadow-xl" 
        />
      </motion.div>

      {/* Main Closing Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-auto py-8 z-10"
      >
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-amber-400 leading-none tracking-wider uppercase drop-shadow-2xl mb-2">
          TERIMA
        </h1>
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-wider uppercase drop-shadow-2xl">
          KASIH.
        </h1>
      </motion.div>

      {/* Subtitle / Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 z-10"
      >
        <p className="text-slate-300 font-medium text-xs sm:text-sm uppercase tracking-widest bg-slate-950/70 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md">
          BALAI PERAKITAN DAN PENGUJIAN TANAMAN SAYURAN
        </p>
      </motion.div>
    </div>
  );
};
