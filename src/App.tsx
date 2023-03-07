import Jumbotron from "./components/layouts/Jumbotron"
import Navbar from "./components/layouts/Navbar"

function App() {

  return (
    <div className="bg-LightModeWhite dark:bg-DarkModeDarkGrey text-DarkModeDarkGrey">
      <Navbar />
      <Jumbotron />
    </div>
  )
}

export default App
