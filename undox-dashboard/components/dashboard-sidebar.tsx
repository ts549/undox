import { BarChart3, Monitor, Users, Activity, Settings, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navigationItems = [
  { icon: BarChart3, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Users, label: "Streamers", href: "/streamers", active: false },
  { icon: Activity, label: "Analytics", href: "/analytics", active: false },
  { icon: Settings, label: "Settings", href: "/settings", active: false },
  { icon: HelpCircle, label: "Help", href: "/help", active: false },
]

export function DashboardSidebar({label}: {label: String}) {
  navigationItems.forEach((item) => {
    item.active = item.label === label
  })
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border fixed left-0 top-16 bottom-0 z-40">
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <Link href={item.href}>
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start cursor-pointer ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
