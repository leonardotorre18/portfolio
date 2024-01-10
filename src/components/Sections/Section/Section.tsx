import React, { type ReactNode, type ReactElement } from 'react'
import H2 from '../../Titles/H2/H2'
import './Section.scss'

export default function Section ({
  title,
  children
}: PropTypes): ReactElement {
  return (
    <section className='section'>
      <H2>{title}</H2>
      <div className='section__container'>

        {children}

      </div>
    </section>
  )
}

interface PropTypes {
  title: string
  children: ReactNode
}
