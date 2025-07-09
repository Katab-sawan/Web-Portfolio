import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Calendar, ExternalLink, Code, TrendingUp, Heart, Users, Building, Brain, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SkillsSection } from "@/components/SkillsSection";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Customer Segmentation",
      description: "Advanced customer segmentation using machine learning techniques to identify distinct customer groups and optimize marketing strategies.",
      technologies: ["Python", "Scikit-learn", "Pandas", "K-Means", "Data Visualization"],
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/Katab-sawan/portfolio/blob/main/personal_projects/customer_segementation.ipynb"
    },
    {
      title: "Stock Prediction with LSTM",
      description: "Deep learning model using LSTM neural networks to predict stock prices with time series analysis and technical indicators.",
      technologies: ["Python", "TensorFlow", "LSTM", "NumPy", "Financial Data APIs"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      githubUrl: "https://github.com/Katab-sawan/portfolio/blob/main/personal_projects/AAPL_PREDICTION.ipynb"
    },
    {
      title: "Heart Disease Prediction with KNN",
      description: "Machine learning classification model using K-Nearest Neighbors algorithm to predict heart disease risk based on medical indicators.",
      technologies: ["Python", "Scikit-learn", "KNN", "Data Preprocessing", "Medical Data"],
      icon: Heart,
      color: "from-red-500 to-pink-500",
      githubUrl: "https://github.com/Katab-sawan/portfolio/blob/main/personal_projects/Heart_Disease_prediction.ipynb"
    }
  ];

  const experiences: Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    skills: string[];
    type: 'completed' | 'upcoming';
  }> = [
    {
      title: "AI and Robotics Intern",
      company: "Net0",
      period: "June 2025 - Sept 2025",
      location: "Remote",
      description: "Working on cutting-edge AI and robotics projects, developing machine learning models for autonomous systems and data analysis.",
      skills: ["Artificial Intelligence", "Robotics", "Machine Learning", "Data Analysis"],
      type: "upcoming"
    },
    {
      title: "Business Analyst",
      company: "Eazy Real Estate",
      period: "May 2024 - Aug 2024",
      location: "Remote",
      description: "Analyzed market trends, performed financial modeling, and provided data-driven insights for real estate investment decisions.",
      skills: ["Financial Modeling", "Market Analysis", "Data Analytics", "Business Intelligence"],
      type: "completed"
    },
    {
      title: "Spring Programme Participant",
      company: "IMC Trading",
      period: "Apr 2024 - Apr 2024",
      location: "Amsterdam, Netherlands",
      description: "Intensive trading programme focusing on quantitative finance, algorithmic trading, and market microstructure.",
      skills: ["Quantitative Finance", "Algorithmic Trading", "Risk Management", "Financial Markets"],
      type: "completed"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 border-blue-400/30">
              Computer Science Student
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Quantitative Finance &
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}AI Enthusiast
            </span>
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            CS student passionate about Investment Banking, Quantitative Finance, AI & Machine Learning. 
            Building the future of finance through technology and data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8"
              onClick={() => scrollToSection('projects')}
            >
              View My Work <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-200 hover:bg-blue-400/10"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white/60 hover:text-white"
              onClick={() => window.open('https://github.com/Katab-sawan/portfolio', '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white/60 hover:text-white"
              onClick={() => window.open('https://www.linkedin.com/in/katab-sawan-60a2a8260/', '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Driven by curiosity and passion for technology, finance, and data science
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code className="w-6 h-6 text-blue-400 mr-2" />
                    Academic Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-blue-200">
                  <p className="mb-4">
                    Computer Science student with a strong focus on quantitative finance and artificial intelligence. 
                    I'm passionate about leveraging technology to solve complex financial problems and create innovative solutions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Investment Banking & Quantitative Finance
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Artificial Intelligence & Machine Learning
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Data Science & Financial Modeling
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="w-6 h-6 text-purple-400 mr-2" />
                    Core Interests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Algorithmic Trading",
                      "Risk Management",
                      "Machine Learning",
                      "Financial Markets",
                      "Data Analytics",
                      "Quantitative Research"
                    ].map((interest, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/10 text-blue-200 justify-center py-2">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-blue-200 text-lg">
              Showcasing my work in machine learning, data science, and quantitative analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-blue-200 text-lg">
              My journey through finance, technology, and data science
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-blue-200 text-lg mb-12">
            Interested in quantitative finance, AI, or just want to chat about technology? I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-blue-200 text-sm">your.email@example.com</p>
              </CardContent>
            </Card>
            
            <Card 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer group"
              onClick={() => window.open('https://www.linkedin.com/in/katab-sawan-60a2a8260/', '_blank')}
            >
              <CardContent className="p-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-blue-200 text-sm">Connect with me</p>
              </CardContent>
            </Card>
            
            <Card 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer group"
              onClick={() => window.open('https://github.com/Katab-sawan/portfolio', '_blank')}
            >
              <CardContent className="p-6 text-center">
                <Github className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <p className="text-blue-200 text-sm">View my code</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Portfolio. Built with passion for finance and technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
