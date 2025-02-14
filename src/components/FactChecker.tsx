
import { useState } from "react";
import { Search } from "lucide-react";

const FactChecker = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement fact checking logic
    console.log("Checking URL:", url);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-xl bg-card backdrop-blur-sm border border-gray-200 shadow-sm animate-fadeIn">
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
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md text-white bg-secondary hover:bg-secondary/90 transition-colors duration-200"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FactChecker;
