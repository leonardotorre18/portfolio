import React, { type ReactNode, type ReactElement } from 'react'
import './H1.scss'

export default function H1 ({
  children
}: PropTypes): ReactElement {
  return (
    <h1 className='h1'>{children}</h1>
  )
}

interface PropTypes {
  children: string | ReactNode
}
