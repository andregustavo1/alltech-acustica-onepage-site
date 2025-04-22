
import { useEffect, useRef } from 'react';
import { AudioWaveform } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const soundWaveRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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
            backgroundImage: "url('/img/4.png')",
            backgroundColor: 'rgba(0,0,0,0.75)',
            backgroundBlendMode: 'multiply'
          }}
        />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold animate-fade-in text-white lg:min-w-[800px]">
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

      <section className="py-6 bg-black">
        <div className="container">
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row gap-8'} items-center`}>
            {isMobile ? (
              <div className="w-full bg-black text-white p-6">
                <div className="flex flex-col items-center mb-6">
                  <AudioWaveform 
                    className="w-[80px] h-auto text-tech-purple animate-wave" 
                  />
                </div>
                <div className="space-y-4 text-center">
                  <h2 className="text-2xl font-bold">
                    Somos <span className="text-tech-purple">especializados</span>{" "}
                    <br />na avaliação <br />de níveis de <br />ruído.
                  </h2>
                  <p className="text-gray-300 text-base">
                    Com equipamentos de alta precisão certificados pelo RBC e equipe qualificada, estamos aptos a elaborar relatórios técnicos de medição sonora para diferentes finalidades.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center md:text-left">
                  <AudioWaveform 
                    className="w-[150px] mr-4 h-auto text-tech-purple animate-wave" 
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Somos <span className="text-tech-purple">especializados</span> na avaliação de níveis de ruído.
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Com equipamentos de alta precisão certificados pelo RBC e equipe qualificada, estamos aptos a elaborar relatórios técnicos de medição sonora para diferentes finalidades.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
