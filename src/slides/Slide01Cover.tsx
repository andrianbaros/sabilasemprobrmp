import React from 'react';
import { motion } from 'framer-motion';

export const Slide01Cover: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-6 sm:p-12 text-center select-none overflow-y-auto">
      {/* Logos Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center space-x-6 sm:space-x-8 mt-2 sm:mt-4 z-10"
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

      {/* Main Title Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="my-auto py-6 max-w-5xl z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 text-sm sm:text-base font-semibold tracking-widest uppercase mb-4 sm:mb-6">
          SEMINAR PROPOSAL
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight uppercase drop-shadow-2xl">
          PENGEMBANGAN CONTENT PLANNER MEDIA SOSIAL INSTAGRAM SEBAGAI STRATEGI KOMUNIKASI DIGITAL BRMP SAYURAN
        </h1>
      </motion.div>

      {/* Footer Info Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base mb-12 sm:mb-16 z-10"
      >
        {/* Oleh */}
        <div className="bg-slate-950/70 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">OLEH:</p>
          <p className="text-white font-semibold text-base sm:text-lg">Sabla Hidayati Rabbi</p>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-0.5">(41823089)</p>
        </div>

        {/* Pembimbing */}
        <div className="bg-slate-950/70 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">PEMBIMBING:</p>
          <p className="text-white font-medium">Fauzi Haidar, S.Sos.</p>
          <p className="text-white font-medium">Endah Lestari, S.K.Pm.</p>
        </div>

        {/* Institution & Year */}
        <div className="sm:col-span-2 pt-2">
          <p className="text-slate-300 font-medium text-xs sm:text-sm uppercase tracking-wider">
            BALAI PERAKITAN DAN PENGUJIAN TANAMAN SAYURAN
          </p>
          <p className="text-amber-400/90 font-bold text-sm sm:text-base mt-0.5">2026</p>
        </div>
      </motion.div>
    </div>
  );
};
