import React, { type ReactNode, type ReactElement } from 'react'
import './NavItem.scss'

export default function NavItem ({
  children,
  id
}: PropTypes): ReactElement {
  const clickHandler = (): void => {
    // const navbarHeight = document.getElementById('navbar')?.scrollHeight
    // console.log(navbarHeight)
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY - 67
      })
    }, 10)
  }

  return (
    <li className='nav-item' onClick={clickHandler}>
      <a href={`/#${id}`}>
        {children}
      </a>
    </li>
  )
}

interface PropTypes {
  children: ReactNode
  id: string
}
