
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  // Link para WhatsApp
  const whatsappLink = "https://wa.me/5544999447511";
  
  return (
    <section id="contact" className="section bg-gradient-to-br from-tech-lightGray/50 to-white">
      <div className="container">
        <h2 className="section-title animate-slide-up">
          Entre em <span className="text-gradient">Contato</span>
        </h2>
        <p className="section-subtitle animate-slide-up animate-delay-100">
          Transforme a acústica do seu ambiente
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 animate-slide-up"
            >
              <div className="w-16 h-16 bg-tech-purple/10 text-tech-purple rounded-full flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">WhatsApp</h3>
              <p className="text-gray-600">(44) 9 9944-7511</p>
            </a>
            
            <a 
              href="mailto:alltechocupacional2@gmail.com"
              className="bg-white p-8 rounded-xl shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 animate-slide-up animate-delay-100"
            >
              <div className="w-16 h-16 bg-tech-purple/10 text-tech-purple rounded-full flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">E-mail</h3>
              <p className="text-gray-600">alltechocupacional2@gmail.com</p>
            </a>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 animate-slide-up animate-delay-200">
              <div className="w-16 h-16 bg-tech-purple/10 text-tech-purple rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Localização</h3>
              <p className="text-gray-600">Maringá/PR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
