import { useEffect, useState } from "react";
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
          Download CV
        </Button>
        
        <ul className="flex gap-6 text-lg font-medium">
          <li>Home</li>
          <li>Skills</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
