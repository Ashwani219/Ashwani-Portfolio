"use client";

import React from "react";
import { Layers, Terminal, Database, Wrench } from "lucide-react";
import { profileData } from "@/data/profileData";

export const SkillsMatrix: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-[#1a2336]">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
          <Layers className="w-4 h-4" />
          <span>CORE COMPETENCIES</span>
        </div>
        <h3 className="text-xl font-bold text-white">Skills & Platform Stack</h3>
        <p className="text-xs text-slate-400 mt-1">
          Technical, fundamental, and derivative capabilities demonstrated throughout projects and research publications.
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {profileData.skillCategories.map((cat, idx) => (
          <div key={idx} className="p-5 rounded-xl fin-card border border-[#1e293b] space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">{cat.category}</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded bg-[#07090e] border border-[#1a2336] text-xs font-mono text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Platforms Banner */}
      <div className="p-6 rounded-xl fin-card border border-[#1e293b] bg-gradient-to-r from-[#0d121f] via-[#0b101b] to-[#07090e]">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-4">
          <Wrench className="w-4 h-4" />
          <span>PROFESSIONAL TOOLS & PLATFORMS</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div>
            <div className="text-slate-400 uppercase text-[10px] mb-1.5">Trading & Quantitative Analysis:</div>
            <div className="text-slate-200 font-semibold">{profileData.toolsAndPlatforms.tradingAndAnalysis.join(" • ")}</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase text-[10px] mb-1.5">Market Data & Screening:</div>
            <div className="text-slate-200 font-semibold">{profileData.toolsAndPlatforms.marketDataAndResearch.join(" • ")}</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase text-[10px] mb-1.5">Data & Computational Languages:</div>
            <div className="text-slate-200 font-semibold">{profileData.toolsAndPlatforms.programmingAndData.join(" • ")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
