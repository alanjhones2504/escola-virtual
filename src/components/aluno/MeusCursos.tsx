import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Course } from "@/services/api";

interface MeusCursosProps {
  courses: Course[];
}

const MeusCursos: React.FC<MeusCursosProps> = ({ courses }) => {
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

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden border-0 bg-accent/30">
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