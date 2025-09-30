import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashboard";
import { Phase1 } from "./components/Phase1";
import { Phase2 } from "./components/Phase2";
import { Phase3 } from "./components/Phase3";
import { Marketplace } from "./components/Marketplace";
import { LegalLibrary } from "./components/LegalLibrary";

export default function App() {
  const [activePhase, setActivePhase] = useState("dashboard");

  const renderCurrentPhase = () => {
    switch (activePhase) {
      case "dashboard":
        return <Dashboard onPhaseChange={setActivePhase} />;
      case "phase1":
        return <Phase1 />;
      case "phase2":
        return <Phase2 />;
      case "phase3":
        return <Phase3 />;
      case "marketplace":
        return <Marketplace onPhaseChange={setActivePhase} />;
      case "legal-library":
        return <LegalLibrary />;
      default:
        return <Dashboard onPhaseChange={setActivePhase} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        activePhase={activePhase}
        onPhaseChange={setActivePhase}
      />
      <main className="w-full">{renderCurrentPhase()}</main>
    </div>
  );
}