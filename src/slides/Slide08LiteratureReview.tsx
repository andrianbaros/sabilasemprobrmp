import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { BookOpen } from 'lucide-react';

export const Slide08LiteratureReview: React.FC = () => {
  const reviews = [
    {
      author: "El-Astal dan El-Youssef, 2025",
      text: "Komunikasi digital merupakan proses penyampaian pesan yang memanfaatkan teknologi digital sebagai saluran komunikasi (El-Astal dan El-Youssef, 2025)"
    },
    {
      author: "Kanuri, Chen, dan Sridhar, 2018",
      text: "Content planner atau perencanaan konten merupakan proses yang dilakukan sebelum konten diproduksi dan dipublikasikan (Kanuri, Chen, dan Sridhar, 2018)"
    },
    {
      author: "Kontekstual BRMP Sayuran",
      text: "Content planner dapat ditempatkan sebagai salah satu alat pendukung dalam komunikasi digital melalui media sosial., termasuk media sosial instagram BRMP Sayuran"
    }
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
            LANDASAN TEORI
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            TINJAUAN PUSTAKA
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col h-full"
            >
              <GlassCard variant="light" className="h-full flex flex-col justify-between hover:shadow-2xl transition-all">
                <div>
                  <div className="flex items-center space-x-2 text-slate-800 mb-4 pb-3 border-b border-slate-200">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      {item.author}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
