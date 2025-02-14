
import { AlertCircle, Search, Shield } from "lucide-react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FactChecker from "../components/FactChecker";
import InfoCard from "../components/InfoCard";
import LatestNews from "../components/LatestNews";

const Index = () => {
  const features = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Instant Detection",
      description: "Our AI-powered system analyzes content in real-time to identify potential misinformation.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Deep Analysis",
      description: "We cross-reference multiple reliable sources to verify information accuracy.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stay Protected",
      description: "Get instant alerts about misleading content before sharing it with others.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12 space-y-20">
          <HeroSection />
          
          <div className="space-y-12">
            <FactChecker />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <InfoCard key={index} {...feature} />
              ))}
            </div>
            
            <LatestNews />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
