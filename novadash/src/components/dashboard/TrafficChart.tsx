"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { trafficSources } from "@/lib/data";

export function TrafficChart() {
  return (
    <div className="bg-bg-2 border border-border rounded-card p-6">
      <div className="mb-5">
        <h3 className="font-display text-[16px] font-semibold tracking-tight">Traffic Sources</h3>
        <p className="text-[12px] text-[#7a7d8a] mt-0.5">Last 30 days</p>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={trafficSources}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {trafficSources.map((entry, i) => (
              <Cell key={i} fill={entry.color} stroke="#111318" strokeWidth={3} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#1a1e28",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              fontFamily: "DM Mono",
              fontSize: 12,
              color: "#eeedf0",
            }}
            formatter={(value: number, name: string) => [`${value}%`, name]}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-col gap-2 mt-4">
        {trafficSources.map((s) => (
          <div key={s.label} className="flex items-center justify-between text-[12.5px]">
            <span className="flex items-center gap-1.5 text-[#7a7d8a]">
              <span
                className="w-2 h-2 rounded-sm inline-block"
                style={{ background: s.color }}
              />
              {s.label}
            </span>
            <span className="font-mono text-[#eeedf0]">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
