import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground text-modern">
                Transformando a Educação Digital
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Uma plataforma completa para alunos, professores e administradores
                gerenciarem todo o processo educacional em um só lugar.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {user ? (
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hero"
                  onClick={() => navigate("/portal")}
                >
                  Acessar Meu Painel
                </Button>
              ) : (
                <>
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hero"
                    onClick={() => navigate("/register")}
                  >
                    Começar Agora
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:bg-accent"
                    onClick={() => navigate("/login")}
                  >
                    Fazer Login
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[420px] lg:h-[450px] xl:h-[550px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-card border border-border rounded-lg shadow-xl w-[90%] h-[90%] flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Plataforma Educacional</h3>
                    <p className="text-muted-foreground mb-6">
                      Acesse cursos, materiais didáticos e acompanhe seu progresso
                      em um ambiente virtual intuitivo e completo.
                    </p>
                    <div className="flex justify-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;