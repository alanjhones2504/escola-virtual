import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  GraduationCap, 
  Settings, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const UserTypesSection = () => {
  const userTypes = [
    {
      icon: User,
      title: "Aluno",
      description: "Acesso completo aos cursos e materiais educacionais",
      features: [
        "Acesso a cursos e materiais",
        "Acompanhamento de progresso", 
        "Envio de tarefas digitais",
        "Comunicação com professores",
        "Calendário de atividades"
      ],
      color: "border-primary/20 hover:border-primary/40",
      badgeColor: "bg-primary/10 text-primary"
    },
    {
      icon: GraduationCap,
      title: "Professor",
      description: "Ferramentas completas para ensino e gestão de turmas",
      features: [
        "Criação e gestão de cursos",
        "Upload de materiais",
        "Sistema de avaliação",
        "Monitoramento de alunos",
        "Comunicação com pais"
      ],
      color: "border-accent/20 hover:border-accent/40",
      badgeColor: "bg-accent/10 text-accent",
      featured: true
    },
    {
      icon: Settings,
      title: "Administrador",
      description: "Controle total da plataforma e gestão institucional",
      features: [
        "Gestão de usuários",
        "Configuração de cursos",
        "Relatórios e análises",
        "Controle de acesso",
        "Configurações do sistema"
      ],
      color: "border-primary-glow/20 hover:border-primary-glow/40",
      badgeColor: "bg-primary-glow/10 text-primary-glow"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-secondary/20 via-background to-accent-light/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
            👥 Soluções Personalizadas
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Para Cada
            <span className="block bg-gradient-hero bg-clip-text text-transparent drop-shadow-sm"> Perfil</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interfaces <span className="text-primary font-semibold">personalizadas</span> e funcionalidades específicas para cada tipo de usuário.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {userTypes.map((type, index) => (
            <Card 
              key={index} 
              className={`group relative p-10 bg-gradient-card/90 backdrop-blur-sm border-2 ${type.color} shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-3 overflow-hidden ${type.featured ? 'lg:scale-105 lg:shadow-glow' : ''}`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Badge */}
              {type.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-hero text-white px-4 py-2 text-sm font-medium shadow-glow animate-pulse">
                    ⭐ Mais Popular
                  </Badge>
                </div>
              )}
              
              {/* Enhanced Icon Section */}
              <div className="relative text-center mb-8">
                <div className="relative inline-block">
                  <div className={`p-6 rounded-3xl bg-gradient-to-br from-secondary/50 to-secondary/80 backdrop-blur-sm border border-border/30 mb-6 group-hover:scale-110 transition-all duration-300 ${type.badgeColor.split(' ')[1]}`}>
                    <type.icon className="h-10 w-10 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {type.description}
                </p>
              </div>

              {/* Enhanced Features List */}
              <div className="relative mb-10">
                <ul className="space-y-4">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-4 group/item">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-accent group-hover/item:scale-110 transition-transform duration-200" />
                      </div>
                      <span className="text-foreground font-medium group-hover/item:text-primary transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced CTA Button */}
              <div className="relative">
                <Button 
                  variant={type.featured ? "hero" : "premium"} 
                  className="w-full text-lg py-6 group-hover:scale-105 transition-all duration-300 shadow-card group-hover:shadow-glow"
                >
                  Acessar {type.title}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-card/80 backdrop-blur-sm rounded-3xl border border-border/50 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Não sabe qual perfil escolher?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Nossa equipe pode ajudar você a escolher a melhor solução para suas necessidades
            </p>
            <Button variant="outline" size="lg" className="backdrop-blur-sm border-primary/20 hover:bg-primary/5">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;