"use client";

import React from "react";
import { ShieldAlert, AlertTriangle, Eye, CheckCircle2 } from "lucide-react";
import { zaggleResearchReport } from "@/data/companyData";

export const RiskMatrixScorecard: React.FC = () => {
  const risks = zaggleResearchReport.prioritizedRisks;

  return (
    <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-8">
      {/* Header */}
      <div className="pb-4 border-b border-[#1a2336]">
        <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 mb-1">
          <ShieldAlert className="w-4 h-4" />
          <span>FORENSIC AUDIT & RISK FRAMEWORK</span>
        </div>
        <h3 className="text-base font-bold text-white">Comprehensive Prioritized Risk Matrix</h3>
        <p className="text-xs text-slate-400 mt-1">
          Tracking leading warning signs, financial exposure channels, and active management mitigation actions.
        </p>
      </div>

      {/* Risk Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase bg-[#07090e]/60">
              <th className="py-2.5 px-3">Identified Risk Factor</th>
              <th className="py-2.5 px-3">Prob.</th>
              <th className="py-2.5 px-3">Impact</th>
              <th className="py-2.5 px-3">Leading Indicator to Track</th>
              <th className="py-2.5 px-3">Financial Exposure</th>
              <th className="py-2.5 px-3">Mitigation Channel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {risks.map((r, idx) => (
              <tr key={idx} className="hover:bg-slate-800/20 text-slate-300">
                <td className="py-3 px-3 font-semibold text-white">{r.risk}</td>
                <td className="py-3 px-3">
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] ${
                      r.prob === "High"
                        ? "bg-rose-500/20 text-rose-400"
                        : r.prob === "Med"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {r.prob}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] ${
                      r.impact === "High"
                        ? "bg-rose-500/20 text-rose-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {r.impact}
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-300 font-sans">{r.indicator}</td>
                <td className="py-3 px-3 text-rose-400 font-sans">{r.financialImpact}</td>
                <td className="py-3 px-3 text-slate-400 font-sans">{r.mitigation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Balanced Investment Thesis: Bull vs Bear vs Blindspots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] space-y-2">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center space-x-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>What the Market is Missing</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside font-sans">
            <li><strong>40/60 Seasonal Revenue Distribution:</strong> ~60% of corporate spend occurs in H2 (Diwali gifting and fiscal year-end budget exhaustion). Annualizing Q1 FY27 results creates a false pessimism.</li>
            <li><strong>True Software Economics:</strong> Pass-through voucher volume hides 22.7% EBITDA margins on Net Revenue.</li>
            <li><strong>Commercial UPI MDR:</strong> Upcoming regulatory fees directly monetize through Mobileware switch.</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-[#07090e] border border-rose-950/50 border-l-4 border-l-rose-500 space-y-2">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase flex items-center space-x-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>What Could Prove Us Wrong (Invalidation Trigger)</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            If FY27 full-year Operating Cash Flow fails to turn positive (+₹640 Mn expected) and Trade Receivables exceed ₹3,800 Mn due to an inability to enforce advance corporate collections, our DCF fair value would be impaired, warranting an immediate downgrade to <strong>SELL</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
