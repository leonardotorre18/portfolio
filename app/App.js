import Navbar from './components/layouts/Navbar.jsx'
import Jumbotron from './components/layouts/Jumbotron.jsx'
import StripeContainer from './components/containers/StripeContainer.jsx'

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <StripeContainer>
        <h2>Proyectos</h2>
      </StripeContainer>
    </div>
    
  )
}
