import React, { type ReactNode, type ReactElement } from 'react'
import H4 from '../../Titles/H4/H4'

export default function CardExperience ({
  title,
  date,
  children
}: PropTypes): ReactElement {
  return (
    <div>
      <H4>{title}</H4>
      <span>{date}</span>
      <div>
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
