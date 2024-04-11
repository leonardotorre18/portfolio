import React, { type ReactElement } from 'react'
import Section from '../Section/Section'
import CardExperience from '../../Cards/CardExperience/CardExperience'
import GridList from '../../Lists/GridList/GridList'
import Param from '../../Param/Param'

export default function SectionExperience (): ReactElement {
  return (
    <Section title='Experiencia' id='experience'>

      <GridList>
        <CardExperience title='Programador Web Frontend' date='2021 enero - 2021 julio' >
          <Param>Implementación de la interfaz de usuario para diferentes funcionalidades de la aplicación, utilizando el motor de plantillas Blade y siguiendo los diseños proporcionados por el equipo de diseño</Param>
          <Param>Manejo del frontend utilizando Blade y Twig</Param>
          <Param>Colaboración con el equipo de backend para asegurar la correcta integración entre el frontend y el backend</Param>
          <Param>Elaboración de commits descriptivos y con un buen uso del branching para el control de versiones del código</Param>
          <Param>Resolver +70 bug para el proyecto principal</Param>
        </CardExperience>
        <CardExperience title='Freelancer' date='2022 enero - 2022 diciembre' >
          <Param>Creación y diseño de LandingPages para distintos clientes (HTML, CSS, JS, TailwindCSS), tiendas en línea, entre otros.</Param>
          <Param>Diseño web responsivo para multiples dispositivos</Param>
          <Param>Creación de APIs REST usando Express, Cors y Swagger</Param>
          <Param>Creación de sitios web Server-Side-Rendering usando Node, Express, Handlerbar, Sass</Param>
          <Param>Experiencia en el manejo de proyectos usando Git</Param>
        </CardExperience>
        <CardExperience title='Programador Web Frontend' date='2023 enero - 2023 diciembre' >
          <Param>Planeación de contenidos y módulos de aprendizaje.</Param>
          <Param>Planeación de proyectos web orientados a la comprensión y ejercicios de los conocimientos aprendidos durante el desempeño de los estudiantes</Param>
          <Param>Supervisión constante del trabajo realizado por estudiantes y corrección de errores de los mismos</Param>
          <Param>Habilidades explicativas para transmitir los conocimientos necesarios durante los distintos módulos impartidos en lenguajes como JavaScript y Typescript</Param>
          <Param>Diseños web usando Figma</Param>
        </CardExperience>
      </GridList>
    </Section>
  )
}
