import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { ArrowDown } from 'lucide-react';

export const Slide04Background3: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between pb-16 overflow-y-auto">
      <Header />

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 max-w-6xl mx-auto w-full my-auto py-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8 text-center sm:text-left"
        >
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
            ANALISIS AVAL & KEBUTUHAN
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            LATAR BELAKANG
          </h2>
        </motion.div>

        {/* Two Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full border-amber-400/30">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-2">
                PENGAMATAN KONTEN
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                pengamatan terhadap konten yang telah dipublikasikan
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <GlassCard className="h-full border-emerald-400/30">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-2">
                PERIODE EVALUASI
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                analisis Instagram bulan Juli 2026
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Center Connecting Arrow */}
        <div className="flex justify-center my-1 text-amber-400">
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </div>

        {/* One Large Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassCard variant="gold" className="p-6 sm:p-8">
            <h3 className="text-amber-400 font-extrabold text-base sm:text-lg mb-3 tracking-wide uppercase">
              SOLUSI & STRATEGI CONTENT PLANNER
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-100">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                <p><strong className="text-white">Content Planner:</strong> content planner sebagai upaya membuat pengelolaan konten lebih terarah</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                <p><strong className="text-white">Konten Berdasarkan Kegiatan:</strong> konten berdasarkan kegiatan yang berlangsung</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                <p><strong className="text-white">Produksi Periodik:</strong> konten yang dapat diproduksi secara terencana dan periodik</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};
