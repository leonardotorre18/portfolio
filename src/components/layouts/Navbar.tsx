import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Button from "../buttons/Button";
import ButtonLang from "../buttons/ButtonLang";
import {BiMenuAltLeft} from "react-icons/bi"

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  const toggleShowMenu = () => {
    setShowMenu(state => !state)
  }
  const hideShowMenu = () => {
    setShowMenu(false)
  }

  const [showBackground, setShowBackground] = useState(false)
  useEffect(()=> {
    window.addEventListener('scroll', updateBackground);
    return ()=> {
      window.removeEventListener('scroll', updateBackground)
    }
  })
  const updateBackground = () => {
    if (document.body.getBoundingClientRect().top === 0) setShowBackground(false)
    else setShowBackground(true)
  }


  return (
    <header className={`py-4 fixed transition-colors w-full top-0 z-50 ${showBackground ? 'bg-LightModeWhite dark:bg-DarkModeDarkGrey shadow-xl' : ''}`}>
      <nav className="flex justify-between items-center mx-auto max-w-7xl z-50">
        <BiMenuAltLeft onClick={toggleShowMenu} className="text-3xl block sm:hidden z-50 text-LightModePrimaryBlue dark:text-DarkModeWhite" />
        <div className="z-50">
          <Button
            onClick={() => window.open('/assets/pdf/CV_Leonardo.pdf')}
          >
            <FormattedMessage id="Navbar.Button.download" />
          </Button>
        </div>
        <ul className={`
          flex gap-6 text-lg font-medium items-center transition-all
          absolute top-0 w-screen h-screen bg-LightModeWhite dark:bg-DarkModeDarkGrey flex-col justify-center
          sm:static sm:flex-row sm:w-auto sm:h-auto sm:bg-transparent
            ${ showMenu ? "left-0" : "-left-[100vw]" }
          `}
        >
          <a href="#" onClick={hideShowMenu}><FormattedMessage id="Navbar.List.home" /></a>
          <a href="#projects" onClick={hideShowMenu}><FormattedMessage id="Navbar.List.projects" /></a>
          <a href="#aboutme" onClick={hideShowMenu}><FormattedMessage id="Navbar.List.aboutme" /></a>
          <a href="#skills" onClick={hideShowMenu}><FormattedMessage id="Navbar.List.skills" /></a>
          <a href="#contact" onClick={hideShowMenu}><FormattedMessage id="Navbar.List.contact" /></a>
          <ButtonLang />
        </ul>
      </nav>
    </header>
  )
}
