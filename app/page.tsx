"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { MarketSnapshot } from "@/components/market/MarketSnapshot";
import { FeaturedResearch } from "@/components/research/FeaturedResearch";
import { StrategyLab } from "@/components/strategy/StrategyLab";
import { ResearchProcess } from "@/components/research/ResearchProcess";
import { AboutSection } from "@/components/about/AboutSection";
import { ResumeCTA } from "@/components/resume/ResumeCTA";
import { ContactSection } from "@/components/contact/ContactSection";
import { ResearchTerminalModal } from "@/components/layout/ResearchTerminalModal";
import { ResumeViewerModal } from "@/components/resume/ResumeViewerModal";

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#020306] text-[#e2e8f0]">
      {/* Sticky Translucent Header */}
      <Navigation
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow space-y-12">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Macro & Index Market Pulse */}
        <MarketSnapshot />

        {/* 3. Featured Flagship Equity Research */}
        <FeaturedResearch />

        {/* 4. Quantitative Trading & Backtesting Lab (Analysis) */}
        <StrategyLab />

        {/* 5. Institutional 8-Stage Research Process */}
        <ResearchProcess />

        {/* 6. Professional Bio, Certifications, and Skills Matrix */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 7. Resume Dossier CTA */}
        <ResumeCTA onOpenResume={() => setIsResumeOpen(true)} />

        {/* 8. Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Footer & Compliance Disclaimer */}
      <Footer />

      {/* Global Interactive Modals */}
      <ResearchTerminalModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenResume={() => {
          setIsSearchOpen(false);
          setIsResumeOpen(true);
        }}
      />

      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
