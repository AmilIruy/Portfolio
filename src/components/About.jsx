import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="content">
        <h2 class= "centralize">Sobre Mim</h2>
        <div className="sobre-content">
          <div className="texto-sobre">
            <p>Desenvolvedor apaixonado por criar soluções inovadoras.</p>
            <p>Especializado em desenvolvimento web e experiências interativas.</p>
          </div>
          <div className="skills">
            <h3>Minhas Habilidades</h3>
            <div className="skills-list">
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