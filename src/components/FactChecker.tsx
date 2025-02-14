
import { useState } from "react";
import { Search, Globe, Calendar, User } from "lucide-react";

interface WebsiteMetadata {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  image?: string;
}

const FactChecker = () => {
  const [url, setUrl] = useState("");
  const [metadata, setMetadata] = useState<WebsiteMetadata | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMetadata = async (url: string) => {
    try {
      const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      
      if (data.status === "success") {
        setMetadata({
          title: data.data.title || "",
          description: data.data.description || "",
          author: data.data.author || "",
          datePublished: data.data.date || "",
          image: data.data.image?.url || "",
        });
      }
    } catch (error) {
      console.error("Error fetching metadata:", error);
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
              placeholder="Enter URL or paste content to verify..."
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactChecker;
