"use client";

import React from "react";
import { TrendingUp, ShieldAlert, CheckCircle2, Calculator, Info } from "lucide-react";
import { zaggleResearchReport } from "@/data/companyData";

export const ExecutiveDashboard: React.FC = () => {
  const r = zaggleResearchReport;

  return (
    <div className="space-y-8">
      {/* 60-Second Cockpit Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl fin-card border-l-4 border-l-cyan-500">
          <div className="text-[10px] font-mono uppercase text-slate-400">Current Market Price (CMP)</div>
          <div className="font-mono-num text-2xl font-bold text-white mt-1">₹{r.currentPrice.toFixed(2)}</div>
          <div className="text-[11px] font-mono text-slate-400 mt-1">52W Low: ₹{r.fiftyTwoWeekLow} | High: ₹{r.fiftyTwoWeekHigh}</div>
        </div>

        <div className="p-4 rounded-xl fin-card border-l-4 border-l-emerald-500">
          <div className="text-[10px] font-mono uppercase text-slate-400">12–18M Base DCF Target</div>
          <div className="font-mono-num text-2xl font-bold text-emerald-400 mt-1">₹{r.targetPrice.toFixed(2)}</div>
          <div className="text-[11px] font-mono text-emerald-400/90 font-bold mt-1">+{r.expectedUpside}% Implied Upside</div>
        </div>

        <div className="p-4 rounded-xl fin-card border-l-4 border-l-blue-500">
          <div className="text-[10px] font-mono uppercase text-slate-400">Liquid Net Cash Cushion</div>
          <div className="font-mono-num text-2xl font-bold text-blue-400 mt-1">₹{r.netCashCr} Cr</div>
          <div className="text-[11px] font-mono text-slate-400 mt-1">~{r.netCashMcapPct}% of Market Capitalization</div>
        </div>

        <div className="p-4 rounded-xl fin-card border-l-4 border-l-purple-500">
          <div className="text-[10px] font-mono uppercase text-slate-400">Forward Valuation Multiples</div>
          <div className="font-mono-num text-2xl font-bold text-purple-300 mt-1">{r.forwardPe}x <span className="text-xs font-normal text-slate-400">P/E (FY27E)</span></div>
          <div className="text-[11px] font-mono text-slate-400 mt-1">Trailing EV/EBITDA: {r.trailingEvEbitda}x</div>
        </div>
      </div>

      {/* Probability-Weighted Target Bridge */}
      <div className="p-6 rounded-xl fin-card border border-[#1e293b]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1a2336] mb-5 gap-2">
          <div className="flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Valuation Scenarios & Probability-Weighted Target Bridge</h3>
          </div>
          <div className="px-3 py-1 rounded bg-[#07090e] border border-cyan-500/30 text-xs font-mono text-cyan-300">
            Probability-Weighted Target: <strong className="font-mono-num text-white">₹268.20 (+45.2%)</strong>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                <th className="py-2.5 px-3">Valuation Scenario</th>
                <th className="py-2.5 px-3">Target Price (₹)</th>
                <th className="py-2.5 px-3">Implied Upside</th>
                <th className="py-2.5 px-3">Assigned Probability</th>
                <th className="py-2.5 px-3">Key Analytical Assumptions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr className="hover:bg-slate-800/20">
                <td className="py-3 px-3 font-bold text-rose-400">BEAR CASE</td>
                <td className="py-3 px-3 font-mono-num text-slate-100 font-bold">₹150.00</td>
                <td className="py-3 px-3 text-rose-400 font-bold">-18.8%</td>
                <td className="py-3 px-3 text-slate-300">20.0%</td>
                <td className="py-3 px-3 text-slate-400">12.5% Rev CAGR, 9.5% EBITDA Margin, WACC = 14.0%, exit multiple = 6.2x</td>
              </tr>
              <tr className="bg-cyan-950/20 hover:bg-cyan-950/30 border-l-2 border-l-cyan-400">
                <td className="py-3 px-3 font-bold text-cyan-300">BASE CASE (Primary)</td>
                <td className="py-3 px-3 font-mono-num text-cyan-300 font-bold text-sm">₹270.00</td>
                <td className="py-3 px-3 text-emerald-400 font-bold">+46.1%</td>
                <td className="py-3 px-3 text-slate-200 font-bold">60.0%</td>
                <td className="py-3 px-3 text-slate-300">20.3% Rev CAGR, 12.5% Terminal EBITDA Margin, WACC = 13.4%, exit multiple = 7.3x</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="py-3 px-3 font-bold text-emerald-400">BULL CASE</td>
                <td className="py-3 px-3 font-mono-num text-slate-100 font-bold">₹380.00</td>
                <td className="py-3 px-3 text-emerald-400 font-bold">+105.7%</td>
                <td className="py-3 px-3 text-slate-300">20.0%</td>
                <td className="py-3 px-3 text-slate-400">24.5% Rev CAGR, 14.0% Terminal EBITDA Margin, WACC = 13.0%, exit multiple = 8.5x</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-3 p-2.5 rounded bg-[#07090e] border border-[#1a2336] text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>Mathematical Formula: (₹150 × 0.20) + (₹270 × 0.60) + (₹380 × 0.20) = ₹268.20</span>
          <span className="text-emerald-400 font-bold">Base Target: ₹270.00 (+46.1%)</span>
        </div>
      </div>

      {/* Top 5 Reasons to Own vs Top 5 Risks to Monitor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reasons to Own */}
        <div className="p-6 rounded-xl fin-card border border-emerald-900/40 bg-emerald-950/10">
          <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold uppercase mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>Top 5 Reasons to Own (Structural Moat)</span>
          </div>
          <ol className="space-y-3 text-xs text-slate-300">
            {r.reasonsToOwn.map((reason, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <span className="font-mono text-emerald-400 font-bold text-[11px] mt-0.5">0{idx + 1}.</span>
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Major Risks to Monitor */}
        <div className="p-6 rounded-xl fin-card border border-rose-900/40 bg-rose-950/10">
          <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs font-bold uppercase mb-4">
            <ShieldAlert className="w-4 h-4" />
            <span>Top 5 Major Risks to Monitor (Bear Case)</span>
          </div>
          <ol className="space-y-3 text-xs text-slate-300">
            {r.risksToMonitor.map((risk, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <span className="font-mono text-rose-400 font-bold text-[11px] mt-0.5">0{idx + 1}.</span>
                <span className="leading-relaxed">{risk}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
