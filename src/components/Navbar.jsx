import React from 'react';

const Navbar = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  return (
    <nav>
      <a className="logo" href="#home">Yuri Aciole</a>
      <div 
        className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Início</a></li>
        <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
        <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
        <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;