import React, { type ReactElement } from 'react'
import Navbar from './components/Navbar/Navbar'
import SectionContant from './components/Sections/SectionContact/SectionContant'
import SectionExperience from './components/Sections/SectionExperience/SectionExperience'
import Jumbotron from './components/Sections/Jumbotron/Jumbotron'
import Main from './components/Main/Main'
import SectionProject from './components/Sections/SectionProject/SectionProject'

function App (): ReactElement {
  return (
    <>
      <Navbar />
      <Main>
        <Jumbotron />

        <SectionContant />

        <SectionExperience />

        <SectionProject />
      </Main>
    </>
  )
}

export default App
