import { useEffect, useRef } from 'react';

const Hero = () => {
  const soundWaveRef = useRef<HTMLDivElement>(null);
  
  const whatsappLink = "https://wa.me/5544999447511";

  useEffect(() => {
    const animateSoundWave = () => {
      if (soundWaveRef.current) {
        soundWaveRef.current.classList.add('animate-wave');
      }
    };
    
    animateSoundWave();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/ac22bf1d-b46a-40ce-96fc-c8fae29c30f7.png')",
          backgroundColor: 'rgba(0,0,0,0.75)',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              <span className="text-gradient">Excelência</span> em<br />
              Engenharia Acústica
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl animate-fade-in animate-delay-200">
              Avaliações de Ruído Ambiental e Projetos Acústicos Especializados para diferentes ambientes e necessidades corporativas.
            </p>
            
            <div className="animate-fade-in animate-delay-300">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mr-4"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-400">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Tecnologia acústica avançada" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-tech-purple/20 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
