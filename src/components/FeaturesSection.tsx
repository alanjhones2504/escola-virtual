import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  GraduationCap, 
  Settings, 
  BookOpen, 
  MessageCircle, 
  BarChart3,
  FileText,
  Calendar,
  Shield
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: User,
      title: "Portal do Aluno",
      description: "Acesse cursos, materiais, acompanhe seu progresso e envie tarefas de forma simples e intuitiva.",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      title: "Portal do Professor",
      description: "Gerencie cursos, crie materiais, avalie alunos e monitore o desempenho da turma.",
      color: "text-accent"
    },
    {
      icon: Settings,
      title: "Portal Administrativo",
      description: "Controle total sobre usuários, cursos, relatórios e configurações da plataforma.",
      color: "text-primary-glow"
    },
    {
      icon: BookOpen,
      title: "Gestão de Cursos",
      description: "Crie, organize e distribua conteúdo educacional de forma estruturada e eficiente.",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Comunicação Integrada",
      description: "Sistema completo de mensagens entre alunos, professores e pais.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Relatórios e Análises",
      description: "Dashboards completos com métricas de engajamento e performance.",
      color: "text-primary-glow"
    },
    {
      icon: FileText,
      title: "Avaliações Online",
      description: "Crie e aplique provas, questionários e atividades com correção automática.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Calendário Acadêmico",
      description: "Organize eventos, prazos e cronogramas de forma centralizada.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Proteção de dados, autenticação segura e backup automático.",
      color: "text-primary-glow"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Recursos
            <span className="font-medium text-primary"> Essenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Tudo que você precisa para uma experiência educacional completa e moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-card border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                <div className={`inline-flex p-3 rounded-xl bg-secondary/30 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-secondary/20 rounded-2xl border border-border/30">
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6 font-light">
              Experimente todos os recursos gratuitamente por 30 dias
            </p>
            <Button variant="hero" size="lg">
              Iniciar Teste Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;