import React from "react";

const mockProgresso = [
  {
    curso: "Matemática Básica",
    progresso: 70,
    tarefas: [
      { titulo: "Exercício 1: Números Inteiros", status: "concluída" },
      { titulo: "Exercício 2: Frações", status: "pendente" },
    ],
  },
  {
    curso: "História do Brasil",
    progresso: 40,
    tarefas: [
      { titulo: "Resumo: Independência do Brasil", status: "concluída" },
      { titulo: "Quiz: Linha do Tempo", status: "pendente" },
    ],
  },
];

const ProgressoAluno: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Progresso nos Cursos</h3>
      <ul className="mb-4">
        {mockProgresso.map((item, idx) => (
          <li key={idx} className="mb-4">
            <div className="font-bold mb-1">{item.curso}</div>
            <div className="w-full bg-gray-200 rounded h-3 mb-2">
              <div
                className="bg-blue-500 h-3 rounded"
                style={{ width: `${item.progresso}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-700 mb-1">Progresso: {item.progresso}%</div>
            <div className="ml-2">
              <span className="font-semibold">Tarefas:</span>
              <ul>
                {item.tarefas.map((t, i) => (
                  <li key={i} className={t.status === "concluída" ? "text-green-700" : "text-yellow-700"}>
                    {t.titulo} - <b>{t.status}</b>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressoAluno; 