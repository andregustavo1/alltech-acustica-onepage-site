
import { Info, Thermometer, Pen, Wrench, Check } from 'lucide-react';

const steps = [
  {
    title: "Avaliação Inicial",
    description: "Análise das necessidades e contexto do cliente",
    icon: Info,
  },
  {
    title: "Medições e Diagnóstico",
    description: "Levantamento técnico com equipamentos especializados",
    icon: Thermometer,
  },
  {
    title: "Elaboração de Projeto",
    description: "Desenvolvimento de soluções personalizadas",
    icon: Pen,
  },
  {
    title: "Implementação",
    description: "Execução das soluções acústicas propostas",
    icon: Wrench,
  },
  {
    title: "Verificação e Certificação",
    description: "Testes finais e documentação de conformidade",
    icon: Check,
  },
];

const Process = () => {
  return (
    <section id="process" className="section bg-tech-lightGray">
      <div className="container">
        <h2 className="section-title animate-slide-up">
          Como <span className="text-gradient">Trabalhamos</span>
        </h2>
        
        <div className="mt-16 relative">
          {/* Linha do processo */}
          <div className="absolute top-12 left-4 bottom-0 w-1 bg-tech-purple/20 md:hidden"></div>
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-tech-purple/20 hidden md:block"></div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex md:flex-col md:items-center">
                  <div className="z-10 md:mb-8">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-tech-purple text-white flex items-center justify-center shadow-lg">
                      <step.icon size={20} />
                    </div>
                  </div>
                  
                  <div className="ml-6 md:ml-0 md:text-center">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Números para cada etapa */}
                <div className="absolute top-0 left-0 md:top-14 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-tech-purple/10">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
