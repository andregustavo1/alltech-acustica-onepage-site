
import { Check, Users, Settings } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-tech-lightGray">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/img/2.png" 
                alt="Equipamentos de engenharia acústica"
                className="w-full object-cover h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-tech-purple/40 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold animate-slide-up">
              Sobre a <span className="text-gradient">AllTech Engenharia Acústica</span>
            </h2>
            
            <div className="animate-slide-up animate-delay-100">
              <p className="text-gray-700 mb-6">
                A AllTech Engenharia Acústica é especialista em avaliações de ruído ambiental e desenvolvimento de projetos acústicos personalizados. Atendemos empresas, estabelecimentos comerciais e instituições que buscam conformidade com normas técnicas, conforto acústico e soluções eficientes para controle de ruído e vibrações.
              </p>
              <p className="text-gray-700">
                Nossa engenharia acústica garante precisão técnica, conformidade normativa e resultados comprovados.
              </p>
            </div>
            
            <div className="space-y-4 pt-2 animate-slide-up animate-delay-200">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-tech-purple rounded-lg text-white">
                  <Check size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Conformidade com normas CONAMA 01 e NBR 10151</h3>
                  <p className="text-sm text-gray-600">Garantimos que todos os projetos cumpram rigorosamente as normas técnicas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-tech-purple rounded-lg text-white">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Equipe técnica especializada</h3>
                  <p className="text-sm text-gray-600">Profissionais altamente qualificados para diagnósticos precisos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-tech-purple rounded-lg text-white">
                  <Settings size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Tecnologia avançada de medição</h3>
                  <p className="text-sm text-gray-600">Utilizamos equipamentos de última geração para resultados confiáveis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
