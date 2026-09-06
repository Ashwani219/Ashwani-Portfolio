"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, ChevronDown, Award, TrendingUp, ShieldCheck, FileSpreadsheet } from "lucide-react";
import { profileData } from "@/data/profileData";
import { AnimatedFinancialBackground } from "./AnimatedFinancialBackground";

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020306]">
      {/* 1. Sophisticated Animated Financial Background (Canvas) */}
      <AnimatedFinancialBackground />

      {/* 2. Soft Radial Lighting (Restrained, Institutional) */}
      <div className="absolute inset-0 bg-radial-ambient pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-cyan-500/[0.03] blur-[140px] rounded-full pointer-events-none" />

      {/* 3. Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Terminal Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#080a0f] border border-[#161a24] mb-8 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300 tracking-wider">
            EQUITY RESEARCH • FINANCIAL MARKETS • VALUATION MODELING
          </span>
        </div>

        {/* Candidate Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="block text-slate-100">{profileData.name.toUpperCase()}</span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-mono text-cyan-400 font-semibold mt-3 tracking-normal">
            FINANCIAL ANALYST × EQUITY RESEARCH
          </span>
        </h1>

        {/* Headline & Positioning */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto mb-4 leading-relaxed">
          &ldquo;{profileData.headline}&rdquo;
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          {profileData.supportingText}
        </p>

          {/* Call to Action Buttons (Two Main Buttons Only) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/research/zaggle"
            className="group/btn relative inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:-translate-y-0.5"
          >
            <span>EXPLORE MY RESEARCH</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
            <span className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </Link>

          <button
            onClick={onOpenResume}
            className="flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-[#080a0f] hover:bg-[#0f131c] text-slate-200 hover:text-white border border-[#161a24] hover:border-slate-600 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>VIEW RESUME</span>
          </button>
        </div>

        {/* Verified Capability Highlight Badges (4 Grounded Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto pt-6 border-t border-[#141822] text-left">
          <div className="p-3.5 rounded-xl fin-card flex items-start space-x-3 hover:border-emerald-500/40 transition-colors">
            <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400">CERTIFIED</div>
              <div className="text-xs font-semibold text-white">Dual NISM Derivatives</div>
              <div className="text-[10px] font-mono text-emerald-400">Series VIII & I (76.5% / 73%)</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl fin-card flex items-start space-x-3 hover:border-cyan-500/40 transition-colors">
            <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 mt-0.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400">VALUATION</div>
              <div className="text-xs font-semibold text-white">5-Year FCFF DCF</div>
              <div className="text-[10px] font-mono text-cyan-400">Base Target: ₹270.00 (+46.1%)</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl fin-card flex items-start space-x-3 hover:border-purple-500/40 transition-colors">
            <div className="p-1.5 rounded bg-purple-500/10 text-purple-400 mt-0.5">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400">FINANCIAL MODELING</div>
              <div className="text-xs font-semibold text-white">Forensic EBIT Audit</div>
              <div className="text-[10px] font-mono text-purple-300">Quality of Earnings Reconciled</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl fin-card flex items-start space-x-3 hover:border-amber-500/40 transition-colors">
            <div className="p-1.5 rounded bg-amber-500/10 text-amber-400 mt-0.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400">EDUCATION</div>
              <div className="text-xs font-semibold text-white">B.Tech Computer Science</div>
              <div className="text-[10px] font-mono text-amber-400">Poornima Inst. of Tech (2026)</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/#markets"
            className="flex flex-col items-center text-slate-400 hover:text-slate-300 transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest mb-1">SCROLL TO TERMINAL</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};
