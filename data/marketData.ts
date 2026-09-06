export interface MarketItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeValue: string;
  isPositive: boolean;
  high24h: string;
  low24h: string;
  volume: string;
  sparkline: number[];
  category: "Index" | "Commodity" | "Currency";
}

export interface MarketSnapshotData {
  lastUpdated: string;
  isLive: boolean;
  disclaimer: string;
  indices: MarketItem[];
}

export const marketSnapshotData: MarketSnapshotData = {
  lastUpdated: "September 2, 2026 • 15:30 IST (Market Close)",
  isLive: false,
  disclaimer:
    "Market data presented below is illustrative sample data for portfolio demonstration and does not constitute real-time streaming quotes.",
  indices: [
    {
      symbol: "NIFTY 50",
      name: "NSE Nifty 50 Index",
      price: "25,235.90",
      change: "+0.45%",
      changeValue: "+113.20",
      isPositive: true,
      high24h: "25,290.40",
      low24h: "25,110.15",
      volume: "382.4M",
      sparkline: [25120, 25140, 25130, 25180, 25210, 25190, 25220, 25250, 25235],
      category: "Index",
    },
    {
      symbol: "BANK NIFTY",
      name: "Nifty Bank Index",
      price: "51,412.30",
      change: "+0.58%",
      changeValue: "+298.15",
      isPositive: true,
      high24h: "51,550.00",
      low24h: "51,105.40",
      volume: "194.2M",
      sparkline: [51120, 51180, 51220, 51300, 51280, 51350, 51420, 51400, 51412],
      category: "Index",
    },
    {
      symbol: "SENSEX",
      name: "BSE S&P Sensex",
      price: "82,498.15",
      change: "+0.41%",
      changeValue: "+338.40",
      isPositive: true,
      high24h: "82,650.10",
      low24h: "82,120.30",
      volume: "210.5M",
      sparkline: [82150, 82220, 82290, 82350, 82320, 82410, 82460, 82510, 82498],
      category: "Index",
    },
    {
      symbol: "GOLD (XAU/INR)",
      name: "MCX Gold Futures",
      price: "₹72,480",
      change: "+0.28%",
      changeValue: "+₹205",
      isPositive: true,
      high24h: "₹72,620",
      low24h: "₹72,150",
      volume: "12.8K Lots",
      sparkline: [72180, 72240, 72300, 72280, 72390, 72420, 72450, 72490, 72480],
      category: "Commodity",
    },
    {
      symbol: "USD / INR",
      name: "US Dollar to Indian Rupee",
      price: "₹83.88",
      change: "-0.07%",
      changeValue: "-0.06",
      isPositive: false,
      high24h: "₹83.96",
      low24h: "₹83.84",
      volume: "₹14.2B",
      sparkline: [83.95, 83.94, 83.92, 83.93, 83.90, 83.89, 83.87, 83.89, 83.88],
      category: "Currency",
    },
  ],
};
