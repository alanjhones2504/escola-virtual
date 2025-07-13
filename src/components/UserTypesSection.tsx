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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Para Cada
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Perfil</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interfaces personalizadas e funcionalidades específicas para cada tipo de usuário.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-gradient-card border-2 ${type.color} shadow-card hover:shadow-elegant transition-all duration-300 group relative ${type.featured ? 'lg:scale-105' : ''}`}
            >
              {type.featured && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  Mais Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full bg-secondary/50 mb-4 ${type.badgeColor.split(' ')[1]}`}>
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={type.featured ? "hero" : "premium"} 
                className="w-full group-hover:scale-105 transition-transform"
              >
                Acessar {type.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;