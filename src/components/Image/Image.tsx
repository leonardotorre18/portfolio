import React, { type ReactElement } from 'react'
import './Image.scss'

export default function Image ({
  src,
  alt
}: PropTypes): ReactElement {
  return (
    <div className='img'>
      <img
        src={src}
        alt={alt ?? alt}
      />
    </div>
  )
}

interface PropTypes {
  src: string
  alt?: string
}
