
import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <div className="inline-block p-2 rounded-full bg-secondary/10 text-secondary mb-4 animate-float">
        <Shield className="w-6 h-6" />
      </div>
      <h1 className="font-alegreya text-4xl md:text-5xl lg:text-6xl font-black text-primary max-w-3xl mx-auto leading-tight">
        Verify Information with Confidence
      </h1>
      <p className="font-labrada text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Our advanced fact-checking tools help you identify and verify the authenticity of online content
        in seconds.
      </p>
    </div>
  );
};

export default HeroSection;
