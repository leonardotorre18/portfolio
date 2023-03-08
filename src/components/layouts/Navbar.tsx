import Button from "../buttons/Button"

export default function Navbar() {
  return (
    <header className="py-4 sticky w-full top-2 z-50">
      <nav className="flex justify-between items-center mx-auto">
        <Button
          onClick={() => window.open('/assets/pdf/CV_Leonardo.pdf')}
        >
          Download CV
        </Button>
        
        <ul className="flex gap-4 text-lg">
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
