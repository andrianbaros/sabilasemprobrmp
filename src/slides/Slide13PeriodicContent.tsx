import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { Sparkles, Calendar, AtSign } from 'lucide-react';

export const Slide13PeriodicContent: React.FC = () => {
  const description = "Konten periodik yang dikembangkan diberi nama TAMASYA (Tanaman dan Sayuran Punya Cerita). TAMASYA merupakan konsep konten yang mengangkat tanaman dan sayuran dengan pendekatan kreatif melalui gagasan what if atau “bagaimana jika”. Konsep tersebut digunakan untuk mengeksplorasi tanaman dan sayuran melalui sudut pandang yang tidak biasa dengan tetap mempertahankan unsur informasi dan edukasi. Konten ini akan tayang setiap akhir bulan atau sekali dalam sebulan.";

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
            PROGRAM KONTEN UNGGULAN
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Pengembangan Konten Periodik Media Sosial Instagram BRMP Sayuran
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Text Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <GlassCard variant="gold" className="p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-amber-400/20">
                <div className="p-2 rounded-xl bg-amber-400 text-slate-950">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white uppercase tracking-wide">
                    KONSEP "TAMASYA"
                  </h3>
                  <span className="text-xs text-amber-400 font-semibold">
                    (Tanaman dan Sayuran Punya Cerita)
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-100 font-normal leading-relaxed text-justify">
                {description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-bold">
                <span className="flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>JADWAL TAYANG: Akhir Bulan (1x / Bulan)</span>
                </span>
                <span className="px-3 py-1 bg-amber-400/20 rounded-full border border-amber-400/30">
                  Pendekatan "What If"
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Image Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <GlassCard className="p-3 border-amber-400/30">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs mb-2">
                <AtSign className="w-4 h-4" />
                <span>PREVIEW KONTEN TAMASYA</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                <img 
                  src="/feedstanaman.png" 
                  alt="Konten Tamasya BRMP" 
                  className="w-full h-64 sm:h-80 object-cover object-center hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
