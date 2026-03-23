import { topPages } from "@/lib/data";

export function TopPages() {
  return (
    <div className="bg-bg-2 border border-border rounded-card p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display text-[16px] font-semibold tracking-tight">Top Pages</h3>
          <p className="text-[12px] text-[#7a7d8a] mt-0.5">By sessions this month</p>
        </div>
        <button className="text-[12px] text-accent hover:opacity-75 transition-opacity">
          View all →
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            {["Page", "Sessions", "Share"].map((h) => (
              <th
                key={h}
                className="text-left text-[11px] font-medium tracking-[0.8px] uppercase text-[#7a7d8a] pb-3.5 border-b border-border px-3"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topPages.map((page) => (
            <tr
              key={page.path}
              className="hover:bg-white/[0.03] transition-colors cursor-pointer"
            >
              <td className="px-3 py-3.5 border-b border-border font-mono text-[12px] text-[#7a7d8a]">
                {page.path}
              </td>
              <td className="px-3 py-3.5 border-b border-border font-mono text-[13px]">
                {page.sessions.toLocaleString()}
              </td>
              <td className="px-3 py-3.5 border-b border-border w-28">
                <p className="text-[11px] text-[#7a7d8a] mb-1">{page.pct}%</p>
                <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${page.pct}%`, background: page.color }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
