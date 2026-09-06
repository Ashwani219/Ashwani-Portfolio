export interface StrategyMetrics {
  initialCapital: number;
  finalEquity: number;
  netPnl: number;
  totalReturnPct: number;
  totalTrades: number;
  longTrades: number;
  shortTrades: number;
  winningTrades: number;
  losingTrades: number;
  winRatePct: number;
  profitFactor: number;
  expectancy: number;
  maxDrawdown: number;
  maxDrawdownPct: number;
  sharpeDaily: number;
  sortinoDaily: number;
  averageWinner: number;
  averageLoser: number;
  largestWinner: number;
  largestLoser: number;
  averageHoldingMinutes: number;
  exposurePct: number;
}

export interface QuantitativeStrategy {
  id: string;
  title: string;
  subtitle: string;
  instrument: string;
  timeframe: string;
  dataSource: string;
  dateRange: string;
  totalBars: number;
  architecture: {
    engine: string;
    trendIndicator: string;
    pivotParameters: string;
    executionRule: string;
    riskAllocation: string;
    slippageSpreadModel: string;
  };
  metrics: {
    full: StrategyMetrics;
    development: StrategyMetrics;
    validation: StrategyMetrics;
  };
  charts: {
    equityCurve: string;
    drawdown: string;
    monthlyPerformance: string;
    priceDynamicStructure: string;
    priceSignals: string;
    strategyChart: string;
    qaChart: string;
  };
  limitationsAndChecks: {
    checks: string[];
    limitations: string[];
  };
  codeSnippet: string;
}

