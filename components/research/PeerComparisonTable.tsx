"use client";

import React, { useState } from "react";
import { ArrowUpDown, Search, Layers, TrendingUp } from "lucide-react";
import { zaggleResearchReport, PeerComparisonItem } from "@/data/companyData";

export const PeerComparisonTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<keyof PeerComparisonItem>("company");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: keyof PeerComparisonItem) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false); // default desc for financial figures
    }
  };

  const parseVal = (v: string | undefined): number => {
    if (!v) return 0;
    const clean = v.replace(/[^0-9.-]/g, "");
    return parseFloat(clean) || 0;
  };

  const filteredPeers = zaggleResearchReport.peerComparisons
    .filter((p) => p.company.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const valA = parseVal(a[sortKey] as string);
      const valB = parseVal(b[sortKey] as string);
      if (valA !== valB) {
        return sortAsc ? valA - valB : valB - valA;
      }
      return (a.company || "").localeCompare(b.company || "");
    });

  return (
    <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1a2336] gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Peer Comparison & Relative Valuation</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Benchmarking Zaggle against Indian listed FinTech/SaaS comparables and global spend management leaders.
          </p>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search peer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-3 py-1.5 rounded-md bg-[#07090e] border border-[#1a2336] text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Interactive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider bg-[#07090e]/60">
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("company")}>
                <div className="flex items-center space-x-1">
                  <span>Company</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("mcapCr")}>
                <div className="flex items-center space-x-1">
                  <span>Mcap (₹ Cr)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("revYoy")}>
                <div className="flex items-center space-x-1">
                  <span>Rev YoY</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("ebitdaMargin")}>
                <div className="flex items-center space-x-1">
                  <span>EBITDA %</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("patMargin")}>
                <div className="flex items-center space-x-1">
                  <span>PAT %</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("pe")}>
                <div className="flex items-center space-x-1">
                  <span>P/E (x)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("evEbitda")}>
                <div className="flex items-center space-x-1">
                  <span>EV/EBITDA</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("evSales")}>
                <div className="flex items-center space-x-1">
                  <span>EV/Sales</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort("roe")}>
                <div className="flex items-center space-x-1">
                  <span>RoE %</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredPeers.map((p, idx) => (
              <tr
                key={idx}
                className={`transition-colors ${
                  p.isFocusCompany
                    ? "bg-cyan-950/25 hover:bg-cyan-950/40 border-l-2 border-l-cyan-400 text-cyan-200"
                    : "hover:bg-slate-800/20 text-slate-300"
                }`}
              >
                <td className="py-3 px-3 font-semibold flex items-center space-x-1.5">
                  <span>{p.company}</span>
                  {p.isFocusCompany && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                      FOCUS
                    </span>
                  )}
                </td>
                <td className="py-3 px-3 font-mono-num">{p.mcapCr}</td>
                <td className="py-3 px-3 font-mono-num text-emerald-400">{p.revYoy}</td>
                <td className="py-3 px-3 font-mono-num">{p.ebitdaMargin}</td>
                <td className="py-3 px-3 font-mono-num">{p.patMargin}</td>
                <td className="py-3 px-3 font-mono-num font-bold text-slate-100">{p.pe}</td>
                <td className="py-3 px-3 font-mono-num font-bold text-slate-100">{p.evEbitda}</td>
                <td className="py-3 px-3 font-mono-num">{p.evSales}</td>
                <td className="py-3 px-3 font-mono-num">{p.roe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Relative Valuation Insights Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs">
          <div className="font-bold text-cyan-300 font-mono mb-1">55%–65% Valuation Discount</div>
          <p className="text-slate-400 font-sans leading-relaxed">
            Zaggle trades at 17.9x P/E vs RateGain (42.5x) and MapmyIndia (39.0x), despite delivering superior top-line growth (46.3% YoY).
          </p>
        </div>
        <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs">
          <div className="font-bold text-emerald-300 font-mono mb-1">Excessive Pessimism Priced In</div>
          <p className="text-slate-400 font-sans leading-relaxed">
            At 10.2x EV/EBITDA backed by ₹500.4 Cr net cash (~20% of Mcap), market pricing overlooks gross-to-net margin resilience.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs">
          <div className="font-bold text-purple-300 font-mono mb-1">Low Growth Hurdle Rate</div>
          <p className="text-slate-400 font-sans leading-relaxed">
            Current quote prices in just 14% revenue growth and static 9.0% margins. Operational delivery above this base provides significant upside.
          </p>
        </div>
      </div>
    </div>
  );
};
