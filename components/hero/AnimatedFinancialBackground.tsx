"use client";

import React, { useEffect, useRef } from "react";

interface Candle {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width: number;
  isGreen: boolean;
  alpha: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
}

interface MarketTicker {
  text: string;
  x: number;
  y: number;
  alpha: number;
  speed: number;
}

export const AnimatedFinancialBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initChart();
    };
    window.addEventListener("resize", handleResize);

    // Candlesticks setup
    const candleWidth = 7;
    const candleSpacing = 14;
    const numCandles = Math.ceil(width / (candleWidth + candleSpacing)) + 15;
    let candles: Candle[] = [];

    const initChart = () => {
      candles = [];
      let basePrice = height * 0.55;
      for (let i = 0; i < numCandles; i++) {
        const delta = (Math.sin(i * 0.15) * 20) + ((Math.random() - 0.49) * 16);
        const open = basePrice;
        const close = open + delta;
        const high = Math.max(open, close) + Math.random() * 12 + 2;
        const low = Math.min(open, close) - Math.random() * 12 - 2;
        candles.push({
          x: i * (candleWidth + candleSpacing),
          open,
          close,
          high,
          low,
          width: candleWidth,
          isGreen: close >= open,
          alpha: 0.12 + Math.random() * 0.08,
        });
        basePrice = close;
        if (basePrice < height * 0.3) basePrice = height * 0.4;
        if (basePrice > height * 0.75) basePrice = height * 0.65;
      }
    };

    initChart();

    // Floating particles (faint data points)
    const particles: Particle[] = Array.from({ length: 28 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: -Math.random() * 0.25 - 0.05,
      alpha: Math.random() * 0.2 + 0.05,
    }));

    // Occasional faint market data ticker values
    const tickers: MarketTicker[] = [
      { text: "NIFTY 25,235.90 ▲ +0.45%", x: width * 0.15, y: height * 0.25, alpha: 0.12, speed: 0.2 },
      { text: "ZAGGLE 184.75 ▲ +46.1% DCF", x: width * 0.75, y: height * 0.35, alpha: 0.14, speed: 0.18 },
      { text: "BANK NIFTY 51,412.30 ▲", x: width * 0.45, y: height * 0.72, alpha: 0.10, speed: 0.22 },
      { text: "USD/INR 83.88 ▼ -0.07%", x: width * 0.82, y: height * 0.8, alpha: 0.12, speed: 0.15 },
    ];

    let offset = 0;
    const speed = prefersReducedMotion ? 0 : 0.25; // Very slow, graceful institutional drift

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Faint Horizontal Grid Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      const gridStep = 70;
      for (let y = 0; y < height; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      for (let x = 0; x < width; x += gridStep * 1.5) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // 2. Slow horizontal drift of candlesticks
      offset += speed;
      const totalCandleSpan = candleWidth + candleSpacing;

      // Draw 50-period Moving Average line above candlesticks
      ctx.beginPath();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.14)";
      ctx.lineWidth = 1.4;
      let firstPoint = true;

      for (let i = 0; i < candles.length; i++) {
        const c = candles[i];
        let currentX = c.x - offset;

        // Wrap around seamlessly
        if (currentX < -totalCandleSpan) {
          c.x += numCandles * totalCandleSpan;
          currentX = c.x - offset;
        }

        const midY = (c.open + c.close) / 2;
        if (firstPoint) {
          ctx.moveTo(currentX, midY);
          firstPoint = false;
        } else {
          ctx.lineTo(currentX, midY);
        }

        // Draw Candlestick wick
        ctx.strokeStyle = c.isGreen
          ? `rgba(16, 185, 129, ${c.alpha * 0.8})`
          : `rgba(244, 63, 94, ${c.alpha * 0.8})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(currentX + c.width / 2, c.high);
        ctx.lineTo(currentX + c.width / 2, c.low);
        ctx.stroke();

        // Draw Candlestick body
        const topY = Math.min(c.open, c.close);
        const bodyHeight = Math.max(Math.abs(c.open - c.close), 2);

        ctx.fillStyle = c.isGreen
          ? `rgba(16, 185, 129, ${c.alpha})`
          : `rgba(244, 63, 94, ${c.alpha})`;
        ctx.fillRect(currentX, topY, c.width, bodyHeight);
      }
      ctx.stroke();

      // 3. Faint Data Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.y += p.speedY;
          p.x += p.speedX;
          if (p.y < 0) p.y = height;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
        }

        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Subtle Market Data Quotes in Background
      ctx.font = "10px monospace";
      for (let i = 0; i < tickers.length; i++) {
        const t = tickers[i];
        if (!prefersReducedMotion) {
          t.x -= t.speed;
          if (t.x < -200) t.x = width + 50;
        }
        ctx.fillStyle = `rgba(148, 163, 184, ${t.alpha})`;
        ctx.fillText(t.text, t.x, t.y);
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      style={{ filter: "contrast(1.05)" }}
    />
  );
};
