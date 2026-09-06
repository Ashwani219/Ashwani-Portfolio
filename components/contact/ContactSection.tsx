"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Terminal } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profileData";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="pb-4 border-b border-[#1a2336]">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
          <span className="uppercase tracking-widest font-bold">COMMUNICATION CHANNEL</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Let&apos;s Connect
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          Open to opportunities in Equity Research, Financial Analysis, Asset Management, and Quantitative Trading.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info Card */}
        <div className="lg:col-span-5 fin-card p-6 sm:p-8 rounded-xl border border-[#1e293b] space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>DIRECT CONTACT DETAILS</span>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="flex items-start space-x-3 text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 mt-0.5" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase">Primary Email</div>
                <a href={`mailto:${profileData.email}`} className="text-sm font-semibold hover:text-cyan-300">
                  {profileData.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 mt-0.5" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase">Telephone / WhatsApp</div>
                <span className="text-sm font-semibold">{profileData.phone}</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 mt-0.5" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase">Location</div>
                <span className="text-sm font-semibold">{profileData.location}</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-300">
              <LinkedinIcon className="w-4 h-4 text-blue-400 mt-0.5" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase">LinkedIn Profile</div>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold hover:text-cyan-300"
                >
                  linkedin.com/in/ashwani-kumar-singh-580301240
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#07090e] border border-[#1a2336] text-[11px] font-mono text-slate-400">
            Available for in-person and remote interviews across Mumbai, Bengaluru, Gurugram, Jaipur, and nationwide.
          </div>
        </div>

        {/* Right Message Form */}
        <div className="lg:col-span-7 fin-card p-6 sm:p-8 rounded-xl border border-[#1e293b]">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Message Transmitted</h3>
              <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
                Thank you for reaching out. I will review your message and reply promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 rounded bg-[#131b2e] text-xs font-mono text-cyan-400 hover:text-white cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">YOUR EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@firm.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">FIRM / INSTITUTION</label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Asset Management / Brokerage / Research Firm"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">INQUIRY / MESSAGE *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Discuss an equity research role, quantitative strategy, or research inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <span>TRANSMIT INQUIRY</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
