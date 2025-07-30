import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, BarChart, School } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { api, AdminStats } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLoading(true);
        try {
          // Buscar estatísticas
          const statsData = await api.getStats(user.role);
          setStats(statsData as AdminStats);
        } catch (error) {
          console.error("Erro ao carregar dados:", error);
          // Mostrar mensagem de erro para o usuário
          toast.error("Não foi possível carregar os dados. Tente novamente mais tarde.");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div>
          <h2 className="text-2xl font-bold mb-6">Visão Geral</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <Skeleton className="h-4 w-24" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-12 mb-1" />
                  <Skeleton className="h-3 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <Skeleton className="h-6 w-40 mb-4" />
              <Skeleton className="h-4 w-full mb-6" />
              <div className="space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <Skeleton className="h-6 w-40 mb-4" />
              <Skeleton className="h-4 w-full mb-6" />
              <div className="space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <h2 className="text-2xl font-bold mb-6">Visão Geral</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalStudents || 0}</div>
              <p className="text-xs text-muted-foreground">+12% do mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Professores</CardTitle>
              <School className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalTeachers || 0}</div>
              <p className="text-xs text-muted-foreground">+2 este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Cursos Ativos</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalCourses || 0}</div>
              <p className="text-xs text-muted-foreground">Em 6 departamentos</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.approvalRate || 0}%</div>
              <p className="text-xs text-muted-foreground">+5% do semestre anterior</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-semibold mb-4">Gerenciamento de Usuários</h3>
            <p className="mb-4">Adicione, edite ou remova contas de alunos, professores e outros administradores.</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span>Alunos</span>
                <span className="font-semibold">{stats?.totalStudents || 0}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span>Professores</span>
                <span className="font-semibold">{stats?.totalTeachers || 0}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span>Administradores</span>
                <span className="font-semibold">3</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-semibold mb-4">Gerenciamento de Cursos</h3>
            <p className="mb-4">Crie, edite e atribua cursos para professores e alunos.</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span>Matemática</span>
                <span className="font-semibold">6 turmas</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span>Português</span>
                <span className="font-semibold">5 turmas</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/50 rounded-md">
                <span>Ciências</span>
                <span className="font-semibold">4 turmas</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-card rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-xl font-semibold mb-4">Relatórios e Análises</h3>
          <p className="mb-4">Acompanhe dados de engajamento, progresso e conclusão dos cursos.</p>
          <div className="space-y-2">
            <div className="p-3 bg-accent/50 rounded-md">Relatório de Desempenho por Turma</div>
            <div className="p-3 bg-accent/50 rounded-md">Análise de Frequência dos Alunos</div>
            <div className="p-3 bg-accent/50 rounded-md">Estatísticas de Aprovação por Disciplina</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;