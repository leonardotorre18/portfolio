import React, { type ReactElement } from 'react'

import './ButtonStroke.scss'

export default function ButtonStroke ({
  children
}: PropTypes): ReactElement {
  return (
    <button className='button-stroke'>{children}</button>
  )
}

interface PropTypes {
  children: string
}
