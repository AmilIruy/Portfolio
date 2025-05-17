import React from 'react';

const Projects = () => {
  return (
    <section id="projetos" className="section-container">
      <div className="content">
        <h2 class= "centralize">Meus Projetos</h2>
        <div className="projetos-grid">
          <div className="projeto-card">
            <img className= "projetoimage" src="imagens/840_560.jpeg" alt="" />
            <h3>Projeto 1</h3>
            <p>Em Contrução</p>
          </div>
          <div className="projeto-card">
            <img className= "projetoimage" src="imagens/840_560.jpeg" alt="" />
            <h3>Projeto 2</h3>
            <p>Em Contrução</p>
          </div>
          <div className="projeto-card">
            <img className= "projetoimage" src="imagens/840_560.jpeg" alt="" />
            <h3>Projeto 3</h3>
            <p>Em Contrução</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;