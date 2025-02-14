
import { AlertCircle, Search, Shield } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FactChecker from "../components/FactChecker";
import InfoCard from "../components/InfoCard";
import LatestNews from "../components/LatestNews";

const Index = () => {
  const features = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Detección Instantánea",
      description: "Nuestro sistema impulsado por IA analiza contenido en tiempo real para identificar posible desinformación.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Análisis Profundo",
      description: "Verificamos la información comparando múltiples fuentes confiables.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Mantente Protegido",
      description: "Recibe alertas instantáneas sobre contenido engañoso antes de compartirlo.",
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
      <Footer />
    </>
  );
};

export default Index;