export const xauusdStrategyData: QuantitativeStrategy = {
  id: "xauusd-sats-dynamic-swing",
  title: "XAUUSD SATS + Dynamic Swing Systematic Strategy",
  subtitle:
    "Quantitative algorithmic framework tested on 36,993 M15 bars with strict 70/30 In-Sample vs. Out-of-Sample validation",
  instrument: "XAUUSD (Spot Gold / US Dollar)",
  timeframe: "M15 (15-Minute)",
  dataSource: "MetaTrader 5 (MT5) Historical Tick Feed",
  dateRange: "October 1, 2024 – April 29, 2026",
  totalBars: 36993,
  architecture: {
    engine: "Rolling Highest/Lowest Dynamic Swing Direction Engine",
    trendIndicator: "SATS v1.12.0 (Crypto 24/7 Preset on HL2 source)",
    pivotParameters: "Dynamic Swing Period: 50 | Adaptive Price Tracking (APT): 20 | Volatility Bias: 10",
    executionRule: "Completed-bar event at bar N close; executed strictly at bar N+1 open",
    riskAllocation: "10% of current equity notional per position; zero synthetic candle filling",
    slippageSpreadModel: "Exported OHLC treated as BID; ASK = BID + SPREAD points × 0.01 (Median: 0.08 pts)",
  },
  metrics: {
    full: {
      initialCapital: 10000.0,
      finalEquity: 10788.75,
      netPnl: 788.75,
      totalReturnPct: 7.89,
      totalTrades: 213,
      longTrades: 106,
      shortTrades: 107,
      winningTrades: 96,
      losingTrades: 117,
      winRatePct: 45.07,
      profitFactor: 1.938,
      expectancy: 3.70,
      maxDrawdown: -132.81,
      maxDrawdownPct: -1.23,
      sharpeDaily: 2.18,
      sortinoDaily: 1.60,
      averageWinner: 16.97,
      averageLoser: -7.19,
      largestWinner: 95.72,
      largestLoser: -131.70,
      averageHoldingMinutes: 3883.38,
      exposurePct: 99.75,
    },
    development: {
      initialCapital: 10000.0,
      finalEquity: 10370.59,
      netPnl: 370.59,
      totalReturnPct: 3.71,
      totalTrades: 158,
      longTrades: 79,
      shortTrades: 79,
      winningTrades: 69,
      losingTrades: 89,
      winRatePct: 43.67,
      profitFactor: 1.656,
      expectancy: 2.35,
      maxDrawdown: -64.19,
      maxDrawdownPct: -0.62,
      sharpeDaily: 2.10,
      sortinoDaily: 2.23,
      averageWinner: 13.56,
      averageLoser: -6.35,
      largestWinner: 65.93,
      largestLoser: -30.91,
      averageHoldingMinutes: 3636.46,
      exposurePct: 99.64,
    },
    validation: {
      initialCapital: 10000.0,
      finalEquity: 10393.90,
      netPnl: 393.90,
      totalReturnPct: 3.94,
      totalTrades: 56,
      longTrades: 28,
      shortTrades: 28,
      winningTrades: 27,
      losingTrades: 29,
      winRatePct: 48.21,
      profitFactor: 2.421,
      expectancy: 7.03,
      maxDrawdown: -127.94,
      maxDrawdownPct: -1.23,
      sharpeDaily: 2.48,
      sortinoDaily: 1.45,
      averageWinner: 24.86,
      averageLoser: -9.56,
      largestWinner: 92.21,
      largestLoser: -126.88,
      averageHoldingMinutes: 4456.61,
      exposurePct: 98.80,
    },
  },
  charts: {
    equityCurve: "/assets/equity_curve_XAUUSD.png",
    drawdown: "/assets/drawdown_XAUUSD.png",
    monthlyPerformance: "/assets/monthly_performance_XAUUSD.png",
    priceDynamicStructure: "/assets/price_dynamic_structure_XAUUSD.png",
    priceSignals: "/assets/price_sats_signals_XAUUSD.png",
    strategyChart: "/assets/strategy_chart_XAUUSD.png",
    qaChart: "/assets/qa_chart_XAUUSD.png",
  },
  limitationsAndChecks: {
    checks: [
      "Used strictly supplied MT5 market export with real bid/ask spreads",
      "No synthetic candles created or filled during missing data intervals",
      "Dynamic pivot logic strictly forward-walked; not backdated into lookback windows",
      "Execution strictly at bar N+1 open upon bar N confirmation (zero lookahead bias)",
      "Zero commission baseline by design; realistic slippage spread subtraction evaluated",
    ],
    limitations: [
      "Broker/server specific MT5 quote feed; results represent systematic strategy behavior rather than a universal gold arbitrage edge",
      "Timestamps parsed in UTC as broker timezone was unstated in export metadata",
      "Bid-bar convention and 0.01 point size inferred from standard MT5 quote resolution",
      "Gaps in MT5 export retained faithfully without artificial interpolation",
    ],
  },
  codeSnippet: `# Quantitative Execution Loop (VectorBT / Python Core)
def execute_dynamic_sats_strategy(df, swing_period=50, apt=20):
    # 1. Structure Detection: Rolling Extremas
    df['pivot_high'] = df['HIGH'].rolling(swing_period).max()
    df['pivot_low'] = df['LOW'].rolling(swing_period).min()
    
    # 2. SATS Trend State on HL2 Price Source
    hl2 = (df['HIGH'] + df['LOW']) / 2.0
    sats_trend = compute_sats_trend(hl2, preset="Crypto_24_7")
    
    # 3. Next-Bar Signal Generation (No Lookahead)
    signals = np.zeros(len(df))
    # Confirmed Higher Low + SATS Bullish Flip -> LONG on Next Open
    long_condition = (df['confirmed_hl']) & (sats_trend == 1)
    # Confirmed Lower High + SATS Bearish Flip -> SHORT on Next Open
    short_condition = (df['confirmed_lh']) & (sats_trend == -1)
    
    # Position Sizing: 10% Notional with Fixed Point Spread Deduction
    portfolio = vbt.Portfolio.from_signals(
        df['OPEN'].shift(-1), 
        entries=long_condition, 
        exits=short_condition, 
        size=0.10, 
        size_type='percent'
    )
    return portfolio`,
};
