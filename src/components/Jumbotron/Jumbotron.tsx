import React, { type ReactElement } from 'react'
import Image from '../Image/Image'
import H1 from '../Titles/H1/H1'
import './Jumbotron.scss'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon'
import ButtonList from '../Lists/ButtonList/ButtonList'

export default function Jumbotron (): ReactElement {
  return (
    <section className='jumbotron'>
      <div className="jumbotron__img">
        <Image src='/imgExample.jpg' />
      </div>
      <div className='jumbotron__content'>
        <H1>Desarrollador<br />Web Frontend</H1>
        <p>Soy Leonardo, si estás buscando un desarrollador frontend talentoso y experimentado, no dudes en contactarme.</p>
        <ButtonList>
          <ButtonIcon icon={<FiGithub />}>Github</ButtonIcon>
          <ButtonIcon icon={<FiLinkedin />}>Linkedin</ButtonIcon>
          <ButtonIcon icon={<FiInstagram />}>Instagram</ButtonIcon>
        </ButtonList>
      </div>
    </section>
  )
}
