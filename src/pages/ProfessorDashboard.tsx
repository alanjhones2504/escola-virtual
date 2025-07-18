import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, MessageSquare, Calendar } from "lucide-react";

const ProfessorDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-2xl font-medium mb-6 text-modern tracking-tight">Visão Geral</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-light text-modern">Total de Alunos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium text-modern">45</div>
              <p className="text-xs text-muted-foreground font-light">Em 3 turmas ativas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-light text-modern">Avaliações</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium text-modern">12</div>
              <p className="text-xs text-muted-foreground font-light">4 pendentes de correção</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-light text-modern">Mensagens</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium text-modern">8</div>
              <p className="text-xs text-muted-foreground font-light">3 não lidas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-light text-modern">Próximas Aulas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium text-modern">5</div>
              <p className="text-xs text-muted-foreground font-light">Para esta semana</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-medium mb-4 text-modern">Minhas Turmas</h3>
            <p className="mb-4 font-light">Gerencie suas turmas, visualize alunos e acompanhe o progresso.</p>
            <ul className="space-y-2">
              <li className="p-3 bg-accent/50 rounded-md font-light">Matemática - 1º Ano A (18 alunos)</li>
              <li className="p-3 bg-accent/50 rounded-md font-light">Matemática - 2º Ano B (15 alunos)</li>
              <li className="p-3 bg-accent/50 rounded-md font-light">Matemática - 3º Ano C (12 alunos)</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-medium mb-4 text-modern">Notas e Avaliações</h3>
            <p className="mb-4 font-light">Lance notas, crie avaliações e acompanhe o desempenho dos alunos.</p>
            <ul className="space-y-2">
              <li className="p-3 bg-accent/50 rounded-md font-light">Prova Bimestral - 1º Ano A (Pendente)</li>
              <li className="p-3 bg-accent/50 rounded-md font-light">Trabalho em Grupo - 2º Ano B (Corrigido)</li>
              <li className="p-3 bg-accent/50 rounded-md font-light">Exercícios - 3º Ano C (Pendente)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-card rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-xl font-medium mb-4 text-modern">Comunicação</h3>
          <p className="mb-4 font-light">Envie mensagens para alunos e pais, e acompanhe respostas.</p>
          <ul className="space-y-2">
            <li className="p-3 bg-accent/50 rounded-md font-light">Maria Silva (Mãe do João) - Sobre a recuperação</li>
            <li className="p-3 bg-accent/50 rounded-md font-light">Coordenação - Reunião pedagógica</li>
            <li className="p-3 bg-accent/50 rounded-md font-light">Pedro Almeida (Aluno) - Dúvida sobre exercício</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfessorDashboard;