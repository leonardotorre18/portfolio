import React, { type ReactNode, type ReactElement } from 'react'
import Image from '../../Image/Image'
import './CardProject.scss'
import H4 from '../../Titles/H4/H4'
import IconList from '../../Lists/IconList/IconList'
import ButtonList from '../../Lists/ButtonList/ButtonList'
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon'
import { FiCopy, FiLink } from 'react-icons/fi'

export default function CardProject ({
  img,
  title,
  icons,
  children
}: PropTypes): ReactElement {
  return (
    <div className='card-project'>
      <div className='card-project__img'>
        <Image src={img} />
      </div>
      <div className='card-project__container'>
        <H4>{title}</H4>
        <IconList>
          {icons}
        </IconList>
          {children}
        <ButtonList>
          <ButtonIcon icon={<FiCopy />}>Ver código</ButtonIcon>
          <ButtonIcon icon={<FiLink />}>Ver demo</ButtonIcon>
        </ButtonList>
      </div>
    </div>
  )
}

interface PropTypes {
  img: string
  title: string
  icons: ReactNode
  children: ReactNode
}
