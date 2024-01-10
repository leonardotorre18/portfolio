import React, { type ReactElement, type ReactNode } from 'react'
import './H2.scss'

export default function H2 ({
  children
}: PropTypes): ReactElement {
  return (
    <h2 className='h2'>{children}</h2>
  )
}

interface PropTypes {
  children: ReactNode
}
