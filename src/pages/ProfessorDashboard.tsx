import React from "react";

const ProfessorDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Painel do Professor</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Minhas Turmas</h3>
        <p>Gerencie suas turmas, visualize alunos e acompanhe o progresso.</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Notas e Avaliações</h3>
        <p>Lance notas, crie avaliações e acompanhe o desempenho dos alunos.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Comunicação</h3>
        <p>Envie mensagens para alunos e pais, e acompanhe respostas.</p>
      </div>
    </div>
  );
};

export default ProfessorDashboard; 