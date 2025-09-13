"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Server, Upload, Download, Settings, TestTube, User } from "lucide-react"

export function AddStreamer({cancelFunction} : {cancelFunction: () => void}) {
  return (
    <Card className="bg-card border-border">
        {/* Channel Information */}
        <CardHeader>
            <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            <CardTitle className="text-card-foreground">Channel Information</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <div className="flex gap-2">
                        <Label htmlFor="channel-name" className="text-card-foreground text-sm">
                            Channel Name
                        </Label>
                        <Badge className="bg-primary text-white">Required</Badge>
                    </div>
                    <Input
                    id="channel-name"
                    placeholder="Enter your channel name"
                    className="bg-input border-border text-foreground"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="channel-category" className="text-card-foreground text-sm">
                    Category
                    </Label>
                    <Input
                    id="channel-category"
                    placeholder="Gaming, Music, Art, etc."
                    className="bg-input border-border text-foreground"
                    />
                </div>
                </div>

                <div className="space-y-2">
                <Label htmlFor="channel-description" className="text-card-foreground text-sm">
                    Channel Description
                </Label>
                <Textarea
                    id="channel-description"
                    placeholder="Describe your channel and what viewers can expect..."
                    className="bg-input border-border text-foreground min-h-[80px]"
                />
            </div>
        </CardContent>

      <CardHeader>
        <div className="flex items-center gap-2">
          <Server className="w-5 h-5 text-primary" />
          <CardTitle className="text-card-foreground">RTMP Server Configuration</CardTitle>
        </div>
        <CardDescription>Configure ingest and egress URLs for streaming servers</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Ingest Configuration */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Upload className="w-4 h-4 text-primary" />
            <Label className="text-card-foreground font-medium">Ingest URLs</Label>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Input Streams
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-ingest" className="text-card-foreground text-sm">
                Primary Ingest Server
              </Label>
              <Input
                id="primary-ingest"
                placeholder="rtmp://ingest1.example.com/live"
                className="bg-input border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backup-ingest" className="text-card-foreground text-sm">
                Backup Ingest Server
              </Label>
              <Input
                id="backup-ingest"
                placeholder="rtmp://ingest2.example.com/live"
                className="bg-input border-border text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="stream-key" className="text-card-foreground text-sm">
              Stream Key
            </Label>
            <Input
              id="stream-key"
              placeholder="your-unique-stream-key-here"
              className="bg-input border-border text-foreground"
            />
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Egress Configuration */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-primary" />
            <Label className="text-card-foreground font-medium">Egress URLs</Label>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Output Streams
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hls-output" className="text-card-foreground text-sm">
                HLS Output URL
              </Label>
              <Input
                id="hls-output"
                placeholder="https://cdn.example.com/hls/stream.m3u8"
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dash-output" className="text-card-foreground text-sm">
                DASH Output URL
              </Label>
              <Input
                id="dash-output"
                placeholder="https://cdn.example.com/dash/stream.mpd"
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rtmp-output" className="text-card-foreground text-sm">
                RTMP Restream URL
              </Label>
              <Input
                id="rtmp-output"
                placeholder="rtmp://output.example.com/live/stream"
                className="bg-input border-border text-foreground"
              />
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Advanced Settings */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-primary" />
            <Label className="text-card-foreground font-medium">Advanced Configuration</Label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bitrate" className="text-card-foreground text-sm">
                Max Bitrate (kbps)
              </Label>
              <Input id="bitrate" type="number" placeholder="5000" className="bg-input border-border text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resolution" className="text-card-foreground text-sm">
                Resolution
              </Label>
              <Input id="resolution" placeholder="1920x1080" className="bg-input border-border text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="framerate" className="text-card-foreground text-sm">
                Frame Rate (fps)
              </Label>
              <Input id="framerate" type="number" placeholder="30" className="bg-input border-border text-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-params" className="text-card-foreground text-sm">
              Custom RTMP Parameters
            </Label>
            <Textarea
              id="custom-params"
              placeholder="Additional RTMP parameters (one per line)"
              className="bg-input border-border text-foreground min-h-[80px]"
            />
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">Save Configuration</Button>
          <Button variant="outline" className="border-border text-card-foreground bg-transparent cursor-pointer">
            <TestTube className="w-4 h-4 mr-2" />
            Test Connection
          </Button>
          <Button variant="outline" className="border-border text-card-foreground bg-transparent cursor-pointer">
            Reset to Defaults
          </Button>
          <Button className="bg-red-700 text-white hover:bg-red-700 cursor-pointer" onClick={cancelFunction}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
