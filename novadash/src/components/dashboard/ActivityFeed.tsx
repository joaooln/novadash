import { activityItems } from "@/lib/data";

export function ActivityFeed() {
  return (
    <div className="bg-bg-2 border border-border rounded-card p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display text-[16px] font-semibold tracking-tight">Recent Activity</h3>
          <p className="text-[12px] text-[#7a7d8a] mt-0.5">Real-time events</p>
        </div>
        <div className="flex items-center gap-[5px] bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono font-medium px-2 py-[2px] rounded-full">
          <span className="w-[5px] h-[5px] rounded-full bg-accent animate-pulse2" />
          Live
        </div>
      </div>

      <div className="flex flex-col">
        {activityItems.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 py-3 border-b border-border last:border-b-0 items-start"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
              style={{ background: item.bg }}
            >
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-[13px] text-[#eeedf0] leading-snug">
                <strong className="font-medium">{item.highlight}</strong>
                {" — "}
                {item.text}
              </p>
              <p className="text-[11px] text-[#7a7d8a] font-mono mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
