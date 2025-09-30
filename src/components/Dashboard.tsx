import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Satellite, FileText, Scale, AlertTriangle, TrendingUp, Shield, BookOpen } from "lucide-react";

interface DashboardProps {
  onPhaseChange: (phase: string) => void;
}

export function Dashboard({ onPhaseChange }: DashboardProps) {

  const quickActions = [
    {
      title: "New Contract",
      description: "Create a new space trade contract",
      icon: FileText,
      action: () => onPhaseChange("phase1"),
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Marketplace",
      description: "Browse and trade space assets",
      icon: Satellite,
      action: () => onPhaseChange("marketplace"),
      color: "bg-success/10 text-success border-success/20"
    },
    {
      title: "Report Incident",
      description: "Document a space incident or collision",
      icon: AlertTriangle,
      action: () => onPhaseChange("phase2"),
      color: "bg-destructive/10 text-destructive border-destructive/20"
    },
    {
      title: "Start Arbitration",
      description: "Request dispute resolution",
      icon: Scale,
      action: () => onPhaseChange("phase3"),
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Legal Library",
      description: "Access contracts, agreements & legal resources",
      icon: BookOpen,
      action: () => onPhaseChange("legal-library"),
      color: "bg-accent/10 text-accent border-accent/20"
    }
  ];



  const stats = [
    { label: "Active Contracts", value: "247", trend: "+12%", icon: FileText },
    { label: "Tracked Assets", value: "1,430", trend: "+8%", icon: Satellite },
    { label: "Incidents Reported", value: "23", trend: "-15%", icon: AlertTriangle },
    { label: "Resolved Cases", value: "156", trend: "+22%", icon: Scale }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Satellite className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Space Judicial Trade Platform</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Secure, Transparent, and Efficient Space Commerce
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            <Shield className="h-3 w-3 mr-1" />
            Blockchain Secured
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <TrendingUp className="h-3 w-3 mr-1" />
            Live Tracking
          </Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          
          return (
            <Card key={index} className={`border-2 ${action.color} hover:shadow-lg transition-all cursor-pointer`}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="h-8 w-8" />
                </div>
                <CardTitle>{action.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {action.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={action.action}
                  className="w-full"
                  variant="default"
                >
                  {action.title === "Marketplace" ? "Browse Assets" : 
                   action.title === "Legal Library" ? "Access Library" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-success">{stat.trend}</p>
                  </div>
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium">New contract signed: Satellite LEO-447</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">Completed</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium">Incident reported: Signal interference in Sector 7</p>
                <p className="text-sm text-muted-foreground">5 hours ago</p>
              </div>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">Under Review</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium">Arbitration case resolved: Contract dispute #2847</p>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">Resolved</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}