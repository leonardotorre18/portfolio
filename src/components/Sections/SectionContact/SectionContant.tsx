import React, { type ReactElement } from 'react'
import Section from '../Section/Section'
import ButtonList from '../../Lists/ButtonList/ButtonList'
import { FiMail, FiCopy } from 'react-icons/fi'
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon'
import Param from '../../Param/Param'
import ButtonStroke from '../../Buttons/ButtonStroke/ButtonStroke'

export default function SectionContant (): ReactElement {
  return (
    <Section title='Ponte en contacto conmigo' id='contact'>
      <Param>Soy Leonardo, programador apasionado al desarrollo de aplicaciones Web Modernas. Actualmente tengo un año de experiencia atendiendo a clientes de forma personal. Domino las principales herramientas y lenguajes de desarrollo más vanguardista. Soy FullStack, capacitado para el desarrollo de servidores web e interfaces gráficas para navegadores. Me especializo en el uso de JavaScript, el principal lenguaje de programación para la web, y sus principales herramientas como React, NodeJS y Express. Manejo de Bases de datos NoSql usando MongoDB. Actual estudiante de la carrera de Ingeniería de Sistemas en la universidad nacional de mi país. Estudio con la finalidad de impular mi carrera como profesional y reforzar mis habilidades tecnicas y blandas.</Param>

      <ButtonList>
        <ButtonStroke>
          Leonardotorre14@gmail.com
        </ButtonStroke>
        <ButtonIcon
          icon={<FiMail />}
          onClick={() => window.open('mailto:Leonardotorre14@gmail.com')}
        >
          Enviar Correo
        </ButtonIcon>
        <ButtonIcon
          icon={<FiCopy />}
          onClick={() => {
            navigator.clipboard.writeText('Leonardotorre14@gmail.com')
              .then(() => {})
              .catch(() => {})
          }}
        >
          Copiar Correo
        </ButtonIcon>
      </ButtonList>
    </Section>
  )
}
