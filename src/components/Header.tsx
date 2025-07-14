import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Refined Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <span className="text-2xl font-medium text-foreground">
              EduVirtual
            </span>
          </div>

          {/* Refined Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Recursos
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Sobre
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Refined Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="font-medium"
              onClick={() => window.location.href = '/login'}
            >
              Entrar
            </Button>
            <Button 
              variant="hero" 
              className="font-medium"
              onClick={() => navigate('/register')}
            >
              Começar Agora
            </Button>
          </div>

          {/* Theme Toggle */}
          <button
            className="p-2 rounded-xl hover:bg-primary/10 transition-colors"
            aria-label="Alternar tema escuro/claro"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-blue-900" />}
          </button>

          {/* Refined Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Refined Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <nav className="flex flex-col space-y-6">
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Recursos
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/30">
                <Button 
                  variant="ghost" 
                  className="justify-start font-medium"
                  onClick={() => window.location.href = '/login'}
                >
                  Entrar
                </Button>
                <Button 
                  variant="hero" 
                  className="justify-start font-medium"
                  onClick={() => navigate('/register')}
                >
                  Começar Agora
                </Button>
                {/* Theme Toggle Mobile */}
                <button
                  className="p-2 rounded-xl hover:bg-primary/10 transition-colors self-start"
                  aria-label="Alternar tema escuro/claro"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-blue-900" />}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;