import React, { type ReactElement, type ReactNode } from 'react'
// import './H1.scss'

export default function H3 ({
  children
}: PropTypes): ReactElement {
  return (
    <h3 className='h3'>{children}</h3>
  )
}

interface PropTypes {
  children: ReactNode
}
