import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { ArrowRight } from 'lucide-react';

export const Slide03Background2: React.FC = () => {
  const points = [
    "pengamatan awal terhadap Instagram BRMP Sayuran",
    "publikasi konten masih banyak mengikuti kegiatan/informasi yang tersedia pada waktu tertentu",
    "aktivitas mahasiswa PKL/magang",
    "aktivitas ASN"
  ];

  const bottomPoints = [
    "kebutuhan penyusunan perencanaan konten",
    "media sosial telah dimanfaatkan secara aktif dan informatif"
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
            PENDAHULUAN (LANJUTAN)
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            LATAR BELAKANG
          </h2>
        </motion.div>

        {/* Top 4 glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {points.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col h-full relative"
            >
              <GlassCard className="h-full flex flex-col justify-start border-white/15 hover:border-amber-400/40">
                <span className="text-amber-400 font-mono text-xs font-bold mb-2">PART {idx + 1}</span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {text}
                </p>
              </GlassCard>
              {idx < points.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-amber-400 bg-slate-950/80 rounded-full p-1 border border-amber-400/30">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 synthesis cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottomPoints.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + idx * 0.15 }}
            >
              <GlassCard variant="gold" className="h-full flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></div>
                <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                  {text}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
