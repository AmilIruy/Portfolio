import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="section-container">
      <div className="content">
        <h2>Sobre Mim</h2>
        <div className="sobre-content">
          <div className="texto-sobre">
            <p>Desenvolvedor apaixonado por criar soluções inovadoras.</p>
            <p>Especializado em desenvolvimento web e experiências interativas.</p>
          </div>
          <div className="skills">
            <h3>Minhas Habilidades</h3>
            <ul className="skills-list">
              <li>Python</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>.Net</li>
              <li>SQL Server</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;