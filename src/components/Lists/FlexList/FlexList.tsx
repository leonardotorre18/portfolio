import React, { type ReactElement, type ReactNode } from 'react'
import './FlexList.scss'

export default function FlexList ({
  children
}: PropTypes): ReactElement {
  return (
    <div className='flex-list'>
      {children}
    </div>
  )
}

interface PropTypes {
  children: ReactNode
}
