"use client";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-bg border-b border-border px-8 py-5 flex items-center gap-4">
      <div className="flex-1">
        <h1 className="font-display text-[20px] font-semibold tracking-tight">
          Dashboard{" "}
          <span className="font-light text-[16px] text-[#7a7d8a] italic">/ Overview</span>
        </h1>
      </div>

      {/* Live badge */}
      <div className="flex items-center gap-[5px] bg-accent/10 border border-accent/20 text-accent text-[11px] font-mono font-medium px-[10px] py-[3px] rounded-full">
        <span className="w-[5px] h-[5px] rounded-full bg-accent animate-pulse2" />
        Live
      </div>

      {/* Date range */}
      <div className="flex items-center gap-1.5 bg-bg-3 border border-border rounded-[10px] px-3.5 py-[7px] text-[12.5px] font-mono text-[#7a7d8a] cursor-pointer hover:border-border-2 hover:text-[#eeedf0] transition-all">
        📅 Jan 1 – Mar 22, 2026
      </div>

      {/* Notifications */}
      <button className="relative w-9 h-9 rounded-[10px] border border-border bg-bg-3 flex items-center justify-center hover:border-border-2 transition-all">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#7a7d8a" strokeWidth="1.5">
          <path d="M8 1a5 5 0 015 5v3l1.5 2H1.5L3 9V6a5 5 0 015-5z" />
          <path d="M6.5 13a1.5 1.5 0 003 0" />
        </svg>
        <span className="absolute top-[6px] right-[6px] w-[6px] h-[6px] bg-accent-red rounded-full border-[1.5px] border-bg" />
      </button>

      {/* Export */}
      <button className="flex items-center gap-1.5 bg-accent text-bg rounded-[10px] px-4 py-2 text-[13px] font-medium font-body hover:opacity-90 active:scale-95 transition-all">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M8 1v14M1 8h14" />
        </svg>
        Export
      </button>
    </header>
  );
}
