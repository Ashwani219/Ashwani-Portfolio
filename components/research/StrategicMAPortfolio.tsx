"use client";

import React from "react";
import { GitMerge, CheckCircle, AlertCircle, ShieldCheck } from "lucide-react";

export const StrategicMAPortfolio: React.FC = () => {
  const mAndA = [
    {
      target: "Dice Technology Pvt Ltd",
      stake: "Asset Purchase",
      consideration: "₹679.0 Mn ($8.1M)",
      rationale: "AI-driven Travel & Expense (T&E) and P2P enterprise spend workflows.",
      status: "Brings 100+ tech engineers & marquee enterprise clients (Hindalco, Trident, IDFC First Bank, Lenskart). Integration costs absorbed in Q1 FY27.",
      verdict: "High Strategic Value",
      verdictColor: "emerald",
    },
    {
      target: "Span Across (TaxSpanner)",
      stake: "98.3% Equity",
      consideration: "₹568.3 Mn ($6.8M)",
      rationale: "Direct tax e-filing, algorithmic salary structuring, and tax-saving wallets.",
      status: "Profitable operating subsidiary; proven synergies in Zaggle Save employee benefit wallet structuring.",
      verdict: "Accretive",
      verdictColor: "emerald",
    },
    {
      target: "Mobileware Technologies",
      stake: "38.91% Stake",
      consideration: "₹228.5 Mn ($2.7M)",
      rationale: "TransXT API banking switch & UPI routing infrastructure.",
      status: "Delivered ₹68.2M associate EBITDA in FY26. Prime beneficiary of upcoming commercial UPI MDR implementation.",
      verdict: "Cash-Flow Positive",
      verdictColor: "emerald",
    },
    {
      target: "Rivpe (Zagg.Money)",
      stake: "100% Stake",
      consideration: "₹220.0M + ₹500M",
      rationale: "Consumer credit on UPI & co-branded prepaid cards.",
      status: "Early-stage (-₹25M EBITDA in Q1 FY27); proven revenue modest, execution and credit underwriting risk high.",
      verdict: "High Execution Risk",
      verdictColor: "amber",
    },
    {
      target: "Unobanc Private Ltd",
      stake: "19.9% Stake",
      consideration: "₹79.7 Mn ($0.95M)",
      rationale: "RBI Authorised Dealer Category-II (AD-II) Forex License.",
      status: "Pure regulatory asset; holds AD-II license enabling ZIP cross-border B2B forex cards with 1.2%–1.8% FX spreads.",
      verdict: "Regulatory Asset",
      verdictColor: "blue",
    },
  ];

  return (
    <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-6">
      <div className="pb-4 border-b border-[#1a2336]">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
          <GitMerge className="w-4 h-4" />
          <span>INORGANIC CAPITAL ALLOCATION</span>
        </div>
        <h3 className="text-base font-bold text-white">Strategic M&A Portfolio Audit (Past 24 Months)</h3>
        <p className="text-xs text-slate-400 mt-1">
          Forensic review separating proven EBITDA-positive subsidiaries from high-risk early stage ventures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mAndA.map((item, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">{item.target}</h4>
                <div className="text-[11px] font-mono text-cyan-400">
                  {item.stake} • {item.consideration}
                </div>
              </div>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  item.verdictColor === "emerald"
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : item.verdictColor === "amber"
                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                    : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                }`}
              >
                {item.verdict}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans">
              <strong className="text-slate-400">Rationale:</strong> {item.rationale}
            </p>
            <p className="text-xs text-slate-400 font-sans">
              <strong className="text-slate-400">Audit Status:</strong> {item.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
