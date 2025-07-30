import { Users, Target, Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Usuários Ativos", value: "10K+" },
    { icon: BookOpen, label: "Cursos Oferecidos", value: "500+" },
    { icon: Target, label: "Taxa de Conclusão", value: "95%" },
    { icon: Award, label: "Certificações", value: "8K+" },
  ];

  const values = [
    {
      title: "Excelência Educacional",
      description: "Comprometidos em oferecer a melhor experiência de aprendizagem com tecnologia de ponta.",
    },
    {
      title: "Inovação Constante",
      description: "Sempre evoluindo com as últimas tendências em educação digital e metodologias de ensino.",
    },
    {
      title: "Acessibilidade",
      description: "Educação de qualidade ao alcance de todos, sem barreiras geográficas ou econômicas.",
    },
    {
      title: "Comunidade",
      description: "Fomentamos uma comunidade colaborativa de aprendizagem entre estudantes e educadores.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Sobre a EduVirtual
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma plataforma educacional inovadora que conecta estudantes e educadores 
            através da tecnologia, democratizando o acesso à educação de qualidade.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transformar a educação através da tecnologia, criando um ambiente virtual 
              onde o aprendizado é personalizado, eficiente e acessível para todos. 
              Acreditamos que a educação é a chave para um futuro melhor e trabalhamos 
              para torná-la mais inclusiva e efetiva.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-md border hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg shadow-md border hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;