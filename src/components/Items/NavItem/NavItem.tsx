import React, { type ReactNode, type ReactElement } from 'react'
import './NavItem.scss'

export default function NavItem ({
  children
}: PropTypes): ReactElement {
  return (
    <li className='nav-item'>{children}</li>
  )
}

interface PropTypes {
  children: ReactNode
}
