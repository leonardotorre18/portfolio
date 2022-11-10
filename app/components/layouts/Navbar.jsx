import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // const [visibility, setVisibility] = useState(true);

  // const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to handle Visibility menu responisve
  // let scrollPos = 0;
  // const updateScrollPosition = () => {
  //   if ((document.body.getBoundingClientRect()).top > scrollPos) {
  //     setVisibility(true);
  //   } else if (scrollPos <= -80) {
  //     setVisibility(false);
  //   }
  //   scrollPos = (document.body.getBoundingClientRect()).top;
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', updateScrollPosition);
  //   return () => {
  //     window.removeEventListener('scroll', updateScrollPosition);
  //   };
  // });

  return (
    <header className="bg-main px-3 py-2 sticky top-0 left-0 w-full z-10">

      <nav className="mx-auto max-w-7xl">

        <ul className="flex font-first text-light text-3xl gap-3 w-full justify-end tracking-[-.2em]">
          <Link to="/">Inicio</Link>
          <Link to="/projects">Proyectos</Link>
          {/* <li>Sobre Mí</li> */}
          <Link to="/contact">Contacto</Link>
        </ul>
      </nav>
    </header>
  );
}
