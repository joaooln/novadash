import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { KPICard } from "@/components/dashboard/KPICard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { TopPages } from "@/components/dashboard/TopPages";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { kpiCards } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />

      <div className="ml-[220px] flex-1 flex flex-col">
        <Topbar />

        <main className="p-8 flex-1">
          {/* KPI Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {kpiCards.map((card, i) => (
              <KPICard
                key={card.label}
                card={card}
                style={{ animationDelay: `${(i + 1) * 50}ms` }}
              />
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-[2fr_1fr] gap-4 mb-6">
            <RevenueChart />
            <TrafficChart />
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-4">
            <TopPages />
            <ActivityFeed />
          </div>
        </main>
      </div>
    </div>
  );
}
