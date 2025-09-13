import { MetricsGrid } from "@/app/(dashboard)/dashboard/components/metrics-grid"
import { StreamerTable } from "@/app/(dashboard)/dashboard/components/streamer-table"
import { ActivityChart } from "@/app/(dashboard)/dashboard/components/activity-chart"
import { ViewersChart } from "@/app/(dashboard)/dashboard/components/viewers-chart"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardPage() {
  return (
    <div>
      <DashboardSidebar label="Dashboard" />
      <main className="flex-1 p-6 mt-20 ml-64">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Streamer Monitoring Dashboard</h1>
            <p className="text-muted-foreground mt-8">Real-time analytics and monitoring for your streaming platform</p>
          </div>

          <MetricsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ActivityChart />
            <ViewersChart />
          </div>

          <StreamerTable />
        </div>
      </main>
    </div>
  )
}
