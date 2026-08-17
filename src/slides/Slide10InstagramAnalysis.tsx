import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { AtSign } from 'lucide-react';

export const Slide10InstagramAnalysis: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between pb-16 overflow-y-auto">
      <Header />

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 max-w-7xl mx-auto w-full my-auto py-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 sm:mb-6 text-center sm:text-left"
        >
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
            EVALUASI MEDIA SOSIAL
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Analisis Konten Media Sosial Instagram BRMP Sayuran Bulan Juli 2026
          </h2>
        </motion.div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* Asset 1: IG Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-3 border-amber-400/30">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs mb-2">
                <AtSign className="w-4 h-4" />
                <span>PROFILE INSTAGRAM</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950 aspect-[9/16] max-h-[60vh] flex items-center justify-center">
                <img 
                  src="/igbrmp.png" 
                  alt="Profile Instagram BRMP" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Asset 2: Feeds Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-3 border-amber-400/30">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs mb-2">
                <AtSign className="w-4 h-4" />
                <span>FEED KONTEN</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950 aspect-[9/16] max-h-[60vh] flex items-center justify-center">
                <img 
                  src="/feeds.png" 
                  alt="Feeds Instagram BRMP" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Asset 3: Feeds Bangunan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-3 border-amber-400/30">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs mb-2">
                <AtSign className="w-4 h-4" />
                <span>DOKUMENTASI KONTEN</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950 aspect-[9/16] max-h-[60vh] flex items-center justify-center">
                <img 
                  src="/feeds bangunan brmp.png" 
                  alt="Feeds Bangunan BRMP" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
