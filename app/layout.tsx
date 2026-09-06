import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashwani Kumar Singh | Equity Research & Financial Markets Platform",
  description:
    "Institutional Equity Research, Fundamental Valuation, DCF Models, and Systematic Quantitative Trading by Ashwani Kumar Singh.",
  keywords: [
    "Ashwani Kumar Singh",
    "Equity Research",
    "Financial Markets",
    "Zaggle Equity Research",
    "DCF Valuation",
    "Quantitative Trading",
    "NISM Derivatives",
    "Algorithmic Trading",
    "Indian Stock Market",
  ],
  authors: [{ name: "Ashwani Kumar Singh" }],
  openGraph: {
    title: "Ashwani Kumar Singh | Equity Research & Financial Markets",
    description:
      "Turning financial data into structured investment insights. Institutional coverage, DCF models, and systematic trading strategies.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07090E] text-[#E2E8F0]">
        {children}
      </body>
    </html>
  );
}
