"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, Terminal, ExternalLink, FileText } from "lucide-react";

interface NavigationProps {
  onOpenSearch?: () => void;
  onOpenResume?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenSearch, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener for '/' and 'Ctrl+K'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) ||
          ((e.metaKey || e.ctrlKey) && e.key === "k")) {
        e.preventDefault();
        if (onOpenSearch) onOpenSearch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenSearch]);

  const navLinks = [
    { label: "MARKETS", href: "/#markets" },
    { label: "RESEARCH", href: "/#research" },
    { label: "ANALYSIS", href: "/#strategy-lab" },
    { label: "PROCESS", href: "/#process" },
    { label: "ABOUT", href: "/#about" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#020306]/90 backdrop-blur-md border-b border-[#151922] py-2.5 shadow-lg shadow-black/60"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Terminal Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-8 w-8 rounded border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-mono-num font-bold text-sm tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  ASHWANI.R
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#090b10] text-slate-300 border border-[#1f2636] tracking-wider">
                  EQUITY RESEARCH
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors py-1 relative"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions & Status */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Market Status Pill */}
            <div className="flex items-center space-x-2 px-2.5 py-1 rounded-full bg-[#0d121f] border border-[#1e293b] text-[11px] font-mono text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>MARKET DATA</span>
              <span className="text-[9px] text-slate-400 bg-slate-800/80 px-1 py-0.2 rounded">SAMPLE</span>
            </div>

            {/* Quick Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#0d121f] border border-[#1e293b] hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all text-xs font-mono cursor-pointer"
              title="Press / or Ctrl+K to search"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>TERMINAL</span>
              <kbd className="text-[10px] bg-[#1a2336] px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">
                /
              </kbd>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 text-cyan-400 text-xs font-mono font-medium transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-md bg-[#0d121f] border border-[#1e293b] text-slate-300"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#0d121f] border border-[#1e293b] text-slate-300 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07090e]/95 backdrop-blur-lg pt-20 px-6 pb-8 md:hidden flex flex-col justify-between">
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#1e293b]">
              <span className="text-xs font-mono text-slate-400">NAVIGATION MENU</span>
              <div className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>DATA ACTIVE</span>
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-mono tracking-wider text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/40"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-[#1e293b] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-md bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-mono text-xs"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </button>
            <p className="text-[11px] font-mono text-slate-400 text-center">
              Ashwani Kumar Singh • Equity Research & Markets
            </p>
          </div>
        </div>
      )}
    </>
  );
};
