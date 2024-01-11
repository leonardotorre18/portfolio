import React, { type ReactElement } from 'react'
// import NavList from '../Lists/NavList/NavList'
import Button from '../Buttons/Button/Button'
import Logo from '../Logo/Logo'
import './Navbar.scss'

export default function Navbar (): ReactElement {
  return (
    <header className='header'>
      <nav className='header__navbar'>
        <Logo />
        <div className='header__navbar__container'>
          {/* <NavList /> */}
          <Button
            onClick={() => {
              window.open('/assets/pdf/CV_Leonardo.pdf')
            }}
          >Descargar CV</Button>
        </div>
      </nav>
    </header>
  )
}
