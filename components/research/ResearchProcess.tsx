"use client";

import React from "react";
import { Search, Briefcase, FileSpreadsheet, Globe, Calculator, Activity, ShieldAlert, CheckCircle2 } from "lucide-react";

export const ResearchProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      name: "SCREEN",
      icon: <Search className="w-4 h-4 text-cyan-400" />,
      tagline: "Identify asymmetric opportunities",
      description: "Screen for companies exhibiting strong capital allocation, durable gross profit pools, and clear operating inflection catalysts.",
    },
    {
      num: "02",
      name: "BUSINESS MODEL",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      tagline: "Deconstruct unit economics",
      description: "Map revenue streams, customer switching costs, distributor networks, and competitive moats against substitute products.",
    },
    {
      num: "03",
      name: "FUNDAMENTALS",
      icon: <FileSpreadsheet className="w-4 h-4 text-blue-400" />,
      tagline: "Forensic statement reconciliation",
      description: "Audit true operating EBIT vs non-operating treasury income. Track debtor days (DSO), net working capital, and cash conversion cycles.",
    },
    {
      num: "04",
      name: "INDUSTRY & TAM",
      icon: <Globe className="w-4 h-4 text-purple-400" />,
      tagline: "Macro and regulatory tailwinds",
      description: "Evaluate addressable market size, secular digitalization drivers, tax policy reforms, and competitive rivalry dynamics.",
    },
    {
      num: "05",
      name: "DCF VALUATION",
      icon: <Calculator className="w-4 h-4 text-cyan-400" />,
      tagline: "5-Year explicit FCFF models",
      description: "Compute weighted average cost of capital (WACC), terminal value sensitivity matrices, and cross-check against peer EV/EBITDA multiples.",
    },
    {
      num: "06",
      name: "TECHNICALS",
      icon: <Activity className="w-4 h-4 text-amber-400" />,
      tagline: "Market structure & execution timing",
      description: "Evaluate daily moving averages (50/200 DMA), RSI divergences, double-bottom confirmations, and liquidity accumulation zones.",
    },
    {
      num: "07",
      name: "RISK & INVALIDATION",
      icon: <ShieldAlert className="w-4 h-4 text-rose-400" />,
      tagline: "Define thesis breakers in advance",
      description: "Establish objective threshold triggers (e.g. debtor days > 75, organic growth < 18%) that mandate immediate thesis invalidation.",
    },
    {
      num: "08",
      name: "INVESTMENT VIEW",
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
      tagline: "Structured institutional conviction",
      description: "Synthesize target price bridge (Bear / Base / Bull), conviction score, time horizon, and staggered execution parameters.",
    },
  ];

  return (
    <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="pb-8 border-b border-[#1a2336] mb-10">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
          <span className="uppercase tracking-widest font-bold">ANALYTICAL RIGOR</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          My Research Process
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          An institutional 8-stage framework combining accounting forensics, multi-scenario DCF modeling, and market structure analysis.
        </p>
      </div>

      {/* Process Pipeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-5 rounded-xl fin-card border border-[#1e293b] hover:border-cyan-500/40 relative overflow-hidden group flex flex-col justify-between transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-num font-extrabold text-xl text-cyan-400/80 group-hover:text-cyan-300">
                  {step.num}
                </span>
                <div className="p-1.5 rounded bg-[#162032] border border-slate-700/60">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {step.name}
              </h3>
              <div className="text-[11px] font-mono text-cyan-400/90 mb-2">{step.tagline}</div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{step.description}</p>
            </div>

            <div className="mt-4 pt-2 border-t border-[#1a2336] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Stage {step.num} of 08</span>
              <span className="text-emerald-400">Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
