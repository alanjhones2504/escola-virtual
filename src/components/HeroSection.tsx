import { Button } from "@/components/ui/button";
import { PlayCircle, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background to-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                O Futuro da
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Educação</span>
                <br />
                Está Aqui
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Plataforma completa de ensino virtual para alunos, professores e administradores.
                Gerencie cursos, acompanhe progresso e transforme a experiência educacional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Começar Agora
                <PlayCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Cursos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-primary-glow" />
                </div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20"></div>
            <img
              src={heroImage}
              alt="Plataforma de Educação Virtual"
              className="relative rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;