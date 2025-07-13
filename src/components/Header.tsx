import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border/50 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-primary/10 rounded-xl backdrop-blur-sm border border-primary/20 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              EduVirtual
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Recursos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Enhanced Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={() => window.location.href = '/login'}
            >
              Entrar
            </Button>
            <Button 
              variant="hero" 
              className="shadow-glow hover:scale-105 transition-all duration-300"
            >
              Começar Grátis
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 bg-primary/10 rounded-xl backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-sm rounded-b-2xl">
            <nav className="flex flex-col space-y-6">
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-x-2 inline-block"
              >
                → Recursos
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-x-2 inline-block"
              >
                → Sobre
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-x-2 inline-block"
              >
                → Contato
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/30">
                <Button 
                  variant="ghost" 
                  className="justify-start font-medium hover:bg-primary/10"
                  onClick={() => window.location.href = '/login'}
                >
                  Entrar
                </Button>
                <Button 
                  variant="hero" 
                  className="justify-start shadow-card"
                >
                  Começar Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;