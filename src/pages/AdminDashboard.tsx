import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, BarChart, School } from "lucide-react";

const AdminDashboard: React.FC = () => {
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
              <div className="text-2xl font-medium text-modern">250</div>
              <p className="text-xs text-muted-foreground font-light">+12% do mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-light text-modern">Total de Professores</CardTitle>
              <School className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium text-modern">15</div>
              <p className="text-xs text-muted-foreground font-light">+2 este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-light text-modern">Cursos Ativos</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium text-modern">24</div>
              <p className="text-xs text-muted-foreground font-light">Em 6 departamentos</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-light text-modern">Taxa de Aprovação</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium text-modern">87%</div>
              <p className="text-xs text-muted-foreground font-light">+5% do semestre anterior</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-medium mb-4 text-modern">Gerenciamento de Usuários</h3>
            <p className="mb-4 font-light">Adicione, edite ou remova contas de alunos, professores e outros administradores.</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span className="font-light">Alunos</span>
                <span className="font-medium">250</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span className="font-light">Professores</span>
                <span className="font-medium">15</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span className="font-light">Administradores</span>
                <span className="font-medium">3</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-medium mb-4 text-modern">Gerenciamento de Cursos</h3>
            <p className="mb-4 font-light">Crie, edite e atribua cursos para professores e alunos.</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span className="font-light">Matemática</span>
                <span className="font-medium">6 turmas</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span className="font-light">Português</span>
                <span className="font-medium">5 turmas</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span className="font-light">Ciências</span>
                <span className="font-medium">4 turmas</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-card rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-xl font-medium mb-4 text-modern">Relatórios e Análises</h3>
          <p className="mb-4 font-light">Acompanhe dados de engajamento, progresso e conclusão dos cursos.</p>
          <div className="space-y-2">
            <div className="p-3 bg-accent/50 rounded-md font-light">Relatório de Desempenho por Turma</div>
            <div className="p-3 bg-accent/50 rounded-md font-light">Análise de Frequência dos Alunos</div>
            <div className="p-3 bg-accent/50 rounded-md font-light">Estatísticas de Aprovação por Disciplina</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;