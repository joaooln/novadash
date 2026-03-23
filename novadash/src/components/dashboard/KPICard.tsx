import { cn } from "@/lib/utils";
import type { KPICard as KPICardType } from "@/types";

const colorMap = {
  accent: { bar: "bg-accent", icon: "text-accent" },
  purple: { bar: "bg-accent-purple", icon: "text-accent-purple" },
  teal: { bar: "bg-accent-teal", icon: "text-accent-teal" },
  red: { bar: "bg-accent-red", icon: "text-accent-red" },
};

interface Props {
  card: KPICardType;
  style?: React.CSSProperties;
}

export function KPICard({ card, style }: Props) {
  const colors = colorMap[card.color];
  const isPositive = card.change > 0;
  // For churn rate, down is good
  const isGood = card.color === "red" ? !isPositive : isPositive;

  return (
    <div
      className="relative bg-bg-2 border border-border rounded-card p-[22px] overflow-hidden hover:border-border-2 hover:-translate-y-0.5 transition-all duration-200 cursor-default animate-fade-up"
      style={style}
    >
      {/* Top accent bar */}
      <div className={cn("absolute top-0 left-0 right-0 h-0.5", colors.bar)} />

      <div className="flex items-start justify-between mb-3.5">
        <p className="text-[11.5px] font-medium tracking-[0.5px] uppercase text-[#7a7d8a]">
          {card.label}
        </p>
        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center bg-white/5", colors.icon)}>
          <KPIIcon color={card.color} />
        </div>
      </div>

      <p className="font-display text-[30px] font-semibold tracking-[-1px] leading-none mb-2.5">
        {card.value}
      </p>

      <div className="flex items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center gap-1 text-[12px] font-mono px-2 py-[3px] rounded-full",
            isGood
              ? "bg-accent-teal/10 text-accent-teal"
              : "bg-accent-red/10 text-accent-red"
          )}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(card.change)}
          {card.changeSuffix ?? "%"}
        </span>
        <span className="text-[11px] text-[#7a7d8a]">{card.sub}</span>
      </div>
    </div>
  );
}

function KPIIcon({ color }: { color: KPICardType["color"] }) {
  if (color === "accent")
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 1v14M11 4H6.5a2.5 2.5 0 000 5h3a2.5 2.5 0 010 5H5" />
      </svg>
    );
  if (color === "purple")
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="5" r="2.5" />
        <path d="M1 13c0-2.8 2.2-5 5-5" />
        <circle cx="12" cy="6" r="2" />
        <path d="M10 13c0-2.2 1.8-4 4-4" opacity="0.5" />
      </svg>
    );
  if (color === "teal")
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="1,11 5,7 9,9 15,3" />
      </svg>
    );
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 3v5l3 3" />
      <circle cx="8" cy="8" r="6.5" />
    </svg>
  );
}
