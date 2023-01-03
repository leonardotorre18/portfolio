import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImMenu } from 'react-icons/im';

export default function Navbar() {
  const [show, setShow] = useState(false);
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
  const toggleShow = () => setShow(!show);
  const setFalseShow = () => setShow(false);

  return (
    <header className="bg-main px-3 py-2 sticky top-0 left-0 w-full z-10">

      <nav className="mx-auto max-w-7xl flex justify-end">

        <ul
          className="flex fixed h-full bg-main w-full top-0 justify-center flex-col items-center font-first sm:static sm:h-auto sm:flex-row sm:w-auto text-light text-3xl gap-3 tracking-[-.2em] transition-all duration-1000"
          style={{
            right: show ? '0' : '100%',
          }}
        >
          <Link
            onClick={setFalseShow}
            to="/"
          >
            Inicio
          </Link>
          <Link
            onClick={setFalseShow}
            to="/projects"
          >
            Proyectos
          </Link>
          {/* <li>Sobre Mí</li> */}
          <Link
            onClick={setFalseShow}
            to="/contact"
          >
            Contacto
          </Link>
        </ul>
        <div
          className="w-12 h-full flex justify-center items-center p-1 z-10 sm:hidden"
        >
          <ImMenu
            onClick={toggleShow}
            className="text-3xl text-white"
          />
        </div>
      </nav>
    </header>
  );
}
