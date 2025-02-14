
import { useState } from "react";
import { Search, Globe, Calendar, User, AlertTriangle, CheckCircle } from "lucide-react";

interface WebsiteMetadata {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  image?: string;
  confidenceScore?: number;
}

const FactChecker = () => {
  const [url, setUrl] = useState("");
  const [metadata, setMetadata] = useState<WebsiteMetadata | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateConfidenceScore = (data: any): number => {
    let score = 0;
    
    // Criterios para el puntaje de confianza
    if (data.author) score += 20; // Tiene autor identificado
    if (data.date) score += 20; // Tiene fecha de publicación
    if (data.description) score += 20; // Tiene descripción
    if (data.image?.url) score += 20; // Tiene imagen
    if (data.publisher) score += 20; // Tiene publisher identificado

    return score;
  };

  const fetchMetadata = async (url: string) => {
    try {
      const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      
      if (data.status === "success") {
        const confidenceScore = calculateConfidenceScore(data.data);
        setMetadata({
          title: data.data.title || "",
          description: data.data.description || "",
          author: data.data.author || "",
          datePublished: data.data.date || "",
          image: data.data.image?.url || "",
          confidenceScore,
        });
      }
    } catch (error) {
      console.error("Error obteniendo metadatos:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetchMetadata(url);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fadeIn">
      <div className="p-6 rounded-xl bg-card backdrop-blur-sm border border-gray-200 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Ingresa URL o pega contenido para verificar..."
              className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 font-labrada focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md text-white bg-secondary hover:bg-secondary/90 transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {metadata && (
        <div className="p-6 rounded-xl bg-card backdrop-blur-sm border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-start gap-4">
            {metadata.image && (
              <img
                src={metadata.image}
                alt={metadata.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
            )}
            <div className="space-y-2 flex-1">
              <h3 className="font-alegreya text-xl font-bold text-primary">
                {metadata.title}
              </h3>
              <p className="font-labrada text-sm text-muted-foreground">
                {metadata.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {metadata.author && (
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{metadata.author}</span>
                  </div>
                )}
                {metadata.datePublished && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(metadata.datePublished).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center gap-2">
                {metadata.confidenceScore !== undefined && (
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    metadata.confidenceScore >= 60 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {metadata.confidenceScore >= 60 ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertTriangle className="w-4 h-4" />
                    )}
                    <span className="font-medium">
                      Índice de confianza: {metadata.confidenceScore}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactChecker;
