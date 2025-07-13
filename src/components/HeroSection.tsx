import { Button } from "@/components/ui/button";
import { PlayCircle, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-secondary/30 flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/10">
              ✨ Transformando a Educação
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-tight tracking-tight">
              O Futuro da
              <span className="block font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Educação Digital
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Plataforma completa que revoluciona a experiência educacional com elegância e simplicidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Começar Agora
                <PlayCircle className="ml-2 h-5 w-5 group-hover:scale-105 transition-transform duration-200" />
              </Button>
              <Button variant="outline" size="lg" className="border-border/50">
                Assistir Demo
              </Button>
            </div>
          </div>

          {/* Refined Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/30 max-w-2xl">
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-foreground">10k+</div>
              <div className="text-sm text-muted-foreground font-medium">Usuários Ativos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-foreground">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Cursos Disponíveis</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-foreground">95%</div>
              <div className="text-sm text-muted-foreground font-medium">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;