"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ReactNode> = {
  grid: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="1" width="6" height="6" rx="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
    </svg>
  ),
  chart: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="1,11 5,7 9,9 15,3" />
      <polyline points="11,3 15,3 15,7" />
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="5" r="2.5" />
      <path d="M1 13c0-2.8 2.2-5 5-5" />
      <circle cx="12" cy="6" r="2" />
      <path d="M10 13c0-2.2 1.8-4 4-4" opacity="0.5" />
    </svg>
  ),
  file: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="14" height="10" rx="1.5" />
      <path d="M5 7h6M5 10h4" />
    </svg>
  ),
  cart: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 1h2l2 8h8l1-5H5" />
      <circle cx="7" cy="13" r="1.2" />
      <circle cx="12" cy="13" r="1.2" />
    </svg>
  ),
  dollar: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 1v14M11 4H6.5a2.5 2.5 0 000 5h3a2.5 2.5 0 010 5H5" />
    </svg>
  ),
  bag: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="4" width="14" height="9" rx="1.5" />
      <path d="M4 4V3a2 2 0 014 0v1" />
    </svg>
  ),
  settings: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M11.5 4.5l1.4-1.4M3.1 12.9l1.4-1.4" />
    </svg>
  ),
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[220px] bg-bg-2 border-r border-border flex flex-col py-7 z-50">
      {/* Logo */}
      <div className="px-6 pb-8 flex items-center gap-2.5">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
            <rect x="1" y="1" width="7" height="7" rx="2" fill="#0a0b0f" />
            <rect x="10" y="1" width="7" height="7" rx="2" fill="#0a0b0f" opacity="0.6" />
            <rect x="1" y="10" width="7" height="7" rx="2" fill="#0a0b0f" opacity="0.6" />
            <rect x="10" y="10" width="7" height="7" rx="2" fill="#0a0b0f" opacity="0.3" />
          </svg>
        </div>
        <span className="font-display text-[18px] font-semibold tracking-tight">
          Nova<span className="text-accent">Dash</span>
        </span>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto px-3">
        {navItems.map((section) => (
          <div key={section.section} className="mb-2">
            <p className="text-[10px] font-medium tracking-[1.2px] uppercase text-[#7a7d8a] px-3 mb-1.5 mt-4">
              {section.section}
            </p>
            {section.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-[9px] rounded-[10px] text-[13.5px] transition-all",
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-[#7a7d8a] hover:bg-white/5 hover:text-[#eeedf0]"
                  )}
                >
                  <span className="opacity-80">{icons[link.icon]}</span>
                  {link.label}
                  {link.badge && (
                    <span className="ml-auto bg-accent text-bg text-[10px] font-mono font-medium px-[7px] py-[2px] rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-3 pt-4 border-t border-border">
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] cursor-pointer hover:bg-white/5 transition-all">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple to-accent flex items-center justify-center text-xs font-medium text-white flex-shrink-0">
            JD
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[13px] font-medium text-[#eeedf0] truncate">João Dev</p>
            <p className="text-[11px] text-[#7a7d8a]">Admin</p>
          </div>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#7a7d8a" strokeWidth="1.5">
            <path d="M6 12l4-4-4-4" />
          </svg>
        </div>
      </div>
    </aside>
  );
}
