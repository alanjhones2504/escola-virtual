import React from "react";
import { BookOpen, Users, BarChart, MessageSquare, Calendar, FileText } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Gestão de Cursos",
    description:
      "Crie, organize e gerencie cursos e materiais didáticos de forma simples e intuitiva.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Gestão de Usuários",
    description:
      "Administre alunos, professores e funcionários em uma única plataforma integrada.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Relatórios e Análises",
    description:
      "Acompanhe o desempenho dos alunos com relatórios detalhados e análises em tempo real.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Comunicação",
    description:
      "Facilite a comunicação entre alunos, professores e pais com ferramentas integradas.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Agenda e Calendário",
    description:
      "Organize eventos, aulas e atividades com um calendário completo e notificações.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Avaliações Online",
    description:
      "Crie e aplique avaliações online com correção automática e feedback imediato.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="recursos">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl text-foreground text-modern">
            Recursos Principais
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Tudo o que você precisa para gerenciar sua instituição de ensino
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border shadow-card hover:shadow-elegant transition-shadow"
            >
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-foreground text-modern">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;