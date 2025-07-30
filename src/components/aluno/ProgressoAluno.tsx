import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, Clock, Calendar } from "lucide-react";

import { AlunoStats } from "@/services/api";

interface ProgressoAlunoProps {
  stats: AlunoStats | null;
}

const proximasAtividades = [
  { id: 1, nome: "Prova de Matemática", data: "25/07/2025", tipo: "Avaliação" },
  { id: 2, nome: "Trabalho de História", data: "28/07/2025", tipo: "Trabalho" },
];

const ProgressoAluno: React.FC<ProgressoAlunoProps> = ({ stats }) => {
  if (!stats) {
    return (
      <div className="text-center p-6 bg-accent/20 rounded-lg">
        <Calendar className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
        <h4 className="font-medium">Dados não disponíveis</h4>
        <p className="text-sm text-muted-foreground">
          Não foi possível carregar suas estatísticas.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-accent/30 border-0">
          <CardContent className="p-4 flex items-center space-x-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Média Geral</p>
              <p className="text-2xl font-bold">{stats.averageGrade}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-accent/30 border-0">
          <CardContent className="p-4 flex items-center space-x-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Frequência</p>
              <p className="text-2xl font-bold">{stats.attendance}%</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-accent/30 border-0">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-muted-foreground">Tarefas Concluídas</p>
              <p className="font-medium">{stats.completedTasks}%</p>
            </div>
            <Progress value={stats.completedTasks} className="h-2" />
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-accent/30 border-0">
        <CardContent className="p-4">
          <h4 className="font-medium mb-3 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Próximas Atividades
          </h4>
          <div className="space-y-2">
            {proximasAtividades.map((atividade) => (
              <div key={atividade.id} className="flex justify-between items-center p-2 bg-background/80 rounded-md">
                <div>
                  <p className="font-medium text-sm">{atividade.nome}</p>
                  <p className="text-xs text-muted-foreground">{atividade.tipo}</p>
                </div>
                <div className="text-sm">{atividade.data}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressoAluno;