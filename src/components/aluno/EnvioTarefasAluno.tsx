import React, { useState } from "react";

const cursos = [
  "Matemática Básica",
  "História do Brasil",
];

interface TarefaEnviada {
  curso: string;
  titulo: string;
  arquivo: string;
  data: string;
}

const EnvioTarefasAluno: React.FC = () => {
  const [curso, setCurso] = useState(cursos[0]);
  const [titulo, setTitulo] = useState("");
  const [arquivo, setArquivo] = useState("");
  const [tarefas, setTarefas] = useState<TarefaEnviada[]>([]);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !arquivo) {
      setMsg("Preencha todos os campos.");
      return;
    }
    setTarefas([
      ...tarefas,
      { curso, titulo, arquivo, data: new Date().toLocaleString() },
    ]);
    setTitulo("");
    setArquivo("");
    setMsg("Tarefa enviada com sucesso!");
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Envio de Tarefas</h3>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <div>
          <label className="block mb-1">Curso</label>
          <select
            className="border rounded p-1 w-full"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          >
            {cursos.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Título da Tarefa</label>
          <input
            className="border rounded p-1 w-full"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Arquivo (simulado)</label>
          <input
            className="border rounded p-1 w-full"
            value={arquivo}
            onChange={(e) => setArquivo(e.target.value)}
            placeholder="Nome do arquivo.pdf"
            required
          />
        </div>
        {msg && <div className="text-green-700 font-medium">{msg}</div>}
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Enviar</button>
      </form>
      <h4 className="font-semibold mb-1">Tarefas Enviadas</h4>
      <ul>
        {tarefas.length === 0 && <li className="text-gray-500">Nenhuma tarefa enviada ainda.</li>}
        {tarefas.map((t, idx) => (
          <li key={idx} className="mb-1">
            <span className="font-medium">{t.titulo}</span> ({t.curso}) - <span className="text-gray-600">{t.arquivo}</span> <span className="text-xs text-gray-500">[{t.data}]</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnvioTarefasAluno; 