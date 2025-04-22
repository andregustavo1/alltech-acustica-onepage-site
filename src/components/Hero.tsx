
import { useEffect, useRef } from 'react';

const Hero = () => {
  const soundWaveRef = useRef<HTMLDivElement>(null);
  
  // Link para WhatsApp
  const whatsappLink = "https://wa.me/5544999447511";

  // Efeito para animar a onda sonora
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
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-tech-lightGray to-white z-0"></div>
      
      {/* Ondas sonoras decorativas */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 z-0">
        <div ref={soundWaveRef} className="w-96 h-96">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#7B68EE" 
              d="M43.5,-60.3C56.2,-53.5,66.4,-41.2,71.4,-26.8C76.4,-12.5,76.3,4,72.1,19.5C67.9,35,59.8,49.5,47.1,57.5C34.5,65.6,17.2,67.2,1.3,65.5C-14.7,63.9,-29.4,59,-43,50.9C-56.7,42.9,-69.2,31.6,-73.8,17.6C-78.3,3.6,-74.9,-13.1,-66.6,-26.1C-58.4,-39.2,-45.2,-48.5,-32.2,-55.2C-19.1,-61.9,-6.2,-66.1,7.2,-66.1C20.6,-66.1,30.8,-67.1,43.5,-60.3Z" 
              transform="translate(100 100)" 
            />
          </svg>
        </div>
      </div>
      
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
