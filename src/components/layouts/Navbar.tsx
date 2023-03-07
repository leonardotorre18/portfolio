export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between">
        <button onClick={()=> alert('Downloading')}>
          Download CV
        </button>
        
        <ul className="flex gap-4">
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
