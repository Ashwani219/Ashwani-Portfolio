"use client";

import React from "react";
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { profileData, Certification } from "@/data/profileData";

export const CertificationsGrid: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-[#1a2336] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFIED REGULATORY CREDENTIALS</span>
          </div>
          <h3 className="text-xl font-bold text-white">Certifications & Accreditations</h3>
        </div>
        <a
          href="https://certifications.nism.ac.in/nismskills"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
        >
          <span>NISM Skills Registry Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profileData.certifications.map((cert: Certification) => (
          <div
            key={cert.id}
            className="p-5 rounded-xl fin-card border border-[#1e293b] hover:border-emerald-500/40 space-y-3 transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {cert.issuer}
                </span>
                <h4 className="text-sm font-bold text-white mt-2">{cert.name}</h4>
              </div>
              {cert.score && (
                <div className="text-right">
                  <span className="text-xs font-mono-num font-bold text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-500/30">
                    {cert.score}
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed">{cert.description}</p>

            <div className="pt-2 border-t border-[#1a2336] flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
              <div>
                <span>Date: </span>
                <span className="text-slate-300">{cert.date}</span>
                {cert.validUntil && (
                  <span className="text-slate-400"> • Valid: {cert.validUntil}</span>
                )}
              </div>
              {cert.enrolmentNo && (
                <div className="text-slate-400">
                  Enrolment: <span className="text-cyan-400">{cert.enrolmentNo}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
