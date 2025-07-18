import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Painel do Administrador</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Gerenciamento de Usuários</h3>
        <p>Adicione, edite ou remova contas de alunos, professores e outros administradores.</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Gerenciamento de Cursos</h3>
        <p>Crie, edite e atribua cursos para professores e alunos.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Relatórios e Análises</h3>
        <p>Acompanhe dados de engajamento, progresso e conclusão dos cursos.</p>
      </div>
    </div>
  );
};

export default AdminDashboard; 