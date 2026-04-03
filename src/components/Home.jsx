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
        <p className='sub-titulo'>Bem vindo ao meu Portfólio, meu nome é Yuri Aciole e fico feliz pela sua vizita!</p>
      </div>
    </section>
  );
};

export default Home;
