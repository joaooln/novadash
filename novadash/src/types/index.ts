export interface KPICard {
  label: string;
  value: string;
  change: number;
  changeSuffix?: string;
  sub: string;
  color: "accent" | "purple" | "teal" | "red";
}

export interface TrafficSource {
  label: string;
  value: number;
  color: string;
}

export interface TopPage {
  path: string;
  sessions: number;
  pct: number;
  color: string;
}

export interface ActivityItem {
  icon: string;
  bg: string;
  text: string;
  highlight: string;
  time: string;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  orders: number;
  users: number;
}
