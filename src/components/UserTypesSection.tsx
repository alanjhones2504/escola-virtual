import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Settings } from "lucide-react";

const userTypes = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Para Alunos",
    features: [
      "Acesso a materiais didáticos",
      "Envio de tarefas e trabalhos",
      "Acompanhamento de notas e frequência",
      "Comunicação com professores",
      "Calendário de atividades",
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Para Professores",
    features: [
      "Gestão de turmas e alunos",
      "Criação de materiais didáticos",
      "Lançamento de notas e avaliações",
      "Comunicação com alunos e pais",
      "Relatórios de desempenho",
    ],
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Para Administradores",
    features: [
      "Gestão completa de usuários",
      "Configuração de cursos e disciplinas",
      "Relatórios gerenciais",
      "Controle de acesso e permissões",
      "Personalização da plataforma",
    ],
  },
];

const UserTypesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl text-foreground text-modern">
            Para Todos os Perfis
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Uma solução completa para cada tipo de usuário
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <Card key={index} className="border-border bg-card shadow-card">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {type.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-center text-foreground font-medium text-modern">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-4 w-4 text-primary mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;