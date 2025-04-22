import { useEffect } from 'react';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Efeito para animação ao scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-slide-up, .animate-fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      
      <Hero />
      <About />
      <Features />
      <Services />
      <Process />
      <Projects />
      <Contact />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
