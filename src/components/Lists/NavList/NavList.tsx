import React, { type ReactElement } from 'react'
import NavItem from '../../Items/NavItem/NavItem'
import './NavList.scss'

export default function NavList (): ReactElement {
  return (
    <ul className='nav-list'>
      <NavItem>Inicio</NavItem>
      <NavItem>Experiencia</NavItem>
      <NavItem>Proyectos</NavItem>
    </ul>
  )
}
