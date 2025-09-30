import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { Scale, FileText, Users, Clock, MessageSquare, Upload, Eye, CheckCircle, AlertCircle, Send, Phone, Mail, Calendar, Plus, Gavel } from "lucide-react";

export function Phase3() {
  const [arbitrationForm, setArbitrationForm] = useState({
    caseNumber: "",
    claimDetails: "",
    arbitratorType: "",
    evidence: null as File | null
  });

  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [newEvidence, setNewEvidence] = useState({
    title: "",
    description: "",
    file: null as File | null
  });
  const [arbitratorMessage, setArbitratorMessage] = useState("");
  const [newRequestForm, setNewRequestForm] = useState({
    title: "",
    description: "",
    claimType: "",
    claimAmount: "",
    contractId: "",
    respondentParty: "",
    arbitratorPreference: "",
    urgencyLevel: "",
    initialEvidence: null as File | null
  });

  const arbitratorTypes = [
    { value: "ai", label: "AI Arbitrator (Fast, Cost-effective)" },
    { value: "human", label: "Human Panel (Thorough, Complex cases)" },
    { value: "hybrid", label: "Hybrid Panel (AI + Human oversight)" }
  ];

  const evidenceFiles = [
    {
      id: "EV-001",
      name: "Contract_Agreement_SAT447.pdf",
      type: "Contract",
      timestamp: "2024-01-15 14:30:22 UTC",
      source: "Party A",
      signature: "0x7a8b9c...",
      status: "Verified",
      comments: 3
    },
    {
      id: "EV-002",
      name: "Collision_Telemetry_Data.log",
      type: "Telemetry",
      timestamp: "2024-01-15 16:45:10 UTC",
      source: "Satellite System",
      signature: "0x4f5e6d...",
      status: "Under Review",
      comments: 1
    },
    {
      id: "EV-003",
      name: "Communication_Logs.txt",
      type: "Communication",
      timestamp: "2024-01-15 18:22:45 UTC",
      source: "Party B",
      signature: "0x2c3d4e...",
      status: "Disputed",
      comments: 5
    },
    {
      id: "EV-004",
      name: "Orbital_Analysis_Report.pdf",
      type: "Analysis",
      timestamp: "2024-01-16 09:15:33 UTC",
      source: "Independent Expert",
      signature: "0x9e8f7a...",
      status: "Verified",
      comments: 0
    }
  ];

  const arbitrationCases = [
    {
      id: "ARB-2847",
      title: "Satellite Collision Liability Dispute",
      parties: ["SpaceCorp Ltd.", "OrbitTech Inc."],
      arbitrator: "AI Panel",
      status: "Evidence Review",
      progress: 65,
      timeRemaining: "2 days",
      lastUpdate: "2 hours ago"
    },
    {
      id: "ARB-2846",
      title: "Data Rights Transfer Conflict",
      parties: ["NavSystems", "DataFlow Corp"],
      arbitrator: "Human Panel",
      status: "Final Decision",
      progress: 90,
      timeRemaining: "6 hours",
      lastUpdate: "30 minutes ago"
    }
  ];

  const decisionHistory = [
    {
      timestamp: "14:30",
      action: "Evidence EV-001 marked as verified",
      user: "Arbitrator AI-7",
      type: "verification"
    },
    {
      timestamp: "14:25",
      action: "Comment added to EV-003 by Party B",
      user: "Legal Representative",
      type: "comment"
    },
    {
      timestamp: "14:20",
      action: "New evidence EV-004 submitted",
      user: "Independent Expert",
      type: "submission"
    },
    {
      timestamp: "14:15",
      action: "Evidence review session started",
      user: "System",
      type: "system"
    }
  ];

  const handleArbitrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requestId = "ARB-" + Math.random().toString(36).substr(2, 4).toUpperCase();
    alert(`Arbitration request submitted successfully! Request ID: ${requestId}`);
  };

  const handleFormChange = (field: string, value: string | File | null) => {
    setArbitrationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFormChange("evidence", file);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "verified":
        return "bg-success/10 text-success border-success/20";
      case "under review":
        return "bg-warning/10 text-warning border-warning/20";
      case "disputed":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case "verification":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "comment":
        return <MessageSquare className="h-4 w-4 text-primary" />;
      case "submission":
        return <Upload className="h-4 w-4 text-warning" />;
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getCaseDetails = (caseId: string) => {
    const caseDetailsMap = {
      "ARB-2847": {
        title: "Satellite Collision Liability Dispute",
        description: "Dispute regarding liability and damages from collision between CommSat Alpha and EarthWatch Beta satellites in LEO Zone 7",
        parties: ["SpaceCorp Ltd.", "OrbitTech Inc."],
        arbitrator: {
          name: "AI Panel Alpha-7",
          type: "AI Arbitrator",
          contact: "ai-panel-alpha7@spacejudicial.com",
          schedule: "Available 24/7"
        },
        timeline: [
          { date: "2024-01-15", event: "Incident reported", status: "completed" },
          { date: "2024-01-16", event: "Arbitration request submitted", status: "completed" },
          { date: "2024-01-17", event: "Evidence collection phase", status: "current" },
          { date: "2024-01-20", event: "Arbitrator review", status: "pending" },
          { date: "2024-01-22", event: "Final decision", status: "pending" }
        ],
        claimAmount: "5.2M USDC",
        evidenceCount: 12,
        lastActivity: "2 hours ago"
      },
      "ARB-2846": {
        title: "Data Rights Transfer Conflict",
        description: "Disagreement over data processing rights and access permissions for NavStar Gamma satellite constellation",
        parties: ["NavSystems", "DataFlow Corp"],
        arbitrator: {
          name: "Dr. Sarah Chen, Legal Panel",
          type: "Human Panel",
          contact: "s.chen@spacejudicial.com",
          schedule: "Mon-Fri 9AM-5PM UTC"
        },
        timeline: [
          { date: "2024-01-10", event: "Initial complaint filed", status: "completed" },
          { date: "2024-01-12", event: "Counter-claim submitted", status: "completed" },
          { date: "2024-01-14", event: "Evidence review", status: "completed" },
          { date: "2024-01-18", event: "Final arbitration hearing", status: "current" },
          { date: "2024-01-19", event: "Decision delivery", status: "pending" }
        ],
        claimAmount: "2.8M USDC",
        evidenceCount: 8,
        lastActivity: "30 minutes ago"
      }
    };
    return caseDetailsMap[caseId] || null;
  };

  const handleEvidenceSubmit = () => {
    alert(`Evidence "${newEvidence.title}" submitted successfully!`);
    setNewEvidence({ title: "", description: "", file: null });
  };

  const handleContactArbitrator = () => {
    alert(`Message sent to arbitrator: "${arbitratorMessage}"`);
    setArbitratorMessage("");
  };

  const handleNewRequestChange = (field: string, value: string) => {
    setNewRequestForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNewRequestSubmit = () => {
    alert(`New arbitration request "${newRequestForm.title}" submitted successfully!`);
    setNewRequestForm({
      title: "",
      description: "",
      claimType: "",
      claimAmount: "",
      contractId: "",
      respondentParty: "",
      arbitratorPreference: "",
      urgencyLevel: "",
      initialEvidence: null
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Phase 3: Arbitration & Dispute Resolution</h1>
        <p className="text-muted-foreground">Request arbitration, review evidence, and track dispute resolution progress</p>
      </div>

      <Tabs defaultValue="request" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="request" className="flex items-center space-x-2">
            <Scale className="h-4 w-4" />
            <span>Request</span>
          </TabsTrigger>
          <TabsTrigger value="evidence" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Evidence Review</span>
          </TabsTrigger>
          <TabsTrigger value="cases" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Active Cases</span>
          </TabsTrigger>
        </TabsList>

        {/* Arbitration Request */}
        <TabsContent value="request">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5" />
                <span>Submit Arbitration Request</span>
              </CardTitle>
              <CardDescription>
                Request professional dispute resolution for space trade conflicts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleArbitrationSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="case-number">Case Number</Label>
                  <Input
                    id="case-number"
                    placeholder="Enter existing case number (if applicable)"
                    value={arbitrationForm.caseNumber}
                    onChange={(e) => handleFormChange("caseNumber", e.target.value)}
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="arbitrator-type">Choose Arbitrator</Label>
                  <Select onValueChange={(value) => handleFormChange("arbitratorType", value)}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select arbitrator type" />
                    </SelectTrigger>
                    <SelectContent>
                      {arbitratorTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="claim-details">Claim Details</Label>
                  <Textarea
                    id="claim-details"
                    placeholder="Provide detailed description of the dispute, including relevant contract terms, parties involved, and desired resolution..."
                    value={arbitrationForm.claimDetails}
                    onChange={(e) => handleFormChange("claimDetails", e.target.value)}
                    className="bg-input border-border min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence-upload">Upload Evidence Documents</Label>
                  <Input
                    id="evidence-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="bg-input border-border"
                  />
                  <p className="text-sm text-muted-foreground">
                    Supported formats: PDFs, Documents, Images. Maximum 10MB per file.
                  </p>
                </div>

                <Separator />

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Arbitration Process Overview</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Request submitted and reviewed (1-2 hours)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Evidence collection and verification (1-3 days)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Arbitrator review and analysis (2-5 days)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Final decision and enforcement (1 day)</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Arbitration Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Evidence Review */}
        <TabsContent value="evidence">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Evidence Files */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Evidence Repository</span>
                  </CardTitle>
                  <CardDescription>Review and annotate submitted evidence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {evidenceFiles.map((evidence) => (
                    <div
                      key={evidence.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedEvidence === evidence.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedEvidence(evidence.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-primary">
                            {evidence.id}
                          </Badge>
                          <Badge className={getStatusColor(evidence.status)}>
                            {evidence.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          {evidence.comments > 0 && (
                            <Badge variant="outline" className="text-accent">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              {evidence.comments}
                            </Badge>
                          )}
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">{evidence.name}</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">Type:</span> {evidence.type}
                          </div>
                          <div>
                            <span className="font-medium">Source:</span> {evidence.source}
                          </div>
                          <div>
                            <span className="font-medium">Timestamp:</span> {evidence.timestamp}
                          </div>
                          <div>
                            <span className="font-medium">Signature:</span> {evidence.signature}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Evidence Details & Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Evidence Details</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedEvidence ? (
                    <div className="space-y-4">
                      <div className="text-center">
                        <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                        <p className="font-medium">Evidence Selected</p>
                        <p className="text-sm text-muted-foreground">{selectedEvidence}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Button className="w-full" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View Document
                        </Button>
                        <Button className="w-full" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Add Comment
                        </Button>
                        <Button className="w-full" variant="outline">
                          Mark as Reviewed
                        </Button>
                      </div>

                      <Separator />

                      <div>
                        <Label htmlFor="comment">Add Note</Label>
                        <Textarea
                          id="comment"
                          placeholder="Add your observations or comments..."
                          className="bg-input border-border mt-2"
                        />
                        <Button size="sm" className="mt-2">
                          Save Note
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground py-8">
                      <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Select evidence to review</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Decision History</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {decisionHistory.map((entry, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        {getActionIcon(entry.type)}
                        <div className="flex-1 text-sm">
                          <p className="text-foreground">{entry.action}</p>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <span>{entry.timestamp}</span>
                            <span>•</span>
                            <span>{entry.user}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Active Cases */}
        <TabsContent value="cases">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Active Arbitration Cases</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Request
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                      <Gavel className="h-5 w-5" />
                      <span>Create New Arbitration Request</span>
                    </DialogTitle>
                    <DialogDescription>
                      Submit a new arbitration request for space trade dispute resolution
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Case Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="case-title">Case Title</Label>
                            <Input
                              id="case-title"
                              placeholder="Brief description of the dispute"
                              value={newRequestForm.title}
                              onChange={(e) => handleNewRequestChange("title", e.target.value)}
                              className="bg-input border-border"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="claim-type">Claim Type</Label>
                            <Select value={newRequestForm.claimType} onValueChange={(value) => handleNewRequestChange("claimType", value)}>
                              <SelectTrigger className="bg-input border-border">
                                <SelectValue placeholder="Select claim type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="contract-breach">Contract Breach</SelectItem>
                                <SelectItem value="collision-liability">Collision Liability</SelectItem>
                                <SelectItem value="data-rights">Data Rights Dispute</SelectItem>
                                <SelectItem value="payment-dispute">Payment Dispute</SelectItem>
                                <SelectItem value="service-failure">Service Failure</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="claim-amount">Claim Amount (USDC)</Label>
                            <Input
                              id="claim-amount"
                              placeholder="0.00"
                              type="number"
                              value={newRequestForm.claimAmount}
                              onChange={(e) => handleNewRequestChange("claimAmount", e.target.value)}
                              className="bg-input border-border"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="urgency-level">Urgency Level</Label>
                            <Select value={newRequestForm.urgencyLevel} onValueChange={(value) => handleNewRequestChange("urgencyLevel", value)}>
                              <SelectTrigger className="bg-input border-border">
                                <SelectValue placeholder="Select urgency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">Low - Standard processing</SelectItem>
                                <SelectItem value="medium">Medium - Priority processing</SelectItem>
                                <SelectItem value="high">High - Urgent (Additional fees apply)</SelectItem>
                                <SelectItem value="critical">Critical - Emergency (Space safety)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Parties & References</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="contract-id">Related Contract ID</Label>
                            <Input
                              id="contract-id"
                              placeholder="e.g., SAT-001, CON-2024-001"
                              value={newRequestForm.contractId}
                              onChange={(e) => handleNewRequestChange("contractId", e.target.value)}
                              className="bg-input border-border"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="respondent-party">Respondent Party</Label>
                            <Input
                              id="respondent-party"
                              placeholder="Name of the other party"
                              value={newRequestForm.respondentParty}
                              onChange={(e) => handleNewRequestChange("respondentParty", e.target.value)}
                              className="bg-input border-border"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="arbitrator-preference">Arbitrator Preference</Label>
                            <Select value={newRequestForm.arbitratorPreference} onValueChange={(value) => handleNewRequestChange("arbitratorPreference", value)}>
                              <SelectTrigger className="bg-input border-border">
                                <SelectValue placeholder="Select arbitrator type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ai">AI Arbitrator (Fast, Cost-effective)</SelectItem>
                                <SelectItem value="human">Human Panel (Thorough, Complex cases)</SelectItem>
                                <SelectItem value="hybrid">Hybrid Panel (AI + Human oversight)</SelectItem>
                                <SelectItem value="no-preference">No Preference</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="initial-evidence">Initial Evidence (Optional)</Label>
                            <Input
                              id="initial-evidence"
                              type="file"
                              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                              onChange={(e) => setNewRequestForm(prev => ({ ...prev, initialEvidence: e.target.files?.[0] || null }))}
                              className="bg-input border-border"
                            />
                            <p className="text-sm text-muted-foreground">
                              Upload key evidence to support your claim
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Detailed Description</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Label htmlFor="case-description">Case Description</Label>
                          <Textarea
                            id="case-description"
                            placeholder="Provide a detailed description of the dispute, including relevant dates, circumstances, and desired resolution..."
                            value={newRequestForm.description}
                            onChange={(e) => handleNewRequestChange("description", e.target.value)}
                            className="bg-input border-border min-h-[120px]"
                          />
                          <p className="text-sm text-muted-foreground">
                            Be as specific as possible to help arbitrators understand your case
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        By submitting this arbitration request, you agree to the Space Judicial Trade Platform terms and arbitration procedures. 
                        All submissions are legally binding and digitally timestamped.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="flex space-x-3">
                      <Button onClick={handleNewRequestSubmit} className="flex-1 bg-primary hover:bg-primary/90">
                        <Gavel className="h-4 w-4 mr-2" />
                        Submit Arbitration Request
                      </Button>
                      <Button variant="outline">
                        Save as Draft
                      </Button>
                      <Button variant="outline">
                        Preview Request
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-4">
              {arbitrationCases.map((case_) => (
                <Card key={case_.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{case_.title}</h3>
                        <p className="text-sm text-muted-foreground">Case ID: {case_.id}</p>
                      </div>
                      <Badge className={getStatusColor(case_.status)}>
                        {case_.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Parties</p>
                        <div className="space-y-1">
                          {case_.parties.map((party, index) => (
                            <p key={index} className="text-sm text-foreground">{party}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Arbitrator</p>
                        <p className="text-sm text-foreground">{case_.arbitrator}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Time Remaining</p>
                        <p className="text-sm text-foreground">{case_.timeRemaining}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground">{case_.progress}%</span>
                      </div>
                      <Progress value={case_.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Last updated: {case_.lastUpdate}
                      </p>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedCase(case_)}
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              <Scale className="h-5 w-5" />
                              <span>{case_.title}</span>
                            </DialogTitle>
                            <DialogDescription>
                              Case ID: {case_.id} • Status: {case_.status}
                            </DialogDescription>
                          </DialogHeader>
                          
                          {(() => {
                            const caseDetails = getCaseDetails(case_.id);
                            if (!caseDetails) return null;
                            
                            return (
                              <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="text-lg">Case Overview</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                      <div>
                                        <Label className="text-muted-foreground">Description</Label>
                                        <p className="font-medium">{caseDetails.description}</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Claim Amount</Label>
                                        <p className="text-xl font-bold text-primary">{caseDetails.claimAmount}</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Evidence Count</Label>
                                        <p className="font-medium">{caseDetails.evidenceCount} files submitted</p>
                                      </div>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="text-lg">Arbitrator Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                      <div>
                                        <Label className="text-muted-foreground">Name</Label>
                                        <p className="font-medium">{caseDetails.arbitrator.name}</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Type</Label>
                                        <Badge variant="outline">{caseDetails.arbitrator.type}</Badge>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Contact</Label>
                                        <p className="font-medium">{caseDetails.arbitrator.contact}</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Availability</Label>
                                        <p className="font-medium">{caseDetails.arbitrator.schedule}</p>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                                
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="text-lg flex items-center space-x-2">
                                      <Calendar className="h-4 w-4" />
                                      <span>Case Timeline</span>
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-4">
                                      {caseDetails.timeline.map((event, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                          <div className={`w-3 h-3 rounded-full ${
                                            event.status === "completed" ? "bg-success" :
                                            event.status === "current" ? "bg-primary" : "bg-muted"
                                          }`}></div>
                                          <div className="flex-1">
                                            <p className="font-medium">{event.event}</p>
                                            <p className="text-sm text-muted-foreground">{event.date}</p>
                                          </div>
                                          <Badge className={
                                            event.status === "completed" ? "bg-success/10 text-success border-success/20" :
                                            event.status === "current" ? "bg-primary/10 text-primary border-primary/20" :
                                            "bg-muted/10 text-muted-foreground border-muted/20"
                                          }>
                                            {event.status}
                                          </Badge>
                                        </div>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            );
                          })()}
                        </DialogContent>
                      </Dialog>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Upload className="h-3 w-3 mr-1" />
                            Submit Evidence
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              <Upload className="h-5 w-5" />
                              <span>Submit New Evidence</span>
                            </DialogTitle>
                            <DialogDescription>
                              Add supporting documents for case {case_.id}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="evidence-title">Evidence Title</Label>
                              <Input
                                id="evidence-title"
                                placeholder="Brief description of evidence"
                                value={newEvidence.title}
                                onChange={(e) => setNewEvidence(prev => ({ ...prev, title: e.target.value }))}
                                className="bg-input border-border"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="evidence-description">Detailed Description</Label>
                              <Textarea
                                id="evidence-description"
                                placeholder="Explain the relevance and content of this evidence..."
                                value={newEvidence.description}
                                onChange={(e) => setNewEvidence(prev => ({ ...prev, description: e.target.value }))}
                                className="bg-input border-border min-h-[100px]"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="evidence-file">Upload File</Label>
                              <Input
                                id="evidence-file"
                                type="file"
                                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                                onChange={(e) => setNewEvidence(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
                                className="bg-input border-border"
                              />
                              <p className="text-sm text-muted-foreground">
                                Supported: PDFs, Documents, Images (Max 10MB)
                              </p>
                            </div>
                            
                            <Alert>
                              <CheckCircle className="h-4 w-4" />
                              <AlertDescription>
                                All submitted evidence will be digitally signed and timestamped for authenticity.
                              </AlertDescription>
                            </Alert>
                            
                            <div className="flex space-x-2">
                              <Button onClick={handleEvidenceSubmit} className="flex-1">
                                Submit Evidence
                              </Button>
                              <Button variant="outline">
                                Save as Draft
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Contact Arbitrator
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              <MessageSquare className="h-5 w-5" />
                              <span>Contact Arbitrator</span>
                            </DialogTitle>
                            <DialogDescription>
                              Send a message regarding case {case_.id}
                            </DialogDescription>
                          </DialogHeader>
                          
                          {(() => {
                            const caseDetails = getCaseDetails(case_.id);
                            if (!caseDetails) return null;
                            
                            return (
                              <div className="space-y-4">
                                <Card>
                                  <CardContent className="p-4">
                                    <div className="flex items-center space-x-3">
                                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                        <Users className="h-5 w-5 text-primary" />
                                      </div>
                                      <div>
                                        <p className="font-medium">{caseDetails.arbitrator.name}</p>
                                        <p className="text-sm text-muted-foreground">{caseDetails.arbitrator.type}</p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                                
                                <div className="grid grid-cols-2 gap-3">
                                  <Button variant="outline" className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span>Email</span>
                                  </Button>
                                  <Button variant="outline" className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>Video Call</span>
                                  </Button>
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="arbitrator-message">Message</Label>
                                  <Textarea
                                    id="arbitrator-message"
                                    placeholder="Type your message to the arbitrator..."
                                    value={arbitratorMessage}
                                    onChange={(e) => setArbitratorMessage(e.target.value)}
                                    className="bg-input border-border min-h-[120px]"
                                  />
                                </div>
                                
                                <div className="flex space-x-2">
                                  <Button onClick={handleContactArbitrator} className="flex-1">
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Message
                                  </Button>
                                  <Button variant="outline">
                                    Schedule Meeting
                                  </Button>
                                </div>
                              </div>
                            );
                          })()}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Resolution Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <p className="text-2xl font-bold text-success">156</p>
                    <p className="text-sm text-muted-foreground">Resolved Cases</p>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <p className="text-2xl font-bold text-warning">23</p>
                    <p className="text-sm text-muted-foreground">Pending Cases</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-2xl font-bold text-primary">4.2</p>
                    <p className="text-sm text-muted-foreground">Avg. Days to Resolution</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <p className="text-2xl font-bold text-accent">94%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}