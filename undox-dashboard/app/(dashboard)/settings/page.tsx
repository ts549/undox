import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Bell, Shield, Palette, Database, Users } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function SettingsPage() {
  return (
    <div>
      <DashboardSidebar label="Settings" />
      <main className="ml-64 mt-20 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your platform configuration and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-primary bg-primary/10">
                  <Shield className="w-4 h-4 mr-3" />
                  General
                </Button>
                <Button variant="ghost" className="w-full justify-start text-card-foreground">
                  <Bell className="w-4 h-4 mr-3" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start text-card-foreground">
                  <Users className="w-4 h-4 mr-3" />
                  User Management
                </Button>
                <Button variant="ghost" className="w-full justify-start text-card-foreground">
                  <Database className="w-4 h-4 mr-3" />
                  Data & Privacy
                </Button>
                <Button variant="ghost" className="w-full justify-start text-card-foreground">
                  <Palette className="w-4 h-4 mr-3" />
                  Appearance
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Settings */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">General Settings</CardTitle>
                <CardDescription>Basic platform configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform-name" className="text-card-foreground">
                      Platform Name
                    </Label>
                    <Input
                      id="platform-name"
                      defaultValue="StreamMonitor Pro"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-card-foreground">
                      Admin Email
                    </Label>
                    <Input
                      id="admin-email"
                      type="email"
                      defaultValue="admin@streammonitor.com"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-card-foreground">
                    Timezone
                  </Label>
                  <Select defaultValue="utc">
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="cet">Central European Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="bg-border" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-card-foreground">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable maintenance mode to restrict platform access</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-card-foreground">Auto-backup</Label>
                    <p className="text-sm text-muted-foreground">Automatically backup data daily</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Notification Preferences</CardTitle>
                <CardDescription>Configure how you receive alerts and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-card-foreground">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email alerts for important events</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-card-foreground">Stream Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when streamers go live</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-card-foreground">Revenue Alerts</Label>
                    <p className="text-sm text-muted-foreground">Notifications for revenue milestones</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-card-foreground">System Updates</Label>
                    <p className="text-sm text-muted-foreground">Platform maintenance and update notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Security & Privacy</CardTitle>
                <CardDescription>Manage security settings and data privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout" className="text-card-foreground">
                    Session Timeout (minutes)
                  </Label>
                  <Input
                    id="session-timeout"
                    type="number"
                    defaultValue="30"
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-card-foreground">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Require 2FA for admin access</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-card-foreground">Data Encryption</Label>
                    <p className="text-sm text-muted-foreground">Encrypt sensitive data at rest</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-border" />

                <div className="flex gap-3">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
                  <Button variant="outline" className="border-border text-card-foreground bg-transparent">
                    Reset to Defaults
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
