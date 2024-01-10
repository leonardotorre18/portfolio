import React, { type ReactNode, type ReactElement } from 'react'

import './Button.scss'

export default function Button ({
  children
}: PropTypes): ReactElement {
  const handlerClick = (): void => {
    console.log('Click in button')
  }
  return (
    <button onClick={handlerClick} className='button'>{children}</button>
  )
}

interface PropTypes {
  children: ReactNode
}
