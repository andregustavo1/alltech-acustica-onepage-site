import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const whatsappLink = "https://wa.me/5544999447511";
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "glass-effect shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-tech-purple">
            AllTech<span className="text-tech-green">Acústica</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Início', id: 'home' },
            { name: 'Sobre', id: 'about' },
            { name: 'Serviços', id: 'services' },
            { name: 'Projetos', id: 'projects' },
            { name: 'Contato', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-800 hover:text-tech-purple transition-colors relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-tech-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-sm md:text-base"
        >
          Contate-nos
        </a>
      </div>
    </header>
  );
};

export default Header;
