
const projects = [
  {
    id: 1,
    image: "/img/6.png"
  },
  {
    id: 2,
    image: "/img/7.png"
  },
  {
    id: 3,
    image: "/img/8.png"
  },
  {
    id: 3,
    image: "/img/5.png"
  },
  {
    id: 3,
    image: "/img/image.png"
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
              <div className="relative overflow-hidden h-[450px]">
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
