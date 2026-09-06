"use client";

import React, { useState } from "react";
import { TrendingUp, TrendingDown, Clock, AlertCircle } from "lucide-react";
import { marketSnapshotData, MarketItem } from "@/data/marketData";

export const MarketSnapshot: React.FC = () => {
  const [hoveredSymbol, setHoveredSymbol] = useState<string | null>(null);

  // SVG Sparkline generator
  const renderSparkline = (points: number[], isPositive: boolean, isHovered: boolean) => {
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const width = 120;
    const height = 36;

    const coordinates = points.map((val, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - ((val - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    });

    const pathD = `M ${coordinates.join(" L ")}`;
    const strokeColor = isPositive ? "#10b981" : "#f43f5e";

    return (
      <svg
        width={width}
        height={height}
        className={`overflow-visible transition-opacity duration-300 ${
          isHovered ? "opacity-100 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" : "opacity-75"
        }`}
      >
        <path
          d={pathD}
          fill="none"
          stroke={strokeColor}
          strokeWidth={isHovered ? 2.2 : 1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <section id="markets" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header with Timestamp & Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1a2336] mb-6 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
              MARKET PULSE & MACRO SNAPSHOT
            </h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>DEMO / SAMPLE DATA</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Tracking key benchmark indices, commodities, and currency pairs.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-[#0d121f] px-3 py-1.5 rounded border border-[#1a2336]">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Last Updated: {marketSnapshotData.lastUpdated}</span>
        </div>
      </div>

      {/* Snapshot Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {marketSnapshotData.indices.map((item: MarketItem) => {
          const isHovered = hoveredSymbol === item.symbol;
          return (
            <div
              key={item.symbol}
              onMouseEnter={() => setHoveredSymbol(item.symbol)}
              onMouseLeave={() => setHoveredSymbol(null)}
              className={`p-4 rounded-xl fin-card relative overflow-hidden transition-all duration-200 cursor-default ${
                isHovered
                  ? "transform -translate-y-1 border-cyan-500/40 bg-[#101728] shadow-lg shadow-black/60"
                  : ""
              }`}
            >
              {/* Category & Status */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 bg-[#162032] px-1.5 py-0.5 rounded">
                  {item.category}
                </span>
                <span
                  className={`text-[11px] font-mono font-semibold flex items-center space-x-0.5 ${
                    item.isPositive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {item.isPositive ? (
                    <TrendingUp className="w-3 h-3 inline mr-0.5" />
                  ) : (
                    <TrendingDown className="w-3 h-3 inline mr-0.5" />
                  )}
                  {item.change}
                </span>
              </div>

              {/* Symbol & Name */}
              <div className="mb-2">
                <div className="font-mono-num font-bold text-base text-white">{item.symbol}</div>
                <div className="text-[11px] text-slate-400 truncate">{item.name}</div>
              </div>

              {/* Price & Change Value */}
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="font-mono-num text-xl font-bold text-slate-100">{item.price}</span>
                <span
                  className={`font-mono text-xs ${
                    item.isPositive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {item.changeValue}
                </span>
              </div>

              {/* Sparkline */}
              <div className="flex justify-center pt-1 pb-2">
                {renderSparkline(item.sparkline, item.isPositive, isHovered)}
              </div>

              {/* Extended Info on Hover / Footer */}
              <div
                className={`pt-2 border-t border-[#1a2336] grid grid-cols-2 text-[10px] font-mono text-slate-400 transition-opacity duration-200 ${
                  isHovered ? "opacity-100 text-slate-300" : "opacity-60"
                }`}
              >
                <div>
                  <span className="text-slate-400">24H H: </span>
                  <span className="text-slate-200">{item.high24h}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400">24H L: </span>
                  <span className="text-slate-200">{item.low24h}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
