"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface MarketTerminalTransitionProps {
  isActive: boolean;
  onComplete?: () => void;
  targetUrl?: string;
}

export const MarketTerminalTransition: React.FC<MarketTerminalTransitionProps> = ({
  isActive,
  onComplete,
  targetUrl = "/research/zaggle",
}) => {
  const router = useRouter();
  const [phase, setPhase] = useState<number>(0); // 0: Idle, 1: Click, 2: Candlesticks Forward, 3: Fullscreen, 4: Glass Crack, 5: Shatter, 6: Reveal

  useEffect(() => {
    if (!isActive) {
      setPhase(0);
      return;
    }

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      router.push(targetUrl);
      if (onComplete) onComplete();
      return;
    }

    // Phase 1: Click response & freeze interaction (0.0s - 0.2s)
    setPhase(1);

    // Phase 2: Candlesticks surge forward (0.2s - 0.7s)
    const t2 = setTimeout(() => setPhase(2), 200);

    // Phase 3: Fullscreen market transition (0.7s - 1.2s)
    const t3 = setTimeout(() => setPhase(3), 700);

    // Phase 4: Elegant glass / mirror crack (1.2s - 1.7s)
    const t4 = setTimeout(() => setPhase(4), 1200);

    // Phase 5: Glass shatter & particles outward (1.7s - 2.1s)
    const t5 = setTimeout(() => setPhase(5), 1700);

    // Phase 6: Route navigation & research reveal (2.1s - 2.8s)
    const t6 = setTimeout(() => {
      setPhase(6);
      router.push(targetUrl);
    }, 2200);

    const tEnd = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(tEnd);
    };
  }, [isActive, targetUrl, router, onComplete]);

  if (!isActive && phase === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-auto overflow-hidden bg-black flex items-center justify-center select-none"
      style={{
        transition: "opacity 0.4s ease-out",
        opacity: phase === 6 ? 0.95 : 1,
      }}
    >
      {/* 1. Candlestick Surge Forward (Phases 2 & 3) */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-out flex items-center justify-center ${
          phase >= 2 ? "scale-[2.4] opacity-90" : "scale-100 opacity-20"
        } ${phase >= 3 ? "scale-[4.8] blur-[1px]" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",
        }}
      >
        {/* Animated Market Grid Lines */}
        <div className="absolute inset-0 bg-financial-grid opacity-30" />

        {/* 3D Candlesticks Array */}
        <div className="flex items-end space-x-6 sm:space-x-10 transform -translate-y-4">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-16 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <div className="w-5 h-28 bg-emerald-500 rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
            <div className="w-0.5 h-12 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-0.5 h-10 bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
            <div className="w-5 h-16 bg-rose-500 rounded-sm shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
            <div className="w-0.5 h-14 bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-0.5 h-20 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
            <div className="w-6 h-40 bg-emerald-400 rounded-sm shadow-[0_0_25px_rgba(16,185,129,0.8)]" />
            <div className="w-0.5 h-16 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-0.5 h-14 bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <div className="w-5 h-32 bg-cyan-400 rounded-sm shadow-[0_0_20px_rgba(56,189,248,0.7)]" />
            <div className="w-0.5 h-10 bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-0.5 h-24 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            <div className="w-6 h-48 bg-emerald-500 rounded-sm shadow-[0_0_22px_rgba(16,185,129,0.7)]" />
            <div className="w-0.5 h-18 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          </div>
        </div>

        {/* Ticker & Price Lines in 3D Motion */}
        <div className="absolute inset-x-0 top-1/3 flex justify-between px-12 text-xs font-mono text-cyan-300 opacity-60">
          <span>₹184.75 ── CMP</span>
          <span>VALUATION TARGET: ₹270.00 ──</span>
        </div>
      </div>

      {/* 2. Glass / Mirror Cracking Overlay (Phases 4 & 5) */}
      {phase >= 4 && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Transparent Glass Pane with Light Refraction */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px] mix-blend-overlay" />

          {/* SVG Optical Fracture Web Cracking Outward from Center */}
          <svg className="w-full h-full absolute inset-0 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            <g
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-crack"
            >
              {/* Central Impact Radius */}
              <circle cx="50%" cy="50%" r="14" strokeWidth="2" stroke="rgba(255,255,255,0.95)" />
              <circle cx="50%" cy="50%" r="36" strokeWidth="1.2" stroke="rgba(180,225,255,0.8)" />

              {/* Radial Fracture Spines */}
              <path d="M 50% 50% L 12% 8% M 50% 50% L 88% 12% M 50% 50% L 95% 82% M 50% 50% L 8% 90%" />
              <path d="M 50% 50% L 35% 2% M 50% 50% L 72% 3% M 50% 50% L 98% 45% M 50% 50% L 2% 48%" />
              <path d="M 50% 50% L 28% 96% M 50% 50% L 75% 97%" />

              {/* Secondary Cross Fractures */}
              <path d="M 38% 36% L 46% 25% L 58% 28% L 62% 40% L 54% 48% Z" strokeWidth="0.8" />
              <path d="M 24% 20% L 32% 16% M 76% 22% L 84% 28% M 80% 70% L 88% 64% M 20% 74% L 14% 65%" strokeWidth="0.8" />
              <path d="M 40% 64% L 50% 72% L 62% 66% L 56% 56% Z" strokeWidth="0.8" />
            </g>
          </svg>

          {/* Crystalline Light Sheen */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-300/10 to-transparent pointer-events-none"
            style={{
              animation: "pulse 0.6s ease-in-out",
            }}
          />
        </div>
      )}

      {/* 3. Shatter & Particle Dispersion (Phase 5) */}
      {phase >= 5 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Shattered Polygon Glass Shards animating outward */}
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/60 bg-white/10 backdrop-blur-sm animate-shard"
            style={{ "--tx": "-280px", "--ty": "-200px", "--rot": "-45deg" } as React.CSSProperties}
          />
          <div
            className="absolute top-1/3 right-1/4 w-40 h-28 border border-cyan-300/60 bg-cyan-500/10 backdrop-blur-sm animate-shard"
            style={{ "--tx": "320px", "--ty": "-180px", "--rot": "35deg" } as React.CSSProperties}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-36 h-36 border border-white/60 bg-white/10 backdrop-blur-sm animate-shard"
            style={{ "--tx": "-240px", "--ty": "260px", "--rot": "50deg" } as React.CSSProperties}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-44 h-32 border border-emerald-300/60 bg-emerald-500/10 backdrop-blur-sm animate-shard"
            style={{ "--tx": "290px", "--ty": "240px", "--rot": "-40deg" } as React.CSSProperties}
          />
        </div>
      )}

      {/* 4. Terminal Initialization HUD Status */}
      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center justify-center space-y-2 pointer-events-none">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-black/80 px-4 py-1.5 rounded-full border border-cyan-500/40 shadow-xl">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="tracking-widest">
            {phase < 4
              ? "INITIALIZING TERMINAL BRIDGE..."
              : phase < 6
              ? "DECRYPTING INSTITUTIONAL COVERAGE..."
              : "ZAGGLE RESEARCH LOADED"}
          </span>
        </div>
        <div className="w-48 h-1 bg-[#151922] rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-300"
            style={{
              width: phase === 1 ? "20%" : phase === 2 ? "45%" : phase === 3 ? "65%" : phase === 4 ? "85%" : "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
