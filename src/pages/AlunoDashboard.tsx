import React, { useEffect, useState } from "react";
import MeusCursos from "../components/aluno/MeusCursos";
import ProgressoAluno from "../components/aluno/ProgressoAluno";
import EnvioTarefasAluno from "../components/aluno/EnvioTarefasAluno";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/services/api";
import { Course, Task } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";

const AlunoDashboard: React.FC = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLoading(true);
        try {
          // Simulando um ID de usuário baseado no email
          const userId = "1"; // Na vida real, isso viria do backend
          
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
          <h2 className="text-2xl font-medium mb-6 text-modern tracking-tight">Visão Geral</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-xl font-medium mb-4 text-modern">Meus Cursos</h3>
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-xl font-medium mb-4 text-modern">Meu Progresso</h3>
              <div className="space-y-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-6">
            <h3 className="text-xl font-medium mb-4 text-modern">Tarefas Pendentes</h3>
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
        <h2 className="text-2xl font-medium mb-6 text-modern tracking-tight">Visão Geral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-medium mb-4 text-modern">Meus Cursos</h3>
            <MeusCursos courses={courses} />
          </div>
          <div className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-xl font-medium mb-4 text-modern">Meu Progresso</h3>
            <ProgressoAluno stats={stats} />
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-6">
          <h3 className="text-xl font-medium mb-4 text-modern">Tarefas Pendentes</h3>
          <EnvioTarefasAluno tasks={tasks} />
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-xl font-medium mb-4 text-modern">Comunicação</h3>
          <p className="text-light">Entre em contato com professores para tirar dúvidas.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AlunoDashboard;