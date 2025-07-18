import React from "react";
import MeusCursos from "../components/aluno/MeusCursos";
import ProgressoAluno from "../components/aluno/ProgressoAluno";
import EnvioTarefasAluno from "../components/aluno/EnvioTarefasAluno";

const AlunoDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Painel do Aluno</h2>
      <div className="mb-6">
        <MeusCursos />
      </div>
      <div className="mb-6">
        <ProgressoAluno />
      </div>
      <div className="mb-6">
        <EnvioTarefasAluno />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Comunicação</h3>
        <p>Entre em contato com professores para tirar dúvidas.</p>
      </div>
    </div>
  );
};

export default AlunoDashboard; 