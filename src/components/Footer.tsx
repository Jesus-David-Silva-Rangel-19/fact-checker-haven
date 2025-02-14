
import { Heart, Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-20 border-t">
      <div className="container mx-auto px-4 space-y-4">
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="font-labrada">Desarrollado con</span>
          <Heart className="w-5 h-5 text-red-500 fill-current" />
          <span className="font-labrada">por Jesús David Silva Rangel</span>
          <Rocket className="w-5 h-5 text-blue-500" />
        </div>
        <p className="text-center text-sm text-gray-600 font-labrada">
          "La libertad económica es esencial para la prosperidad democrática y el progreso humano"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
