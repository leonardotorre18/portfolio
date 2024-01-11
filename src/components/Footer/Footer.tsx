import React, { type ReactElement } from 'react'
import Param from '../Param/Param'

export default function Footer (): ReactElement {
  return (
    <footer className='footer'>
      <Param>Copyright © 2019 Company Name . All rights reserved</Param>
      <Param>Designed by LeonardoTorre</Param>
    </footer>
  )
}
