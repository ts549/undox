import { Search, Filter, SortAsc } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function StreamerFilters() {
  return (
    <Card className="p-4 bg-card border-card-border">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search streamers by name, category, or status..."
              className="pl-10 bg-input border-input-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-input-border bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="border-input-border bg-transparent">
            <SortAsc className="w-4 h-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Button variant="outline" size="sm" className="border-input-border bg-transparent">
          All (247)
        </Button>
        <Button variant="outline" size="sm" className="border-input-border bg-transparent">
          Live (89)
        </Button>
        <Button variant="outline" size="sm" className="border-input-border bg-transparent">
          Offline (158)
        </Button>
        <Button variant="outline" size="sm" className="border-input-border bg-transparent">
          Gaming (156)
        </Button>
        <Button variant="outline" size="sm" className="border-input-border bg-transparent">
          Music (45)
        </Button>
        <Button variant="outline" size="sm" className="border-input-border bg-transparent">
          Art (23)
        </Button>
      </div>
    </Card>
  )
}
