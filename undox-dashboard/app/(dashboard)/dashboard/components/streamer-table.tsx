import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const streamers = [
  {
    id: 1,
    name: "GamerPro123",
    avatar: "/gamer-avatar.png",
    status: "Live",
    viewers: 15420,
    category: "Gaming",
    duration: "3h 24m",
  },
  {
    id: 2,
    name: "MusicMaster",
    avatar: "/music-avatar.png",
    status: "Live",
    viewers: 8930,
    category: "Music",
    duration: "1h 45m",
  },
  {
    id: 3,
    name: "ArtCreator",
    avatar: "/artist-avatar.png",
    status: "Offline",
    viewers: 0,
    category: "Art",
    duration: "0m",
  },
  {
    id: 4,
    name: "TechTalker",
    avatar: "/tech-avatar.png",
    status: "Live",
    viewers: 5670,
    category: "Technology",
    duration: "2h 15m",
  },
  {
    id: 5,
    name: "CookingChef",
    avatar: "/chef-avatar.png",
    status: "Live",
    viewers: 3240,
    category: "Cooking",
    duration: "45m",
  },
]

export function StreamerTable() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Active Streamers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {streamers.map((streamer) => (
            <div
              key={streamer.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted border border-border"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={streamer.avatar || "/placeholder.svg"} alt={streamer.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {streamer.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-card-foreground">{streamer.name}</h3>
                  <p className="text-sm text-muted-foreground">{streamer.category}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge
                  variant={streamer.status === "Live" ? "default" : "secondary"}
                  className={streamer.status === "Live" ? "bg-primary text-primary-foreground" : ""}
                >
                  {streamer.status}
                </Badge>
                <div className="text-right">
                  <p className="font-semibold text-card-foreground">{streamer.viewers.toLocaleString()} viewers</p>
                  <p className="text-sm text-muted-foreground">{streamer.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
