"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  ShieldCheck,
  TrendingUp,
  Download,
  Printer,
  ChevronRight,
  Calculator,
  BarChart3,
  Layers,
  Activity,
  AlertTriangle,
  Bot,
  ExternalLink,
} from "lucide-react";
import { zaggleResearchReport } from "@/data/companyData";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ExecutiveDashboard } from "@/components/research/ExecutiveDashboard";
import { InvestmentThesis } from "@/components/research/InvestmentThesis";
import { FinancialCharts } from "@/components/research/FinancialCharts";
import { FinancialStatements } from "@/components/research/FinancialStatements";
import { InteractiveDCF } from "@/components/research/InteractiveDCF";
import { PeerComparisonTable } from "@/components/research/PeerComparisonTable";
import { TechnicalAnalysisView } from "@/components/research/TechnicalAnalysisView";
import { StrategicMAPortfolio } from "@/components/research/StrategicMAPortfolio";
import { RiskMatrixScorecard } from "@/components/research/RiskMatrixScorecard";
import { AiResearchAssistant } from "@/components/research/AiResearchAssistant";
import { ResearchTerminalModal } from "@/components/layout/ResearchTerminalModal";
import { ResumeViewerModal } from "@/components/resume/ResumeViewerModal";

export default function ZaggleResearchPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const r = zaggleResearchReport;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020306] text-[#e2e8f0] relative">
      <Navigation
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12 animate-fade-in">
        {/* Breadcrumb & Report Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400 pb-4 border-b border-[#141822]">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-cyan-400 flex items-center space-x-1">
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              <span>TERMINAL HOME</span>
            </Link>
            <span>/</span>
            <span className="text-slate-300">EQUITY RESEARCH</span>
            <span>/</span>
            <span className="text-cyan-400 font-bold">{r.ticker}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#0d121f] border border-[#1e293b] hover:border-slate-500 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>PRINT REPORT / PDF</span>
            </button>
            <div className="flex items-center space-x-1 text-emerald-400 text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>INSTITUTIONAL GRADE COVERAGE</span>
            </div>
          </div>
        </div>

        {/* Institutional Report Header Banner */}
        <div className="p-6 sm:p-10 rounded-2xl fin-card border border-cyan-500/30 bg-gradient-to-br from-[#0d121f] via-[#090d16] to-[#0c1424] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1a2336]">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 font-bold">
                  NSE: {r.ticker}
                </span>
                <span>• BSE: {r.bseCode}</span>
                <span>• BLOOMBERG: {r.bloomberg}</span>
                <span>• {r.sector}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {r.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                Independent Equity Research Initiation Report • {r.subIndustry}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Research Date: {r.researchDate}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-200">Analyst: {r.analyst}</span>
                </span>
              </div>
            </div>

            {/* Target & Recommendation Cockpit */}
            <div className="p-5 rounded-xl bg-[#07090e] border border-cyan-500/30 min-w-[280px] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-slate-400">RECOMMENDATION:</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  {r.investmentView}
                </span>
              </div>
              <div className="flex justify-between items-baseline border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-slate-400">CURRENT PRICE:</span>
                <span className="font-mono-num text-xl font-bold text-white">₹{r.currentPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-mono text-slate-400">12-18M DCF TARGET:</span>
                <div className="text-right">
                  <span className="font-mono-num text-2xl font-extrabold text-cyan-300">₹{r.targetPrice.toFixed(2)}</span>
                  <div className="text-xs font-mono font-bold text-emerald-400">+{r.expectedUpside}% Implied Upside</div>
                </div>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                <span>Conviction: {r.convictionScore}/10</span>
                <span>Risk: {r.riskProfile}</span>
              </div>
            </div>
          </div>

          {/* Quick Capital & Operational Data Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-6 text-xs font-mono">
            <div>
              <div className="text-slate-400 text-[10px]">SHARES OUTSTANDING</div>
              <div className="font-mono-num font-bold text-white mt-0.5">{r.sharesOutstandingMn}M</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">MARKET CAP</div>
              <div className="font-mono-num font-bold text-white mt-0.5">₹{r.marketCapCr} Cr</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">ENTERPRISE VALUE</div>
              <div className="font-mono-num font-bold text-white mt-0.5">₹{r.enterpriseValueCr} Cr</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">NET CASH BALANCE</div>
              <div className="font-mono-num font-bold text-emerald-400 mt-0.5">₹{r.netCashCr} Cr</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">52-WEEK HIGH / LOW</div>
              <div className="font-mono-num font-bold text-slate-200 mt-0.5">₹{r.fiftyTwoWeekHigh} / ₹{r.fiftyTwoWeekLow}</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">TRAILING P/E (FY26A)</div>
              <div className="font-mono-num font-bold text-slate-200 mt-0.5">{r.trailingPe}x</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">FORWARD P/E (FY27E)</div>
              <div className="font-mono-num font-bold text-cyan-400 mt-0.5">{r.forwardPe}x</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">PROMOTER PLEDGE</div>
              <div className="font-mono-num font-bold text-emerald-400 mt-0.5">{r.promoterPledgedPct.toFixed(1)}% (Zero)</div>
            </div>
          </div>
        </div>

        {/* Section Jumper Quick Navigation Bar */}
        <div className="sticky top-16 z-30 bg-[#07090e]/90 backdrop-blur-md p-2 rounded-xl border border-[#1a2336] flex items-center space-x-2 overflow-x-auto text-xs font-mono shadow-lg">
          <a href="#cockpit" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            01. Cockpit
          </a>
          <a href="#thesis" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            02. Investment Thesis
          </a>
          <a href="#forensics" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            03. Forensics & Quality of Earnings
          </a>
          <a href="#financials" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            04. Financials
          </a>
          <a href="#statements" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            05. Statements
          </a>
          <a href="#dcf" className="px-3 py-1.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 whitespace-nowrap">
            06. Interactive DCF
          </a>
          <a href="#peers" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            07. Peer Comparison
          </a>
          <a href="#technicals" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            08. Technicals
          </a>
          <a href="#m-and-a" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            09. Strategic M&A
          </a>
          <a href="#risks" className="px-3 py-1.5 rounded hover:bg-[#131b2e] hover:text-cyan-400 whitespace-nowrap">
            10. Risk Matrix
          </a>
          <a href="#ai-assistant" className="px-3 py-1.5 rounded bg-purple-950/40 text-purple-300 border border-purple-800/40 hover:bg-purple-900/40 whitespace-nowrap">
            11. Ask AI Assistant
          </a>
        </div>

        {/* 1. Cockpit Section */}
        <section id="cockpit" className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 01: 60-SECOND EXECUTIVE COCKPIT</span>
          </div>
          <ExecutiveDashboard />
        </section>

        {/* 2. Thesis Section */}
        <section id="thesis" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 02: STRUCTURAL INVESTMENT THESIS</span>
          </div>
          <InvestmentThesis />
        </section>

        {/* 3. Forensic Quality of Earnings Callout */}
        <section id="forensics" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 03: FORENSIC RECONCILIATION & QUALITY OF EARNINGS</span>
          </div>

          <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-5">
            <div>
              <h3 className="text-base font-bold text-white">
                Audit Finding: FY26 Reported EBIT vs. True Operating EBIT
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                A critical requirement of professional equity research is isolating non-operating treasury yield from sustainable operating cash flows.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase bg-[#07090e]/60">
                    <th className="py-2.5 px-3">Reconciliation Step / Item</th>
                    <th className="py-2.5 px-3">Amount (₹ Mn)</th>
                    <th className="py-2.5 px-3">Accounting Nature & Analytical Justification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="text-slate-300">
                    <td className="py-2.5 px-3 font-semibold">1. Company Reported &apos;EBIT&apos; (Presentation)</td>
                    <td className="py-2.5 px-3 font-mono-num font-bold text-amber-400">1,921.73</td>
                    <td className="py-2.5 px-3 text-slate-400 font-sans">
                      PBT (₹1,868.4M) + Finance Cost (₹53.3M). <strong>WARNING:</strong> INCLUDES ₹380.0M Treasury Other Income!
                    </td>
                  </tr>
                  <tr className="text-slate-300">
                    <td className="py-2.5 px-3 font-semibold">2. Reported Adjusted EBITDA</td>
                    <td className="py-2.5 px-3 font-mono-num">1,940.00</td>
                    <td className="py-2.5 px-3 text-slate-400 font-sans">Core operational earnings before D&A, finance costs, and tax.</td>
                  </tr>
                  <tr className="text-slate-400">
                    <td className="py-2.5 px-3 pl-6">3. Less: Audited Depreciation & Amortisation</td>
                    <td className="py-2.5 px-3 font-mono-num text-rose-400">(-368.80)</td>
                    <td className="py-2.5 px-3 font-sans">Audited tangible and capitalized software intangible amortization.</td>
                  </tr>
                  <tr className="bg-cyan-950/20 text-cyan-200 font-bold border-l-2 border-l-cyan-400">
                    <td className="py-3 px-3">4. TRUE OPERATING EBIT (Row 2 - Row 3)</td>
                    <td className="py-3 px-3 font-mono-num text-cyan-300 text-sm">1,571.20</td>
                    <td className="py-3 px-3 text-slate-300 font-sans">
                      The genuine operational baseline used to calculate NOPAT in our FCFF DCF model.
                    </td>
                  </tr>
                  <tr className="text-slate-400">
                    <td className="py-2.5 px-3 pl-6">5. Non-Operating Treasury Income (Excluded)</td>
                    <td className="py-2.5 px-3 font-mono-num">380.00</td>
                    <td className="py-2.5 px-3 font-sans">
                      Interest on liquid bank deposits. Excluded from NOPAT to strictly prevent double-counting when adding net cash to Enterprise Value!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs font-mono text-slate-300">
              <span className="text-cyan-400 font-bold">Why Other Income Must Be Excluded:</span> In FCFF DCF valuation, non-operating liquid cash (₹5,003.7 Mn) is added back to Enterprise Value at the end. Including interest earned on that cash in operating NOPAT would artificially inflate operating value and double-count the asset.
            </div>
          </div>
        </section>

        {/* 4. Financial Charts */}
        <section id="financials" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 04: MULTI-YEAR FINANCIAL DYNAMICS</span>
          </div>
          <FinancialCharts />
        </section>

        {/* 5. Financial Statements */}
        <section id="statements" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 05: THREE-STATEMENT FINANCIAL AUDIT</span>
          </div>
          <FinancialStatements />
        </section>

        {/* 6. Interactive DCF Model */}
        <section id="dcf" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 06: EXPLICIT 5-YEAR FCFF DCF VALUATION</span>
          </div>
          <InteractiveDCF />
        </section>

        {/* 7. Peer Benchmarking */}
        <section id="peers" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 07: PEER BENCHMARKING & RELATIVE MULTIPLES</span>
          </div>
          <PeerComparisonTable />
        </section>

        {/* 8. Technical Analysis */}
        <section id="technicals" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 08: TECHNICAL STRUCTURE & BENCHMARK ALPHA</span>
          </div>
          <TechnicalAnalysisView />
        </section>

        {/* 9. Strategic M&A */}
        <section id="m-and-a" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 09: STRATEGIC M&A AUDIT</span>
          </div>
          <StrategicMAPortfolio />
        </section>

        {/* 10. Prioritized Risk Matrix */}
        <section id="risks" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 10: PRIORITIZED RISK MATRIX & MONITORING</span>
          </div>
          <RiskMatrixScorecard />
        </section>

        {/* 11. AI Assistant */}
        <section id="ai-assistant" className="space-y-4 pt-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 11: AI RESEARCH ASSISTANT (INTERACTIVE Q&A)</span>
          </div>
          <AiResearchAssistant />
        </section>
      </main>

      <Footer />

      {/* Global Modals */}
      <ResearchTerminalModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenResume={() => {
          setIsSearchOpen(false);
          setIsResumeOpen(true);
        }}
      />

      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
