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
    <section id="features" className="relative py-32 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-accent/20">
            🚀 Recursos Inovadores
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Recursos
            <span className="block bg-gradient-primary bg-clip-text text-transparent drop-shadow-sm"> Completos</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa para criar uma experiência educacional <span className="text-primary font-semibold">moderna</span> e <span className="text-accent font-semibold">eficiente</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative p-8 bg-gradient-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with enhanced styling */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/80 backdrop-blur-sm border border-border/30 group-hover:scale-110 transition-all duration-300 ${feature.color}`}>
                  <feature.icon className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                {/* Floating dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4 p-8 bg-gradient-card/60 backdrop-blur-sm rounded-3xl border border-border/50 shadow-elegant">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Pronto para começar?</h3>
              <p className="text-muted-foreground">Experimente todos os recursos gratuitamente</p>
            </div>
            <Button variant="hero" size="xl" className="shadow-glow">
              Teste Grátis por 30 dias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;