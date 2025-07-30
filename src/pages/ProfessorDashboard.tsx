import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, MessageSquare, Calendar } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { api, ProfessorStats } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const ProfessorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<ProfessorStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Função para obter o ID do usuário com base no email
  const getUserIdByEmail = (email: string): string => {
    // Na implementação real, isso seria uma chamada à API ou um mapeamento
    const emailToIdMap: Record<string, string> = {
      "aluno@escola.com": "1",
      "prof@escola.com": "2",
      "admin@escola.com": "3"
    };
    
    return emailToIdMap[email] || "2"; // Fallback para ID 2 se não encontrar
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLoading(true);
        try {
          // Obter ID do usuário com base no email
          const userId = getUserIdByEmail(user.email);
          
          // Buscar estatísticas
          const statsData = await api.getStats(user.role);
          setStats(statsData);
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
              <p className="text-xs text-muted-foreground">Em 3 turmas ativas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avaliações</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalAssignments || 0}</div>
              <p className="text-xs text-muted-foreground">{stats?.pendingGrading || 0} pendentes de correção</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Mensagens</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">3 não lidas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Próximas Aulas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.upcomingClasses || 0}</div>
              <p className="text-xs text-muted-foreground">Para esta semana</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-semibold mb-4">Minhas Turmas</h3>
            <p className="mb-4">Gerencie suas turmas, visualize alunos e acompanhe o progresso.</p>
            <ul className="space-y-2">
              <li className="p-3 bg-accent/50 rounded-md">Matemática - 1º Ano A (18 alunos)</li>
              <li className="p-3 bg-accent/50 rounded-md">Matemática - 2º Ano B (15 alunos)</li>
              <li className="p-3 bg-accent/50 rounded-md">Matemática - 3º Ano C (12 alunos)</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-semibold mb-4">Notas e Avaliações</h3>
            <p className="mb-4">Lance notas, crie avaliações e acompanhe o desempenho dos alunos.</p>
            <ul className="space-y-2">
              <li className="p-3 bg-accent/50 rounded-md">Prova Bimestral - 1º Ano A (Pendente)</li>
              <li className="p-3 bg-accent/50 rounded-md">Trabalho em Grupo - 2º Ano B (Corrigido)</li>
              <li className="p-3 bg-accent/50 rounded-md">Exercícios - 3º Ano C (Pendente)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-card rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-xl font-semibold mb-4">Comunicação</h3>
          <p className="mb-4">Envie mensagens para alunos e pais, e acompanhe respostas.</p>
          <ul className="space-y-2">
            <li className="p-3 bg-accent/50 rounded-md">Maria Silva (Mãe do João) - Sobre a recuperação</li>
            <li className="p-3 bg-accent/50 rounded-md">Coordenação - Reunião pedagógica</li>
            <li className="p-3 bg-accent/50 rounded-md">Pedro Almeida (Aluno) - Dúvida sobre exercício</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfessorDashboard;