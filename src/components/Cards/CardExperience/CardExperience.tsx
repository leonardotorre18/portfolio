import React, { type ReactNode, type ReactElement } from 'react'
import H4 from '../../Titles/H4/H4'
import './CardExperience.scss'

export default function CardExperience ({
  title,
  date,
  children
}: PropTypes): ReactElement {
  return (
    <div className='card-experience'>
      <H4>{title}</H4>
      <span className='card-experience__date'>{date}</span>
      <div className='card-experience__container'>
        {children}
      </div>
    </div>
  )
}

interface PropTypes {
  title: string
  date: string
  children: ReactNode
}
