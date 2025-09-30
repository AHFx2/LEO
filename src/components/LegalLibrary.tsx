import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { BookOpen, FileText, FileCheck, Gavel, Globe, Search, Download, Eye, Star } from "lucide-react";

export function LegalLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const legalResources = {
    contractTemplates: [
      { 
        id: "CT-01", 
        name: "Satellite Lease Agreement", 
        category: "Leasing", 
        pages: 15,
        description: "Comprehensive agreement for satellite leasing arrangements including operational terms and liability clauses.",
        lastUpdated: "2024-03-15",
        downloads: 1240,
        rating: 4.8
      },
      { 
        id: "CT-02", 
        name: "Data Rights Transfer", 
        category: "IP Transfer", 
        pages: 12,
        description: "Legal framework for transferring data rights and intellectual property in space-based operations.",
        lastUpdated: "2024-03-10",
        downloads: 856,
        rating: 4.6
      },
      { 
        id: "CT-03", 
        name: "Orbital Slot License", 
        category: "Licensing", 
        pages: 18,
        description: "Standardized template for orbital slot licensing and frequency coordination agreements.",
        lastUpdated: "2024-02-28",
        downloads: 692,
        rating: 4.7
      },
      { 
        id: "CT-04", 
        name: "Space Debris Insurance", 
        category: "Insurance", 
        pages: 22,
        description: "Comprehensive insurance policy template covering space debris and collision risks.",
        lastUpdated: "2024-03-20",
        downloads: 1105,
        rating: 4.9
      },
      { 
        id: "CT-05", 
        name: "Launch Services Agreement", 
        category: "Services", 
        pages: 28,
        description: "Complete contract template for launch services including payload integration and mission support.",
        lastUpdated: "2024-03-12",
        downloads: 978,
        rating: 4.5
      },
      { 
        id: "CT-06", 
        name: "Ground Station Partnership", 
        category: "Partnership", 
        pages: 20,
        description: "Partnership agreement template for ground station operations and data relay services.",
        lastUpdated: "2024-02-15",
        downloads: 534,
        rating: 4.4
      },
      { 
        id: "CT-07", 
        name: "Space Manufacturing Contract", 
        category: "Manufacturing", 
        pages: 35,
        description: "Advanced contract for in-space manufacturing operations and zero-gravity production facilities.",
        lastUpdated: "2024-01-30",
        downloads: 423,
        rating: 4.6
      },
      { 
        id: "CT-08", 
        name: "Asteroid Mining Rights", 
        category: "Mining", 
        pages: 45,
        description: "Comprehensive legal framework for asteroid mining operations and resource extraction rights.",
        lastUpdated: "2024-02-10",
        downloads: 789,
        rating: 4.8
      },
      { 
        id: "CT-09", 
        name: "Space Tourism Service", 
        category: "Tourism", 
        pages: 30,
        description: "Service agreement template for commercial space tourism operations and passenger safety.",
        lastUpdated: "2024-03-05",
        downloads: 612,
        rating: 4.3
      },
      { 
        id: "CT-10", 
        name: "Interplanetary Trade Agreement", 
        category: "Trade", 
        pages: 50,
        description: "Future-ready template for interplanetary commerce and multi-world trade regulations.",
        lastUpdated: "2024-01-15",
        downloads: 295,
        rating: 4.7
      }
    ],
    agreementTemplates: [
      { 
        id: "AT-01", 
        name: "CISG - UN Convention on Contracts for the International Sale of Goods", 
        type: "International Trade Law",
        description: "United Nations convention governing international commercial transactions and cross-border trade.",
        applicability: "Global commercial space transactions",
        lastUpdated: "2024-03-01",
        status: "Active"
      },
      { 
        id: "AT-02", 
        name: "eUCP - Electronic Uniform Customs and Practice", 
        type: "Electronic Trade",
        description: "Electronic commerce rules for digital transactions and electronic documentation.",
        applicability: "Digital space commerce and e-documentation",
        lastUpdated: "2024-02-20",
        status: "Active"
      },
      { 
        id: "AT-03", 
        name: "URC 522 - Uniform Rules for Collections", 
        type: "Collections",
        description: "International rules for documentary collections and payment processing.",
        applicability: "Space asset financing and payment collections",
        lastUpdated: "2024-01-25",
        status: "Active"
      },
      { 
        id: "AT-04", 
        name: "Incoterms 2020 - International Commercial Terms", 
        type: "Trade Terms",
        description: "International commercial terms defining responsibilities in global trade transactions.",
        applicability: "Space equipment delivery and risk allocation",
        lastUpdated: "2024-03-18",
        status: "Active"
      }
    ],
    generalPrinciples: [
      { 
        id: "GP-01", 
        name: "Space Law Fundamentals", 
        description: "Basic principles of space law and governance including sovereignty and jurisdiction issues.",
        topics: ["Space sovereignty", "Jurisdiction principles", "International cooperation", "Regulatory frameworks"],
        relevance: "Foundation for all space commerce activities",
        lastReviewed: "2024-03-22"
      },
      { 
        id: "GP-02", 
        name: "Liability and Insurance", 
        description: "Understanding liability frameworks in space operations and comprehensive insurance coverage.",
        topics: ["Liability frameworks", "Insurance requirements", "Risk assessment", "Claims procedures"],
        relevance: "Critical for risk management in space operations",
        lastReviewed: "2024-03-08"
      },
      { 
        id: "GP-03", 
        name: "Dispute Resolution Mechanisms", 
        description: "Methods for resolving space commerce disputes through arbitration and mediation.",
        topics: ["Arbitration procedures", "Mediation processes", "International courts", "Alternative dispute resolution"],
        relevance: "Essential for conflict resolution in space transactions",
        lastReviewed: "2024-02-14"
      },
      { 
        id: "GP-04", 
        name: "Intellectual Property in Space", 
        description: "IP rights and protection mechanisms for space-based innovations and technologies.",
        topics: ["Patent protection", "Technology transfer", "Trade secrets", "Licensing agreements"],
        relevance: "Protecting innovations in space technology and operations",
        lastReviewed: "2024-03-16"
      }
    ],
    internationalTreaties: [
      { 
        id: "IT-01", 
        name: "Outer Space Treaty 1967", 
        description: "Foundation treaty of international space law establishing core principles for space activities.",
        signatories: "110+ countries",
        keyProvisions: ["Non-appropriation principle", "Peaceful use of space", "State responsibility", "International cooperation"],
        relevance: "Primary legal framework for all space activities",
        status: "In Force"
      },
      { 
        id: "IT-02", 
        name: "Moon Agreement 1984", 
        description: "Legal framework for lunar activities and celestial body exploration and utilization.",
        signatories: "18 countries",
        keyProvisions: ["Common heritage principle", "International regime", "Environmental protection", "Benefit sharing"],
        relevance: "Governs lunar mining and celestial body operations",
        status: "In Force"
      },
      { 
        id: "IT-03", 
        name: "Registration Convention 1976", 
        description: "Requirements for registration of space objects and maintenance of national registries.",
        signatories: "69+ countries",
        keyProvisions: ["Registration obligations", "Information sharing", "National registries", "UN registry"],
        relevance: "Mandatory for all launched space objects",
        status: "In Force"
      },
      { 
        id: "IT-04", 
        name: "Liability Convention 1972", 
        description: "International framework for liability and compensation for space-related damage.",
        signatories: "98+ countries",
        keyProvisions: ["Absolute liability", "Fault-based liability", "Compensation procedures", "Claims process"],
        relevance: "Critical for space insurance and liability coverage",
        status: "In Force"
      }
    ]
  };

  const getAllResources = () => {
    const all = [
      ...legalResources.contractTemplates.map(item => ({ ...item, type: 'contract' })),
      ...legalResources.agreementTemplates.map(item => ({ ...item, type: 'agreement' })),
      ...legalResources.generalPrinciples.map(item => ({ ...item, type: 'principle' })),
      ...legalResources.internationalTreaties.map(item => ({ ...item, type: 'treaty' }))
    ];
    return all;
  };

  const filteredResources = () => {
    const allResources = getAllResources();
    return allResources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (resource.description && resource.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      if (activeCategory === "all") return matchesSearch;
      return matchesSearch && resource.type === activeCategory;
    });
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'contract': return <FileText className="h-4 w-4" />;
      case 'agreement': return <FileCheck className="h-4 w-4" />;
      case 'principle': return <Gavel className="h-4 w-4" />;
      case 'treaty': return <Globe className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getResourceBadge = (type: string) => {
    const colors = {
      'contract': 'bg-primary/10 text-primary border-primary/20',
      'agreement': 'bg-success/10 text-success border-success/20',
      'principle': 'bg-accent/10 text-accent border-accent/20',
      'treaty': 'bg-warning/10 text-warning border-warning/20'
    };
    return colors[type as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-3 w-3 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
          />
        ))}
        <span className="text-xs text-muted-foreground ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <BookOpen className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Legal Library</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Comprehensive legal resources for space commerce and trade
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            <FileText className="h-3 w-3 mr-1" />
            {legalResources.contractTemplates.length} Contract Templates
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Globe className="h-3 w-3 mr-1" />
            {legalResources.internationalTreaties.length} International Treaties
          </Badge>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-1 md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search legal resources, templates, and documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-input border-border"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
          >
            All Resources
          </Button>
          <Button
            variant={activeCategory === "contract" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("contract")}
          >
            Contracts
          </Button>
          <Button
            variant={activeCategory === "agreement" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("agreement")}
          >
            Agreements
          </Button>
          <Button
            variant={activeCategory === "principle" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("principle")}
          >
            Principles
          </Button>
          <Button
            variant={activeCategory === "treaty" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("treaty")}
          >
            Treaties
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Contract Templates</p>
                <p className="text-2xl font-bold text-foreground">{legalResources.contractTemplates.length}</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Agreement Templates</p>
                <p className="text-2xl font-bold text-foreground">{legalResources.agreementTemplates.length}</p>
              </div>
              <FileCheck className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Legal Principles</p>
                <p className="text-2xl font-bold text-foreground">{legalResources.generalPrinciples.length}</p>
              </div>
              <Gavel className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">International Treaties</p>
                <p className="text-2xl font-bold text-foreground">{legalResources.internationalTreaties.length}</p>
              </div>
              <Globe className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources().map((resource) => (
          <Card key={resource.id} className="hover:shadow-lg transition-all group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  {getResourceIcon(resource.type)}
                  <Badge className={getResourceBadge(resource.type)}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </Badge>
                </div>
                {resource.type === 'contract' && 'rating' in resource && (
                  <div className="text-right">
                    {renderStarRating(resource.rating)}
                  </div>
                )}
              </div>
              <CardTitle className="text-lg leading-tight">{resource.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {resource.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {resource.type === 'contract' && (
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Category:</span>
                    <p className="text-foreground">{(resource as any).category}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Pages:</span>
                    <p className="text-foreground">{(resource as any).pages}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Downloads:</span>
                    <p className="text-foreground">{(resource as any).downloads?.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Updated:</span>
                    <p className="text-foreground">{(resource as any).lastUpdated}</p>
                  </div>
                </div>
              )}
              
              {resource.type === 'agreement' && (
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <p className="text-foreground">{(resource as any).type}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Applicability:</span>
                    <p className="text-foreground">{(resource as any).applicability}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <Badge className="bg-success/10 text-success border-success/20">
                      {(resource as any).status}
                    </Badge>
                  </div>
                </div>
              )}
              
              {resource.type === 'principle' && (
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Topics:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {(resource as any).topics?.slice(0, 2).map((topic: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {(resource as any).topics?.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{(resource as any).topics.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Last Reviewed:</span>
                    <p className="text-foreground">{(resource as any).lastReviewed}</p>
                  </div>
                </div>
              )}
              
              {resource.type === 'treaty' && (
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Signatories:</span>
                    <p className="text-foreground">{(resource as any).signatories}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <Badge className="bg-success/10 text-success border-success/20">
                      {(resource as any).status}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Key Provisions:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {(resource as any).keyProvisions?.slice(0, 2).map((provision: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {provision}
                        </Badge>
                      ))}
                      {(resource as any).keyProvisions?.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{(resource as any).keyProvisions.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex space-x-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        {getResourceIcon(resource.type)}
                        <span>{resource.name}</span>
                      </DialogTitle>
                      <DialogDescription>
                        Detailed information about this legal resource
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-muted-foreground">{resource.description}</p>
                      </div>
                      
                      {resource.type === 'contract' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Template Information</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Category:</span>
                                <span>{(resource as any).category}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Pages:</span>
                                <span>{(resource as any).pages}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Downloads:</span>
                                <span>{(resource as any).downloads?.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Last Updated:</span>
                                <span>{(resource as any).lastUpdated}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Rating:</span>
                                <div>{renderStarRating((resource as any).rating)}</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Usage Guidelines</h4>
                            <div className="text-sm text-muted-foreground space-y-2">
                              <p>• Review all clauses carefully before implementation</p>
                              <p>• Customize terms according to specific transaction requirements</p>
                              <p>• Ensure compliance with applicable jurisdictional laws</p>
                              <p>• Consider professional legal review for complex transactions</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {resource.type === 'treaty' && (
                        <div>
                          <h4 className="font-semibold mb-2">Key Provisions</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {(resource as any).keyProvisions?.map((provision: string, index: number) => (
                              <div key={index} className="p-2 bg-muted/50 rounded">
                                <span className="text-sm">{provision}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {resource.type === 'principle' && (
                        <div>
                          <h4 className="font-semibold mb-2">Related Topics</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {(resource as any).topics?.map((topic: string, index: number) => (
                              <div key={index} className="p-2 bg-muted/50 rounded">
                                <span className="text-sm">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-4 pt-4">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        <Download className="h-3 w-3 mr-1" />
                        Download {resource.type === 'contract' ? 'Template' : 'Document'}
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <BookOpen className="h-3 w-3 mr-1" />
                        Add to Collection
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button size="sm" variant="outline">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResources().length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No resources found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}