import React, { type ReactElement } from 'react'
import NavItem from '../../Items/NavItem/NavItem'
import Button from '../../Buttons/Button/Button'
import './NavList.scss'

export default function NavList (): ReactElement {
  return (
    <ul className='nav-list'>
      <NavItem id=''>Inicio</NavItem>
      <NavItem id='contact'>Contacto</NavItem>
      <NavItem id='experience'>Experiencia</NavItem>
      <NavItem id='projects'>Proyectos</NavItem>
      <Button
        onClick={() => {
          window.open('/assets/pdf/CV_Leonardo.pdf')
        }}
      >
        Descargar CV
      </Button>
    </ul>
  )
}
