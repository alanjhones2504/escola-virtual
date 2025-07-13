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
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Para Cada
            <span className="font-medium text-primary"> Perfil</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Interfaces personalizadas e funcionalidades específicas para cada tipo de usuário.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {userTypes.map((type, index) => (
            <Card 
              key={index} 
              className={`relative p-8 bg-card border ${type.color} hover:shadow-xl transition-all duration-300 ${type.featured ? 'border-2 shadow-lg' : 'border'}`}
            >
              {type.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-secondary/50 mb-6 ${type.badgeColor.split(' ')[1]}`}>
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground font-light">{type.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={type.featured ? "hero" : "outline"} 
                className="w-full"
              >
                Acessar {type.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 font-light">
            Não sabe qual perfil escolher? Nossa equipe pode ajudar.
          </p>
          <Button variant="outline" size="lg">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;