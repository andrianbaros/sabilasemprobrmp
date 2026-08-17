import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { MapPin, Phone, Globe, Mail, Share2, Clock, Building } from 'lucide-react';

export const Slide09Location: React.FC = () => {
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

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 max-w-7xl mx-auto w-full my-auto py-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8 text-center sm:text-left"
        >
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
            PROFIL INSTANSI
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            TEMPAT KEGIATAN PRAKTEK KERJA LAPANGAN
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-3"
          >
            <GlassCard className="p-4 sm:p-6 divide-y divide-white/10 border-amber-400/30">
              {details.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-start space-x-3 text-xs sm:text-sm">
                    <IconComp className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-amber-400 font-bold uppercase text-[11px] tracking-wider block">
                        {item.label}
                      </span>
                      <span className="text-slate-100 font-medium">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </GlassCard>
          </motion.div>

          {/* Right Map Pin Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <GlassCard variant="gold" className="p-4 flex flex-col items-center text-center">
              <img 
                src="/Pin.png" 
                alt="BRMP Map Pin" 
                className="w-48 sm:w-64 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform" 
              />
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider mt-3">
                Lokasi Cikole, Lembang
              </span>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
