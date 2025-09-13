import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Users, Clock, MoreVertical } from "lucide-react"
import Image from "next/image"

const streamers = [
  {
    id: 1,
    name: "GamerPro_2024",
    avatar: "/gamer-avatar.png",
    status: "live",
    category: "Gaming",
    title: "Speedrunning Dark Souls III - World Record Attempt!",
    viewers: 12847,
    followers: 89234,
    streamTime: "3h 24m",
    revenue: "$2,847",
  },
  {
    id: 2,
    name: "MusicMaven",
    avatar: "/music-avatar.png",
    status: "live",
    category: "Music",
    title: "Chill Lo-Fi Beats & Chat - Study With Me",
    viewers: 5632,
    followers: 45123,
    streamTime: "6h 12m",
    revenue: "$1,234",
  },
  {
    id: 3,
    name: "ArtisticSoul",
    avatar: "/artist-avatar.png",
    status: "offline",
    category: "Art",
    title: "Digital Portrait Commission Stream",
    viewers: 0,
    followers: 23456,
    streamTime: "0m",
    revenue: "$567",
  },
  {
    id: 4,
    name: "TechReviewer",
    avatar: "/tech-reviewer-avatar.png",
    status: "live",
    category: "Technology",
    title: "Reviewing the Latest Gaming Laptops",
    viewers: 8934,
    followers: 67890,
    streamTime: "2h 45m",
    revenue: "$1,890",
  },
  {
    id: 5,
    name: "CookingChef",
    avatar: "/chef-avatar.png",
    status: "offline",
    category: "Cooking",
    title: "Making Authentic Italian Pasta",
    viewers: 0,
    followers: 34567,
    streamTime: "0m",
    revenue: "$789",
  },
  {
    id: 6,
    name: "FitnessGuru",
    avatar: "/fitness-trainer-avatar.png",
    status: "live",
    category: "Fitness",
    title: "Morning Workout Routine - Join Me!",
    viewers: 3421,
    followers: 56789,
    streamTime: "1h 15m",
    revenue: "$456",
  },
]

export function StreamerGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {streamers.map((streamer) => (
        <Card key={streamer.id} className="p-6 bg-card border-card-border hover:border-accent transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={streamer.avatar || "/placeholder.svg"}
                  alt={streamer.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card ${
                    streamer.status === "live" ? "bg-accent" : "bg-muted"
                  }`}
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{streamer.name}</h3>
                <Badge variant={streamer.status === "live" ? "default" : "secondary"} className="text-xs">
                  {streamer.status === "live" ? "LIVE" : "OFFLINE"}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{streamer.category}</p>
              <p className="text-sm font-medium text-foreground line-clamp-2">{streamer.title}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{streamer.viewers.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{streamer.followers.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{streamer.streamTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-semibold">{streamer.revenue}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm" className="flex-1">
                View Profile
              </Button>
              <Button variant="outline" size="sm" className="border-input-border bg-transparent">
                Message
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
