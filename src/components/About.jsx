import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="section-container">
      <div className="content">
        <h2 class= "centralize">Sobre Mim</h2>
        <div className="sobre-content">
          <div className="texto-sobre">
            <p>Desenvolvedor full-stack com experiência em suporte técnico, manutenção de sistemas web e automação de processos.</p>
            <p>Possuo sólida base acadêmica em Engenharia de Software e prática com linguagens como Python, C#, JavaScript e ferramentas modernas de desenvolvimento. Tenho perfil proativo, colaborativo e orientado a resultados.</p>
          </div>
          <div className="skills">
            <h3>Minhas Habilidades</h3>
            <div className="skills-list skills-list-animation">
            <div className="tech-item">
                <i className="devicon-python-plain colored"></i>
                <span>Python</span>
            </div>
            <div className="tech-item">
                <i className="devicon-csharp-plain colored"></i>
                <span>C#</span>
            </div>
            <div className="tech-item">
                <i className="devicon-dotnetcore-plain colored"></i>
                <span>.NET</span>
            </div>
            <div className="tech-item">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
            </div>
            <div className="tech-item">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
            </div>
            <div className="tech-item">
                <i className="devicon-java-plain colored"></i>
                <span>Java</span>
            </div>
            <div className="tech-item">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML5</span>
            </div>
            <div className="tech-item">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS3</span>
            </div>
            <div className="tech-item">
                <i className="devicon-microsoftsqlserver-plain colored"></i>
                <span>SQL Server</span>
            </div>
          </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;