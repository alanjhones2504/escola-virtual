import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle, AlertCircle, Clock, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/services/api";
import { toast } from "sonner";

interface EnvioTarefasAlunoProps {
  tasks: Task[];
}

const EnvioTarefasAluno: React.FC<EnvioTarefasAlunoProps> = ({ tasks }) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<string | null>(null);

  const filteredTasks = filter 
    ? tasks.filter(task => task.status === filter)
    : tasks;

  const handleSubmit = (taskId: string) => {
    setSubmitting(taskId);
    
    // Simulando o envio da tarefa
    setTimeout(() => {
      toast.success("Tarefa enviada com sucesso!");
      setSubmitting(null);
    }, 1500);
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center p-6 bg-accent/20 rounded-lg">
        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
        <h4 className="font-medium">Nenhuma tarefa encontrada</h4>
        <p className="text-sm text-muted-foreground">
          Você não tem tarefas pendentes no momento.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-2">
          <Badge 
            variant={filter === null ? "default" : "outline"} 
            className={filter === null ? "" : "bg-background"}
            onClick={() => setFilter(null)}
          >
            Todas
          </Badge>
          <Badge 
            variant={filter === "pending" ? "default" : "outline"} 
            className={filter === "pending" ? "" : "bg-background"}
            onClick={() => setFilter("pending")}
          >
            Pendentes
          </Badge>
          <Badge 
            variant={filter === "submitted" ? "default" : "outline"} 
            className={filter === "submitted" ? "" : "bg-background"}
            onClick={() => setFilter("submitted")}
          >
            Entregues
          </Badge>
        </div>
      </div>

      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">
            Nenhuma tarefa encontrada com o filtro selecionado.
          </p>
        ) : (
          filteredTasks.map((task) => {
            // Converter a data para formato brasileiro
            const dateParts = task.dueDate.split('-');
            const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
            
            return (
              <div
                key={task.id}
                className="flex items-center justify-between p-3 bg-accent/30 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {task.status === "submitted" || task.status === "graded" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : task.status === "late" ? (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-amber-500" />
                  )}
                  <div>
                    <h4 className="font-medium text-sm">{task.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      Entrega: {formattedDate}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant={task.status === "submitted" || task.status === "graded" ? "outline" : "default"}
                  className="flex items-center"
                  disabled={task.status === "submitted" || task.status === "graded" || submitting === task.id}
                  onClick={() => handleSubmit(task.id)}
                >
                  {submitting === task.id ? (
                    <>
                      <span className="animate-spin mr-1">⏳</span>
                      Enviando...
                    </>
                  ) : task.status === "submitted" || task.status === "graded" ? (
                    "Enviado"
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-1" />
                      Enviar
                    </>
                  )}
                </Button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default EnvioTarefasAluno;