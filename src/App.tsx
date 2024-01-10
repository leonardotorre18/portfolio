import React, { type ReactElement } from 'react'
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron'
import SectionContant from './components/Sections/SectionContact/SectionContant'
import SectionExperience from './components/Sections/SectionExperience/SectionExperience'

function App (): ReactElement {
  return (
    <>
      <Navbar />
      <main>
        <Jumbotron />

        <SectionContant />

        <SectionExperience />
      </main>
    </>
  )
}

export default App
