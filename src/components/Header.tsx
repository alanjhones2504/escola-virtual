import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { GraduationCap } from "lucide-react";

const Header: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <Link to="/" className="text-xl font-medium text-foreground text-modern tracking-tight">
            EduVirtual
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary">
            Início
          </Link>
          <Link to="#recursos" className="text-sm font-medium text-foreground hover:text-primary">
            Recursos
          </Link>
          <Link to="#sobre" className="text-sm font-medium text-foreground hover:text-primary">
            Sobre
          </Link>
          <Link to="#contato" className="text-sm font-medium text-foreground hover:text-primary">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => navigate("/portal")}
            >
              Meu Painel
            </Button>
          ) : (
            <>
              <Button 
                variant="outline" 
                className="border-border text-foreground hover:bg-accent"
                onClick={() => navigate("/login")}
              >
                Entrar
              </Button>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate("/register")}
              >
                Cadastrar
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;