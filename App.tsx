import { HeroSection } from "./components/HeroSection";
import { VPSSelector } from "./components/VPSSelector";
import { ComparisonTable } from "./components/ComparisonTable";
import { PricingCalculator } from "./components/PricingCalculator";
import { FeaturesSection } from "./components/FeaturesSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VPSSelector />
      <ComparisonTable />
      <PricingCalculator />
      <FeaturesSection />
    </div>
  );
}