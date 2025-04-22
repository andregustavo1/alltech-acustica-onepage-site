
const CallToAction = () => {
  // Link para WhatsApp
  const whatsappLink = "https://wa.me/5544999447511";
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fundo com ondas sonoras estilizadas */}
      <div className="absolute inset-0 bg-gray-900 z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up text-white">
            Pronto para Transformar sua <span className="text-gradient">Experiência Acústica</span>?
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 animate-slide-up animate-delay-100">
            Solicite um orçamento e conheça nossas soluções especializadas
          </p>
          
          <div className="animate-slide-up animate-delay-200">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary py-4 px-8 text-lg shadow-xl hover:shadow-2xl"
            >
              Solicitar Avaliação
            </a>
          </div>
        </div>
      </div>
      
      {/* Elemento decorativo de onda sonora */}
      <div className="absolute -bottom-10 left-0 right-0 h-20 opacity-10 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,74.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#7B68EE"/>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;
