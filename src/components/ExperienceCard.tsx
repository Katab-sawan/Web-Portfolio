
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    skills: string[];
    type: 'completed' | 'upcoming';
  };
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const isUpcoming = experience.type === 'upcoming';
  
  return (
    <Card 
      className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group ${
        isUpcoming ? 'border-green-400/30 bg-green-500/5' : ''
      }`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'slideInLeft 0.6s ease-out forwards'
      }}
    >
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-white group-hover:text-blue-200 transition-colors">
                {experience.title}
              </CardTitle>
              {isUpcoming && (
                <Badge className="bg-green-500/20 text-green-300 border-green-400/30 text-xs">
                  Upcoming
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4 text-blue-200 text-sm">
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4" />
                {experience.company}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {experience.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-blue-200 mb-6 leading-relaxed">
          {experience.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, skillIndex) => (
            <Badge 
              key={skillIndex} 
              variant="secondary" 
              className={`text-xs transition-colors ${
                isUpcoming 
                  ? 'bg-green-500/10 text-green-300 hover:bg-green-500/20' 
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
