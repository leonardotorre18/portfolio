import React, { type ReactElement, type ReactNode } from 'react'
import './H4.scss'

export default function H4 ({
  children
}: PropTypes): ReactElement {
  return (
    <h4 className='h4'>{children}</h4>
  )
}

interface PropTypes {
  children: ReactNode
}
