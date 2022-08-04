import React, { useState, useEffect } from 'react';
import '../../styles/Navbar.scss';

export default function Navbar() {
  const [visibility, setVisibility] = useState(true);

  // const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to handle Visibility menu responisve
  let scrollPos = 0;
  const updateScrollPosition = () => {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
      setVisibility(true);
    } else if (scrollPos <= -80) {
      setVisibility(false);
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  });

  return (
    <header className={visibility ? 'header' : 'header header--hidden'}>

      <nav className="navbar">

        <ul className="navbar-list">
          <li>Inicio</li>
          <li>Proyectos</li>
          {/* <li>Sobre Mí</li> */}
          <li>Contacto</li>
        </ul>
        {/* <BurgerButton onClick={changedClicked} /> */}
      </nav>
    </header>
  );
}
