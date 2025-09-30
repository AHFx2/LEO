import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Satellite, Search, Filter, Eye, TrendingUp, Globe, Zap, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MarketplaceProps {
  onPhaseChange: (phase: string) => void;
}

export function Marketplace({ onPhaseChange }: MarketplaceProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const satelliteAssets = [
    {
      id: "SAT-001",
      name: "CommSat Alpha",
      type: "Communication Satellite",
      orbit: "GEO",
      shareAvailable: "20%",
      price: "2.5M USDC",
      operator: "SpaceCorp",
      image: "https://images.unsplash.com/photo-1597120081843-631bddc57076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Active",
      revenue: "340K USDC/month",
      nextMaintenance: "2024-05-15",
      coverage: "Global",
      launchDate: "2023-08-12"
    },
    {
      id: "SAT-002",
      name: "DataLink Beta",
      type: "Data Relay Satellite",
      orbit: "MEO",
      shareAvailable: "35%",
      price: "1.8M USDC",
      operator: "OrbitTech",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Active",
      revenue: "280K USDC/month",
      nextMaintenance: "2024-06-20",
      coverage: "Regional",
      launchDate: "2023-11-03"
    },
    {
      id: "SAT-003",
      name: "NavigSat Gamma",
      type: "Navigation Satellite",
      orbit: "MEO",
      shareAvailable: "15%",
      price: "3.2M USDC",
      operator: "NavSpace",
      image: "https://images.unsplash.com/photo-1597120081843-631bddc57076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Active",
      revenue: "520K USDC/month",
      nextMaintenance: "2024-04-30",
      coverage: "Global",
      launchDate: "2022-12-15"
    },
    {
      id: "SAT-004",
      name: "EarthObs Delta",
      type: "Earth Observation Satellite",
      orbit: "LEO",
      shareAvailable: "45%",
      price: "1.2M USDC",
      operator: "GeoSpace",
      image: "https://images.unsplash.com/photo-1597120081843-631bddc57076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Active",
      revenue: "195K USDC/month",
      nextMaintenance: "2024-07-10",
      coverage: "Regional",
      launchDate: "2024-01-20"
    },
    {
      id: "SAT-005",
      name: "WeatherSat Epsilon",
      type: "Weather Monitoring Satellite",
      orbit: "GEO",
      shareAvailable: "25%",
      price: "2.1M USDC",
      operator: "MeteoSpace",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Maintenance",
      revenue: "310K USDC/month",
      nextMaintenance: "2024-04-25",
      coverage: "Global",
      launchDate: "2023-06-08"
    },
    {
      id: "SAT-006",
      name: "MilSat Zeta",
      type: "Military Communication Satellite",
      orbit: "GEO",
      shareAvailable: "10%",
      price: "4.5M USDC",
      operator: "DefenseSpace",
      image: "https://images.unsplash.com/photo-1597120081843-631bddc57076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Active",
      revenue: "680K USDC/month",
      nextMaintenance: "2024-08-15",
      coverage: "Classified",
      launchDate: "2022-10-05"
    }
  ];

  const getContractDetails = (assetId: string) => {
    const contractDetailsMap: Record<string, any> = {
      "SAT-001": {
        type: "Fractional Ownership Agreement",
        terms: "5-year renewable lease with option to purchase",
        coverage: "Global coverage with 99.9% uptime guarantee",
        paymentTerms: "Quarterly payments in advance",
        liabilityLimit: "50M USDC comprehensive coverage",
        arbitrationClause: "ICC Arbitration Rules apply with London as seat",
        maintenanceSchedule: "Monthly system checks, annual hardware inspection"
      },
      "SAT-002": {
        type: "Data Services License Agreement",
        terms: "3-year fixed term with automatic renewal",
        coverage: "Regional coverage with redundancy backup",
        paymentTerms: "Monthly subscription model",
        liabilityLimit: "25M USDC operational coverage",
        arbitrationClause: "SIAC Rules with Singapore jurisdiction",
        maintenanceSchedule: "Bi-weekly software updates, quarterly maintenance"
      },
      "SAT-003": {
        type: "Navigation Services Partnership",
        terms: "7-year strategic partnership agreement",
        coverage: "Global positioning services with military-grade accuracy",
        paymentTerms: "Annual license fees with usage-based pricing",
        liabilityLimit: "100M USDC full operational coverage",
        arbitrationClause: "LCIA Rules with London arbitration seat",
        maintenanceSchedule: "Continuous monitoring with real-time diagnostics"
      }
    };
    return contractDetailsMap[assetId] || {
      type: "Standard Service Agreement",
      terms: "Flexible terms based on service type",
      coverage: "Service-specific coverage area",
      paymentTerms: "Standard payment schedule",
      liabilityLimit: "Standard liability coverage",
      arbitrationClause: "Standard arbitration procedures",
      maintenanceSchedule: "Regular maintenance as per schedule"
    };
  };

  const filteredAssets = satelliteAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.operator.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "active") return matchesSearch && asset.status === "Active";
    if (activeFilter === "maintenance") return matchesSearch && asset.status === "Maintenance";
    return matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
      case "Maintenance":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Maintenance</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Satellite className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Space Asset Marketplace</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Trade fractional ownership of space assets with blockchain security
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            <TrendingUp className="h-3 w-3 mr-1" />
            Live Markets
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Globe className="h-3 w-3 mr-1" />
            Global Assets
          </Badge>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search satellites, operators, or types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input border-border"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("all")}
          >
            All Assets
          </Button>
          <Button
            variant={activeFilter === "active" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("active")}
          >
            Active
          </Button>
          <Button
            variant={activeFilter === "maintenance" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("maintenance")}
          >
            Maintenance
          </Button>
        </div>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Assets</p>
                <p className="text-2xl font-bold text-foreground">{filteredAssets.length}</p>
              </div>
              <Satellite className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold text-foreground">15.3M USDC</p>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Trades</p>
                <p className="text-2xl font-bold text-foreground">42</p>
              </div>
              <Zap className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <p className="text-2xl font-bold text-foreground">2.3M USDC</p>
              </div>
              <Calendar className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <Card key={asset.id} className="hover:shadow-lg transition-all group">
            <CardHeader className="p-0">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={asset.image}
                  alt={asset.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {asset.shareAvailable} Available
                  </Badge>
                  {getStatusBadge(asset.status)}
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {asset.orbit} Orbit
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">{asset.name}</h4>
                  <p className="text-sm text-muted-foreground">{asset.type}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Operator:</span>
                    <p className="text-foreground truncate">{asset.operator}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Coverage:</span>
                    <p className="text-foreground">{asset.coverage}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Revenue:</span>
                    <p className="text-success">{asset.revenue}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Launch:</span>
                    <p className="text-foreground">{asset.launchDate}</p>
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{asset.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" onClick={() => setSelectedAsset(asset.id)}>
                          <Eye className="h-3 w-3 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <Satellite className="h-5 w-5" />
                            <span>{asset.name} - Asset Details</span>
                          </DialogTitle>
                          <DialogDescription>
                            Comprehensive information about this space asset
                          </DialogDescription>
                        </DialogHeader>
                        
                        <Tabs defaultValue="overview" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="technical">Technical</TabsTrigger>
                            <TabsTrigger value="contract">Contract</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="overview" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div className="aspect-video relative overflow-hidden rounded-lg">
                                  <ImageWithFallback
                                    src={asset.image}
                                    alt={asset.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                
                                <div className="space-y-2">
                                  <h4 className="font-semibold">Asset Information</h4>
                                  <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                      <span className="text-muted-foreground">Type:</span>
                                      <p>{asset.type}</p>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Orbit:</span>
                                      <p>{asset.orbit}</p>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Operator:</span>
                                      <p>{asset.operator}</p>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Status:</span>
                                      <p>{asset.status}</p>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Launch Date:</span>
                                      <p>{asset.launchDate}</p>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Next Maintenance:</span>
                                      <p>{asset.nextMaintenance}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Financial Overview</h4>
                                  <div className="space-y-3">
                                    <div className="p-4 bg-primary/10 rounded-lg">
                                      <div className="text-sm text-muted-foreground">Asset Value</div>
                                      <div className="text-2xl font-bold text-primary">{asset.price}</div>
                                    </div>
                                    <div className="p-4 bg-success/10 rounded-lg">
                                      <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                                      <div className="text-lg font-semibold text-success">{asset.revenue}</div>
                                    </div>
                                    <div className="p-4 bg-accent/10 rounded-lg">
                                      <div className="text-sm text-muted-foreground">Available Share</div>
                                      <div className="text-lg font-semibold text-accent">{asset.shareAvailable}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="technical" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-lg">Specifications</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Orbital Altitude:</span>
                                    <span>{asset.orbit === "GEO" ? "35,786 km" : asset.orbit === "MEO" ? "20,200 km" : "2,000 km"}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Coverage Area:</span>
                                    <span>{asset.coverage}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Power Generation:</span>
                                    <span>5.2 kW</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Fuel Capacity:</span>
                                    <span>450 kg</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Expected Lifespan:</span>
                                    <span>15 years</span>
                                  </div>
                                </CardContent>
                              </Card>
                              
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-lg">Performance Metrics</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Uptime:</span>
                                    <span className="text-success">99.8%</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Bandwidth:</span>
                                    <span>72 MHz</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Data Rate:</span>
                                    <span>155 Mbps</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Signal Strength:</span>
                                    <span>-85 dBm</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Fuel Remaining:</span>
                                    <span className="text-warning">78%</span>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="contract" className="space-y-4">
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-lg">Contract Details</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                {(() => {
                                  const details = getContractDetails(asset.id);
                                  return (
                                    <div className="space-y-3">
                                      <div>
                                        <span className="text-muted-foreground">Contract Type:</span>
                                        <p className="font-medium">{details.type}</p>
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Terms:</span>
                                        <p>{details.terms}</p>
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Coverage:</span>
                                        <p>{details.coverage}</p>
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Payment Terms:</span>
                                        <p>{details.paymentTerms}</p>
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Liability Limit:</span>
                                        <p>{details.liabilityLimit}</p>
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Arbitration:</span>
                                        <p>{details.arbitrationClause}</p>
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">Maintenance:</span>
                                        <p>{details.maintenanceSchedule}</p>
                                      </div>
                                    </div>
                                  );
                                })()}
                              </CardContent>
                            </Card>
                            
                            <div className="flex space-x-4">
                              <Button 
                                className="flex-1 bg-primary hover:bg-primary/90"
                                onClick={() => onPhaseChange("phase1")}
                              >
                                Create Contract
                              </Button>
                              <Button variant="outline" className="flex-1">
                                Request Information
                              </Button>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAssets.length === 0 && (
        <div className="text-center py-12">
          <Satellite className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No assets found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}