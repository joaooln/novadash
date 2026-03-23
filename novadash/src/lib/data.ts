import type {
  KPICard,
  TrafficSource,
  TopPage,
  ActivityItem,
  RevenueDataPoint,
} from "@/types";

export const revenueData: RevenueDataPoint[] = [
  { month: "Jan", revenue: 38400, orders: 312, users: 9800 },
  { month: "Feb", revenue: 42100, orders: 340, users: 10200 },
  { month: "Mar", revenue: 51200, orders: 398, users: 10850 },
  { month: "Apr", revenue: 48800, orders: 375, users: 11100 },
  { month: "May", revenue: 55300, orders: 421, users: 11400 },
  { month: "Jun", revenue: 61200, orders: 466, users: 11900 },
  { month: "Jul", revenue: 58700, orders: 448, users: 12100 },
  { month: "Aug", revenue: 67400, orders: 512, users: 12400 },
  { month: "Sep", revenue: 72100, orders: 547, users: 12600 },
  { month: "Oct", revenue: 68900, orders: 528, users: 12700 },
  { month: "Nov", revenue: 79300, orders: 601, users: 12800 },
  { month: "Dec", revenue: 84500, orders: 642, users: 12849 },
];

export const kpiCards: KPICard[] = [
  {
    label: "Total Revenue",
    value: "$284.5k",
    change: 18.2,
    sub: "vs. last quarter",
    color: "accent",
  },
  {
    label: "Active Users",
    value: "12,849",
    change: 7.4,
    sub: "+921 this week",
    color: "purple",
  },
  {
    label: "Conversion",
    value: "3.87%",
    change: 0.3,
    changeSuffix: "pp",
    sub: "from 3.57% last month",
    color: "teal",
  },
  {
    label: "Churn Rate",
    value: "1.2%",
    change: -0.4,
    changeSuffix: "pp",
    sub: "better than target",
    color: "red",
  },
];

export const trafficSources: TrafficSource[] = [
  { label: "Organic", value: 42, color: "#c8f53a" },
  { label: "Paid", value: 28, color: "#6c63ff" },
  { label: "Referral", value: 18, color: "#38d9a9" },
  { label: "Direct", value: 12, color: "#ff6b6b" },
];

export const topPages: TopPage[] = [
  { path: "/dashboard", sessions: 18420, pct: 94, color: "#c8f53a" },
  { path: "/pricing", sessions: 12300, pct: 63, color: "#6c63ff" },
  { path: "/blog/intro", sessions: 9840, pct: 50, color: "#38d9a9" },
  { path: "/signup", sessions: 8210, pct: 42, color: "#ff6b6b" },
  { path: "/docs", sessions: 6630, pct: 34, color: "#c8f53a" },
];

export const activityItems: ActivityItem[] = [
  {
    icon: "💳",
    bg: "rgba(200,245,58,0.1)",
    highlight: "New subscription",
    text: "Pro plan · $49/mo",
    time: "2 min ago",
  },
  {
    icon: "👤",
    bg: "rgba(108,99,255,0.12)",
    highlight: "New user registered",
    text: "maria@example.com",
    time: "8 min ago",
  },
  {
    icon: "⚠️",
    bg: "rgba(255,107,107,0.1)",
    highlight: "Payment failed",
    text: "Retry scheduled in 24h",
    time: "15 min ago",
  },
  {
    icon: "📦",
    bg: "rgba(56,217,169,0.1)",
    highlight: "Order #4821",
    text: "shipped via FedEx",
    time: "34 min ago",
  },
  {
    icon: "🚀",
    bg: "rgba(200,245,58,0.1)",
    highlight: "New feature deployed",
    text: "v2.4.1 is live",
    time: "1h ago",
  },
];

export const navItems = [
  {
    section: "Overview",
    links: [
      { label: "Dashboard", href: "/", icon: "grid", active: true },
      { label: "Analytics", href: "/analytics", icon: "chart", badge: "New" },
      { label: "Customers", href: "/customers", icon: "users" },
      { label: "Reports", href: "/reports", icon: "file" },
    ],
  },
  {
    section: "Commerce",
    links: [
      { label: "Orders", href: "/orders", icon: "cart" },
      { label: "Revenue", href: "/revenue", icon: "dollar" },
      { label: "Products", href: "/products", icon: "bag" },
    ],
  },
  {
    section: "System",
    links: [{ label: "Settings", href: "/settings", icon: "settings" }],
  },
];
