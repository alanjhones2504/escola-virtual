import React, { useState } from "react";

const mockUsers = [
  { email: "aluno@escola.com", password: "123456", role: "aluno", name: "Aluno Exemplo" },
  { email: "prof@escola.com", password: "123456", role: "professor", name: "Professor Exemplo" },
  { email: "admin@escola.com", password: "123456", role: "admin", name: "Administrador Exemplo" },
];

export type UserRole = "aluno" | "professor" | "admin";
export type AuthUser = { email: string; role: UserRole; name: string };

interface LoginProps {
  onLogin: (user: AuthUser) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setError("");
      onLogin({ email: found.email, role: found.role as UserRole, name: found.name });
    } else {
      setError("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <label className="block mb-2">E-mail</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block mb-2">Senha</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login; 