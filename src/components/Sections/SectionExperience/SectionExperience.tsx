import React, { type ReactElement } from 'react'
import Section from '../Section/Section'
import CardExperience from '../../Cards/CardExperience/CardExperience'
import GridList from '../../Lists/GridList/GridList'
import Param from '../../Param/Param'

export default function SectionExperience (): ReactElement {
  return (
    <Section title='Experiencia' id='experience'>

      <GridList>
        <CardExperience title='Freelancer' date='2020 enero - 2022 diciembre' >
          <Param>Creación y diseño de LandingPages para distintos clientes (HTML, CSS, JS, TailwindCSS), tiendas en línea, entre otros.</Param>
          <Param>Diseño web responsivo para multiples dispositivos</Param>
          <Param>Creación de APIs REST usando Express, Cors y Swagger</Param>
          <Param>Creación de sitios web Server-Side-Rendering usando Node, Express, Handlerbar, Sass</Param>
          <Param>Experiencia en el manejo de proyectos usando Git</Param>
        </CardExperience>
        <CardExperience title='Programador Web Frontend' date='2022 enero - 2022 julio' >
          <Param>Corrección de  bugs en diseño web</Param>
          <Param>Trabajo en conjunto con desarrolladores en equipo multicultural, para crear una interfaz de usuario coherente y efectiva</Param>
          <Param>Implementar nuevas características y mejoras en la interfaz de usuario</Param>
        </CardExperience>
        <CardExperience title='Programador Web Frontend' date='2023 enero - 2023 diciembre' >
          <Param>Supervisión constante del trabajo realizado por estudiantes y corrección de errores de los mismos</Param>
          <Param>Habilidades explicativas para transmitir los conocimientos necesarios durante los distintos módulos impartidos en lenguajes como JavaScript y TypeScript</Param>
          <Param>Aplicación de conceptos UI/UX para diseño de proyectos web</Param>
          <Param>Organización de repositorios y supervisión de historial de commits</Param>
          <Param>Diseños web usando Figma</Param>
        </CardExperience>
      </GridList>
    </Section>
  )
}
