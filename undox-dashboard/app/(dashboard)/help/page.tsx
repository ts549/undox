import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, Book, Video, Mail, Phone, ExternalLink } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

const faqData = [
  {
    question: "How do I add a new streamer to the platform?",
    answer:
      "Navigate to the Streamers page and click the 'Add Streamer' button. Fill in the required information including their streaming platform, username, and category. The system will automatically start monitoring their streams once added.",
  },
  {
    question: "Why are some analytics showing as 'N/A'?",
    answer:
      "Analytics data may show as 'N/A' when there's insufficient data or when a streamer hasn't been active recently. The system requires at least 24 hours of activity to generate meaningful analytics.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Live streaming data is updated every 30 seconds, while analytics and revenue data are updated every 5 minutes. Historical data is processed overnight for optimal performance.",
  },
  {
    question: "Can I export analytics data?",
    answer:
      "Yes, you can export analytics data in CSV or PDF format from the Analytics page. Click the export button in the top-right corner of any chart or data table.",
  },
  {
    question: "How do I set up notifications?",
    answer:
      "Go to Settings > Notifications to configure your alert preferences. You can set up email notifications, stream alerts, and revenue milestone notifications.",
  },
  {
    question: "What should I do if a streamer's data isn't updating?",
    answer:
      "First, check if the streamer's profile information is correct. If the issue persists, try refreshing their connection in the Streamers page or contact support for assistance.",
  },
]

const supportArticles = [
  { title: "Getting Started Guide", category: "Setup", readTime: "5 min" },
  { title: "Understanding Analytics", category: "Analytics", readTime: "8 min" },
  { title: "Managing Streamers", category: "Management", readTime: "6 min" },
  { title: "Notification Setup", category: "Settings", readTime: "4 min" },
  { title: "Troubleshooting Common Issues", category: "Support", readTime: "10 min" },
  { title: "API Documentation", category: "Development", readTime: "15 min" },
]

export default function HelpPage() {
  return (
    <div>
      <DashboardSidebar label="Help" />
      <main className="ml-64 mt-20 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Help & Support</h1>
          <p className="text-muted-foreground">Find answers to common questions and get assistance</p>
        </div>

        {/* Search Help */}
        <Card className="bg-card border-border mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search help articles, FAQs, and documentation..."
                className="pl-10 bg-input border-border text-foreground"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageCircle className="w-4 h-4 mr-3" />
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-border text-card-foreground bg-transparent"
                >
                  <Video className="w-4 h-4 mr-3" />
                  Video Tutorials
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-border text-card-foreground bg-transparent"
                >
                  <Book className="w-4 h-4 mr-3" />
                  Documentation
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-border text-card-foreground bg-transparent"
                >
                  <ExternalLink className="w-4 h-4 mr-3" />
                  Community Forum
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@streammonitor.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Business Hours:</p>
                  <p>Mon-Fri: 9AM - 6PM EST</p>
                  <p>Sat-Sun: 10AM - 4PM EST</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Popular Articles */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Popular Articles</CardTitle>
                <CardDescription>Most viewed help articles and guides</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportArticles.map((article, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-card-foreground">{article.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions and their answers</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="text-card-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Submit a Support Request</CardTitle>
                <CardDescription>Can't find what you're looking for? Send us a message</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      Name
                    </Label>
                    <Input id="name" placeholder="Your full name" className="bg-input border-border text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-card-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your issue"
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your issue in detail..."
                    rows={4}
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Send Support Request</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
