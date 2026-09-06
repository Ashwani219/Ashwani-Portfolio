"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profileData";
import { Award, GraduationCap, MapPin, Mail, Phone, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";
import { CertificationsGrid } from "./CertificationsGrid";
import { SkillsMatrix } from "./SkillsMatrix";

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="pb-4 border-b border-[#1a2336]">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
          <span className="uppercase tracking-widest font-bold">PROFESSIONAL PROFILE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          About Ashwani Kumar Singh
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          Combining computer science engineering discipline with institutional equity research and systematic trading.
        </p>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait & Quick Facts */}
        <div className="lg:col-span-4 fin-card p-6 rounded-xl border border-[#1e293b] space-y-6">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#223049] bg-[#07090e]">
            <img
              src={profileData.profilePhoto}
              alt={profileData.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-transparent p-4">
              <div className="text-sm font-bold text-white">{profileData.name}</div>
              <div className="text-[11px] font-mono text-cyan-400">Jaipur, Rajasthan, India</div>
            </div>
          </div>

          {/* Quick Contact & Links */}
          <div className="space-y-2.5 text-xs font-mono">
            <div className="flex items-center space-x-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <a href={`mailto:${profileData.email}`} className="hover:text-cyan-300 truncate">
                {profileData.email}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{profileData.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300 truncate"
              >
                linkedin.com/in/ashwani-kumar-singh
              </a>
            </div>
          </div>

          <button
            onClick={onOpenResume}
            className="w-full py-2.5 rounded-lg bg-cyan-500/15 border border-cyan-500/40 hover:bg-cyan-500/25 text-cyan-300 font-mono text-xs font-bold transition-all text-center cursor-pointer"
          >
            OPEN COMPLETE RESUME
          </button>
        </div>

        {/* Right Column: Bio Narrative, Education, and Experience */}
        <div className="lg:col-span-8 space-y-6">
          {/* Executive Narrative */}
          <div className="fin-card p-6 rounded-xl border border-[#1e293b] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Positioning & Background</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              I am a <strong>Computer Science Engineering graduate</strong> from Poornima Institute of Engineering and Technology, Jaipur (Class of 2026), with a dedicated focus on <strong>equity research, financial statements, and quantitative trading systems</strong>.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Holding <strong>Dual NISM Certifications</strong> in Equity Derivatives (Series VIII, 76.5%) and Currency Derivatives (Series I, 73.0%), I blend programmatic rigor—Python data manipulation, algorithmic backtesting, and automated risk controls—with fundamental valuation techniques including 5-year explicit FCFF DCF models, forensic EBIT reconciliations, and peer multiple benchmarking.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              My goal is to contribute institutional rigor, data integrity, and high-conviction analysis to an entry-level role in equity research, asset management, or quantitative trading operations.
            </p>
          </div>

          {/* Education & Trading Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Education Card */}
            <div className="fin-card p-5 rounded-xl border border-[#1e293b] space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-cyan-500/40 pl-3 space-y-1">
                  <div className="text-xs font-bold text-white">{edu.degree}</div>
                  <div className="text-[11px] font-mono text-slate-400">{edu.institution}</div>
                  <div className="text-[10px] font-mono text-cyan-400">{edu.period}</div>
                </div>
              ))}
            </div>

            {/* Practical Market Experience */}
            <div className="fin-card p-5 rounded-xl border border-[#1e293b] space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>MARKET EXPERIENCE</span>
              </div>
              {profileData.experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-emerald-500/40 pl-3 space-y-1.5">
                  <div className="text-xs font-bold text-white">{exp.role}</div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {exp.organization} • {exp.period}
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Active trader and researcher analyzing Indian equity derivatives (NSE options & futures) with strict position sizing, stop-loss rules, and risk-reward optimization.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <CertificationsGrid />

      {/* Skills Matrix Section */}
      <SkillsMatrix />
    </section>
  );
};
