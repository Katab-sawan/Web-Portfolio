
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    icon: React.ElementType;
    color: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
            <project.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="ghost" className="text-white hover:text-blue-400 p-2">
              <Github className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:text-blue-400 p-2">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CardTitle className="text-white group-hover:text-blue-200 transition-colors text-xl">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-blue-200 mb-6 leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge 
              key={techIndex} 
              variant="secondary" 
              className="bg-white/10 text-blue-200 hover:bg-white/20 transition-colors text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
