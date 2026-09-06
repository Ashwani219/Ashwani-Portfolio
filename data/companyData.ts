export interface ValuationScenario {
  name: string;
  targetPrice: number;
  impliedUpside: number;
  probability: number;
  assumptions: string;
}

export interface FinancialMetricYear {
  year: string;
  grossRevenue: number;
  revenueGrowthPct?: number;
  netRevenue: number;
  adjustedEbitda: number;
  ebitdaMarginGrossPct: number;
  ebitdaMarginNetPct: number;
  adjustedPat: number;
  patMarginPct: number;
  dilutedEps: number;
  cfo: number;
  netCash: number;
}

export interface SegmentPerformance {
  segment: string;
  fy24a: number;
  fy25a: number;
  fy26a: number;
  q1fy26a: number;
  q1fy27a: number;
  yoyPct: string;
  notes: string;
}

export interface PeerComparisonItem {
  company: string;
  mcapCr: string;
  revYoy: string;
  ebitdaMargin: string;
  patMargin: string;
  pe: string;
  evEbitda: string;
  evSales: string;
  roe: string;
  isFocusCompany?: boolean;
}

export interface DcfYearProjection {
  year: string;
  grossRevenue: number;
  growthPct: number;
  ebitda: number;
  ebitdaMarginPct: number;
  dna: number;
  trueEbit: number;
  tax: number;
  nopat: number;
  capex: number;
  deltaNwc: number;
  fcff: number;
  discountFactor: number;
  pvFcff: number;
}

export interface DcfBridge {
  cumulativePvFcff: number;
  terminalGrowthRate: number;
  terminalYearFcff: number;
  terminalValue: number;
  pvTerminalValue: number;
  enterpriseValue: number;
  netCashBalance: number;
  totalEquityValue: number;
  sharesOutstanding: number;
  intrinsicValuePerShare: number;
  currentMarketPrice: number;
  impliedUpside: number;
  terminalValuePctEv: number;
  impliedTerminalEbitdaMultiple: number;
  wacc: number;
  rf: number;
  beta: number;
  erp: number;
  costOfDebt: number;
  equityWeight: number;
  debtWeight: number;
}

export interface CompanyResearchReport {
  id: string;
  name: string;
  ticker: string;
  bseCode: string;
  bloomberg: string;
  sector: string;
  subIndustry: string;
  researchDate: string;
  analyst: string;
  currentPrice: number;
  targetPrice: number;
  expectedUpside: number;
  investmentView: "ACCUMULATE" | "BUY" | "HOLD" | "REDUCE";
  riskProfile: "Low" | "Medium" | "Medium-to-High" | "High";
  convictionScore: number; // out of 10
  fundamentalScore: number; // out of 100
  valuationIndicator: "ATTRACTIVE" | "FAIR" | "OVERVALUED";
  marketCapCr: number;
  enterpriseValueCr: number;
  cashAndDepositsCr: number;
  totalDebtCr: number;
  netCashCr: number;
  netCashMcapPct: number;
  promoterHoldingPct: number;
  promoterPledgedPct: number;
  trailingPe: number;
  forwardPe: number;
  trailingEvEbitda: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  sharesOutstandingMn: number;
  executiveSummary: string;
  valuationScenarios: ValuationScenario[];
  reasonsToOwn: string[];
  risksToMonitor: string[];
  historicalFinancials: FinancialMetricYear[];
  segmentData: SegmentPerformance[];
  peerComparisons: PeerComparisonItem[];
  dcfProjections: DcfYearProjection[];
  dcfBridge: DcfBridge;
  sensitivityWaccVsG: {
    waccs: number[];
    gs: number[];
    grid: number[][];
  };
  sensitivityGrowthVsMargin: {
    growths: number[];
    margins: number[];
    grid: number[][];
  };
  technicalSetup: {
    cmp: number;
    fiftyDma: number;
    twoHundredDma: number;
    rsi14: number;
    macdHist: number;
    supportZones: string[];
    resistanceZones: string[];
    analysis: string;
    relativeAlphaVsNifty: {
      period: string;
      stockReturn: string;
      niftyReturn: string;
      alpha: string;
      driver: string;
    }[];
  };
  shareholding: {
    categories: { name: string; percentage: number; color: string }[];
    historical: { category: string; jun25: string; mar26: string; jun26: string; qoqChange: string }[];
  };
  catalysts: { timeHorizon: string; event: string; impact: string; indicator: string }[];
  prioritizedRisks: {
    risk: string;
    prob: "Low" | "Med" | "High";
    impact: "Low" | "Med" | "High";
    indicator: string;
    financialImpact: string;
    mitigation: string;
    frequency: string;
  }[];
  aiKnowledgeBase: { question: string; answer: string; tag: string }[];
}

