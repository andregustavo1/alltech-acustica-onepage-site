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
          backgroundImage: "url('/img/image.png')",
          backgroundColor: 'rgba(0,0,0,0.70)',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in text-white lg:min-w-[900px]">
              Excelência em <span className='text-tech-purple'>Engenharia Acústica</span> 
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl animate-fade-in animate-delay-200">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
