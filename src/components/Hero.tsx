
import { useEffect, useRef } from 'react';
import { AudioWaveform } from 'lucide-react';

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
    <>
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('/img/image.png')",
            backgroundColor: 'rgba(0,0,0,0.75)',
            backgroundBlendMode: 'multiply'
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

      <section className="py-16 bg-black">
        <div className="container">
          <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
            <div className="text-center md:text-left">
              <AudioWaveform 
                className="w-full h-auto text-tech-purple animate-wave" 
                size={200}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                Somos <span className="text-tech-purple">especialistas</span> na medição de ruídos sonoros
              </h2>
              <p className="text-gray-300 text-lg">
                Através de capacitação e equipamentos, com certificados RBC, de alta tecnologia somos habilitados a emitir laudos de medições de barulho para diversas finalidades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
