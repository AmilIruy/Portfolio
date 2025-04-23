  import React, { useEffect, useRef } from 'react';

  const Home = () => {
    const parallaxRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const speed = 0.08;
  
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translateY(${scrollY * speed}px)`;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <section id="home" className="section-container">
        <div className="content">
          <h1>Portfólio</h1>
          <h2>Portfólio feito por Yuri Aciole</h2>
          <img src="" alt="Foto de perfil" />
        </div>

        <div className="loader-parallax" ref={parallaxRef}>
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    );
  };

  export default Home;
