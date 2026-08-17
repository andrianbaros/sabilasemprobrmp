import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { HelpCircle } from 'lucide-react';

export const Slide05ProblemStatement: React.FC = () => {
  const problems = [
    "Bagaimana konten media sosial Instagram BRMP Sayuran yang dipublikasikan pada bulan Juli 2026?",
    "Bagaimana pengembangan content planner untuk media sosial BRMP Sayuran selama periode 10 Agustus–10 Oktober 2026?",
    "Bagaimana pelaksanaan content planner yang telah dikembangkan untuk media sosial BRMP Sayuran selama periode 10 Agustus–10 Oktober 2026?"
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
            FOKUS PENELITIAN
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            RUMUSAN MASALAH
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Main Problem Cards */}
          <div className="lg:col-span-2 space-y-4">
            {problems.map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <GlassCard className="flex items-start space-x-4 border-amber-500/20 hover:border-amber-400/50 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-400 font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-slate-100 font-medium leading-relaxed">
                    {text}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Side Visual Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <GlassCard className="h-full flex flex-col items-center justify-center p-6 text-center border-white/20">
              <div className="relative mb-4">
                <img 
                  src="/igbrmp.png" 
                  alt="Screenshot Instagram BRMP" 
                  className="w-48 sm:w-56 h-auto rounded-xl shadow-2xl border border-white/20 object-cover" 
                />
                <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-950 p-2 rounded-full shadow-lg">
                  <HelpCircle className="w-6 h-6" />
                </div>
              </div>
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                @brmpsayuran Instagram
              </span>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
