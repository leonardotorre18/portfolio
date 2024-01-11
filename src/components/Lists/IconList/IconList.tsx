import React, { type ReactNode, type ReactElement } from 'react'
import './IconList.scss'

export default function IconList ({
  children
}: PropTypes): ReactElement {
  return (
    <div className='icon-list'>
      {children}
    </div>
  )
}

interface PropTypes {
  children: ReactNode
}
