
import { useState } from 'react';

const technologies = [
  {
    id: 1,
    title: "Sonômetro Digital Classe 1",
    description: "Equipamento de alta precisão para medições de ruído conforme normas internacionais.",
    benefits: "Medições precisas e confiáveis, calibração certificada, conformidade com normas ISO.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
  },
  {
    id: 2,
    title: "Analisador de Frequência",
    description: "Sistema de medição espectral para análise detalhada das frequências sonoras.",
    benefits: "Identificação precisa de frequências problemáticas, melhor direcionamento de soluções acústicas.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    id: 3,
    title: "Software Preditivo",
    description: "Modelagem acústica computacional para prever comportamento sonoro em ambientes.",
    benefits: "Simulações precisas, otimização de projetos, menor margem de erro na execução.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 4,
    title: "Medidor de Isolamento Acústico",
    description: "Equipamento especializado para avaliar a eficácia de isolamentos entre ambientes.",
    benefits: "Verificação de conformidade com normas, identificação de pontos fracos no isolamento.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  }
];

const Technology = () => {
  const [activeTech, setActiveTech] = useState(technologies[0]);
  
  // Link para WhatsApp
  const whatsappLink = "https://wa.me/5544999447511";

  return (
    <section id="technology" className="section">
      <div className="container">
        <h2 className="section-title animate-slide-up">
          Nossa <span className="text-gradient">Tecnologia</span>
        </h2>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 animate-slide-up">
            <div className="space-y-4 sticky top-24">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  className={`block w-full text-left p-4 rounded-lg transition-colors ${
                    activeTech.id === tech.id
                      ? "bg-tech-purple text-white shadow-md"
                      : "bg-white border border-gray-200 hover:border-tech-purple"
                  }`}
                  onClick={() => setActiveTech(tech)}
                >
                  <h3 className="font-medium">{tech.title}</h3>
                </button>
              ))}
              
              <div className="pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                >
                  Conhecer Detalhes Técnicos
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 animate-slide-up animate-delay-200">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <img 
                  src={activeTech.image} 
                  alt={activeTech.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-medium mb-2">{activeTech.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">{activeTech.description}</p>
                <div className="bg-tech-purple/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-tech-purple">Benefícios:</h4>
                  <p className="text-gray-700">{activeTech.benefits}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
