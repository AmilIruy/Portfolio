import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contato from './components/Contato';
import './styles/App.css';
import './styles/animations.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const homeSection = document.getElementById('home');
      const homeContent = document.querySelector('.contenthome');

      
      if (homeSection && homeContent) {
        const homeSectionHeight = homeSection.offsetHeight;
        
        const fadeOutThreshold = homeSectionHeight * 0.5;
        const homeOpacity = 1 - (scrollPosition / fadeOutThreshold);
        
        homeContent.style.opacity = Math.max(0, homeOpacity);
        homeContent.style.transform = `
          translateY(${scrollPosition * 0.9}px)
          scale(${Math.max(0.1, homeOpacity)})
        `;
      }
      
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    }
    
    function setupAnimations() {
      const aboutSection = document.getElementById('sobre');
      if (aboutSection) {
        const aboutHeaders = aboutSection.querySelectorAll('h2, h3');
        const aboutParagraphs = aboutSection.querySelectorAll('.texto-sobre p');
        const skillItems = aboutSection.querySelectorAll('.skills-list .tech-item');
        
        [...aboutHeaders, ...aboutParagraphs, ...skillItems].forEach(el => {
          el.classList.add('animate-on-scroll');
        });
      }
      
      const projectsSection = document.getElementById('projetos');
      if (projectsSection) {
        const projectsHeader = projectsSection.querySelector('h2');
        const projectCards = projectsSection.querySelectorAll('.projeto-card');
        
        if (projectsHeader) projectsHeader.classList.add('animate-on-scroll');
        projectCards.forEach(card => card.classList.add('animate-on-scroll'));
      }
      
      const contatoSection = document.getElementById('contato');
      if (contatoSection) {
        const contatoHeader = contatoSection.querySelector('h2');
        const socialLinks = contatoSection.querySelector('.social-links');
        
        if (contatoHeader) contatoHeader.classList.add('animate-on-scroll');
        if (socialLinks) socialLinks.classList.add('animate-on-scroll');
      }
    }
    
    setupAnimations();
    window.addEventListener('scroll', handleScroll);
    
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="wrapper">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        closeMenu={closeMenu} 
      />
      <main>
        <Home />
        <About />
        <Projects />
        <Contato />
      </main>
    </div>
  );
}

export default App;

