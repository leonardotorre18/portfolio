import React, { type ReactNode, type ReactElement } from 'react'
import './GridList.scss'

export default function GridContainer ({
  children
}: PropTypes): ReactElement {
  return (
    <div className='grid-container'>{children}</div>
  )
}

interface PropTypes {
  children: ReactNode
}
