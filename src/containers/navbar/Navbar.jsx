import React from 'react';
import './navbar.css';
import logo from '../../assets/Images/Logo-w.png';

const Menu = ({ scrollToSection }) => (
  <>
    <p>
      <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
    </p>
    <p>
      <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
    </p>
    <p>
      <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Work</a>
    </p>
    <p>
      <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
    </p>
  </>
);

function Navbar() {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='navbar-head'>
        <div>
          <img src={logo} alt="Logo" className='logo-img'/>
        </div>
        <ul className='navbar-head-list'>
          <Menu scrollToSection={scrollToSection} />
        </ul>
      </div>
    </>
  );
}

export default Navbar;
