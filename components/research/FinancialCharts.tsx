"use client";

import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { zaggleResearchReport } from "@/data/companyData";
import { BarChart3, TrendingUp, AlertTriangle } from "lucide-react";

export const FinancialCharts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"revenue" | "margins" | "cashflow">("revenue");
  const [unitMode, setUnitMode] = useState<"Cr" | "Mn">("Cr");

  const divisor = unitMode === "Cr" ? 10 : 1;
  const unitLabel = unitMode === "Cr" ? "₹ Cr" : "₹ Mn";

  // Data mapped from report
  const chartData = zaggleResearchReport.historicalFinancials.map((d) => ({
    year: d.year,
    grossRevenue: +(d.grossRevenue / divisor).toFixed(1),
    netRevenue: +(d.netRevenue / divisor).toFixed(1),
    ebitda: +(d.adjustedEbitda / divisor).toFixed(1),
    pat: +(d.adjustedPat / divisor).toFixed(1),
    cfo: +(d.cfo / divisor).toFixed(1),
    ebitdaMarginNet: d.ebitdaMarginNetPct,
    ebitdaMarginGross: d.ebitdaMarginGrossPct,
    patMargin: d.patMarginPct,
  }));

  return (
    <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-6">
      {/* Chart Controls Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1a2336] gap-3">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          <h3 className="text-base font-bold text-white">Consolidated Financial Trajectory (FY22A – FY28E)</h3>
        </div>

        <div className="flex items-center space-x-3">
          {/* Unit Toggle */}
          <div className="flex items-center bg-[#07090e] p-1 rounded border border-[#1a2336] text-xs font-mono">
            <button
              onClick={() => setUnitMode("Cr")}
              className={`px-2.5 py-1 rounded cursor-pointer ${
                unitMode === "Cr" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400"
              }`}
            >
              ₹ Crore
            </button>
            <button
              onClick={() => setUnitMode("Mn")}
              className={`px-2.5 py-1 rounded cursor-pointer ${
                unitMode === "Mn" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400"
              }`}
            >
              ₹ Millions
            </button>
          </div>

          {/* Metric Tab Switcher */}
          <div className="flex items-center bg-[#07090e] p-1 rounded border border-[#1a2336] text-xs font-mono">
            <button
              onClick={() => setActiveTab("revenue")}
              className={`px-3 py-1 rounded cursor-pointer ${
                activeTab === "revenue" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Revenue Growth
            </button>
            <button
              onClick={() => setActiveTab("margins")}
              className={`px-3 py-1 rounded cursor-pointer ${
                activeTab === "margins" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Margin Profile (%)
            </button>
            <button
              onClick={() => setActiveTab("cashflow")}
              className={`px-3 py-1 rounded cursor-pointer ${
                activeTab === "cashflow" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              PAT vs CFO Inflection
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Chart Display */}
      <div className="h-80 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          {activeTab === "revenue" ? (
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#162032" vertical={false} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fill: "#94a3b8", fontSize: 12, fontFamily: "monospace" }} />
              <YAxis
                stroke="#64748b"
                tick={{ fill: "#94a3b8", fontSize: 11, fontFamily: "monospace" }}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0d121f",
                  borderColor: "#1e293b",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px", fontFamily: "monospace", paddingTop: "10px" }} />
              <Bar dataKey="grossRevenue" name={`Gross Revenue (${unitLabel})`} fill="#1e293b" stroke="#38bdf8" strokeWidth={1} radius={[4, 4, 0, 0]} />
              <Bar dataKey="netRevenue" name={`Net Revenue (${unitLabel})`} fill="#0284c7" radius={[4, 4, 0, 0]} />
              <Bar dataKey="ebitda" name={`Adjusted EBITDA (${unitLabel})`} fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : activeTab === "margins" ? (
            <LineChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#162032" vertical={false} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fill: "#94a3b8", fontSize: 12, fontFamily: "monospace" }} />
              <YAxis
                stroke="#64748b"
                tick={{ fill: "#94a3b8", fontSize: 11, fontFamily: "monospace" }}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0d121f",
                  borderColor: "#1e293b",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
                formatter={(val: any) => [`${val}%`, ""]}
              />
              <Legend wrapperStyle={{ fontSize: "12px", fontFamily: "monospace", paddingTop: "10px" }} />
              <Line
                type="monotone"
                dataKey="ebitdaMarginNet"
                name="EBITDA Margin on Net Revenue (%)"
                stroke="#38bdf8"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#38bdf8" }}
              />
              <Line
                type="monotone"
                dataKey="ebitdaMarginGross"
                name="EBITDA Margin on Gross Revenue (%)"
                stroke="#94a3b8"
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={{ r: 3, fill: "#94a3b8" }}
              />
              <Line
                type="monotone"
                dataKey="patMargin"
                name="PAT Margin (% Gross)"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 4, fill: "#10b981" }}
              />
            </LineChart>
          ) : (
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#162032" vertical={false} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fill: "#94a3b8", fontSize: 12, fontFamily: "monospace" }} />
              <YAxis
                stroke="#64748b"
                tick={{ fill: "#94a3b8", fontSize: 11, fontFamily: "monospace" }}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0d121f",
                  borderColor: "#1e293b",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px", fontFamily: "monospace", paddingTop: "10px" }} />
              <Bar dataKey="pat" name={`Reported PAT (${unitLabel})`} fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar
                dataKey="cfo"
                name={`Operating Cash Flow (${unitLabel})`}
                fill="#10b981"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Analytical Forensic Callout Box */}
      <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs font-mono text-slate-300">
        <div className="flex items-start space-x-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-100">Analyst Forensic Note: Gross vs. Net Revenue Realities</span>
            <p className="text-slate-400 font-sans leading-relaxed">
              In FY26, ₹10,504.7 Mn of Propel gross revenue was pass-through voucher procurement with a net take-rate of ~5.1%. While Gross EV/Sales stands at ~1.0x, evaluating Zaggle on <strong>Net Revenue (₹8,571.8 Mn)</strong> reveals a true Adjusted EBITDA margin of <strong>22.7%</strong> and EV/Net Sales of <strong>2.3x</strong>, reflecting high-quality software and card rail economics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
