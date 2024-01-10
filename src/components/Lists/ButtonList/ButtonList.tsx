import React, { type ReactNode, type ReactElement } from 'react'
import './ButtonList.scss'

export default function ButtonList ({
  children
}: PropTypes): ReactElement {
  return (
    <div className='button-list'>
      {children}
    </div>
  )
}

interface PropTypes {
  children: ReactNode
}
