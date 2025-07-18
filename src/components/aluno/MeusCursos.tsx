import React, { useState } from "react";

const mockCursos = [
  {
    id: 1,
    nome: "Matemática Básica",
    descricao: "Conceitos fundamentais de matemática.",
    materiais: [
      { tipo: "Aula", titulo: "Números Inteiros", link: "#" },
      { tipo: "PDF", titulo: "Apostila de Exercícios", link: "#" },
    ],
  },
  {
    id: 2,
    nome: "História do Brasil",
    descricao: "Principais eventos históricos do Brasil.",
    materiais: [
      { tipo: "Aula", titulo: "Independência do Brasil", link: "#" },
      { tipo: "PDF", titulo: "Linha do Tempo", link: "#" },
    ],
  },
];

const MeusCursos: React.FC = () => {
  const [cursoSelecionado, setCursoSelecionado] = useState<typeof mockCursos[0] | null>(null);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Meus Cursos</h3>
      <ul className="mb-4">
        {mockCursos.map((curso) => (
          <li key={curso.id} className="mb-2">
            <button
              className="text-blue-700 underline hover:text-blue-900"
              onClick={() => setCursoSelecionado(curso)}
            >
              {curso.nome}
            </button>
            <span className="ml-2 text-gray-600">{curso.descricao}</span>
          </li>
        ))}
      </ul>
      {cursoSelecionado && (
        <div className="border rounded p-4 bg-gray-50">
          <h4 className="text-lg font-bold mb-2">{cursoSelecionado.nome}</h4>
          <p className="mb-2">{cursoSelecionado.descricao}</p>
          <h5 className="font-semibold mb-1">Materiais:</h5>
          <ul className="mb-2">
            {cursoSelecionado.materiais.map((mat, idx) => (
              <li key={idx} className="mb-1">
                <span className="font-medium">[{mat.tipo}]</span> {mat.titulo} <a href={mat.link} className="text-blue-600 underline">Acessar</a>
              </li>
            ))}
          </ul>
          <button
            className="mt-2 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setCursoSelecionado(null)}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default MeusCursos; 