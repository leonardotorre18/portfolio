import React, { type ReactNode, type ReactElement } from 'react'
import './NavItem.scss'

export default function NavItem ({
  children,
  id
}: PropTypes): ReactElement {
  return (
    <li className='nav-item'>
      {
        id !== undefined
          ? <a href={`/#${id ?? id}`}>{children}</a>
          : children
      }
    </li>
  )
}

interface PropTypes {
  children: ReactNode
  id?: string
}
