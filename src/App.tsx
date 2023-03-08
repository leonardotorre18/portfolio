import Jumbotron from "./components/layouts/Jumbotron"
import Navbar from "./components/layouts/Navbar"
import Background from "./components/pure/Background"
import AboutMe from "./components/sections/AboutMe"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"

function App() {

  return (
    <div className=" relative text-DarkModeDarkGrey dark:text-LightModeWhite">
    <Background />
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
