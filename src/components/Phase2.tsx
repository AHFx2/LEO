import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { AlertTriangle, MapPin, Clock, Users, Eye, Filter, Bell, Zap } from "lucide-react";

export function Phase2() {
  const [incidentForm, setIncidentForm] = useState({
    type: "",
    location: "",
    time: "",
    description: "",
    partyA: false,
    partyB: false,
    partyC: false,
    evidence: null as File | null
  });

  const [alertsEnabled, setAlertsEnabled] = useState(true);

  const incidentTypes = [
    { value: "collision", label: "Satellite Collision" },
    { value: "interference", label: "Signal Interference" },
    { value: "debris", label: "Space Debris Impact" },
    { value: "malfunction", label: "System Malfunction" },
    { value: "orbit-violation", label: "Orbital Violation" }
  ];

  const publicIncidents = [
    {
      id: "INC-001",
      type: "Signal Interference",
      location: "Sector 7-Alpha",
      time: "2 hours ago",
      severity: "Medium",
      status: "Under Investigation"
    },
    {
      id: "INC-002",
      type: "Debris Impact",
      location: "LEO Zone 12",
      time: "6 hours ago",
      severity: "Low",
      status: "Resolved"
    },
    {
      id: "INC-003",
      type: "Collision Risk",
      location: "GEO Belt",
      time: "12 hours ago",
      severity: "High",
      status: "Monitoring"
    }
  ];

  const privateTracking = [
    {
      caseNumber: "CASE-2847",
      description: "Contract dispute resolution",
      status: "In Arbitration",
      lastUpdate: "1 hour ago"
    },
    {
      caseNumber: "CASE-2846",
      description: "Satellite maintenance claim",
      status: "Evidence Review",
      lastUpdate: "3 hours ago"
    }
  ];

  const riskAlerts = [
    {
      id: "ALERT-001",
      message: "Collision risk detected between Satellite A & B",
      eta: "2 hours",
      severity: "High"
    },
    {
      id: "ALERT-002",
      message: "Solar storm approaching operational satellites",
      eta: "6 hours",
      severity: "Medium"
    }
  ];

  const handleIncidentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const incidentId = "INC-" + Math.random().toString(36).substr(2, 3).toUpperCase();
    alert(`Incident report submitted successfully! Incident ID: ${incidentId}`);
  };

  const handleFormChange = (field: string, value: string | boolean | File | null) => {
    setIncidentForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFormChange("evidence", file);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-warning/10 text-warning border-warning/20";
      case "low":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Phase 2: Incident Documentation & Tracking</h1>
        <p className="text-muted-foreground">Document incidents, monitor space activities, and track case progress</p>
      </div>

      {/* Risk Alerts */}
      {alertsEnabled && riskAlerts.length > 0 && (
        <div className="mb-6 space-y-2">
          {riskAlerts.map((alert) => (
            <Alert key={alert.id} className={`border-2 ${getSeverityColor(alert.severity)}`}>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>
                  <strong>⚠️ {alert.message}</strong> - ETA: {alert.eta}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setAlertsEnabled(false)}
                  className="ml-4"
                >
                  Dismiss
                </Button>
              </AlertDescription>
            </Alert>
          ))}
        </div>
      )}

      <Tabs defaultValue="documentation" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documentation" className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Documentation</span>
          </TabsTrigger>
          <TabsTrigger value="tracking" className="flex items-center space-x-2">
            <Eye className="h-4 w-4" />
            <span>Tracking</span>
          </TabsTrigger>
          <TabsTrigger value="alerts" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span>Risk Alerts</span>
          </TabsTrigger>
        </TabsList>

        {/* Incident Documentation */}
        <TabsContent value="documentation">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Report New Incident</span>
              </CardTitle>
              <CardDescription>
                Document space incidents for official record and investigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleIncidentSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="incident-type">Incident Type</Label>
                    <Select onValueChange={(value) => handleFormChange("type", value)}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        {incidentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">UTC Time</Label>
                    <Input
                      id="time"
                      type="datetime-local"
                      value={incidentForm.time}
                      onChange={(e) => handleFormChange("time", e.target.value)}
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (Orbit Details)</Label>
                  <Input
                    id="location"
                    placeholder="e.g., LEO Zone 7, GEO Slot 45°E, Sector Alpha-12"
                    value={incidentForm.location}
                    onChange={(e) => handleFormChange("location", e.target.value)}
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Incident Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Detailed description of the incident..."
                    value={incidentForm.description}
                    onChange={(e) => handleFormChange("description", e.target.value)}
                    className="bg-input border-border min-h-[100px]"
                  />
                </div>

                <div className="space-y-4">
                  <Label>Parties Involved</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="partyA"
                        checked={incidentForm.partyA}
                        onCheckedChange={(checked) => handleFormChange("partyA", checked as boolean)}
                      />
                      <Label htmlFor="partyA">Party A</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="partyB"
                        checked={incidentForm.partyB}
                        onCheckedChange={(checked) => handleFormChange("partyB", checked as boolean)}
                      />
                      <Label htmlFor="partyB">Party B</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="partyC"
                        checked={incidentForm.partyC}
                        onCheckedChange={(checked) => handleFormChange("partyC", checked as boolean)}
                      />
                      <Label htmlFor="partyC">Party C</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence">Upload Evidence</Label>
                  <Input
                    id="evidence"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf,.txt,.log"
                    onChange={handleFileUpload}
                    className="bg-input border-border"
                  />
                  <p className="text-sm text-muted-foreground">
                    Supported formats: Images, PDFs, logs, and text files
                  </p>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Incident Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tracking Dashboard */}
        <TabsContent value="tracking">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Public Data Stream */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-5 w-5" />
                    <span>Public Data Stream</span>
                  </CardTitle>
                  <CardDescription>Live feed of reported incidents</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {publicIncidents.map((incident) => (
                  <div
                    key={incident.id}
                    className="p-4 bg-secondary/50 rounded-lg border border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-primary">
                        {incident.id}
                      </Badge>
                      <Badge className={getSeverityColor(incident.severity)}>
                        {incident.severity}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">{incident.type}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{incident.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{incident.time}</span>
                        </span>
                      </div>
                      <Badge variant="outline" className="mt-2">
                        {incident.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Private Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Private Tracking</span>
                </CardTitle>
                <CardDescription>Your personalized case monitoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {privateTracking.map((caseItem) => (
                  <div
                    key={caseItem.caseNumber}
                    className="p-4 bg-secondary/50 rounded-lg border border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-accent">
                        {caseItem.caseNumber}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{caseItem.lastUpdate}</span>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">{caseItem.description}</p>
                      <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                        {caseItem.status}
                      </Badge>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full">
                  View All Cases
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Visualization */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Event Timeline</CardTitle>
              <CardDescription>Chronological view of space incidents and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">High-risk collision alert</p>
                    <p className="text-sm text-muted-foreground">2 hours ago • Sector 7-Alpha</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Signal interference reported</p>
                    <p className="text-sm text-muted-foreground">4 hours ago • GEO Belt</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-success/10 rounded-lg border border-success/20">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Debris impact resolved</p>
                    <p className="text-sm text-muted-foreground">8 hours ago • LEO Zone 12</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Risk Alerts */}
        <TabsContent value="alerts">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Risk & Danger Alerts</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Alerts enabled</span>
                <Checkbox
                  checked={alertsEnabled}
                  onCheckedChange={setAlertsEnabled}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-destructive">
                    <Zap className="h-5 w-5" />
                    <span>Active Threats</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {riskAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-lg border-2 ${getSeverityColor(alert.severity)}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity} Risk
                        </Badge>
                        <span className="text-sm text-muted-foreground">ETA: {alert.eta}</span>
                      </div>
                      <p className="font-medium text-foreground">{alert.message}</p>
                      <div className="flex space-x-2 mt-3">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Acknowledge
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alert Settings</CardTitle>
                  <CardDescription>Configure your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="collision-alerts">Collision Alerts</Label>
                      <Checkbox id="collision-alerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="interference-alerts">Signal Interference</Label>
                      <Checkbox id="interference-alerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="debris-alerts">Space Debris</Label>
                      <Checkbox id="debris-alerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="solar-alerts">Solar Activity</Label>
                      <Checkbox id="solar-alerts" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="alert-threshold">Alert Threshold</Label>
                    <Select>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select threshold" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Risk and Above</SelectItem>
                        <SelectItem value="medium">Medium Risk and Above</SelectItem>
                        <SelectItem value="high">High Risk Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full">
                    Save Alert Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}