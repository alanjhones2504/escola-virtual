import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Course } from "@/services/api";
import { Button } from "@/components/ui/button";

interface MeusCursosProps {
  courses: Course[];
}

const MeusCursos: React.FC<MeusCursosProps> = ({ courses }) => {
  const [cursoSelecionado, setCursoSelecionado] = useState<Course | null>(null);

  if (courses.length === 0) {
    return (
      <div className="text-center p-6 bg-accent/20 rounded-lg">
        <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
        <h4 className="font-medium">Nenhum curso encontrado</h4>
        <p className="text-sm text-muted-foreground">
          Você ainda não está matriculado em nenhum curso.
        </p>
      </div>
    );
  }

  if (cursoSelecionado) {
    return (
      <div className="border rounded p-4 bg-card">
        <h4 className="text-lg font-bold mb-2">{cursoSelecionado.title}</h4>
        <p className="mb-4">{cursoSelecionado.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progresso</span>
            <span>{cursoSelecionado.progress}%</span>
          </div>
          <Progress value={cursoSelecionado.progress} className="h-2" />
        </div>
        
        <div className="mb-4">
          <h5 className="font-semibold mb-2">Próxima Aula:</h5>
          <p className="text-sm flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            {cursoSelecionado.nextLesson}
          </p>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCursoSelecionado(null)}
          className="mt-2"
        >
          Voltar para lista de cursos
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden border-0 bg-accent/30 cursor-pointer hover:bg-accent/50 transition-colors"
          onClick={() => setCursoSelecionado(course)}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-base">{course.title}</h4>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progresso</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
            
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              <span>Próxima aula: {course.nextLesson}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MeusCursos;