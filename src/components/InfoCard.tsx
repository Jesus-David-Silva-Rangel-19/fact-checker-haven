
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const InfoCard = ({ title, description, icon }: InfoCardProps) => {
  return (
    <div className="group p-6 rounded-xl bg-card backdrop-blur-sm border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] animate-fadeIn">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-secondary">{icon}</div>
        <h3 className="font-alegreya text-xl font-extrabold text-primary">{title}</h3>
      </div>
      <p className="font-labrada text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
