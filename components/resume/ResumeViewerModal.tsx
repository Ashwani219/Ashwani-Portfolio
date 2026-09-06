"use client";

import React from "react";
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { profileData } from "@/data/profileData";

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0d121f] rounded-2xl border border-cyan-500/40 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a2336] bg-[#07090e]">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-mono font-bold text-slate-200 uppercase">
              CURRICULUM VITAE • ASHWANI KUMAR SINGH
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-mono text-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#131b2e] text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d17] text-slate-200 font-sans print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="text-center pb-6 border-b border-[#1a2336] print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white print:text-black">
              {profileData.name}
            </h1>
            <div className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold mt-1 tracking-widest print:text-black uppercase">
              EQUITY RESEARCH | DERIVATIVES | FINANCIAL MARKETS
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400 print:text-black mt-3">
              <span>{profileData.phone}</span>
              <span>•</span>
              <a href={`mailto:${profileData.email}`} className="text-cyan-400 print:text-black">
                {profileData.email}
              </a>
              <span>•</span>
              <span>{profileData.location}</span>
              <span>•</span>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 print:text-black">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* About Me */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-[#1a2336] pb-1">
              ABOUT ME
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
              B.Tech Computer Science graduate with a strong foundation in financial markets, technical analysis, and Python-based data handling. Dual NISM certified in Equity and Currency Derivatives, combining software engineering capabilities with analytical market research. Eager to contribute technical rigor and a passion for finance to an entry-level role in equity research, financial analysis, or trading operations.
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-[#1a2336] pb-1">
              CERTIFICATIONS
            </h2>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white print:text-black">
                  NISM Series VIII – Equity Derivatives (Score: 76.5/100)
                </span>
                <span className="text-slate-400 print:text-black">NISM | Jul 2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white print:text-black">
                  NISM Series I – Currency Derivatives (Score: 73.0/100)
                </span>
                <span className="text-slate-400 print:text-black">NISM | Jul 2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white print:text-black">
                  Financial Markets Coursework
                </span>
                <span className="text-slate-400 print:text-black">Coursera - Yale University | Aug 2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white print:text-black">
                  Excel Skills for Business: Essentials
                </span>
                <span className="text-slate-400 print:text-black">Coursera - Macquarie University | Nov 2025</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-[#1a2336] pb-1">
              WORK EXPERIENCE
            </h2>
            <div>
              <div className="flex justify-between items-baseline text-xs font-mono mb-1.5">
                <span className="font-bold text-white print:text-black">FINANCIAL MARKETS RESEARCH & TRADING</span>
                <span className="text-slate-400 print:text-black">2023 – Present</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-1">
                <li>Analyzed price trends and market data in Indian equity derivatives using technical analysis and market-structure concepts.</li>
                <li>Experience with NSE equity options and futures, including market analysis, trade setup identification and risk management.</li>
                <li>Applied strict risk management rules, such as setting stop-losses and managing position sizes, to control potential losses.</li>
                <li>Tracked and reviewed personal trades to understand market behavior, discipline, and risk-to-reward ratios.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-[#1a2336] pb-1">
              PROJECTS
            </h2>

            <div>
              <div className="text-xs font-bold font-mono text-white print:text-black">
                Algorithmic Trading Bot & XAUUSD Quantitative Backtest
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-1 mt-1">
                <li>Built Python scripts using Pandas and VectorBT/Backtrader to automate technical indicator calculations (Moving Average Crossover / RSI) on historical market data.</li>
                <li>Coded strict risk parameters including automated stop-loss, trailing stops, and position sizing rules.</li>
                <li>Evaluated backtest metrics across 36,993 historical bars, validating a 2.42 Profit Factor on unseen out-of-sample data with maximum drawdown capped at -1.23%.</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold font-mono text-white print:text-black">
                EQUITY RESEARCH & VALUATION – ZAGGLE PREPAID OCEAN SERVICES LTD.
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-1 mt-1">
                <li>Conducted end-to-end fundamental analysis of Zaggle covering business segments, industry structure, competitive positioning, financial performance, working capital and earnings quality.</li>
                <li>Built a 5-year explicit FCFF DCF valuation, peer-multiple analysis and Bear/Base/Bull scenario framework, arriving at a base-case fair value of ₹270/share.</li>
                <li>Conducted relative valuation using Price-to-Earnings (P/E), EV/EBITDA, and Price-to-Sales (P/S) multiples against industry peers to determine relative pricing.</li>
                <li>Formed an investment view based on earnings growth, profitability, peer valuation, and key business risks.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-[#1a2336] pb-1">
              EDUCATION
            </h2>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white print:text-black">
                  B Tech - Computer Science, Poornima Institute of Engineering and Technology, Jaipur
                </span>
                <span className="text-slate-400 print:text-black">2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white print:text-black">
                  12th - CBSE, Mahi International School, Agra
                </span>
                <span className="text-slate-400 print:text-black">2021</span>
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-[#1a2336] pb-1">
              SKILLS & TOOLS
            </h2>
            <div className="text-xs font-mono space-y-1 text-slate-300 print:text-black">
              <div>
                <strong>Skills:</strong> Equity Research, Risk Management, Technical Analysis, Fundamental Analysis, F&O Trading, Currency Derivatives, Python, Excel
              </div>
              <div>
                <strong>Tools & Platforms:</strong> TradingView, Screener.in, MetaTrader 5, Pine Script, NSE, BSE, Investing.com, Moneycontrol
              </div>
              <div>
                <strong>Languages:</strong> English, Hindi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
