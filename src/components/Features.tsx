
const features = [
  {
    title: "Precisão Técnica",
    description: "Medições rigorosas conforme normas vigentes",
    icon: "📊",
  },
  {
    title: "Soluções Completas",
    description: "Do diagnóstico à implementação de projetos acústicos",
    icon: "🔄",
  },
  {
    title: "Experiência Comprovada",
    description: "Expertise em diversos tipos de ambientes",
    icon: "🏆",
  },
  {
    title: "Tecnologia Avançada",
    description: "Equipamentos de última geração para medições precisas",
    icon: "🔬",
  },
];

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title animate-slide-up">
          Por Que <span className="text-gradient">Nos Escolher?</span>
        </h2>
        <p className="section-subtitle animate-slide-up animate-delay-100">
          Engenharia acústica de alto nível para necessidades específicas
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
