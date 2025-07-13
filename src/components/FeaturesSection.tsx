import { Card } from "@/components/ui/card";
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
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Recursos
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Completos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para criar uma experiência educacional moderna e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-lg bg-secondary/50 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;