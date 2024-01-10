import React, { type ReactNode, type ReactElement } from 'react'
import './ButtonIcon.scss'

export default function ButtonIcon ({
  children,
  icon
}: PropTypes): ReactElement {
  return (
    <button className='button-icon'>
      {icon}
      <span className='button-icon__text'>
        {children}
      </span>
    </button>
  )
}

interface PropTypes {
  children: ReactNode
  icon: ReactElement
}
