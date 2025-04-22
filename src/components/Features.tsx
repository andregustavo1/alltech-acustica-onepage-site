
import { Check, Package, Award, Zap } from 'lucide-react';

const features = [
  {
    title: "Precisão Técnica",
    description: "Medições rigorosas conforme normas vigentes",
    icon: Check,
  },
  {
    title: "Soluções Completas",
    description: "Do diagnóstico à implementação de projetos acústicos",
    icon: Package,
  },
  {
    title: "Experiência Comprovada",
    description: "Expertise em diversos tipos de ambientes",
    icon: Award,
  },
  {
    title: "Tecnologia Avançada",
    description: "Equipamentos de última geração para medições precisas",
    icon: Zap,
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="text-4xl mb-4 text-tech-purple">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
