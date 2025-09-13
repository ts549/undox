import { Bell, Search, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
  return (
    <header className="bg-card border-b border-border px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SM</span>
            </div>
            <span className="text-xl font-bold text-foreground">Cypher</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search streamers..." className="pl-10 w-64 bg-input border-border" />
          </div>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
