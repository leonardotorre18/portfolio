import React, { type ReactElement } from 'react'
import Image from '../../Image/Image'
import H1 from '../../Titles/H1/H1'
import './Jumbotron.scss'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon'
import ButtonList from '../../Lists/ButtonList/ButtonList'

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
          <ButtonIcon
            icon={<FiGithub />}
            onClick={() => {
              window.open('https://github.com/leonardotorre18')
            }}
          >
            Github
          </ButtonIcon>
          <ButtonIcon
            icon={<FiLinkedin />}
            onClick={() => {
              window.open('https://linkedin.com/in/leonardo-torrealba')
            }}
          >
            Linkedin
          </ButtonIcon>
          <ButtonIcon
            icon={<FiInstagram />}
            onClick={() => {
              window.open('https://www.instagram.com/leonardo_torre18/')
            }}
          >
            Instagram
          </ButtonIcon>
        </ButtonList>
      </div>
    </section>
  )
}
