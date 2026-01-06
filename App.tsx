
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  // Simple scroll animation logic using Intersection Observer if needed, 
  // but for this version, we'll rely on clean Tailwind styling and spacing.
  
  useEffect(() => {
    // Add smooth reveals on scroll
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Products />
      {/* Certifications are integrated in About/Contact for professional flow */}
      <Contact />
      
      <FloatingButtons />

      {/* Simple Footer Text */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Energy Tech Sales & Services • Kerala Industrial Excellence
        </p>
      </footer>
    </div>
  );
};

export default App;
