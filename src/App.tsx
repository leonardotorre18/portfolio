import React, { type ReactElement } from 'react'
import Navbar from './components/Navbar/Navbar'
import SectionContant from './components/Sections/SectionContact/SectionContant'
import SectionExperience from './components/Sections/SectionExperience/SectionExperience'
import Jumbotron from './components/Sections/Jumbotron/Jumbotron'
import Main from './components/Main/Main'
import SectionProject from './components/Sections/SectionProject/SectionProject'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'

function App (): ReactElement {
  return (
    <>
      <Background />
      <Navbar />

      <Main>
        <Jumbotron />

        <SectionContant />

        <SectionExperience />

        <SectionProject />
      </Main>

      <Footer />
    </>
  )
}

export default App