export const zaggleResearchReport: CompanyResearchReport = {
  id: "zaggle",
  name: "Zaggle Prepaid Ocean Services Ltd.",
  ticker: "ZAGGLE",
  bseCode: "543985",
  bloomberg: "ZAGGLE:IN",
  sector: "FinTech / Enterprise SaaS",
  subIndustry: "Corporate Spend Automation & Card Rail Infrastructure",
  researchDate: "September 2, 2026",
  analyst: "Ashwani Kumar Singh",
  currentPrice: 184.75,
  targetPrice: 270.0,
  expectedUpside: 46.1,
  investmentView: "ACCUMULATE",
  riskProfile: "Medium-to-High",
  convictionScore: 7.5,
  fundamentalScore: 82,
  valuationIndicator: "ATTRACTIVE",
  marketCapCr: 2484.1,
  enterpriseValueCr: 1983.8,
  cashAndDepositsCr: 545.8,
  totalDebtCr: 45.4,
  netCashCr: 500.4,
  netCashMcapPct: 20.1,
  promoterHoldingPct: 44.3,
  promoterPledgedPct: 0.0,
  trailingPe: 17.9,
  forwardPe: 13.31,
  trailingEvEbitda: 10.23,
  fiftyTwoWeekHigh: 409.45,
  fiftyTwoWeekLow: 154.4,
  sharesOutstandingMn: 134.46,
  executiveSummary:
    "Zaggle is an Indian B2B SaaS FinTech leader automating corporate spend workflows across expense management (Save), channel incentives (Propel), vendor procure-to-pay (Zoyer), and fleet analytics (Zatix). The company delivered a 51.1% Consolidated Revenue CAGR and 82.3% PAT CAGR over FY23–FY26. Following a sharp ~55% drawdown from ₹409.45 to recent lows near ₹154.40—triggered by front-loaded Dice acquisition integration costs in Q1 FY27 and working capital elongation in FY26—the stock offers a highly compelling entry at 17.9x FY26 P/E, 13.3x FY27E P/E, and 10.2x EV/EBITDA, strongly supported by ₹500.4 Cr in net cash (~20% of market cap). Our 5-year explicit FCFF DCF model yields a Base Case intrinsic value of ₹270.00 (+46.1% upside).",
  valuationScenarios: [
    {
      name: "BEAR CASE",
      targetPrice: 150.0,
      impliedUpside: -18.8,
      probability: 20.0,
      assumptions: "12.5% Rev CAGR, 9.5% EBITDA Margin, WACC = 14.0%, exit multiple = 6.2x",
    },
    {
      name: "BASE CASE (Primary)",
      targetPrice: 270.0,
      impliedUpside: 46.1,
      probability: 60.0,
      assumptions: "20.3% Rev CAGR, 12.5% Terminal EBITDA Margin, WACC = 13.4%, exit multiple = 7.3x",
    },
    {
      name: "BULL CASE",
      targetPrice: 380.0,
      impliedUpside: 105.7,
      probability: 20.0,
      assumptions: "24.5% Rev CAGR, 14.0% Terminal EBITDA Margin, WACC = 13.0%, exit multiple = 8.5x",
    },
  ],
  reasonsToOwn: [
    "Pre-Integrated Multi-Bank Card Rail Moat across 19 scheduled banks creating high barriers to entry.",
    "Dual Monetization Engine combining high-margin recurring SaaS ARR with commercial card interchange fees.",
    "Strategic M&A Portfolio Expansion including Dice AI (100+ tech team, enterprise clients), TaxSpanner, and Mobileware.",
    "Unleveraged Balance Sheet with ₹500.4 Cr in liquid net cash (~20.1% of market cap) providing significant downside cushion.",
    "Secular Regulatory Tailwinds: Expansion of perk wallets (meal/fuel allowances) under India's New Tax Regime.",
  ],
  risksToMonitor: [
    "Working Capital Drag: Historical expansion of trade receivables and bank floats causing negative CFO in FY24/FY26.",
    "Bank Rail Dependency: High volume concentration in top 3 private banks exposing interchange take-rates.",
    "M&A Integration Friction: Front-loaded operating expenses and team absorption impacting near-term reported margins.",
    "Regulatory Intervention: Potential RBI directives or caps on commercial card interchange sharing.",
    "Client Concentration: Spend reduction by large enterprise accounts impacting card gross transaction value (GTV).",
  ],
  historicalFinancials: [
    {
      year: "FY22A",
      grossRevenue: 3712.6,
      netRevenue: 1540.0,
      adjustedEbitda: 603.0,
      ebitdaMarginGrossPct: 16.2,
      ebitdaMarginNetPct: 28.5,
      adjustedPat: 419.2,
      patMarginPct: 11.3,
      dilutedEps: 2.1,
      cfo: 50.0,
      netCash: -984.7,
    },
    {
      year: "FY23A",
      grossRevenue: 5534.6,
      revenueGrowthPct: 49.1,
      netRevenue: 2345.9,
      adjustedEbitda: 625.1,
      ebitdaMarginGrossPct: 11.3,
      ebitdaMarginNetPct: 26.6,
      adjustedPat: 229.0,
      patMarginPct: 4.1,
      dilutedEps: 2.46,
      cfo: -156.2,
      netCash: -984.7,
    },
    {
      year: "FY24A",
      grossRevenue: 7756.0,
      revenueGrowthPct: 40.1,
      netRevenue: 3958.8,
      adjustedEbitda: 855.7,
      ebitdaMarginGrossPct: 11.0,
      ebitdaMarginNetPct: 21.6,
      adjustedPat: 440.2,
      patMarginPct: 5.7,
      dilutedEps: 4.03,
      cfo: -827.5,
      netCash: 2057.1,
    },
    {
      year: "FY25A",
      grossRevenue: 13037.6,
      revenueGrowthPct: 68.1,
      netRevenue: 6256.0,
      adjustedEbitda: 1233.6,
      ebitdaMarginGrossPct: 9.5,
      ebitdaMarginNetPct: 19.8,
      adjustedPat: 879.0,
      patMarginPct: 6.7,
      dilutedEps: 6.96,
      cfo: 197.2,
      netCash: 6448.0,
    },
    {
      year: "FY26A",
      grossRevenue: 19076.5,
      revenueGrowthPct: 46.3,
      netRevenue: 8571.8,
      adjustedEbitda: 1940.0,
      ebitdaMarginGrossPct: 10.2,
      ebitdaMarginNetPct: 22.7,
      adjustedPat: 1387.5,
      patMarginPct: 7.3,
      dilutedEps: 10.31,
      cfo: -466.3,
      netCash: 5003.7,
    },
    {
      year: "FY27E",
      grossRevenue: 24417.9,
      revenueGrowthPct: 28.0,
      netRevenue: 10870.0,
      adjustedEbitda: 2563.9,
      ebitdaMarginGrossPct: 10.5,
      ebitdaMarginNetPct: 23.6,
      adjustedPat: 1865.8,
      patMarginPct: 7.6,
      dilutedEps: 13.88,
      cfo: 640.0,
      netCash: 5250.0,
    },
    {
      year: "FY28E",
      grossRevenue: 30278.2,
      revenueGrowthPct: 24.0,
      netRevenue: 13950.0,
      adjustedEbitda: 3391.2,
      ebitdaMarginGrossPct: 11.2,
      ebitdaMarginNetPct: 24.3,
      adjustedPat: 2439.3,
      patMarginPct: 8.1,
      dilutedEps: 18.14,
      cfo: 1350.0,
      netCash: 6100.0,
    },
  ],
  segmentData: [
    {
      segment: "Propel Platform (Voucher Volume)",
      fy24a: 3797.2,
      fy25a: 7218.0,
      fy26a: 11074.1,
      q1fy26a: 1759.0,
      q1fy27a: 2507.0,
      yoyPct: "+42.5%",
      notes: "High-volume pass-through corporate gifting and channel incentives. Net take-rate 5.1%–7.1%.",
    },
    {
      segment: "Program Fees (Card Interchange)",
      fy24a: 3456.0,
      fy25a: 5456.0,
      fy26a: 7523.4,
      q1fy26a: 1455.0,
      q1fy27a: 1600.2,
      yoyPct: "+10.0%",
      notes: "Commercial card swipe interchange shared with partner banks. ~34% retainage after client cashback.",
    },
    {
      segment: "SaaS Platform Fees",
      fy24a: 502.8,
      fy25a: 362.0,
      fy26a: 479.0,
      q1fy26a: 106.0,
      q1fy27a: 125.5,
      yoyPct: "+18.4%",
      notes: "Pure-play recurring software ARR with 85%+ gross margin. Primary client retention driver (<1.5% churn).",
    },
  ],
  peerComparisons: [
    {
      company: "Zaggle (Gross Basis)",
      mcapCr: "2,484",
      revYoy: "46.3%",
      ebitdaMargin: "10.2%",
      patMargin: "7.3%",
      pe: "17.9x",
      evEbitda: "10.2x",
      evSales: "1.0x",
      roe: "9.9%",
      isFocusCompany: true,
    },
    {
      company: "Zaggle (Net Revenue Basis)",
      mcapCr: "2,484",
      revYoy: "37.0%",
      ebitdaMargin: "22.7%",
      patMargin: "16.2%",
      pe: "17.9x",
      evEbitda: "10.2x",
      evSales: "2.3x",
      roe: "9.9%",
      isFocusCompany: true,
    },
    {
      company: "PB Fintech (Policybazaar)",
      mcapCr: "78,500",
      revYoy: "36.5%",
      ebitdaMargin: "8.5%",
      patMargin: "6.2%",
      pe: "113.5x",
      evEbitda: "116.7x",
      evSales: "14.2x",
      roe: "6.5%",
    },
    {
      company: "RateGain Travel Tech",
      mcapCr: "8,950",
      revYoy: "24.2%",
      ebitdaMargin: "21.5%",
      patMargin: "16.8%",
      pe: "42.5x",
      evEbitda: "25.8x",
      evSales: "7.5x",
      roe: "14.2%",
    },
    {
      company: "CE Info Systems (MapmyIndia)",
      mcapCr: "11,800",
      revYoy: "22.0%",
      ebitdaMargin: "38.2%",
      patMargin: "31.5%",
      pe: "39.0x",
      evEbitda: "21.7x",
      evSales: "18.5x",
      roe: "19.5%",
    },
    {
      company: "One97 Comm. (Paytm)",
      mcapCr: "38,200",
      revYoy: "14.5%",
      ebitdaMargin: "4.2%",
      patMargin: "-2.1%",
      pe: "118.0x",
      evEbitda: "85.0x",
      evSales: "4.1x",
      roe: "-1.8%",
    },
    {
      company: "Infibeam Avenues",
      mcapCr: "8,400",
      revYoy: "28.5%",
      ebitdaMargin: "7.8%",
      patMargin: "5.8%",
      pe: "18.1x",
      evEbitda: "11.1x",
      evSales: "2.4x",
      roe: "11.2%",
    },
    {
      company: "Edenred SE (Global)",
      mcapCr: "€11,200M",
      revYoy: "18.5%",
      ebitdaMargin: "41.2%",
      patMargin: "23.4%",
      pe: "18.5x",
      evEbitda: "11.2x",
      evSales: "3.8x",
      roe: "28.5%",
    },
    {
      company: "Corpay Inc. (Global)",
      mcapCr: "$24,500M",
      revYoy: "12.8%",
      ebitdaMargin: "48.5%",
      patMargin: "28.2%",
      pe: "19.2x",
      evEbitda: "13.4x",
      evSales: "6.2x",
      roe: "26.0%",
    },
  ],
  dcfProjections: [
    {
      year: "FY27E",
      grossRevenue: 24417.9,
      growthPct: 28.0,
      ebitda: 2563.9,
      ebitdaMarginPct: 10.5,
      dna: 439.5,
      trueEbit: 2124.4,
      tax: 535.3,
      nopat: 1589.1,
      capex: 488.4,
      deltaNwc: 213.7,
      fcff: 1326.5,
      discountFactor: 0.8818,
      pvFcff: 1169.7,
    },
    {
      year: "FY28E",
      grossRevenue: 30278.2,
      growthPct: 24.0,
      ebitda: 3391.2,
      ebitdaMarginPct: 11.2,
      dna: 545.0,
      trueEbit: 2846.2,
      tax: 717.2,
      nopat: 2129.0,
      capex: 605.6,
      deltaNwc: 234.4,
      fcff: 1834.0,
      discountFactor: 0.7776,
      pvFcff: 1426.1,
    },
    {
      year: "FY29E",
      grossRevenue: 36333.9,
      growthPct: 20.0,
      ebitda: 4287.4,
      ebitdaMarginPct: 11.8,
      dna: 654.0,
      trueEbit: 3633.4,
      tax: 915.6,
      nopat: 2717.8,
      capex: 726.7,
      deltaNwc: 242.2,
      fcff: 2402.9,
      discountFactor: 0.6857,
      pvFcff: 1647.7,
    },
    {
      year: "FY30E",
      grossRevenue: 42147.3,
      growthPct: 16.0,
      ebitda: 5142.0,
      ebitdaMarginPct: 12.2,
      dna: 758.7,
      trueEbit: 4383.3,
      tax: 1104.6,
      nopat: 3278.7,
      capex: 842.9,
      deltaNwc: 232.5,
      fcff: 2962.0,
      discountFactor: 0.6047,
      pvFcff: 1791.1,
    },
    {
      year: "FY31E",
      grossRevenue: 48047.9,
      growthPct: 14.0,
      ebitda: 6006.0,
      ebitdaMarginPct: 12.5,
      dna: 864.9,
      trueEbit: 5141.1,
      tax: 1295.6,
      nopat: 3845.5,
      capex: 961.0,
      deltaNwc: 236.0,
      fcff: 3513.4,
      discountFactor: 0.5332,
      pvFcff: 1873.3,
    },
  ],
  dcfBridge: {
    cumulativePvFcff: 7907.9,
    terminalGrowthRate: 0.05,
    terminalYearFcff: 3689.1,
    terminalValue: 43917.5,
    pvTerminalValue: 23419.9,
    enterpriseValue: 31327.8,
    netCashBalance: 5003.7,
    totalEquityValue: 36331.5,
    sharesOutstanding: 134.46,
    intrinsicValuePerShare: 270.2,
    currentMarketPrice: 184.75,
    impliedUpside: 46.2,
    terminalValuePctEv: 74.8,
    impliedTerminalEbitdaMultiple: 7.31,
    wacc: 0.134,
    rf: 0.07,
    beta: 1.15,
    erp: 0.0575,
    costOfDebt: 0.065,
    equityWeight: 0.97,
    debtWeight: 0.03,
  },
  sensitivityWaccVsG: {
    waccs: [12.5, 13.0, 13.4, 14.0, 14.5],
    gs: [4.0, 4.5, 5.0, 5.5, 6.0],
    grid: [
      [275.0, 287.0, 300.6, 316.1, 334.0],
      [260.6, 271.1, 282.8, 296.2, 311.5],
      [250.2, 259.6, 270.2, 282.1, 295.6],
      [236.2, 244.3, 253.4, 263.5, 274.9],
      [225.7, 233.0, 241.0, 249.9, 259.8],
    ],
  },
  sensitivityGrowthVsMargin: {
    growths: [15.0, 18.0, 20.0, 24.0, 28.0],
    margins: [9.0, 10.0, 11.0, 12.0, 13.0],
    grid: [
      [160.4, 180.2, 200.0, 219.7, 239.5],
      [172.8, 195.0, 217.2, 239.3, 261.5],
      [181.7, 205.6, 229.5, 253.4, 277.3],
      [200.8, 228.5, 256.2, 284.0, 311.7],
      [221.9, 254.0, 286.0, 318.0, 350.1],
    ],
  },
  technicalSetup: {
    cmp: 184.75,
    fiftyDma: 201.8,
    twoHundredDma: 257.5,
    rsi14: 45.2,
    macdHist: 0.8,
    supportZones: ["₹172.00", "₹154.40 (Confirmed 52-Wk Double Bottom)"],
    resistanceZones: ["₹201.80 (50 DMA)", "₹205.00 / ₹258.00"],
    analysis:
      "Zaggle experienced heavy institutional distribution post-Q1 FY27 results on front-loaded M&A charges, touching a 52-week low of ₹154.40 before finding strong demand. Daily RSI has rebounded from deeply oversold levels (17.15) to neutral 45.20, while the MACD histogram has printed a bullish divergence. A decisive breakout above ₹205 would confirm structural trend reversal toward our ₹270 intrinsic fair value.",
    relativeAlphaVsNifty: [
      {
        period: "1 Month",
        stockReturn: "-12.5%",
        niftyReturn: "+1.2%",
        alpha: "-13.7%",
        driver: "Post-Q1 FY27 earnings dip & M&A cost absorption",
      },
      {
        period: "3 Months",
        stockReturn: "-28.4%",
        niftyReturn: "+4.8%",
        alpha: "-33.2%",
        driver: "Concerns regarding negative FY26 operating cash flow",
      },
      {
        period: "6 Months",
        stockReturn: "-42.8%",
        niftyReturn: "+8.5%",
        alpha: "-51.3%",
        driver: "Multiple compression across high-PE Indian growth tech",
      },
      {
        period: "1 Year",
        stockReturn: "-45.6%",
        niftyReturn: "+16.4%",
        alpha: "-62.0%",
        driver: "Profit booking from all-time highs of ₹409+",
      },
      {
        period: "Since Listing (Sep 23 @ ₹164)",
        stockReturn: "+12.7%",
        niftyReturn: "+27.9%",
        alpha: "-15.2%",
        driver: "Solid organic top-line expansion offset by recent de-rating",
      },
    ],
  },
  shareholding: {
    categories: [
      { name: "Promoter Group", percentage: 44.3, color: "#3B82F6" },
      { name: "Retail & Public", percentage: 36.55, color: "#64748B" },
      { name: "Foreign Portfolio (FPI)", percentage: 8.5, color: "#10B981" },
      { name: "Domestic Mutual Funds", percentage: 5.39, color: "#F59E0B" },
      { name: "Other DIIs & AIFs", percentage: 5.26, color: "#8B5CF6" },
    ],
    historical: [
      {
        category: "Promoter & Promoter Group",
        jun25: "44.05%",
        mar26: "44.15%",
        jun26: "44.30%",
        qoqChange: "+15 bps (Insider open-market buying)",
      },
      {
        category: "Foreign Portfolio Investors (FPI)",
        jun25: "7.20%",
        mar26: "8.85%",
        jun26: "8.50%",
        qoqChange: "-35 bps (Global tech reallocation)",
      },
      {
        category: "Domestic Institutions (Mutual Funds)",
        jun25: "4.10%",
        mar26: "5.12%",
        jun26: "5.39%",
        qoqChange: "+27 bps (Continued MF institutional buying)",
      },
      {
        category: "Other DIIs & Alternate Funds",
        jun25: "5.35%",
        mar26: "5.03%",
        jun26: "5.26%",
        qoqChange: "+23 bps (Tech PMS allocation)",
      },
      {
        category: "Retail & Non-Institutional Public",
        jun25: "39.30%",
        mar26: "36.85%",
        jun26: "36.55%",
        qoqChange: "-30 bps (Absorption by institutions)",
      },
    ],
  },
  catalysts: [
    {
      timeHorizon: "Near-Term (0–6m)",
      event: "H2 FY27 Operating Cash Flow Inflection",
      impact: "+₹640M positive CFO in FY27E",
      indicator: "Q3 FY27 results showing debtor days drop below 65",
    },
    {
      timeHorizon: "Near-Term (0–6m)",
      event: "Dice AI Platform Monetization",
      impact: "Adds ₹35–50M quarterly high-margin SaaS ARR",
      indicator: "Q2 FY27 reported pure SaaS revenue > ₹180M",
    },
    {
      timeHorizon: "Medium-Term (6–18m)",
      event: "Commercial UPI MDR Regulatory Framework",
      impact: "Adds ₹25–40M annual program fees via Mobileware switch",
      indicator: "NPCI / RBI guidelines on corporate UPI transaction fees",
    },
    {
      timeHorizon: "Medium-Term (6–18m)",
      event: "Scaling PNB & HPCL Co-Brand Programs",
      impact: "GTV expands by 25%+ YoY, active users top 5.0M",
      indicator: "Active corporate spend cards cross 5 million mark",
    },
    {
      timeHorizon: "Long-Term (18–36m)",
      event: "ZIP Cross-Border Forex Scaling (Unobanc AD-II)",
      impact: "Captures 1.2%–1.8% FX spreads on international T&E",
      indicator: "International corporate forex GTV crosses ₹1,000 Cr",
    },
  ],
  prioritizedRisks: [
    {
      risk: "Working Capital Drag & Extended Debtor Days",
      prob: "Med",
      impact: "High",
      indicator: "Trade Receivables > 20% of gross revenue",
      financialImpact: "CFO remains negative, delaying cash flow inflection",
      mitigation: "Mandating advance corporate client funding on Propel vouchers",
      frequency: "Quarterly",
    },
    {
      risk: "Partner Bank Interchange Concentration",
      prob: "Med",
      impact: "High",
      indicator: "Interchange rate revisions by top 3 partner banks",
      financialImpact: "Gross margins drop by 100–200 bps",
      mitigation: "Multi-rail API routing across all 19 scheduled banks",
      frequency: "Continuous",
    },
    {
      risk: "M&A Integration & Front-Loaded Overhead",
      prob: "Med",
      impact: "Med",
      indicator: "Acquired entities reporting recurring operating losses",
      financialImpact: "Consolidated EBITDA margin suppression",
      mitigation: "Centralized enterprise sales force and AI cross-selling",
      frequency: "Quarterly",
    },
    {
      risk: "Regulatory Interventions on Prepaid Card Limits",
      prob: "Low",
      impact: "High",
      indicator: "RBI circulars restricting PPI reload or KYC norms",
      financialImpact: "Limits monthly gross transaction volume (GTV)",
      mitigation: "Expanding unencumbered enterprise SaaS and Zoyer P2P",
      frequency: "Semi-Annual",
    },
    {
      risk: "Enterprise Client Concentration",
      prob: "Low",
      impact: "Med",
      indicator: "Top 10 enterprise accounts reducing annual spend",
      financialImpact: "Slows corporate card active cardholder velocity",
      mitigation: "Broad base of 4,065+ enterprise clients with <1.5% annual churn",
      frequency: "Quarterly",
    },
  ],
  aiKnowledgeBase: [
    {
      question: "Why do you like Zaggle Prepaid Ocean Services Ltd?",
      answer:
        "Zaggle occupies an exceptional structural moat as an enterprise spend automation platform integrated with 19 scheduled commercial banks. It enjoys a dual monetization engine: recurring enterprise SaaS fees (85%+ gross margin) plus commercial card interchange fees (~34% net retainage). Following a 55% pullback driven by temporary Q1 FY27 M&A absorption costs, Zaggle trades at an attractive 17.9x FY26 P/E and 10.2x EV/EBITDA, insulated by ₹500.4 Cr in liquid net cash (~20% of market cap). Our DCF indicates a fair value of ₹270/share (+46.1% upside).",
      tag: "Thesis",
    },
    {
      question: "What are the biggest investment risks in Zaggle?",
      answer:
        "The primary risk is Working Capital Drag: historically, trade receivables and bank clearance floats rose to ₹3,611.8M in FY26, resulting in negative Operating Cash Flow (-₹466.3M). Other risks include reliance on top 3 private bank partners for card issuance, execution risk in scaling recent M&A acquisitions (Dice, Rivpe), and potential RBI regulatory caps on interchange fees.",
      tag: "Risks",
    },
    {
      question: "How did you calculate the ₹270 fair value DCF target?",
      answer:
        "We built a 5-year explicit Free Cash Flow to Firm (FCFF) model from FY27E to FY31E. Key inputs: Base Revenue CAGR of 20.3%, terminal EBITDA margin expanding from 10.5% to 12.5%, WACC of 13.40% (Risk-free 7.00%, Beta 1.15, ERP 5.75%, Cost of Debt 6.50%), and a conservative terminal growth rate of 5.00%. We isolated true operating EBIT (₹1,571.2M in FY26) by strictly excluding ₹380M non-operating Treasury Interest on bank cash to prevent double-counting. Adding back ₹5,003.7M net cash yields an intrinsic equity value of ₹36,331.5M, or ₹270.20 per share.",
      tag: "Valuation",
    },
    {
      question: "Why is Zaggle's Gross EV/Sales misleading compared to Net EV/Sales?",
      answer:
        "In FY26, Zaggle reported ₹19,076.5M in gross revenue, of which ₹10,504.7M represented pass-through voucher redemptions in the Propel segment (carrying a modest 5%–7% net margin). Looking at gross EV/Sales of ~1.0x masks the underlying software and interchange economics. On Net Revenue of ₹8,571.8M, Zaggle generates an Adjusted EBITDA margin of 22.7% and trades at an EV/Net Sales of 2.3x, highlighting strong core operational profitability.",
      tag: "Accounting",
    },
    {
      question: "What would invalidate your investment thesis?",
      answer:
        "Our thesis would be invalidated if: (1) FY27 Operating Cash Flow fails to turn positive and receivables exceed ₹3,800M (signaling chronic working capital failure); (2) Organic gross revenue growth decelerates below 18.0% YoY for two consecutive quarters; (3) Net EBITDA margins compress below 17.0%; or (4) RBI imposes adverse interchange caps reducing Zaggle's take-rate below 30%.",
      tag: "Invalidation",
    },
  ],
};
