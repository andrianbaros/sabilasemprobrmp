import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Header } from '../components/Header';
import { PRESENTATION_DATA } from '../data/presentation';
import { ExternalLink, Table, Eye, X } from 'lucide-react';

export const Slide12ContentPlanner: React.FC = () => {
  const [showTableModal, setShowTableModal] = useState(false);

  // Sample static data representing spreadsheet structure for responsive HTML view option
  const sampleSpreadsheetData = [
    { no: "1", tanggal: "10 Agt 2026", pilar: "Edukasi", topik: "Mengenal Varietas Cabai Unggulan BRMP", format: "Reels / Single", status: "Plan" },
    { no: "2", tanggal: "17 Agt 2026", pilar: "HUT RI", topik: "Semangat Ketahanan Pangan Nasional", format: "Carousel", status: "Plan" },
    { no: "3", tanggal: "24 Agt 2026", pilar: "Inovasi", topik: "Teknologi Perbenihan Sayuran Cikole", format: "Infografis", status: "Plan" },
    { no: "4", tanggal: "31 Agt 2026", pilar: "TAMASYA", topik: "Tanaman & Sayuran Punya Cerita: Cabai Rawit", format: "Video Edukasi", status: "Plan" },
    { no: "5", tanggal: "07 Sep 2026", pilar: "Kegiatan PKL", topik: "Aktivitas Pendampingan Petani Sayuran", format: "Story / Post", status: "Plan" },
    { no: "6", tanggal: "14 Sep 2026", pilar: "Edukasi", topik: "Tips Budidaya Tomat di Lahan Sempit", format: "Carousel", status: "Plan" },
    { no: "7", tanggal: "28 Sep 2026", pilar: "TAMASYA", topik: "Tanaman & Sayuran Punya Cerita: Bawang Merah", format: "Reels", status: "Plan" }
  ];

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
              PERENCANAAN KONTEN
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
              Pengembangan Content Planner Media Sosial Instagram BRMP Sayuran
            </h2>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => setShowTableModal(true)}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-800 border border-white/20 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-md"
            >
              <Table className="w-4 h-4 text-emerald-400" />
              <span>Lihat Data Tabel</span>
            </button>

            <a 
              href={PRESENTATION_DATA.spreadsheetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Link Spreadsheets</span>
            </a>
          </div>
        </motion.div>

        {/* Visual Spreadsheet Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-3 border-amber-400/30">
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-slate-950">
              <img 
                src="/spreadsheet.png" 
                alt="Content Planner Spreadsheet Preview" 
                className="w-full h-[340px] sm:h-[420px] object-cover object-top" 
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4 backdrop-blur-xs">
                <button
                  onClick={() => setShowTableModal(true)}
                  className="px-4 py-2 bg-slate-900/90 text-white rounded-xl border border-white/20 text-xs font-bold flex items-center space-x-2 shadow-2xl hover:border-amber-400"
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Mode Preview Interaktif</span>
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Responsive Interactive Table Modal */}
      {showTableModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-amber-400/40 rounded-2xl max-w-4xl w-full p-6 shadow-2xl relative max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="text-lg font-bold text-amber-400 flex items-center space-x-2">
                <Table className="w-5 h-5" />
                <span>PRATINJAU DATA CONTENT PLANNER (10 AGS - 10 OKT 2026)</span>
              </h3>
              <button 
                onClick={() => setShowTableModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-800/80 text-amber-400 border-b border-white/10 uppercase tracking-wider">
                    <th className="p-3">No</th>
                    <th className="p-3">Tanggal</th>
                    <th className="p-3">Pilar Konten</th>
                    <th className="p-3">Topik / Judul</th>
                    <th className="p-3">Format</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {sampleSpreadsheetData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-mono text-amber-400">{row.no}</td>
                      <td className="p-3 whitespace-nowrap">{row.tanggal}</td>
                      <td className="p-3 font-semibold text-emerald-400">{row.pilar}</td>
                      <td className="p-3 font-medium">{row.topik}</td>
                      <td className="p-3">{row.format}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-400/20 text-amber-400 font-bold border border-amber-400/30">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400">Sumber: Google Spreadsheet BRMP Sayuran</span>
              <a 
                href={PRESENTATION_DATA.spreadsheetUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Google Spreadsheet</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
