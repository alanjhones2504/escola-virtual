import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">EduVirtual</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline">Entrar</Button>
            <Button variant="hero">Começar Agora</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Recursos
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Entrar</Button>
                <Button variant="hero">Começar Agora</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;