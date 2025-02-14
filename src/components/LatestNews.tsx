
import { Clock, CheckCircle, AlertTriangle } from "lucide-react";

const LatestNews = () => {
  const news = [
    {
      title: "Understanding Digital Misinformation",
      status: "verified",
      timestamp: "2 hours ago",
    },
    {
      title: "Fact-Checking Best Practices",
      status: "pending",
      timestamp: "4 hours ago",
    },
    {
      title: "Common Fake News Patterns",
      status: "verified",
      timestamp: "6 hours ago",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 animate-fadeIn">
      <h2 className="font-alegreya text-2xl font-bold text-primary mb-6">Latest Verifications</h2>
      {news.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-lg bg-card backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {item.status === "verified" ? (
                <CheckCircle className="text-green-500 w-5 h-5" />
              ) : (
                <AlertTriangle className="text-yellow-500 w-5 h-5" />
              )}
              <h3 className="font-alegreya font-bold text-primary">{item.title}</h3>
            </div>
            <div className="flex items-center text-sm text-muted-foreground font-labrada">
              <Clock className="w-4 h-4 mr-1" />
              {item.timestamp}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
