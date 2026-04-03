import React from 'react';

const Projects = () => {
  return (
    <section id="projetos" className="section-container">
      <div className="content">
        <h2 className= "centralize">Meus Projetos</h2>
        <div className="projetos-grid">
          <div className="projeto-card">
            <img className= "projetoimage" src="imagens\Captura de tela 2026-04-03 155908.png" alt="" />
            <h3>GACT "2"</h3>
            <p>Uma demanda interna da empresa Eletronuclear. Atualização de sistema de AngularJS e VB.NET para Angular e .NET... </p>
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