"use client";

import React, { useState } from "react";
import { FileSpreadsheet, DollarSign, CheckCircle2 } from "lucide-react";

export const FinancialStatements: React.FC = () => {
  const [statementTab, setStatementTab] = useState<"income" | "balance" | "cashflow">("income");
  const [unit, setUnit] = useState<"Cr" | "Mn">("Cr");

  const d = unit === "Cr" ? 10 : 1;
  const unitText = unit === "Cr" ? "₹ Crore" : "₹ Millions";

  return (
    <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-6">
      {/* Tab Switcher & Unit Selection */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1a2336] gap-3">
        <div className="flex items-center space-x-2">
          <FileSpreadsheet className="w-5 h-5 text-cyan-400" />
          <h3 className="text-base font-bold text-white">Financial Statement Audit ({unitText})</h3>
        </div>

        <div className="flex items-center space-x-3">
          {/* Unit Toggle */}
          <div className="flex items-center bg-[#07090e] p-1 rounded border border-[#1a2336] text-xs font-mono">
            <button
              onClick={() => setUnit("Cr")}
              className={`px-2.5 py-1 rounded cursor-pointer ${
                unit === "Cr" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400"
              }`}
            >
              ₹ Cr
            </button>
            <button
              onClick={() => setUnit("Mn")}
              className={`px-2.5 py-1 rounded cursor-pointer ${
                unit === "Mn" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400"
              }`}
            >
              ₹ Mn
            </button>
          </div>

          {/* Statement Tabs */}
          <div className="flex items-center bg-[#07090e] p-1 rounded border border-[#1a2336] text-xs font-mono">
            <button
              onClick={() => setStatementTab("income")}
              className={`px-3 py-1 rounded cursor-pointer ${
                statementTab === "income" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Income Statement
            </button>
            <button
              onClick={() => setStatementTab("balance")}
              className={`px-3 py-1 rounded cursor-pointer ${
                statementTab === "balance" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Balance Sheet
            </button>
            <button
              onClick={() => setStatementTab("cashflow")}
              className={`px-3 py-1 rounded cursor-pointer ${
                statementTab === "cashflow" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Cash Flow
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Income Statement */}
      {statementTab === "income" && (
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase bg-[#07090e]/60">
                <th className="py-2.5 px-3 text-left">Particulars</th>
                <th className="py-2.5 px-3">FY22A</th>
                <th className="py-2.5 px-3">FY23A</th>
                <th className="py-2.5 px-3">FY24A</th>
                <th className="py-2.5 px-3">FY25A</th>
                <th className="py-2.5 px-3">FY26A</th>
                <th className="py-2.5 px-3 text-cyan-400">FY27E</th>
                <th className="py-2.5 px-3 text-cyan-400">FY28E</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr>
                <td className="py-2.5 px-3 text-left font-semibold text-slate-200">Gross Revenue from Operations</td>
                <td className="py-2.5 px-3 font-mono-num">{(3712.6 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(5534.6 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(7756.0 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(13037.6 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num font-bold text-white">{(19076.5 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-cyan-300">{(24417.9 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-cyan-300">{(30278.2 / d).toFixed(1)}</td>
              </tr>
              <tr className="text-slate-400">
                <td className="py-2 px-3 text-left pl-6">Less: Cost of Point Redemption</td>
                <td className="py-2 px-3 font-mono-num">—</td>
                <td className="py-2 px-3 font-mono-num">(-{(3188.7 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(3797.2 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(6781.0 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(10504.7 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(13547.9 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(16328.2 / d).toFixed(1)})</td>
              </tr>
              <tr className="bg-slate-900/30 font-semibold text-slate-200">
                <td className="py-2 px-3 text-left">Net Operational Revenue</td>
                <td className="py-2 px-3 font-mono-num">{(1540.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(2345.9 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(3958.8 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(6256.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num font-bold text-white">{(8571.8 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num text-cyan-300">{(10870.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num text-cyan-300">{(13950.0 / d).toFixed(1)}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-left font-bold text-emerald-400">Adjusted EBITDA</td>
                <td className="py-2.5 px-3 font-mono-num">{(603.0 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(625.1 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(855.7 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(1233.6 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num font-bold text-emerald-400">{(1940.0 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-emerald-300">{(2563.9 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-emerald-300">{(3391.2 / d).toFixed(1)}</td>
              </tr>
              <tr className="text-slate-400">
                <td className="py-2 px-3 text-left pl-6">Depreciation & Amortisation</td>
                <td className="py-2 px-3 font-mono-num">—</td>
                <td className="py-2 px-3 font-mono-num">(-{(62.0 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(83.6 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(147.9 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(368.8 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(439.5 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(545.0 / d).toFixed(1)})</td>
              </tr>
              <tr className="bg-cyan-950/20 font-bold text-cyan-300">
                <td className="py-2 px-3 text-left">TRUE Operating EBIT (EBITDA - D&A)</td>
                <td className="py-2 px-3 font-mono-num">{(489.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(430.1 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(734.8 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(1260.8 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(1571.2 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(2124.4 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(2846.2 / d).toFixed(1)}</td>
              </tr>
              <tr className="text-slate-400">
                <td className="py-2 px-3 text-left pl-6">Treasury Other Income (Bank Interest)</td>
                <td className="py-2 px-3 font-mono-num">—</td>
                <td className="py-2 px-3 font-mono-num">{(11.3 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(112.7 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(267.7 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(380.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(420.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(450.0 / d).toFixed(1)}</td>
              </tr>
              <tr className="font-bold text-white">
                <td className="py-2.5 px-3 text-left">Profit After Tax (PAT)</td>
                <td className="py-2.5 px-3 font-mono-num">{(419.2 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(229.0 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(440.2 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(879.0 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(1387.5 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-cyan-300">{(1865.8 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-cyan-300">{(2439.3 / d).toFixed(1)}</td>
              </tr>
              <tr className="text-slate-300">
                <td className="py-2 px-3 text-left">Diluted EPS (₹)</td>
                <td className="py-2 px-3 font-mono-num">—</td>
                <td className="py-2 px-3 font-mono-num">₹2.46</td>
                <td className="py-2 px-3 font-mono-num">₹4.03</td>
                <td className="py-2 px-3 font-mono-num">₹6.96</td>
                <td className="py-2 px-3 font-mono-num font-bold text-white">₹10.31</td>
                <td className="py-2 px-3 font-mono-num text-cyan-300">₹13.88</td>
                <td className="py-2 px-3 font-mono-num text-cyan-300">₹18.14</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 2: Balance Sheet */}
      {statementTab === "balance" && (
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase bg-[#07090e]/60">
                <th className="py-2.5 px-3 text-left">Balance Sheet Line Item</th>
                <th className="py-2.5 px-3">Mar 2023</th>
                <th className="py-2.5 px-3">Mar 2024</th>
                <th className="py-2.5 px-3">Mar 2025</th>
                <th className="py-2.5 px-3 text-cyan-400">Mar 2026</th>
                <th className="py-2.5 px-3 text-left">Analytical Assessment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr>
                <td className="py-2 px-3 text-left font-semibold text-slate-200">Goodwill & Intangibles</td>
                <td className="py-2 px-3 font-mono-num">{(177.6 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(580.2 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(1399.6 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num font-bold text-white">{(2399.6 / d).toFixed(1)}</td>
                <td className="py-2 px-3 text-left text-slate-400">Dice & TaxSpanner technology IP</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-left font-semibold text-slate-200">Trade Receivables</td>
                <td className="py-2 px-3 font-mono-num">{(1026.6 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(1746.2 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(2151.7 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num font-bold text-amber-400">{(3611.8 / d).toFixed(1)}</td>
                <td className="py-2 px-3 text-left text-slate-400">Under active rationalization in FY27</td>
              </tr>
              <tr className="bg-emerald-950/20 font-bold text-emerald-300">
                <td className="py-2.5 px-3 text-left">Cash & Liquid Bank Deposits</td>
                <td className="py-2.5 px-3 font-mono-num">{(226.0 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(2793.1 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(6533.4 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-emerald-400">{(5457.7 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 text-left text-emerald-400 font-bold">₹545.8 Cr liquid treasury</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-left font-semibold text-slate-200">Total Borrowings (Debt)</td>
                <td className="py-2 px-3 font-mono-num">{(1210.7 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(736.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(85.4 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(454.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 text-left text-slate-400">Zero long-term debt; short working lines</td>
              </tr>
              <tr className="bg-cyan-950/30 font-bold text-cyan-300">
                <td className="py-2.5 px-3 text-left">Net Cash Balance (Cash - Debt)</td>
                <td className="py-2.5 px-3 font-mono-num text-rose-400">(-{(984.7 / d).toFixed(1)})</td>
                <td className="py-2.5 px-3 font-mono-num">{(2057.1 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num">{(6448.0 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-cyan-400">{(5003.7 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 text-left text-cyan-400 font-bold">₹500.4 Cr (~20% Mcap protection)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-left font-semibold text-slate-200">Total Net Worth (Equity)</td>
                <td className="py-2 px-3 font-mono-num">{(487.5 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(5753.8 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(12489.6 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num font-bold text-white">{(14068.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 text-left text-slate-400">Robust equity capital buffer</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Cash Flow Statement */}
      {statementTab === "cashflow" && (
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase bg-[#07090e]/60">
                <th className="py-2.5 px-3 text-left">Cash Flow Line Item</th>
                <th className="py-2.5 px-3">FY23A</th>
                <th className="py-2.5 px-3">FY24A</th>
                <th className="py-2.5 px-3">FY25A</th>
                <th className="py-2.5 px-3">FY26A</th>
                <th className="py-2.5 px-3 text-cyan-400">FY27E (Inflection)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr>
                <td className="py-2 px-3 text-left font-semibold text-slate-200">Operating Profit Before WC</td>
                <td className="py-2 px-3 font-mono-num">{(480.9 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(705.9 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(1141.0 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num">{(1910.5 / d).toFixed(1)}</td>
                <td className="py-2 px-3 font-mono-num text-cyan-300">{(2563.9 / d).toFixed(1)}</td>
              </tr>
              <tr className="text-rose-400">
                <td className="py-2 px-3 text-left pl-6">Working Capital Inflow / (Outflow)</td>
                <td className="py-2 px-3 font-mono-num">(-{(571.2 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(1609.5 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(943.8 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(2446.6 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num text-slate-300">(-{(213.7 / d).toFixed(1)})</td>
              </tr>
              <tr className="bg-slate-900/40 font-bold">
                <td className="py-2.5 px-3 text-left text-white">Net Cash from Operations (CFO)</td>
                <td className="py-2.5 px-3 font-mono-num text-rose-400">(-{(156.2 / d).toFixed(1)})</td>
                <td className="py-2.5 px-3 font-mono-num text-rose-400">(-{(827.5 / d).toFixed(1)})</td>
                <td className="py-2.5 px-3 font-mono-num text-emerald-400">{(197.2 / d).toFixed(1)}</td>
                <td className="py-2.5 px-3 font-mono-num text-rose-400">(-{(466.3 / d).toFixed(1)})</td>
                <td className="py-2.5 px-3 font-mono-num text-emerald-400 font-extrabold">+{(640.0 / d).toFixed(1)}</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-left font-semibold text-slate-200">Net Capex & Software Dev</td>
                <td className="py-2 px-3 font-mono-num">(-{(58.0 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(486.2 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(603.8 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(859.4 / d).toFixed(1)})</td>
                <td className="py-2 px-3 font-mono-num">(-{(488.4 / d).toFixed(1)})</td>
              </tr>
              <tr className="bg-cyan-950/20 font-bold text-cyan-300">
                <td className="py-2.5 px-3 text-left">Free Cash Flow to Firm (FCFF)</td>
                <td className="py-2.5 px-3 font-mono-num text-rose-400">(-{(214.2 / d).toFixed(1)})</td>
                <td className="py-2.5 px-3 font-mono-num text-rose-400">(-{(1313.7 / d).toFixed(1)})</td>
                <td className="py-2.5 px-3 font-mono-num text-rose-400">(-{(406.6 / d).toFixed(1)})</td>
                <td className="py-2.5 px-3 font-mono-num text-rose-400">(-{(1325.7 / d).toFixed(1)})</td>
                <td className="py-2.5 px-3 font-mono-num text-emerald-400">+{(1326.5 / d).toFixed(1)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
