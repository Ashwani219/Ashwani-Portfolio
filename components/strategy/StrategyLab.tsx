"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  Cpu,
  ShieldCheck,
  Code2,
  BarChart2,
  FileCheck,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { xauusdStrategyData, StrategyMetrics } from "@/data/strategyData";

export const StrategyLab: React.FC = () => {
  const [activeSplit, setActiveSplit] = useState<"full" | "development" | "validation">("full");
  const [activeChartModal, setActiveChartModal] = useState<string | null>(null);

  const strat = xauusdStrategyData;
  const currentMetrics: StrategyMetrics = strat.metrics[activeSplit];

  const chartCards = [
    { id: "equity", title: "Equity Curve (Out-of-Sample Verified)", src: strat.charts.equityCurve, desc: "Cumulative equity progression showing steady slope through unseen validation." },
    { id: "drawdown", title: "Underwater Drawdown Profile", src: strat.charts.drawdown, desc: "Capped at -1.23% (-$132.81), exhibiting rapid recovery cycles." },
    { id: "monthly", title: "Monthly P&L Distribution", src: strat.charts.monthlyPerformance, desc: "Consistent positive expectancy across market regimes." },
    { id: "dynamic", title: "Dynamic Structure & Confirmation Pivots", src: strat.charts.priceDynamicStructure, desc: "Rolling 50-period extents with forward-walk confirmation (no lookahead)." },
  ];

  return (
    <section id="strategy-lab" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#1a2336] gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              QUANTITATIVE TRADING & SYSTEMATIC RESEARCH
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Systematic Strategy Lab
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Bridging software engineering rigor with financial derivatives. Algorithmic indicator pipelines, strict execution assumptions, and out-of-sample split verification.
          </p>
        </div>

        {/* In-Sample vs Out-of-Sample Split Switcher */}
        <div className="flex items-center bg-[#0d121f] p-1 rounded-lg border border-[#1a2336] text-xs font-mono">
          <button
            onClick={() => setActiveSplit("full")}
            className={`px-3 py-1.5 rounded cursor-pointer transition-all ${
              activeSplit === "full"
                ? "bg-purple-600 text-white font-bold shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Full Sample (100%)
          </button>
          <button
            onClick={() => setActiveSplit("development")}
            className={`px-3 py-1.5 rounded cursor-pointer transition-all ${
              activeSplit === "development"
                ? "bg-purple-600 text-white font-bold shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            In-Sample Dev (70%)
          </button>
          <button
            onClick={() => setActiveSplit("validation")}
            className={`px-3 py-1.5 rounded cursor-pointer transition-all ${
              activeSplit === "validation"
                ? "bg-emerald-600 text-white font-bold shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Unseen Validation (30%)
          </button>
        </div>
      </div>

      {/* Main Strategy Feature Container */}
      <div className="space-y-8">
        {/* Strategy Meta & High-Level Spec */}
        <div className="p-6 sm:p-8 rounded-xl fin-card border border-purple-900/30 bg-gradient-to-b from-[#0d121f] to-[#090d16]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1a2336]">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 mb-1">
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 font-bold">
                  {strat.instrument}
                </span>
                <span>• Timeframe: {strat.timeframe}</span>
                <span>• 36,993 Bars (Oct 2024 – Apr 2026)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{strat.title}</h3>
              <p className="text-xs text-slate-400 mt-1 font-sans">{strat.subtitle}</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                Zero Curve-Fitting: OOS PF 2.42
              </span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 my-6">
            <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Profit Factor</div>
              <div className="font-mono-num text-xl font-bold text-emerald-400 mt-1">
                {currentMetrics.profitFactor.toFixed(3)}
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                {activeSplit === "validation" ? "OOS Outperformed!" : "Expectancy > 0"}
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Daily Sharpe Ratio</div>
              <div className="font-mono-num text-xl font-bold text-cyan-300 mt-1">
                {currentMetrics.sharpeDaily.toFixed(2)}
              </div>
              <div className="text-[10px] font-mono text-slate-400">Sortino: {currentMetrics.sortinoDaily.toFixed(2)}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Max Drawdown</div>
              <div className="font-mono-num text-xl font-bold text-slate-200 mt-1">
                {currentMetrics.maxDrawdownPct.toFixed(2)}%
              </div>
              <div className="text-[10px] font-mono text-slate-400">-${Math.abs(currentMetrics.maxDrawdown).toFixed(0)} on $10k</div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Win Rate %</div>
              <div className="font-mono-num text-xl font-bold text-slate-200 mt-1">
                {currentMetrics.winRatePct.toFixed(1)}%
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                {currentMetrics.winningTrades}W / {currentMetrics.losingTrades}L
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Avg Win / Loss</div>
              <div className="font-mono-num text-xl font-bold text-emerald-400 mt-1">
                {(currentMetrics.averageWinner / Math.abs(currentMetrics.averageLoser)).toFixed(2)}x
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                +${currentMetrics.averageWinner.toFixed(1)} / -${Math.abs(currentMetrics.averageLoser).toFixed(1)}
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Net P&L</div>
              <div className="font-mono-num text-xl font-bold text-emerald-400 mt-1">
                +${currentMetrics.netPnl.toFixed(2)}
              </div>
              <div className="text-[10px] font-mono text-slate-400">{currentMetrics.totalTrades} Total Trades</div>
            </div>
          </div>

          {/* Architecture Rules & Execution Mechanics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] space-y-2">
              <div className="text-xs font-mono font-bold text-purple-300 uppercase flex items-center space-x-1.5">
                <Cpu className="w-4 h-4" />
                <span>Strategy Architecture & Signal Engine</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 font-sans">
                <li><strong>Trend Logic:</strong> SATS v1.12.0 preset Crypto 24/7 on HL2 source.</li>
                <li><strong>Swing Detection:</strong> Rolling 50-period extents with Adaptive Price Tracking (APT 20).</li>
                <li><strong>Entry Protocol:</strong> Confirmed Higher Low (HL) followed by SATS Buy flip triggers Long on bar N+1 open.</li>
                <li><strong>Position Sizing:</strong> 10% notional capital allocation per structure cycle.</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-300 uppercase flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Execution Realism & Spread Modeling</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 font-sans">
                <li><strong>Next-Bar Execution:</strong> Signals logged at bar N close, executed on bar N+1 open (no lookahead).</li>
                <li><strong>Real Spread Subtraction:</strong> Actual MT5 integer points with median 0.08 pts spread cost.</li>
                <li><strong>No Candle Synthesis:</strong> Missing interval gaps in MT5 feed were preserved faithfully.</li>
                <li><strong>Validation Split:</strong> 30% unseen testing delivered a higher Profit Factor (2.42) than 70% in-sample (1.66).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backtest Visual Assets Gallery */}
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-4">
            <BarChart2 className="w-4 h-4" />
            <span>AUTHENTIC BACKTEST CHART ARTIFACTS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {chartCards.map((c) => (
              <div
                key={c.id}
                onClick={() => setActiveChartModal(c.src)}
                className="p-3 rounded-xl fin-card group cursor-pointer hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full rounded-lg overflow-hidden bg-[#07090e] mb-3 border border-[#162032]">
                    <img
                      src={c.src}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-2.5 py-1 rounded bg-[#0d121f]/90 border border-cyan-400 text-cyan-300 text-[10px] font-mono">
                        EXPAND CHART
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {c.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{c.desc}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#1a2336] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>MT5 Data Feed</span>
                  <span className="text-cyan-400">View Details →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Python VectorBT Implementation Snippet */}
        <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
              <Code2 className="w-4 h-4" />
              <span>VectorBT / Python Core Execution Architecture</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-[#07090e] px-2 py-1 rounded border border-[#1a2336]">
              Python 3.11 • VectorBT • Pandas
            </span>
          </div>

          <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] overflow-x-auto">
            <pre className="text-xs font-mono text-slate-300 leading-relaxed">
              <code>{strat.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {activeChartModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveChartModal(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] p-3 bg-[#0d121f] rounded-xl border border-cyan-500/40">
            <button
              onClick={() => setActiveChartModal(null)}
              className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center cursor-pointer shadow-lg"
            >
              ✕
            </button>
            <img
              src={activeChartModal}
              alt="Backtest Analysis"
              className="max-h-[82vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
