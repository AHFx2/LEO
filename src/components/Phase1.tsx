import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { Separator } from "./ui/separator";
import { FileText, CreditCard, Lock, Calendar, Shield } from "lucide-react";

export function Phase1() {
  const [contractForm, setContractForm] = useState({
    partyA: {
      firstName: "",
      middleName: "",
      lastName: "",
      commercialRegisterNumber: "",
      commercialRegisterDocument: null as File | null
    },
    partyB: {
      firstName: "",
      middleName: "",
      lastName: "",
      commercialRegisterNumber: "",
      commercialRegisterDocument: null as File | null
    },
    launchCompany: {
      firstName: "",
      middleName: "",
      lastName: "",
      commercialRegisterNumber: "",
      commercialRegisterDocument: null as File | null
    },
    template: "",
    arbitrationClause: false,
    agreementTemplate: ""
  });


  const [creditCardForm, setCreditCardForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: ""
  });

  const contractTemplates = [
    { value: "template1", label: "Contract Template 1 - Satellite Lease Agreement" },
    { value: "template2", label: "Contract Template 2 - Data Rights Transfer" },
    { value: "template3", label: "Contract Template 3 - Orbital Slot License" },
    { value: "template4", label: "Contract Template 4 - Space Debris Insurance" },
    { value: "template5", label: "Contract Template 5 - Launch Services Agreement" },
    { value: "template6", label: "Contract Template 6 - Ground Station Partnership" },
    { value: "template7", label: "Contract Template 7 - Space Manufacturing Contract" },
    { value: "template8", label: "Contract Template 8 - Asteroid Mining Rights" },
    { value: "template9", label: "Contract Template 9 - Space Tourism Service" },
    { value: "template10", label: "Contract Template 10 - Interplanetary Trade Agreement" }
  ];

  const agreementTemplates = [
    { value: "cisg", label: "CISG - UN Convention on Contracts for the International Sale of Goods" },
    { value: "eucp", label: "eUCP - Electronic Uniform Customs and Practice" },
    { value: "urc522", label: "URC 522 - Uniform Rules for Collections" },
    { value: "incoterms", label: "Incoterms 2020 - International Commercial Terms" }
  ];



  const handleContractSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Smart contract generated successfully! Contract ID: SC-" + Math.random().toString(36).substr(2, 9).toUpperCase());
  };

  const handleFormChange = (field: string, value: string | boolean | File | null) => {
    setContractForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePartyFormChange = (party: 'partyA' | 'partyB' | 'launchCompany', field: string, value: string | File | null) => {
    setContractForm(prev => ({
      ...prev,
      [party]: {
        ...prev[party],
        [field]: value
      }
    }));
  };

  const handleCreditCardChange = (field: string, value: string) => {
    setCreditCardForm(prev => ({
      ...prev,
      [field]: value
    }));
  };



  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Phase 1: Contracting & Trade</h1>
        <p className="text-muted-foreground">Create contracts, trade space assets, and manage payments securely</p>
      </div>

      <Tabs defaultValue="contracts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="contracts" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Contracts</span>
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span>Payments</span>
          </TabsTrigger>
        </TabsList>

        {/* Contract Creation */}
        <TabsContent value="contracts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Create New Contract</span>
              </CardTitle>
              <CardDescription>
                Generate a smart contract for space trade transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContractSubmit} className="space-y-8">
                {/* Party A Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Party A Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="partyA-firstName">First Name *</Label>
                        <Input
                          id="partyA-firstName"
                          placeholder="Enter first name"
                          value={contractForm.partyA.firstName}
                          onChange={(e) => handlePartyFormChange("partyA", "firstName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partyA-middleName">Middle Name</Label>
                        <Input
                          id="partyA-middleName"
                          placeholder="Enter middle name (optional)"
                          value={contractForm.partyA.middleName}
                          onChange={(e) => handlePartyFormChange("partyA", "middleName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partyA-lastName">Last Name *</Label>
                        <Input
                          id="partyA-lastName"
                          placeholder="Enter last name"
                          value={contractForm.partyA.lastName}
                          onChange={(e) => handlePartyFormChange("partyA", "lastName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="partyA-crNumber">Commercial Register Number *</Label>
                        <Input
                          id="partyA-crNumber"
                          placeholder="Enter CR number"
                          value={contractForm.partyA.commercialRegisterNumber}
                          onChange={(e) => handlePartyFormChange("partyA", "commercialRegisterNumber", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partyA-crDocument">Commercial Register Document *</Label>
                        <Input
                          id="partyA-crDocument"
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => handlePartyFormChange("partyA", "commercialRegisterDocument", e.target.files?.[0] || null)}
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Party B Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Party B Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="partyB-firstName">First Name *</Label>
                        <Input
                          id="partyB-firstName"
                          placeholder="Enter first name"
                          value={contractForm.partyB.firstName}
                          onChange={(e) => handlePartyFormChange("partyB", "firstName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partyB-middleName">Middle Name</Label>
                        <Input
                          id="partyB-middleName"
                          placeholder="Enter middle name (optional)"
                          value={contractForm.partyB.middleName}
                          onChange={(e) => handlePartyFormChange("partyB", "middleName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partyB-lastName">Last Name *</Label>
                        <Input
                          id="partyB-lastName"
                          placeholder="Enter last name"
                          value={contractForm.partyB.lastName}
                          onChange={(e) => handlePartyFormChange("partyB", "lastName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="partyB-crNumber">Commercial Register Number *</Label>
                        <Input
                          id="partyB-crNumber"
                          placeholder="Enter CR number"
                          value={contractForm.partyB.commercialRegisterNumber}
                          onChange={(e) => handlePartyFormChange("partyB", "commercialRegisterNumber", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partyB-crDocument">Commercial Register Document *</Label>
                        <Input
                          id="partyB-crDocument"
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => handlePartyFormChange("partyB", "commercialRegisterDocument", e.target.files?.[0] || null)}
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Launch Company Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Launch Company Information (Third Party)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="launchCompany-firstName">First Name *</Label>
                        <Input
                          id="launchCompany-firstName"
                          placeholder="Enter first name"
                          value={contractForm.launchCompany.firstName}
                          onChange={(e) => handlePartyFormChange("launchCompany", "firstName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="launchCompany-middleName">Middle Name</Label>
                        <Input
                          id="launchCompany-middleName"
                          placeholder="Enter middle name (optional)"
                          value={contractForm.launchCompany.middleName}
                          onChange={(e) => handlePartyFormChange("launchCompany", "middleName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="launchCompany-lastName">Last Name *</Label>
                        <Input
                          id="launchCompany-lastName"
                          placeholder="Enter last name"
                          value={contractForm.launchCompany.lastName}
                          onChange={(e) => handlePartyFormChange("launchCompany", "lastName", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="launchCompany-crNumber">Commercial Register Number *</Label>
                        <Input
                          id="launchCompany-crNumber"
                          placeholder="Enter CR number"
                          value={contractForm.launchCompany.commercialRegisterNumber}
                          onChange={(e) => handlePartyFormChange("launchCompany", "commercialRegisterNumber", e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="launchCompany-crDocument">Commercial Register Document *</Label>
                        <Input
                          id="launchCompany-crDocument"
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => handlePartyFormChange("launchCompany", "commercialRegisterDocument", e.target.files?.[0] || null)}
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contract Template Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contract Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="template">Contract Template *</Label>
                      <Select onValueChange={(value) => handleFormChange("template", value)}>
                        <SelectTrigger className="bg-input border-border">
                          <SelectValue placeholder="Select a contract template" />
                        </SelectTrigger>
                        <SelectContent>
                          {contractTemplates.map((template) => (
                            <SelectItem key={template.value} value={template.value}>
                              {template.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="arbitrationClause"
                          checked={contractForm.arbitrationClause}
                          onCheckedChange={(checked) => handleFormChange("arbitrationClause", checked as boolean)}
                        />
                        <Label htmlFor="arbitrationClause">Enable Arbitration Clause</Label>
                      </div>

                      <div className="ml-6 space-y-2">
                        <Label>Or choose from the following agreement templates:</Label>
                        <div className="space-y-2">
                          {agreementTemplates.map((template) => (
                            <div key={template.value} className="flex items-center space-x-2">
                              <Checkbox
                                id={template.value}
                                checked={contractForm.agreementTemplate === template.value}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    handleFormChange("agreementTemplate", template.value);
                                  } else {
                                    handleFormChange("agreementTemplate", "");
                                  }
                                }}
                              />
                              <Label htmlFor={template.value} className="text-sm">
                                {template.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Smart Contract
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>



        {/* Payments */}
        <TabsContent value="payments">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Wallet Balance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Total Balance</div>
                  <div className="text-2xl font-bold text-foreground">15,432.50 USDC</div>
                  <div className="text-sm text-success mt-2">+2.5% this month</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Available</div>
                    <div className="font-semibold text-foreground">12,890.30</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Locked</div>
                    <div className="font-semibold text-foreground">2,542.20</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5" />
                  <span>Credit Card Details</span>
                </CardTitle>
                <CardDescription>
                  Secure payment method for space transactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={creditCardForm.cardNumber}
                    onChange={(e) => handleCreditCardChange("cardNumber", e.target.value)}
                    className="bg-input border-border"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={creditCardForm.expiryDate}
                      onChange={(e) => handleCreditCardChange("expiryDate", e.target.value)}
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      type="password"
                      value={creditCardForm.cvv}
                      onChange={(e) => handleCreditCardChange("cvv", e.target.value)}
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardholderName">Cardholder Name</Label>
                  <Input
                    id="cardholderName"
                    placeholder="Enter full name"
                    value={creditCardForm.cardholderName}
                    onChange={(e) => handleCreditCardChange("cardholderName", e.target.value)}
                    className="bg-input border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="billingAddress">Billing Address</Label>
                  <Input
                    id="billingAddress"
                    placeholder="Enter billing address"
                    value={creditCardForm.billingAddress}
                    onChange={(e) => handleCreditCardChange("billingAddress", e.target.value)}
                    className="bg-input border-border"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Lock className="h-4 w-4 mr-2" />
                  Save Card Details
                </Button>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Your payment information is encrypted and secure</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Letter of Credit</span>
                </CardTitle>
                <CardDescription>
                  Secure payment for space trade transactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    placeholder="Enter amount in USDC"
                    className="bg-input border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient</Label>
                  <Input
                    id="recipient"
                    placeholder="Enter recipient address"
                    className="bg-input border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usdc">USDC</SelectItem>
                      <SelectItem value="usdt">USDT</SelectItem>
                      <SelectItem value="eth">ETH</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Create Letter of Credit
                </Button>
                
                <Separator />
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Transaction Status</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Pending</span>
                      <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>In Review</span>
                      <Badge variant="outline" className="bg-muted text-muted-foreground">Waiting</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Completed</span>
                      <Badge variant="outline" className="bg-muted text-muted-foreground">Waiting</Badge>
                    </div>
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