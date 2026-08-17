import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { Target, Briefcase } from 'lucide-react';

export const Slide06Objectives: React.FC = () => {
  const specificObjectives = [
    "Untuk mengetahui bagaimana konten media sosial Instagram BRMP Sayuran yang dipublikasikan pada bulan Juli 2026.",
    "Untuk mengetahui bagaimana pengembangan content planner untuk media sosial BRMP Sayuran selama periode 10 Agustus–10 Oktober 2026.",
    "Untuk mengetahui bagaimana pelaksanaan content planner yang telah dikembangkan untuk media sosial BRMP Sayuran selama periode 10 Agustus–10 Oktober 2026."
  ];

  const pklObjective = "Pelaksanaan Praktik Kerja Lapangan ini bertujuan untuk menerapkan ilmu komunikasi dalam kegiatan pengelolaan media sosial Instagram BRMP Sayuran melalui pengembangan content planner sebagai bentuk perencanaan komunikasi publik, sekaligus memperoleh pengalaman dalam proses perencanaan, produksi, dan pengelolaan konten media sosial.";

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
            TARGET & CAPAIAN
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
            TUJUAN KHUSUS & TUJUAN PRAKTEK KERJA LAPANGAN
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Section 1: Tujuan Khusus */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <GlassCard className="h-full flex flex-col justify-between border-amber-400/30">
              <div>
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-base sm:text-lg mb-4 pb-2 border-b border-white/10">
                  <Target className="w-5 h-5" />
                  <h3>TUJUAN KHUSUS</h3>
                </div>
                <div className="space-y-3">
                  {specificObjectives.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Section 2: Tujuan Praktek Kerja Lapangan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <GlassCard variant="gold" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-base sm:text-lg mb-4 pb-2 border-b border-amber-400/20">
                  <Briefcase className="w-5 h-5" />
                  <h3>TUJUAN PRAKTEK KERJA LAPANGAN</h3>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-100 font-normal leading-relaxed text-justify">
                  {pklObjective}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
