import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { Building2, User, GraduationCap } from 'lucide-react';

export const Slide07Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Bagi BRMP Sayuran",
      icon: Building2,
      text: "Bagi BRMP Sayuran, pengembangan content planner diharapkan dapat menjadi salah satu alternatif dalam perencanaan konten media sosial, khususnya dalam menciptakan variasi dan konsistensi konten periodik."
    },
    {
      title: "Bagi Penulis",
      icon: User,
      text: "Bagi penulis, kegiatan ini memberikan pengalaman praktis dalam menerapkan ilmu komunikasi, khususnya dalam bidang komunikasi publik, perencanaan konten, penulisan caption, penyusunan narasi, dan produksi konten media sosial."
    },
    {
      title: "Bagi Akademik",
      icon: GraduationCap,
      text: "Bagi akademik, hasil kegiatan ini dapat menjadi referensi mengenai penerapan perencanaan konten media sosial dalam mendukung komunikasi publik pada instansi pemerintah."
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
            KONTRIBUSI
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            MANFAAT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col h-full"
              >
                <GlassCard className="h-full flex flex-col justify-between border-amber-500/20 hover:border-amber-400/50 transition-all">
                  <div>
                    <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-white/10">
                      <div className="p-2.5 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-400">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
