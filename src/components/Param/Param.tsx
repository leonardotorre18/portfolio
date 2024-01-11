import React, { type ReactElement } from 'react'
import './Param.scss'

export default function Param ({
  children
}: PropTypes): ReactElement {
  return (
    <p className='p'>{children}</p>
  )
}

interface PropTypes {
  children: string
}
