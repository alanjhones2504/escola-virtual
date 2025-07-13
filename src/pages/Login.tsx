import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, GraduationCap } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-elegant">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">EduVirtual</h1>
          <p className="text-muted-foreground">Acesse sua conta para continuar</p>
        </div>

        <Card className="shadow-card border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Entre com suas credenciais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="text-destructive text-sm text-center bg-destructive/10 p-3 rounded-md border border-destructive/20">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full h-12 text-base font-medium"
              >
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>Contas de teste:</p>
              <div className="mt-2 space-y-1 text-xs">
                <p><strong>Aluno:</strong> aluno@escola.com</p>
                <p><strong>Professor:</strong> prof@escola.com</p>
                <p><strong>Admin:</strong> admin@escola.com</p>
                <p><strong>Senha:</strong> 123456</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login; 