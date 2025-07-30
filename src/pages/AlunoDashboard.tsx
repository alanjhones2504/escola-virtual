import React, { useEffect, useState } from "react";
import MeusCursos from "../components/aluno/MeusCursos";
import ProgressoAluno from "../components/aluno/ProgressoAluno";
import EnvioTarefasAluno from "../components/aluno/EnvioTarefasAluno";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/services/api";
import { Course, Task, AlunoStats } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const AlunoDashboard: React.FC = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [stats, setStats] = useState<AlunoStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Função para obter o ID do usuário com base no email
  const getUserIdByEmail = (email: string): string => {
    // Na implementação real, isso seria uma chamada à API ou um mapeamento
    const emailToIdMap: Record<string, string> = {
      "aluno@escola.com": "1",
      "prof@escola.com": "2",
      "admin@escola.com": "3"
    };
    
    return emailToIdMap[email] || "1"; // Fallback para ID 1 se não encontrar
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLoading(true);
        try {
          // Obter ID do usuário com base no email
          const userId = getUserIdByEmail(user.email);
          
          // Buscar dados em paralelo
          const [coursesData, tasksData, statsData] = await Promise.all([
            api.getCourses(userId, user.role),
            api.getTasks(userId),
            api.getStats(user.role)
          ]);
          
          setCourses(coursesData);
          setTasks(tasksData);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-xl font-semibold mb-4">Meus Cursos</h3>
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-xl font-semibold mb-4">Meu Progresso</h3>
              <div className="space-y-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Tarefas Pendentes</h3>
            <div className="space-y-3">
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-14 w-full" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-semibold mb-4">Meus Cursos</h3>
            <MeusCursos courses={courses} />
          </div>
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-semibold mb-4">Meu Progresso</h3>
            <ProgressoAluno stats={stats} />
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Tarefas Pendentes</h3>
          <EnvioTarefasAluno tasks={tasks} />
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-xl font-semibold mb-4">Comunicação</h3>
          <p>Entre em contato com professores para tirar dúvidas.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AlunoDashboard;