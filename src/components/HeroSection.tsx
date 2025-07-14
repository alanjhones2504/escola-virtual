import { Button } from "@/components/ui/button";
import { PlayCircle, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-secondary/30 flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-tight tracking-tight">
              O Ensino Médio Digital do Futuro, Hoje!
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Plataforma completa para alunos, professores e gestores do Ensino Médio. Aulas, simulados, projetos e muito mais!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group" onClick={() => navigate('/register')}>
                Começar Agora
                <PlayCircle className="ml-2 h-5 w-5 group-hover:scale-105 transition-transform duration-200" />
              </Button>
              <Button variant="outline" size="lg" className="border-border/50">
                Assistir Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Plataforma EduVirtual" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-8 right-8">
              <div className="bg-card/95 backdrop-blur-lg border border-border/50 rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-light text-foreground">10k+</div>
                    <div className="text-xs text-muted-foreground font-medium">Usuários</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-foreground">500+</div>
                    <div className="text-xs text-muted-foreground font-medium">Cursos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-foreground">95%</div>
                    <div className="text-xs text-muted-foreground font-medium">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;