import React, { useState, type ReactElement } from 'react'
import NavList from '../Lists/NavList/NavList'
import { SlMenu } from 'react-icons/sl'
import Logo from '../Logo/Logo'
import './Navbar.scss'

export default function Navbar (): ReactElement {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleShowMenu = (): void => { setShowMenu(!showMenu) }

  return (
    <header className='header' id='navbar'>
      <nav className='header__navbar'>
        <Logo />
        <div
          className={
            showMenu
              ? 'header__navbar__container'
              : 'header__navbar__container header__navbar__container--hidden'
            }
          onClick={toggleShowMenu}
        >
          <NavList />
        </div>
        <SlMenu className='header__navbar__menuIcon' onClick={toggleShowMenu} />
      </nav>
    </header>
  )
}
