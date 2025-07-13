import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-8.837 7.163-16 16-16v16H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Enhanced Logo and Description */}
          <div className="space-y-6 md:col-span-1">
            <div className="group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary-glow/20 rounded-xl backdrop-blur-sm border border-primary-glow/30">
                  <GraduationCap className="h-8 w-8 text-primary-glow group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-background to-background/80 bg-clip-text text-transparent">
                  EduVirtual
                </span>
              </div>
              
              <p className="text-background/80 leading-relaxed text-lg">
                A plataforma de ensino virtual mais completa para <span className="text-primary-glow font-semibold">transformar</span> a educação na era digital.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-background/20 hover:bg-primary-glow/20 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-background/20 hover:bg-primary-glow/20 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-background/20 hover:bg-primary-glow/20 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-background mb-4 relative">
              Links Rápidos
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary-glow rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-background/80 hover:text-primary-glow transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                  → Recursos
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary-glow transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                  → Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary-glow transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                  → Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary-glow transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                  → Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-background mb-4 relative">
              Serviços
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/login" className="text-background/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                  → Portal do Aluno
                </a>
              </li>
              <li>
                <a href="/login" className="text-background/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                  → Portal do Professor
                </a>
              </li>
              <li>
                <a href="/login" className="text-background/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                  → Portal Administrativo
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                  → Suporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-background mb-4 relative">
              Contato
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="group flex items-center space-x-4 p-3 bg-background/5 rounded-xl backdrop-blur-sm border border-background/10 hover:bg-background/10 transition-all duration-300">
                <div className="p-2 bg-primary-glow/20 rounded-lg">
                  <Mail className="h-5 w-5 text-primary-glow" />
                </div>
                <span className="text-background/90 font-medium">contato@eduvirtual.com</span>
              </div>
              
              <div className="group flex items-center space-x-4 p-3 bg-background/5 rounded-xl backdrop-blur-sm border border-background/10 hover:bg-background/10 transition-all duration-300">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <span className="text-background/90 font-medium">(11) 99999-9999</span>
              </div>
              
              <div className="group flex items-center space-x-4 p-3 bg-background/5 rounded-xl backdrop-blur-sm border border-background/10 hover:bg-background/10 transition-all duration-300">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/90 font-medium">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-background/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-center md:text-left">
              © 2024 EduVirtual. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary-glow transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary-glow transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-background/60 hover:text-primary-glow transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;