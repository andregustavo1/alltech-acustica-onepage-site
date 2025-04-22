
const Footer = () => {
  // Função para voltar ao topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-tech-purple">AllTech</span>
              <span className="text-tech-green">Acústica</span>
            </h3>
            <p className="text-gray-400">
              Soluções especializadas em engenharia acústica para avaliação de ruído ambiental, vibrações e projetos acústicos personalizados.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Início', id: 'home' },
                { name: 'Sobre', id: 'about' },
                { name: 'Serviços', id: 'services' },
                { name: 'Projetos', id: 'projects' },
                { name: 'Contato', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <span className="mr-2">📱</span>
                (44) 9 9944-7511
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">✉️</span>
                alltechocupacional2@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">📍</span>
                Maringá/PR
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 AllTech Engenharia Acústica. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-tech-purple/20 hover:bg-tech-purple/30 text-white p-3 rounded-full transition-colors"
            aria-label="Voltar ao topo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
