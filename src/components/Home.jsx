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
      
      <div className="contenthome">
        <img className='profile-image animated-profile' src="imagens/yuriaciole.svg" alt="Foto de perfil" />
        <h1 className='titulo'>Hello There!</h1>
        <p className='sub-titulo'>Portfólio em contrução por Yuri Aciole</p>
      </div>
    </section>
  );
};

export default Home;
