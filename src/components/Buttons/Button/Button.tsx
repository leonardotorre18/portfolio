import React, { type ReactElement } from 'react'

import './Button.scss'

export default function Button ({
  children,
  onClick
}: PropTypes): ReactElement {
  return (
    <button onClick={onClick ?? onClick} className='button'>{children}</button>
  )
}

interface PropTypes {
  children: string
  onClick?: () => void
}
