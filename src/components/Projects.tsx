
const projects = [
  {
    id: 1,
    title: "Isolamento Acústico - Igreja Metropolitana",
    description: "Tratamento completo para isolamento de ruído e otimização da acústica interna.",
    type: "Projeto Acústico para Igreja",
    challenge: "Minimizar a propagação de som para a vizinhança e melhorar a clareza da palavra falada.",
    solution: "Aplicação de painéis absorvedores estratégicos e isolamento de portas e janelas.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 2,
    title: "Avaliação de Ruído Ambiental - Indústria Têxtil",
    description: "Medições completas e laudo técnico para adequação às normas ambientais.",
    type: "Avaliação de Ruído",
    challenge: "Identificar fontes de ruído que ultrapassavam os limites permitidos.",
    solution: "Diagnóstico detalhado e projeto de mitigação com barreiras acústicas.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    id: 3,
    title: "Tratamento Acústico - Studio Musical",
    description: "Projeto completo de isolamento e tratamento para estúdio de gravação.",
    type: "Tratamento Acústico",
    challenge: "Criar um ambiente com qualidade sonora excepcional e alto isolamento.",
    solution: "Sistema de parede dupla, tratamento com absorvedores de baixa frequência e difusores.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 4,
    title: "Isolamento Acústico - Restaurante Central",
    description: "Controle de ruído para conforto dos clientes e redução de impacto na vizinhança.",
    type: "Isolamento Comercial",
    challenge: "Reduzir o ruído interno enquanto mantém a estética do ambiente.",
    solution: "Painéis absorvedores decorativos e tratamento de teto com materiais de alta performance.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: 5,
    title: "Projeto Acústico - Auditório Corporativo",
    description: "Otimização acústica para apresentações e conferências em ambiente corporativo.",
    type: "Projeto para Auditório",
    challenge: "Melhorar a inteligibilidade da fala e reduzir reverberação excessiva.",
    solution: "Tratamento de superfícies com materiais acústicos de alta performance e ajuste do sistema de áudio.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
  },
  {
    id: 6,
    title: "Controle de Ruído - Casa Noturna",
    description: "Isolamento acústico completo para viabilizar operação em área residencial.",
    type: "Soluções para Baladas",
    challenge: "Contenção total de ruído para conformidade com legislação municipal.",
    solution: "Sistema avançado de isolamento de paredes, teto e piso, com antecâmara de entrada.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title animate-slide-up">
          Nossos <span className="text-gradient">Projetos</span>
        </h2>
        
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg group animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium bg-tech-purple px-2 py-1 rounded w-fit mb-2">{project.type}</span>
                  <p className="text-sm">{project.challenge}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2 group-hover:text-tech-purple transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
