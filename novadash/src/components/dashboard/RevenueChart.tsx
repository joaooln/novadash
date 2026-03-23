"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { revenueData } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

type Metric = "revenue" | "orders" | "users";

const metricConfig: Record<Metric, { label: string; color: string; format: (v: number) => string }> = {
  revenue: { label: "Revenue", color: "#c8f53a", format: formatCurrency },
  orders:  { label: "Orders",  color: "#6c63ff", format: (v) => v.toLocaleString() },
  users:   { label: "Users",   color: "#38d9a9", format: (v) => v.toLocaleString() },
};

export function RevenueChart() {
  const [metric, setMetric] = useState<Metric>("revenue");
  const cfg = metricConfig[metric];

  return (
    <div className="bg-bg-2 border border-border rounded-card p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="font-display text-[16px] font-semibold tracking-tight">Revenue Overview</h3>
          <p className="text-[12px] text-[#7a7d8a] mt-0.5">Monthly breakdown — 2026</p>
        </div>
        <div className="flex bg-bg-3 rounded-lg p-[3px] gap-0.5">
          {(Object.keys(metricConfig) as Metric[]).map((m) => (
            <button
              key={m}
              onClick={() => setMetric(m)}
              className={`px-3 py-1 rounded-md text-[12px] font-medium transition-all ${
                metric === m
                  ? "bg-bg-2 text-[#eeedf0] border border-border"
                  : "text-[#7a7d8a] hover:text-[#eeedf0]"
              }`}
            >
              {metricConfig[m].label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={cfg.color} stopOpacity={0.18} />
              <stop offset="100%" stopColor={cfg.color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: "#7a7d8a", fontSize: 11, fontFamily: "DM Mono" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => cfg.format(v)}
            tick={{ fill: "#7a7d8a", fontSize: 11, fontFamily: "DM Mono" }}
            axisLine={false}
            tickLine={false}
            width={60}
          />
          <Tooltip
            contentStyle={{
              background: "#1a1e28",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "10px 14px",
              fontFamily: "DM Mono",
              fontSize: 12,
              color: "#eeedf0",
            }}
            itemStyle={{ color: cfg.color }}
            labelStyle={{ color: "#7a7d8a", marginBottom: 4 }}
            formatter={(value: number) => [cfg.format(value), cfg.label]}
            cursor={{ stroke: "rgba(255,255,255,0.08)", strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey={metric}
            stroke={cfg.color}
            strokeWidth={2}
            fill="url(#areaGrad)"
            dot={false}
            activeDot={{ r: 4, fill: cfg.color, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
