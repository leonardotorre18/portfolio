import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Button from "../buttons/Button";

export default function Navbar() {

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
    <header className={`py-4 transition-colors sticky w-full top-0 z-50 ${showBackground ? 'bg-LightModeWhite dark:bg-DarkModeDarkGrey shadow-xl' : ''}`}>
      <nav className="flex justify-between items-center mx-auto max-w-7xl">
        <Button
          onClick={() => window.open('/assets/pdf/CV_Leonardo.pdf')}
        >
          <FormattedMessage id="Navbar.Button.download" />
        </Button>
        <ul className="flex gap-6 text-lg font-medium">
          <li><FormattedMessage id="Navbar.List.home" /></li>
          <li><FormattedMessage id="Navbar.List.skills" /></li>
          <li><FormattedMessage id="Navbar.List.aboutme" /></li>
          <li><FormattedMessage id="Navbar.List.projects" /></li>
          <li><FormattedMessage id="Navbar.List.contact" /></li>
        </ul>
      </nav>
    </header>
  )
}
