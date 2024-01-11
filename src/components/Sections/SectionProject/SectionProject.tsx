import React, { type ReactElement } from 'react'
import Section from '../Section/Section'
import {
  SiExpress,
  SiSwagger,
  SiJest,
  SiTypescript,
  SiWebpack,
  SiMongodb,
  SiEslint,
  SiVite,
  SiReact,
  SiFirebase
} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import CardProject from '../../Cards/CardProject/CardProject'
import Param from '../../Param/Param'
import FlexList from '../../Lists/FlexList/FlexList'

export default function SectionProject (): ReactElement {
  return (
    <Section title='Proyectos'>
      <FlexList>
        <CardProject
          img='/imgExample.jpg'
          title='LeonardoApi'
          icons={
            <>
              <SiExpress />
              <SiMongodb />
              <SiEslint />
              <SiSwagger />
              <SiJest />
              <FaNodeJs />
              <SiTypescript />
              <SiWebpack />
            </>
          }
        >
          <Param>Api Rest realizada con fines educativos. Proyecto personal como parte de mi protafolio personal como desarrollador con conocimientos sólidos en el BackEnd. Expone una serie de endpoints para administrar perfiles de usuario y crear publicaciones  con imágenes.</Param>
          <Param>La API está implementada en Node.js usando el framework Express. Se utiliza la base de datos NoSQL MongoDB para almacenar los datos. El código está escrito en TypeScript para mejorar la legibilidad y el mantenimiento.</Param>
        </CardProject>
        <CardProject
          img='/imgExample.jpg'
          title='Antojitos Frit'
          icons={
            <>
              <SiTypescript />
              <SiVite />
              <SiEslint />
              <SiReact />
              <SiFirebase />
            </>
          }
        >
          <Param>Api Rest realizada con fines educativos. Proyecto personal como parte de mi protafolio personal como desarrollador con conocimientos sólidos en el BackEnd. Expone una serie de endpoints para administrar perfiles de usuario y crear publicaciones  con imágenes.</Param>
          <Param>La API está implementada en Node.js usando el framework Express. Se utiliza la base de datos NoSQL MongoDB para almacenar los datos. El código está escrito en TypeScript para mejorar la legibilidad y el mantenimiento.</Param>
        </CardProject>
      </FlexList>
    </Section>
  )
}
