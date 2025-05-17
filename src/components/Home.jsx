  import React, {} from 'react';

  const Home = () => {
     return (
      <section id="home" className="section-container">
        <video
          src="imagens/107416-678526500.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="video-bg"
        />

        <div className="video-overlay"></div>
        
        <div className="content">
          <h1 className='titulo'>Hello There!</h1>
          <p className='sub-titulo'>Portfólio feito por Yuri Aciole</p>
          <img className='profile-image' src="imagens/yuriaciole.svg" alt="Foto de perfil" />
        </div>

        <div className="loader-parallax">
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
