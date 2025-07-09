
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, TrendingUp, Database, Brain, Calculator, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-purple-500",
      skills: ["Python", "R", "SQL", "JavaScript", "C++", "MATLAB"],
      level: 90
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "from-green-500 to-blue-500",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLP"],
      level: 85
    },
    {
      title: "Financial Analysis",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      skills: ["Risk Management", "Portfolio Optimization", "Derivatives", "Financial Modeling"],
      level: 80
    },
    {
      title: "Data Science & Analytics",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Statistical Analysis"],
      level: 88
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "from-cyan-500 to-teal-500",
      skills: ["PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "Jupyter"],
      level: 75
    },
    {
      title: "Quantitative Methods",
      icon: Calculator,
      color: "from-indigo-500 to-blue-500",
      skills: ["Monte Carlo", "Time Series", "Optimization", "Statistical Modeling"],
      level: 82
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-blue-200 text-lg">
            My technical toolkit for solving complex problems in finance and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 group ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{category.title}</CardTitle>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                  <div 
                    className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out ${
                      isVisible ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      width: isVisible ? `${category.level}%` : '0%',
                      transitionDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-white/10 text-blue-200 hover:bg-white/20 transition-colors text-xs"
                      style={{
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
