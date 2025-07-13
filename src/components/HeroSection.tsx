import { Button } from "@/components/ui/button";
import { PlayCircle, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent-light/10 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary-glow/20 rounded-full blur-lg animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20">
                ✨ Transformando a Educação Digital
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                O Futuro da
                <span className="block bg-gradient-hero bg-clip-text text-transparent drop-shadow-sm"> Educação</span>
                Está Aqui
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                Plataforma completa de ensino virtual que <span className="text-accent font-semibold">revoluciona</span> a experiência educacional para alunos, professores e administradores.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="hero" size="xl" className="group shadow-glow">
                Começar Agora
                <PlayCircle className="ml-2 h-6 w-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              </Button>
              <Button variant="outline" size="xl" className="backdrop-blur-sm border-primary/20 hover:bg-primary/5">
                Ver Demo
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="group text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">10k+</div>
                <div className="text-sm text-muted-foreground font-medium">Usuários Ativos</div>
              </div>
              
              <div className="group text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-card">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <BookOpen className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Cursos</div>
              </div>
              
              <div className="group text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-card">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary-glow/10 rounded-full group-hover:bg-primary-glow/20 transition-colors">
                    <Award className="h-8 w-8 text-primary-glow group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">95%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="relative animate-slide-in">
            {/* Multiple Glow Effects */}
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl transform rotate-3"></div>
            <div className="absolute -inset-2 bg-gradient-hero rounded-3xl opacity-30 blur-lg transform -rotate-2"></div>
            
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-3xl"></div>
              <img
                src={heroImage}
                alt="Plataforma de Educação Virtual"
                className="relative rounded-3xl shadow-elegant w-full h-auto transform group-hover:scale-[1.02] transition-all duration-700 border border-white/20"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-elegant border border-border/50 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Live Class</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-elegant border border-border/50 animate-pulse delay-1000">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">+150 Alunos Online</span>
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