"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Shield, ExternalLink, ArrowUp } from "lucide-react";
import { profileData } from "@/data/profileData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1a2336] bg-[#05070a] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#141b2b]">
          {/* Brand & Positioning */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono font-bold text-sm text-white">ASHWANI.R</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131b2e] text-slate-400 border border-slate-700">
                PORTFOLIO TERMINAL
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Equity Research • Financial Markets • Fundamental Valuation • Quantitative Trading
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 text-xs font-mono">
            <Link href="/#markets" className="hover:text-cyan-400 transition-colors">
              MARKETS
            </Link>
            <Link href="/#research" className="hover:text-cyan-400 transition-colors">
              RESEARCH
            </Link>
            <Link href="/#strategy-lab" className="hover:text-cyan-400 transition-colors">
              ANALYSIS
            </Link>
            <Link href="/#process" className="hover:text-cyan-400 transition-colors">
              PROCESS
            </Link>
            <Link href="/#about" className="hover:text-cyan-400 transition-colors">
              ABOUT
            </Link>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
            >
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded bg-[#0d121f] border border-[#1a2336] cursor-pointer self-start md:self-auto"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Regulatory Disclaimer & Legal */}
        <div className="space-y-3 text-[11px] font-mono text-slate-400 leading-relaxed">
          <div className="flex items-start space-x-2">
            <Shield className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong>Regulatory & Compliance Disclaimer:</strong> All research reports, DCF valuations, and backtest results presented on this platform represent personal research, academic modeling, and educational demonstration conducted by Ashwani Kumar Singh. This content does NOT constitute financial advice, an offer to buy or sell securities, or a SEBI-registered research recommendation. The author holds no financial interest or advisory relationship with companies analyzed.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#141b2b] text-[11px] text-slate-400 gap-2">
            <div>© 2026 Ashwani Kumar Singh. Built with Next.js, TypeScript & Tailwind CSS.</div>
            <div className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>SYSTEM OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
