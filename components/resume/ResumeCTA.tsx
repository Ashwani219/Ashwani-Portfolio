"use client";

import React from "react";
import { FileText, Download, Printer, ArrowRight, ShieldCheck } from "lucide-react";
import { profileData } from "@/data/profileData";

interface ResumeCTAProps {
  onOpenResume?: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="p-8 sm:p-12 rounded-2xl fin-card border border-cyan-500/30 bg-gradient-to-r from-[#0d121f] via-[#090d16] to-[#0d1527] relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="uppercase tracking-widest font-bold">PROFESSIONAL DOSSIER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Want the complete picture?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Review my verified academic record, dual NISM certifications in derivatives, quantitative backtesting projects, and complete equity research methodology in a clean, institutional format.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME TERMINAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-[#07090e] hover:bg-[#131b2e] text-slate-200 border border-[#1e293b] hover:border-slate-500 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>PRINT / DOWNLOAD PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
