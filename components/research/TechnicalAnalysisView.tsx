"use client";

import React, { useState } from "react";
import { TrendingUp, Activity, Shield, ArrowUpRight } from "lucide-react";
import { zaggleResearchReport } from "@/data/companyData";

export const TechnicalAnalysisView: React.FC = () => {
  const [timeframe, setTimeframe] = useState<"1D" | "4H" | "1H">("1D");
  const tech = zaggleResearchReport.technicalSetup;

  return (
    <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1a2336] gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Technical Analysis & Market Structure</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Price action review following the ~55% drawdown from ₹409.45 to multi-week base formation at ₹180–₹190.
          </p>
        </div>

        {/* Timeframe selector */}
        <div className="flex items-center bg-[#07090e] p-1 rounded border border-[#1a2336] text-xs font-mono">
          {(["1D", "4H", "1H"] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded cursor-pointer ${
                timeframe === tf ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Indicator Dashboard Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
          <div className="text-[10px] font-mono text-slate-400 uppercase">50-Day Moving Avg (50 DMA)</div>
          <div className="font-mono-num text-lg font-bold text-slate-100 mt-0.5">₹{tech.fiftyDma}</div>
          <div className="text-[10px] font-mono text-rose-400">-8.4% overhead resistance</div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
          <div className="text-[10px] font-mono text-slate-400 uppercase">200-Day Moving Avg (200 DMA)</div>
          <div className="font-mono-num text-lg font-bold text-slate-100 mt-0.5">₹{tech.twoHundredDma}</div>
          <div className="text-[10px] font-mono text-slate-400">-28.2% structural trendline</div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
          <div className="text-[10px] font-mono text-slate-400 uppercase">14-Day RSI (Momentum)</div>
          <div className="font-mono-num text-lg font-bold text-emerald-400 mt-0.5">{tech.rsi14}</div>
          <div className="text-[10px] font-mono text-emerald-400">Neutral (Recovered from 17.15 oversold)</div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
          <div className="text-[10px] font-mono text-slate-400 uppercase">MACD Histogram (12, 26, 9)</div>
          <div className="font-mono-num text-lg font-bold text-cyan-400 mt-0.5">+{tech.macdHist}</div>
          <div className="text-[10px] font-mono text-cyan-400">Bullish divergence on daily</div>
        </div>
      </div>

      {/* Support / Resistance Levels Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-[#07090e] border border-emerald-950/60 border-l-4 border-l-emerald-500">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-1">Key Structural Support Zones</div>
          <div className="text-sm font-mono font-bold text-white mb-1">₹172.00 / ₹154.40</div>
          <p className="text-xs text-slate-400 font-sans">
            ₹154.40 confirmed the double-bottom accumulation pivot with heavy volume absorption on August 14, 2026.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-[#07090e] border border-rose-950/60 border-l-4 border-l-rose-500">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase mb-1">Overhead Supply & Resistance Zones</div>
          <div className="text-sm font-mono font-bold text-white mb-1">₹201.80 (50 DMA) / ₹205.00 / ₹258.00</div>
          <p className="text-xs text-slate-400 font-sans">
            A daily close above ₹205 confirms trend reversal out of the accumulation base, opening upside to ₹258–₹270.
          </p>
        </div>
      </div>

      {/* Relative Performance vs NIFTY 50 Benchmark */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-mono font-bold uppercase text-slate-300">
          Historical Return & Alpha vs. NIFTY 50 Benchmark
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase bg-[#07090e]/60">
                <th className="py-2 px-3">Horizon</th>
                <th className="py-2 px-3">Zaggle Return</th>
                <th className="py-2 px-3">NIFTY 50 Return</th>
                <th className="py-2 px-3">Relative Alpha</th>
                <th className="py-2 px-3">Primary Market Driver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {tech.relativeAlphaVsNifty.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/20 text-slate-300">
                  <td className="py-2.5 px-3 font-semibold text-white">{row.period}</td>
                  <td className="py-2.5 px-3 font-mono-num text-rose-400 font-bold">{row.stockReturn}</td>
                  <td className="py-2.5 px-3 font-mono-num text-emerald-400">{row.niftyReturn}</td>
                  <td className="py-2.5 px-3 font-mono-num text-rose-400">{row.alpha}</td>
                  <td className="py-2.5 px-3 text-slate-400 font-sans">{row.driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
