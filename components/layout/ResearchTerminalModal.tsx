"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, TrendingUp, FileText, Cpu, Award, ArrowRight } from "lucide-react";
import { zaggleResearchReport } from "@/data/companyData";
import { xauusdStrategyData } from "@/data/strategyData";
import { profileData } from "@/data/profileData";

interface ResearchTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const ResearchTerminalModal: React.FC<ResearchTerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchItems = [
    {
      category: "EQUITY RESEARCH",
      title: "Zaggle Prepaid Ocean Services Ltd. (NSE: ZAGGLE)",
      description: "Initiating coverage • ₹270 DCF Target (+46.1% Upside) • Forensic EBIT Audit",
      href: "/research/zaggle",
      icon: <TrendingUp className="w-4 h-4 text-cyan-400" />,
    },
    {
      category: "VALUATION ENGINE",
      title: "Interactive 5-Yr FCFF DCF Model (Zaggle)",
      description: "Dynamic sliders for WACC, Terminal Growth, and Sensitivity Grids",
      href: "/research/zaggle#dcf",
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    },
    {
      category: "QUANTITATIVE STRATEGY",
      title: "XAUUSD SATS + Dynamic Swing Algorithmic Trading",
      description: "36,993 Bars MT5 Backtest • 2.42 Out-of-Sample Profit Factor • 2.18 Sharpe",
      href: "/#strategy-lab",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
    },
    {
      category: "CERTIFICATION",
      title: "NISM Series VIII: Equity Derivatives (Score: 76.5/100)",
      description: "SEBI regulated certification in futures, options, Greeks, and hedging",
      href: "/#about",
      icon: <Award className="w-4 h-4 text-emerald-400" />,
    },
    {
      category: "CERTIFICATION",
      title: "NISM Series I: Currency Derivatives (Score: 73.0/100)",
      description: "SEBI regulated certification in USD/INR currency futures and options",
      href: "/#about",
      icon: <Award className="w-4 h-4 text-blue-400" />,
    },
    {
      category: "ACADEMIC",
      title: "B.Tech Computer Science & Engineering (2026)",
      description: "Poornima Institute of Engineering and Technology, Jaipur",
      href: "/#about",
      icon: <FileText className="w-4 h-4 text-amber-400" />,
    },
  ];

  const filteredItems = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="relative w-full max-w-2xl bg-[#0d121f] rounded-xl border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#1a2336] bg-[#07090e]">
          <Search className="w-4 h-4 text-cyan-400 shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Type a ticker, strategy, model, or certification (or press ESC to close)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-mono text-white placeholder-slate-500 focus:outline-none"
          />
          <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131b2e] text-slate-400 border border-slate-700 ml-2">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#131b2e] group transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded bg-[#07090e] border border-[#1e293b] mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
              </Link>
            ))
          ) : (
            <div className="p-8 text-center text-xs font-mono text-slate-400">
              No matching research or quantitative models found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2.5 bg-[#07090e] border-t border-[#1a2336] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Global Search Terminal</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Open Full Resume →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
