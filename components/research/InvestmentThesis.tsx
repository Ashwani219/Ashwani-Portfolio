"use client";

import React from "react";
import { TrendingUp, Layers, Zap, Shield, Target } from "lucide-react";

export const InvestmentThesis: React.FC = () => {
  const thesisPoints = [
    {
      num: "01",
      title: "Revenue Hyper-Growth (51.1% 3-Yr CAGR)",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      tag: "Top-Line Durability",
      description:
        "Zaggle scaled gross revenue from ₹5,534.6 Mn (FY23) to ₹19,076.5 Mn (FY26), driven by deep enterprise customer acquisition (4,065+ corporate clients) and rapid co-branded card issuance across 19 scheduled banks. FY27E revenue is projected at ₹24,417.9 Mn (+28% YoY), supported by expanding wallet density per employee.",
    },
    {
      num: "02",
      title: "Operating Leverage & Margin Expansion",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      tag: "Profitability Engine",
      description:
        "Adjusted EBITDA grew 45.9% CAGR over FY23–FY26 to ₹1,940.0 Mn. Fixed overhead costs (employee expenses dropped from 5.3% to 3.6% of revenue; IT/AWS from 7.4% to 5.0%) demonstrate expanding software operating leverage. On net operational revenue, true EBITDA margins expand from 22.7% (FY26) toward 24.5% (FY28E).",
    },
    {
      num: "03",
      title: "Secular Regulatory & Industry Tailwinds",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      tag: "Macro Driver",
      description:
        "Structural tailwinds include India's corporate shift to digital spend rails, commercial credit cards (projected ₹3.8T TAM by 2027E), and New Tax Regime amendments enabling tax-exempt meal and fuel perk wallets. In Q1 FY27, ~73% of new users onboarded came organically from existing clients expanding perk wallet coverage.",
    },
    {
      num: "04",
      title: "Multi-Bank Rail Moat & Low Client Churn (<1.5%)",
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      tag: "Structural Defensibility",
      description:
        "Zaggle sits between enterprise ERPs (SAP, Oracle, Tally), HRMS platforms, and 19 partner banks. Ripping out Zaggle requires reissuing thousands of employee cards and retraining entire finance workflows. This lock-in yields an industry-leading <1.5% annual corporate churn rate, ensuring predictable, annuity-like interchange fees.",
    },
    {
      num: "05",
      title: "Compelling Valuation & Downside Protection",
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      tag: "Margin of Safety",
      description:
        "At ₹184.75, Zaggle trades at a 55% discount to its 52-week high (₹409.45), offering a 17.9x FY26 P/E and 10.2x EV/EBITDA. The stock is fortified by ₹500.4 Cr in liquid net cash (~20.1% of market cap, or ₹37.20/share in downside cash cushion). Our conservative 5-year explicit FCFF DCF model yields a Base-Case intrinsic fair value of ₹270.00 (+46.1% upside).",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-[#1a2336]">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
          <Target className="w-4 h-4" />
          <span>INSTITUTIONAL INVESTMENT THESIS</span>
        </div>
        <h3 className="text-xl font-bold text-white">Five Structural Pillars of Our Accumulate View</h3>
        <p className="text-xs text-slate-400 mt-1">
          Rigorous qualitative and quantitative reasoning extracted from our comprehensive fundamental review.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {thesisPoints.map((item) => (
          <div
            key={item.num}
            className="p-6 rounded-xl fin-card border border-[#1e293b] hover:border-cyan-500/40 relative overflow-hidden flex flex-col justify-between group transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-num font-extrabold text-2xl text-cyan-400/80 group-hover:text-cyan-300">
                  {item.num}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#162032] text-slate-400 border border-slate-700/60">
                  {item.tag}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{item.description}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#1a2336] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Moat Contribution</span>
              <span className="text-emerald-400 font-bold">High Conviction</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
