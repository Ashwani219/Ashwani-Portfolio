export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  validUntil?: string;
  score?: string;
  enrolmentNo?: string;
  verificationUrl?: string;
  description: string;
  badgeColor: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  techStack: string[];
  category: "Equity Research" | "Quantitative Trading" | "Software Engineering";
  linkText: string;
  linkHref: string;
  isFeatured: boolean;
  metricsSummary?: { label: string; value: string }[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProfileData {
  name: string;
  shortName: string;
  terminalTag: string;
  tagline: string;
  headline: string;
  supportingText: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  profilePhoto: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string;
  }[];
  experience: Experience[];
  certifications: Certification[];
  skillCategories: SkillCategory[];
  toolsAndPlatforms: {
    tradingAndAnalysis: string[];
    marketDataAndResearch: string[];
    programmingAndData: string[];
  };
  projects: Project[];
}

export const profileData: ProfileData = {
  name: "Ashwani Kumar Singh",
  shortName: "Ashwani K. Singh",
  terminalTag: "AKS / ASHWANI.R",
  tagline: "Equity Research | Financial Markets | Fundamental Analysis | Technical Analysis | Quantitative Trading",
  headline: "Turning financial data into structured investment insights.",
  supportingText:
    "I analyze businesses, financial statements, valuation, market trends and price behavior to develop structured, institutional-grade investment views and systematic trading frameworks.",
  email: "ak219singh@gmail.com",
  phone: "+91 8535047344",
  location: "Jaipur, Rajasthan, India",
  linkedin: "https://www.linkedin.com/in/ashwani-kumar-singh-580301240",
  github: "https://github.com/ashwaniksingh",
  profilePhoto: "/assets/ashwani-photo.jpg",
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Poornima Institute of Engineering and Technology, Jaipur",
      period: "2022 – 2026",
      details:
        "Combining software engineering rigor, Python algorithmic development, and quantitative data structures with institutional financial market analysis.",
    },
    {
      degree: "Senior Secondary (12th CBSE)",
      institution: "Mahi International School, Agra",
      period: "2021",
      details: "Mathematics, Physics, Chemistry stream with foundational analytical training.",
    },
  ],
  experience: [
    {
      role: "Financial Markets Research & Systematic Trading",
      organization: "Independent Trader & Research Analyst",
      period: "2023 – Present",
      location: "India",
      bullets: [
        "Analyzed price trends and market structure in Indian equity derivatives (NSE options and futures).",
        "Formulated rule-based trade setups combining order flow, support/resistance, moving averages, and volatility breakouts.",
        "Implemented rigorous position sizing and risk management protocols to protect capital across high-volatility macro regimes.",
        "Maintained detailed trade logs and performance metrics to continuously optimize expectancy, win rate, and drawdown controls.",
      ],
    },
  ],
  certifications: [
    {
      id: "nism-viii",
      name: "NISM Series VIII: Equity Derivatives Certification",
      issuer: "National Institute of Securities Markets (NISM)",
      date: "July 03, 2026",
      validUntil: "July 02, 2029",
      score: "76.5 / 100 (Pass)",
      enrolmentNo: "2610273450",
      verificationUrl: "https://certifications.nism.ac.in/nismskills",
      description:
        "Mandated by SEBI for derivatives market practitioners. Demonstrates deep understanding of futures, options pricing, Greeks, trading strategies, and hedging mechanics.",
      badgeColor: "emerald",
    },
    {
      id: "nism-i",
      name: "NISM Series I: Currency Derivatives Certification",
      issuer: "National Institute of Securities Markets (NISM)",
      date: "July 24, 2026",
      validUntil: "July 23, 2029",
      score: "73.0 / 100 (Pass)",
      enrolmentNo: "2610310590",
      verificationUrl: "https://certifications.nism.ac.in/nismskills",
      description:
        "Certified in foreign exchange market mechanisms, currency futures, options contracts, interest rate parity, and macro currency risk management under SEBI guidelines.",
      badgeColor: "blue",
    },
    {
      id: "yale-fm",
      name: "Financial Markets",
      issuer: "Yale University (Coursera)",
      date: "August 2026",
      description:
        "Under Prof. Robert Shiller. Comprehensive coursework in modern portfolio theory, CAPM, behavioral finance, risk management, and securities valuation.",
      badgeColor: "indigo",
    },
    {
      id: "macquarie-excel",
      name: "Excel Skills for Business: Essentials",
      issuer: "Macquarie University (Coursera)",
      date: "November 2025",
      description:
        "Proficiency in advanced financial spreadsheets, multi-statement modeling, dynamic lookup tables, sensitivity grids, and financial data analysis.",
      badgeColor: "teal",
    },
  ],
  skillCategories: [
    {
      category: "Equity Research & Valuation",
      skills: [
        "Fundamental Analysis",
        "Financial Statement Analysis",
        "5-Year FCFF DCF Modeling",
        "Relative Peer Multiples (P/E, EV/EBITDA, EV/Sales)",
        "Scenario Analysis (Bear/Base/Bull)",
        "Forensic EBIT & Cash Flow Reconciliation",
        "Working Capital & DSO Normalization",
        "Quality of Earnings Audit",
      ],
    },
    {
      category: "Markets & Derivatives",
      skills: [
        "Technical Analysis & Market Structure",
        "NSE Equity Futures & Options",
        "Currency Derivatives (USD/INR)",
        "Systematic Risk Management & Position Sizing",
        "Support / Resistance & Moving Average Confluence",
        "RSI / MACD Momentum Indicators",
        "Volatility & Drawdown Mitigation",
      ],
    },
    {
      category: "Technology & Quantitative Tools",
      skills: [
        "Python (Pandas, NumPy, VectorBT, Backtrader)",
        "Algorithmic Trading & Strategy Backtesting",
        "Pine Script & TradingView Development",
        "MetaTrader 5 (MT5) Data Processing",
        "SQL & Financial Time-Series Databases",
        "Advanced Excel / Financial Modeling",
        "Git & Modern Web Development",
      ],
    },
  ],
  toolsAndPlatforms: {
    tradingAndAnalysis: ["TradingView", "MetaTrader 5", "Screener.in", "Pine Script", "VectorBT"],
    marketDataAndResearch: ["NSE India", "BSE", "Investing.com", "Moneycontrol", "Trendlyne"],
    programmingAndData: ["Python", "Pandas", "NumPy", "SQL", "Excel", "TypeScript", "Next.js"],
  },
  projects: [
    {
      id: "zaggle-research",
      title: "Equity Research & Valuation: Zaggle Prepaid Ocean Services Ltd.",
      tagline: "21-Page Institutional Coverage Initiation, 5-Yr DCF & Forensic Quality of Earnings Audit",
      description: [
        "Conducted end-to-end fundamental research on India's B2B SaaS FinTech leader automating spend workflows across 19 partner banks.",
        "Engineered a comprehensive 5-year explicit FCFF DCF model, determining a Base-Case intrinsic fair value of ₹270.00/share (+46.1% upside from ₹184.75 CMP).",
        "Performed a forensic reconciliation isolating true operating EBIT (₹1,571.2M) from ₹380M non-operating Treasury Other Income to avoid double-counting in enterprise valuation.",
        "Audited 5 strategic M&A transactions (Dice Technology, Span Across/TaxSpanner, Mobileware, Rivpe, Unobanc) and modeled working capital normalization.",
      ],
      techStack: ["DCF Modeling", "Peer Multiples", "Financial Forensics", "Ind AS 108", "Sensitivity Grids"],
      category: "Equity Research",
      linkText: "Read Institutional Report",
      linkHref: "/research/zaggle",
      isFeatured: true,
      metricsSummary: [
        { label: "Recommendation", value: "ACCUMULATE" },
        { label: "CMP", value: "₹184.75" },
        { label: "Target Fair Value", value: "₹270.00" },
        { label: "Expected Upside", value: "+46.1%" },
      ],
    },
    {
      id: "xauusd-backtest",
      title: "XAUUSD SATS + Dynamic Swing Algorithmic Trading Strategy",
      tagline: "Institutional MT5 Backtest on 36,993 M15 Bars with Out-of-Sample Split Validation",
      description: [
        "Backtested an algorithmic execution framework integrating SATS v1.12.0 trend logic with a 50-period Dynamic Swing direction engine on tick-accurate XAUUSD M15 data.",
        "Implemented strict execution realism: completed-bar close signals executed on N+1 open, actual bid/ask spread modeling (median 0.08 pts), zero synthetic candle filling.",
        "Demonstrated rock-solid out-of-sample robustness: Unseen 30% Validation yielded a Profit Factor of 2.42 with +$393.90 PnL, outperforming 70% In-Sample Development (1.66 PF).",
        "Maintained exceptional capital defense: Maximum Drawdown of just -1.23% (-$132.81) with a 2.18 Daily Sharpe Ratio and 2.36x Win/Loss ratio across 213 total trades.",
      ],
      techStack: ["Python", "MT5 Export", "Pandas", "Out-of-Sample Testing", "Risk Management"],
      category: "Quantitative Trading",
      linkText: "Explore Strategy Lab",
      linkHref: "/#strategy-lab",
      isFeatured: true,
      metricsSummary: [
        { label: "Profit Factor", value: "1.94 (2.42 OOS)" },
        { label: "Daily Sharpe", value: "2.18" },
        { label: "Max Drawdown", value: "-1.23%" },
        { label: "Total Trades", value: "213" },
      ],
    },
    {
      id: "nifty-algo-bot",
      title: "Nifty 50 Algorithmic Trading & Risk Engine",
      tagline: "Automated Indicator Computation, Risk Sizing, and Drawdown Caps",
      description: [
        "Constructed a Python trading pipeline using Pandas and VectorBT/Backtrader to backtest moving average crossovers, RSI, and ATR volatility bands on historical Nifty 50 data.",
        "Engineered automated stop-loss mechanisms, trailing stops, dynamic ATR position sizing, and maximum portfolio drawdown breakers.",
        "Prioritized risk-adjusted metrics (Sharpe ratio, Sortino, max drawdown duration) over unhedged absolute return optimization.",
      ],
      techStack: ["Python", "VectorBT", "Backtrader", "Pandas", "Risk Controls"],
      category: "Quantitative Trading",
      linkText: "View Code & Architecture",
      linkHref: "/#strategy-lab",
      isFeatured: false,
      metricsSummary: [
        { label: "Focus", value: "Drawdown Control" },
        { label: "Asset", value: "NIFTY 50" },
        { label: "Execution", value: "Automated Risk Stops" },
      ],
    },
  ],
};
