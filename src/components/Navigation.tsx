import { Satellite, Scale, AlertTriangle, Home } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  activePhase: string;
  onPhaseChange: (phase: string) => void;
}

export function Navigation({ activePhase, onPhaseChange }: NavigationProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "phase1", label: "Phase 1: Contracting & Trade", icon: Satellite },
    { id: "phase2", label: "Phase 2: Incident Tracking", icon: AlertTriangle },
    { id: "phase3", label: "Phase 3: Arbitration", icon: Scale },
  ];

  return (
    <nav className="bg-card border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Satellite className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">Space Judicial Trade Platform</h1>
        </div>
        
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePhase === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => onPhaseChange(item.id)}
                className={`flex items-center space-x-2 ${
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}