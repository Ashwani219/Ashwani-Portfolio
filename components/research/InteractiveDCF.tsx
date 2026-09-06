"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Sliders, AlertCircle, RefreshCw } from "lucide-react";
import { zaggleResearchReport } from "@/data/companyData";

export const InteractiveDCF: React.FC = () => {
  const r = zaggleResearchReport;
  const bridge = r.dcfBridge;

  // Interactive user assumption sliders
  const [wacc, setWacc] = useState<number>(13.4); // %
  const [terminalGrowth, setTerminalGrowth] = useState<number>(5.0); // %
  const [revGrowthFactor, setRevGrowthFactor] = useState<number>(1.0); // multiplier (0.8x to 1.3x)
  const [terminalMargin, setTerminalMargin] = useState<number>(12.5); // %

  // Dynamic DCF recalculation
  const calculatedDcf = useMemo(() => {
    const waccDec = wacc / 100;
    const gDec = terminalGrowth / 100;

    // Scale explicit projections based on sliders
    let cumulativePv = 0;
    const years = [
      { year: "FY27E", rev: 24417.9 * revGrowthFactor, margin: 10.5, df: 1 / Math.pow(1 + waccDec, 1) },
      { year: "FY28E", rev: 30278.2 * revGrowthFactor, margin: 11.2, df: 1 / Math.pow(1 + waccDec, 2) },
      { year: "FY29E", rev: 36333.9 * revGrowthFactor, margin: 11.8, df: 1 / Math.pow(1 + waccDec, 3) },
      { year: "FY30E", rev: 42147.3 * revGrowthFactor, margin: 12.2, df: 1 / Math.pow(1 + waccDec, 4) },
      { year: "FY31E", rev: 48047.9 * revGrowthFactor, margin: terminalMargin, df: 1 / Math.pow(1 + waccDec, 5) },
    ];

    const projectedFcffs = years.map((y) => {
      const ebitda = y.rev * (y.margin / 100);
      const dna = y.rev * 0.018; // historical depreciation intensity
      const trueEbit = ebitda - dna;
      const tax = trueEbit * 0.252;
      const nopat = trueEbit - tax;
      const capex = y.rev * 0.02;
      const deltaNwc = y.rev * 0.006;
      const fcff = nopat + dna - capex - deltaNwc;
      const pv = fcff * y.df;
      cumulativePv += pv;
      return { year: y.year, fcff, pv };
    });

    // Terminal value calculation
    const finalYearFcff = projectedFcffs[projectedFcffs.length - 1].fcff;
    const terminalYearFcff = finalYearFcff * (1 + gDec);
    const terminalValue = (waccDec > gDec) ? terminalYearFcff / (waccDec - gDec) : 0;
    const pvTerminalValue = terminalValue / Math.pow(1 + waccDec, 5);

    // Enterprise Value and Equity Value
    const enterpriseValue = cumulativePv + pvTerminalValue;
    const netCash = bridge.netCashBalance; // ₹5,003.7 Mn
    const equityValue = enterpriseValue + netCash;
    const intrinsicValuePerShare = equityValue / bridge.sharesOutstanding;
    const impliedUpside = ((intrinsicValuePerShare - r.currentPrice) / r.currentPrice) * 100;

    return {
      cumulativePv,
      terminalValue,
      pvTerminalValue,
      enterpriseValue,
      equityValue,
      intrinsicValuePerShare,
      impliedUpside,
      projectedFcffs,
    };
  }, [wacc, terminalGrowth, revGrowthFactor, terminalMargin, bridge, r.currentPrice]);

  const resetDefaults = () => {
    setWacc(13.4);
    setTerminalGrowth(5.0);
    setRevGrowthFactor(1.0);
    setTerminalMargin(12.5);
  };

  return (
    <div className="p-6 rounded-xl fin-card border border-[#1e293b] space-y-6">
      {/* Title & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1a2336] gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Interactive 5-Year FCFF DCF Valuation Model</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Live valuation engine. Adjust core cost of capital, growth, and profitability parameters to simulate scenario outputs.
          </p>
        </div>

        <button
          onClick={resetDefaults}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#07090e] border border-[#1a2336] hover:border-slate-600 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
          <span>RESET TO BASE CASE</span>
        </button>
      </div>

      {/* Sliders Control Deck */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-[#07090e] border border-[#1a2336]">
        {/* Slider 1: WACC */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Discount Rate (WACC):</span>
            <span className="text-cyan-400 font-bold font-mono-num">{wacc.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="12.0"
            max="15.0"
            step="0.1"
            value={wacc}
            onChange={(e) => setWacc(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>12.0%</span>
            <span>Base: 13.4%</span>
            <span>15.0%</span>
          </div>
        </div>

        {/* Slider 2: Terminal Growth */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Terminal Growth (g):</span>
            <span className="text-cyan-400 font-bold font-mono-num">{terminalGrowth.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="3.5"
            max="6.0"
            step="0.1"
            value={terminalGrowth}
            onChange={(e) => setTerminalGrowth(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>3.5%</span>
            <span>Base: 5.0%</span>
            <span>6.0%</span>
          </div>
        </div>

        {/* Slider 3: Revenue Scale */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">5-Yr Revenue Multiplier:</span>
            <span className="text-cyan-400 font-bold font-mono-num">{revGrowthFactor.toFixed(2)}x</span>
          </div>
          <input
            type="range"
            min="0.80"
            max="1.25"
            step="0.05"
            value={revGrowthFactor}
            onChange={(e) => setRevGrowthFactor(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>0.80x (Bear)</span>
            <span>1.00x (Base)</span>
            <span>1.25x (Bull)</span>
          </div>
        </div>

        {/* Slider 4: Terminal EBITDA Margin */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Terminal EBITDA Margin:</span>
            <span className="text-cyan-400 font-bold font-mono-num">{terminalMargin.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="9.0"
            max="14.0"
            step="0.2"
            value={terminalMargin}
            onChange={(e) => setTerminalMargin(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>9.0%</span>
            <span>Base: 12.5%</span>
            <span>14.0%</span>
          </div>
        </div>
      </div>

      {/* Dynamic Valuation Output Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 rounded-lg bg-gradient-to-r from-cyan-950/40 via-[#0d121f] to-slate-900/60 border border-cyan-500/30">
        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">DYNAMIC INTRINSIC VALUE</div>
          <div className="font-mono-num text-3xl font-extrabold text-cyan-300 mt-1">
            ₹{calculatedDcf.intrinsicValuePerShare.toFixed(2)}
          </div>
          <div className="text-[11px] font-mono text-slate-400">Target Fair Value Per Share</div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">IMPLIED UPSIDE / (DOWNSIDE)</div>
          <div
            className={`font-mono-num text-3xl font-extrabold mt-1 ${
              calculatedDcf.impliedUpside >= 0 ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {calculatedDcf.impliedUpside >= 0 ? "+" : ""}
            {calculatedDcf.impliedUpside.toFixed(1)}%
          </div>
          <div className="text-[11px] font-mono text-slate-400">vs. CMP ₹{r.currentPrice.toFixed(2)}</div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">IMPLIED ENTERPRISE VALUE (EV)</div>
          <div className="font-mono-num text-xl font-bold text-slate-200 mt-2">
            ₹{(calculatedDcf.enterpriseValue / 10).toFixed(0)} Cr
          </div>
          <div className="text-[10px] font-mono text-slate-400">
            PV Explicit: ₹{(calculatedDcf.cumulativePv / 10).toFixed(0)} Cr | TV: ₹{(calculatedDcf.pvTerminalValue / 10).toFixed(0)} Cr
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400">TOTAL IMPLIED EQUITY VALUE</div>
          <div className="font-mono-num text-xl font-bold text-slate-200 mt-2">
            ₹{(calculatedDcf.equityValue / 10).toFixed(0)} Cr
          </div>
          <div className="text-[10px] font-mono text-emerald-400">
            Includes +₹{(bridge.netCashBalance / 10).toFixed(0)} Cr Liquid Net Cash
          </div>
        </div>
      </div>

      {/* Static Sensitivity Matrix Table from Report */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-mono font-bold uppercase text-slate-300">
          Valuation Sensitivity Grid: WACC vs. Terminal Growth Rate (Intrinsic Fair Value in ₹)
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-center text-xs font-mono border border-[#1a2336]">
            <thead>
              <tr className="bg-[#07090e] border-b border-[#1a2336] text-slate-400">
                <th className="py-2 px-3 text-left">WACC \ g</th>
                {r.sensitivityWaccVsG.gs.map((gVal) => (
                  <th key={gVal} className="py-2 px-3">
                    {gVal.toFixed(1)}% {gVal === 5.0 && <span className="text-cyan-400 font-bold">(Base)</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {r.sensitivityWaccVsG.waccs.map((wVal, rIdx) => (
                <tr key={wVal} className={wVal === 13.4 ? "bg-cyan-950/20 font-bold text-cyan-300" : ""}>
                  <td className="py-2 px-3 text-left text-slate-400">
                    {wVal.toFixed(1)}% {wVal === 13.4 && <span className="text-cyan-400">(Base)</span>}
                  </td>
                  {r.sensitivityWaccVsG.grid[rIdx].map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`py-2 px-3 font-mono-num ${
                        wVal === 13.4 && r.sensitivityWaccVsG.gs[cIdx] === 5.0
                          ? "bg-cyan-500/20 text-cyan-300 font-extrabold border border-cyan-400/50"
                          : "text-slate-300"
                      }`}
                    >
                      ₹{cell.toFixed(1)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Disclaimer */}
      <div className="p-3 rounded bg-[#07090e] border border-[#1a2336] flex items-center space-x-2 text-[11px] font-mono text-slate-400">
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          <strong>Illustrative valuation model:</strong> Key inputs represent independent analyst assumptions and capital market estimates. Not financial advice.
        </span>
      </div>
    </div>
  );
};
