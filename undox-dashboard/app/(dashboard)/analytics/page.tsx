'use client';

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Eye, DollarSign, Clock } from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const viewershipData = [
  { month: "Jan", viewers: 12000, revenue: 8500 },
  { month: "Feb", viewers: 15000, revenue: 11200 },
  { month: "Mar", viewers: 18000, revenue: 14800 },
  { month: "Apr", viewers: 22000, revenue: 18900 },
  { month: "May", viewers: 25000, revenue: 22100 },
  { month: "Jun", viewers: 28000, revenue: 25600 },
]

const categoryData = [
  { name: "Gaming", value: 45, color: "#10b981" },
  { name: "Music", value: 25, color: "#22c55e" },
  { name: "Art", value: 15, color: "#16a34a" },
  { name: "Tech", value: 10, color: "#15803d" },
  { name: "Other", value: 5, color: "#166534" },
]

const hourlyData = [
  { hour: "00", viewers: 2500 },
  { hour: "06", viewers: 1800 },
  { hour: "12", viewers: 8500 },
  { hour: "18", viewers: 12000 },
  { hour: "24", viewers: 3200 },
]

export default function AnalyticsPage() {
  return (
    <div>
      <DashboardSidebar label="Analytics" />
      <main className="ml-64 mt-20 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights into your streaming platform performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">$125,430</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+12.5%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Total Viewers</CardTitle>
              <Eye className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">2.8M</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+8.2%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Avg. Watch Time</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">45m</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+3.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Active Streamers</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">1,247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+15.3%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Viewership Trend */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Viewership & Revenue Trend</CardTitle>
              <CardDescription>Monthly performance over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={viewershipData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111111",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Line type="monotone" dataKey="viewers" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Content Categories</CardTitle>
              <CardDescription>Distribution of streaming content by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111111",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-4 mt-4">
                {categoryData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">
                      {item.name} ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hourly Activity */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Peak Viewing Hours</CardTitle>
            <CardDescription>Average viewer count throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111111",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                  }}
                />
                <Area type="monotone" dataKey="viewers" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
