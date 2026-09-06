"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Award, TrendingUp, DollarSign, Layers, ChevronRight } from "lucide-react";
import { zaggleResearchReport } from "@/data/companyData";

export const FeaturedResearch: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState("ALL");

  const sectors = ["ALL", "FINTECH / SAAS", "CONSUMER TECH", "BANKING & FINANCE"];

  return (
    <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#1a2336] gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              INSTITUTIONAL COVERAGE INITIATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Selected Equity Research
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Independent, multi-statement fundamental analysis, forensic reconciliations, and explicit 5-year FCFF DCF valuation models.
          </p>
        </div>

        {/* Sector Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                selectedSector === sector
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                  : "bg-[#0d121f] text-slate-400 border border-[#1a2336] hover:text-slate-200"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Research Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Flagship Coverage: Zaggle Prepaid Ocean Services Ltd. */}
        <div className="lg:col-span-2 rounded-xl fin-card p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header & Badges */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 font-bold">
                  NSE: {zaggleResearchReport.ticker}
                </span>
                <span>• BSE: {zaggleResearchReport.bseCode}</span>
                <span>• {zaggleResearchReport.sector}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {zaggleResearchReport.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Initiation Coverage Date: {zaggleResearchReport.researchDate} • Analyst: {zaggleResearchReport.analyst}
              </p>
            </div>

            {/* Recommendation Badge */}
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                VIEW: {zaggleResearchReport.investmentView}
              </span>
              <div className="text-[11px] font-mono text-slate-400 mt-1">
                Horizon: 18–24 Months
              </div>
            </div>
          </div>

          {/* Core Valuation Matrix Cockpit */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-[#07090e]/80 border border-[#1a2336] mb-6">
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">CURRENT PRICE (CMP)</div>
              <div className="font-mono-num text-lg font-bold text-slate-100">
                ₹{zaggleResearchReport.currentPrice.toFixed(2)}
              </div>
              <div className="text-[10px] font-mono text-slate-400">52W: ₹154 - ₹409</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">12-18M TARGET (DCF)</div>
              <div className="font-mono-num text-lg font-bold text-cyan-400">
                ₹{zaggleResearchReport.targetPrice.toFixed(2)}
              </div>
              <div className="text-[10px] font-mono text-cyan-500 font-bold">
                +{zaggleResearchReport.expectedUpside}% Upside
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">NET CASH CUSHION</div>
              <div className="font-mono-num text-lg font-bold text-emerald-400">
                ₹{zaggleResearchReport.netCashCr} Cr
              </div>
              <div className="text-[10px] font-mono text-emerald-400">
                {zaggleResearchReport.netCashMcapPct}% of Mcap
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">CONVICTION & RISK</div>
              <div className="font-mono-num text-lg font-bold text-slate-100">
                {zaggleResearchReport.convictionScore}/10
              </div>
              <div className="text-[10px] font-mono text-amber-400">
                {zaggleResearchReport.riskProfile} Risk
              </div>
            </div>
          </div>

          {/* Executive Thesis Summary */}
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            {zaggleResearchReport.executiveSummary.slice(0, 310)}...
          </p>

          {/* Key Metric Tags */}
          <div className="flex flex-wrap gap-2 mb-6 text-[11px] font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded bg-[#162032] border border-[#1e293b]">
              Trailing P/E: <strong className="text-white">17.9x</strong>
            </span>
            <span className="px-2.5 py-1 rounded bg-[#162032] border border-[#1e293b]">
              Forward P/E (FY27E): <strong className="text-white">13.3x</strong>
            </span>
            <span className="px-2.5 py-1 rounded bg-[#162032] border border-[#1e293b]">
              Trailing EV/EBITDA: <strong className="text-white">10.2x</strong>
            </span>
            <span className="px-2.5 py-1 rounded bg-[#162032] border border-[#1e293b]">
              Promoter Pledge: <strong className="text-emerald-400">0.0%</strong>
            </span>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between pt-4 border-t border-[#1a2336]">
            <span className="text-xs font-mono text-slate-400">
              Includes 5-Yr DCF, Sensitivity Matrix, Forensic EBIT Reconciliation & Peer Multiples
            </span>
            <Link
                href="/research/zaggle"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/20 group/btn"
              >
                <span>READ INSTITUTIONAL REPORT</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
          </div>
        </div>

        {/* Pipeline & Methodology Side Panel */}
        <div className="space-y-6">
          {/* Research Scorecard Framework Card */}
          <div className="rounded-xl fin-card p-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-3">
              <Award className="w-4 h-4" />
              <span>RESEARCH AUDIT CRITERIA</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">My Coverage Framework</h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Every research report undergoes an 8-stage institutional evaluation separating pure operating cash flow from non-operating accruals.
            </p>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Business Quality & Moat</span>
                <span className="text-cyan-400 font-bold">Weight: 20%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Cash Flow vs Accounting PAT</span>
                <span className="text-emerald-400 font-bold">Weight: 25%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">5-Yr Explicit FCFF DCF</span>
                <span className="text-cyan-400 font-bold">Weight: 25%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Downside & Invalidation Triggers</span>
                <span className="text-rose-400 font-bold">Weight: 30%</span>
              </div>
            </div>
          </div>

          {/* Research Pipeline Card */}
          <div className="rounded-xl fin-card p-6 border-dashed border-[#223049]">
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>UPCOMING INITIATIONS</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Coverage Pipeline (FY27)</h4>
            <p className="text-xs text-slate-400 mb-4">
              Currently analyzing capital allocation, ROCE durability, and valuation across emerging Indian growth sectors.
            </p>
            <div className="space-y-3">
              <div className="p-3 rounded bg-[#07090e] border border-[#1a2336] text-xs">
                <div className="flex justify-between items-center text-slate-200 font-semibold">
                  <span>Indian B2B Software & API Rails</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    IN PROGRESS
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Evaluating transaction take-rates vs SaaS subscription durability.
                </p>
              </div>
              <div className="p-3 rounded bg-[#07090e] border border-[#1a2336] text-xs">
                <div className="flex justify-between items-center text-slate-200 font-semibold">
                  <span>Specialty Financial Intermediaries</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    IN PROGRESS
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Focusing on credit cost cycles, NIM compression, and fee income mix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
