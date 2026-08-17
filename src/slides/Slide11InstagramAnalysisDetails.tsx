import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { MapPin, Phone, Globe, Mail, Share2, Clock, Building } from 'lucide-react';

export const Slide11InstagramAnalysisDetails: React.FC = () => {
  const details = [
    {
      icon: Building,
      label: "Nama Instansi",
      value: "Balai Perakitan dan Pengujian Tanaman Sayuran (BRMP Sayuran)"
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jalan Raya Tangkuban Parahu No. 517, Cikole, Kecamatan Lembang, Kabupaten Bandung Barat, Jawa Barat 40391"
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "(022) 2786245"
    },
    {
      icon: Globe,
      label: "Website",
      value: "sayuran.brmp.pertanian.go.id"
    },
    {
      icon: Mail,
      label: "Email",
      value: "brmp.sayuran@pertanian.go.id"
    },
    {
      icon: Share2,
      label: "Media Sosial",
      value: "@brmpsayuran (WhatsApp, Facebook, Youtube, Instagram, X, Threeds)"
    },
    {
      icon: Clock,
      label: "Jam kerja",
      value: "Senin–Kamis 07.30–16.00 WIB; Jumat 07.30–16.30 WIB"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between pb-16 overflow-y-auto">
      <Header />

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 max-w-6xl mx-auto w-full my-auto py-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 sm:mb-6 text-center sm:text-left"
        >
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
            PROFIL REKAPITULASI
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Analisis Konten Media Sosial Instagram BRMP Sayuran Bulan Juli 2026
          </h2>
        </motion.div>

        {/* Large Translucent Information Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6 sm:p-8 border-amber-400/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {details.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-3.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <IconComp className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-amber-400 font-bold uppercase text-[11px] tracking-wider block">
                        {item.label}
                      </span>
                      <span className="text-slate-100 text-xs sm:text-sm font-medium">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};
