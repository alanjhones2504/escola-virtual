import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary-glow" />
              <span className="text-2xl font-bold">EduVirtual</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              A plataforma de ensino virtual mais completa para transformar a educação na era digital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-background/80 hover:text-primary-glow transition-colors">Recursos</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary-glow transition-colors">Sobre</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary-glow transition-colors">Contato</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-glow transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary-glow transition-colors">Portal do Aluno</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-glow transition-colors">Portal do Professor</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-glow transition-colors">Portal Administrativo</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-glow transition-colors">Suporte Técnico</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-background/80">contato@eduvirtual.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-background/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow" />
                <span className="text-background/80">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 EduVirtual. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;