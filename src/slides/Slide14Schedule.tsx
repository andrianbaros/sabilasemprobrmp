import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { PRESENTATION_DATA } from '../data/presentation';
import { Calendar, ExternalLink, Eye, X, FileText } from 'lucide-react';

export const Slide14Schedule: React.FC = () => {
  const [showDocDrawer, setShowDocDrawer] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between pb-16 overflow-y-auto">
      <Header />

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 max-w-7xl mx-auto w-full my-auto py-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 sm:mb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
              AGENDA PKL
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
              Jadwal Kegiatan Praktek Kerja Lapangan
            </h2>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => setShowDocDrawer(true)}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-800 border border-white/20 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-md"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Pratinjau Modal</span>
            </button>

            <a 
              href={PRESENTATION_DATA.scheduleDocUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95 uppercase tracking-wider"
            >
              <ExternalLink className="w-4 h-4" />
              <span>SELENGKAPNYA</span>
            </a>
          </div>
        </motion.div>

        {/* Preview Screenshot Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-3 border-amber-400/30">
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-slate-950">
              <img 
                src="/jadwalkegiatan.png" 
                alt="Jadwal Kegiatan PKL Preview" 
                className="w-full h-[340px] sm:h-[420px] object-cover object-top" 
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4 backdrop-blur-xs">
                <a 
                  href={PRESENTATION_DATA.scheduleDocUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-amber-400 text-slate-950 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-2xl hover:bg-amber-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka Dokumentasi Google Doc</span>
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Modal / Drawer Preview */}
      {showDocDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-amber-400/40 rounded-2xl max-w-3xl w-full p-6 shadow-2xl relative max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="text-lg font-bold text-amber-400 flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>PRATINJAU JADWAL KEGIATAN PKL</span>
              </h3>
              <button 
                onClick={() => setShowDocDrawer(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs sm:text-sm text-slate-200">
                <p className="font-semibold text-amber-400 mb-2 flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Dokumen Resmi Jadwal Kegiatan (Google Docs)</span>
                </p>
                <p className="leading-relaxed">
                  Jadwal pelaksanaan Praktik Kerja Lapangan di Balai Perakitan dan Pengujian Tanaman Sayuran (BRMP Sayuran) disusun untuk periode 10 Agustus – 10 Oktober 2026 yang meliputi tahapan orientasi instansi, analisis awal Instagram, pengembangan content planner, hingga eksekusi dan evaluasi.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10">
                <img src="/jadwalkegiatan.png" alt="Jadwal Kegiatan Details" className="w-full h-auto object-contain" />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400">Google Docs External Resource</span>
              <a 
                href={PRESENTATION_DATA.scheduleDocUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka Dokumen Google Docs</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
