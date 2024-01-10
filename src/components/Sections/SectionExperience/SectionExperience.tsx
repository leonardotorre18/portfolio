import React, { type ReactElement } from 'react'
import Section from '../Section/Section'
import CardExperience from '../../Cards/CardExperience/CardExperience'
import GridContainer from '../../GridContainer/GridContainer'

export default function SectionExperience (): ReactElement {
  return (
    <Section title='Experiencia'>

      <GridContainer>
        <CardExperience title='Freelancer' date='2020 enero - 2022 diciembre' >
          Coment
        </CardExperience>
        <CardExperience title='Programador Web Frontend' date='2022 enero - 2022 julio' >
          Coment
        </CardExperience>
        <CardExperience title='Programador Web Frontend' date='2023 enero - 2023 diciembre' >
          Coment
        </CardExperience>
      </GridContainer>
    </Section>
  )
}
