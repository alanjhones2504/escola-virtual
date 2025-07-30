import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-glow/20 rounded-xl">
                <GraduationCap className="h-8 w-8 text-primary-glow" />
              </div>
              <span className="text-2xl font-medium">EduVirtual</span>
            </div>
            <p className="text-background/70 leading-relaxed font-light">
              A plataforma de ensino virtual mais completa para transformar a educação na era digital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-background">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-background/70 transition-colors font-light hover:hover-gradient">Recursos</a></li>
              <li><a href="#about" className="text-background/70 transition-colors font-light hover:hover-gradient">Sobre</a></li>
              <li><a href="#contact" className="text-background/70 transition-colors font-light hover:hover-gradient">Contato</a></li>
              <li><a href="#" className="text-background/70 transition-colors font-light hover:hover-gradient">Suporte</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-background">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="/login" className="text-background/70 transition-colors font-light hover:hover-gradient">Portal do Aluno</a></li>
              <li><a href="/login" className="text-background/70 transition-colors font-light hover:hover-gradient">Portal do Professor</a></li>
              <li><a href="/login" className="text-background/70 transition-colors font-light hover:hover-gradient">Portal Administrativo</a></li>
              <li><a href="#" className="text-background/70 transition-colors font-light hover:hover-gradient">Suporte Técnico</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-background">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-background/70 font-light">contato@eduvirtual.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-background/70 font-light">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow" />
                <span className="text-background/70 font-light">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-center md:text-left font-light">
              © 2024 EduVirtual. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 transition-colors font-light hover:hover-gradient">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 transition-colors font-light hover:hover-gradient">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;