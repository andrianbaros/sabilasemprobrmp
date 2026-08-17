import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { ArrowRight } from 'lucide-react';

export const Slide02Background1: React.FC = () => {
  const points = [
    "Perkembangan teknologi komunikasi mengubah cara komunikasi dilakukan, termasuk penggunaan media sosial sebagai salah satu salurannya.",
    "Penggunaan media sosial tidak hanya berkaitan dengan aktivitas mengunggah informasi, tetapi juga membutuhkan pengelolaan konten yang terencana., sehingga membutuhkan content planner.",
    "Content planner merupakan alat bantu yang digunakan untuk mengorganisasi rencana konten dalam periode tertentu.",
    "Salah satu instansi pemerintah yang memanfaatkan media sosial sebagai sarana penyampaian informasi kepada masyarakat adalah Balai Perakitan dan Pengujian Tanaman Sayuran (BRMP Sayuran)."
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between pb-16 overflow-y-auto">
      <Header />

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 max-w-7xl mx-auto w-full my-auto py-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8 text-center sm:text-left"
        >
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
            PENDAHULUAN
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            LATAR BELAKANG
          </h2>
        </motion.div>

        {/* 4 Flow Cards connected with arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {points.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col h-full relative group"
            >
              <GlassCard className="h-full flex flex-col justify-between border-amber-500/20 group-hover:border-amber-400/50 transition-all">
                <div>
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {text}
                  </p>
                </div>
              </GlassCard>

              {/* Arrow icon between cards for desktop */}
              {idx < points.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-amber-400 bg-slate-950/80 rounded-full p-1 border border-amber-400/30">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
