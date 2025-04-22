
import { 
  Search, 
  Church, 
  Headphones, 
  Building, 
  Music4, 
  Factory
} from 'lucide-react';

const services = [
  {
    title: "Avaliação de Ruído Ambiental",
    description: "Medições conforme CONAMA 01 e NBR 10151",
    icon: Search,
  },
  {
    title: "Avaliação de Vibrações Ambientais",
    description: "Análise e controle de vibrações",
    icon: Search,
  },
  {
    title: "Projetos Acústicos para Igrejas",
    description: "Soluções para clareza da palavra falada e música",
    icon: Church,
  },
  {
    title: "Projetos para Auditórios",
    description: "Acústica otimizada para apresentações e eventos",
    icon: Headphones,
  },
  {
    title: "Isolamento Acústico Comercial",
    description: "Para bares, restaurantes e estabelecimentos diversos",
    icon: Building,
  },
  {
    title: "Tratamento Acústico para Casas de Shows",
    description: "Controle de ruído e qualidade sonora interna",
    icon: Music4,
  },
  {
    title: "Soluções para Baladas",
    description: "Conformidade legal e excelência sonora",
    icon: Music4,
  },
  {
    title: "Acústica Industrial",
    description: "Redução de ruído em ambientes industriais",
    icon: Factory,
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-gradient-to-br from-tech-lightGray/50 to-white">
      <div className="container">
        <h2 className="section-title animate-slide-up">
          Serviços <span className="text-gradient">Especializados</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl group animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="p-3 rounded-lg bg-tech-purple/10 w-fit mb-4 text-tech-purple group-hover:bg-tech-purple group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
