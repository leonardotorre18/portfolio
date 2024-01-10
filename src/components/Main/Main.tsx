import React, { type ReactNode, type ReactElement } from 'react'
import './Main.scss'

export default function Main ({
  children
}: PropTypes): ReactElement {
  return (
    <main className="main">
      {children}
    </main>
  )
}

interface PropTypes {
  children: ReactNode
}
