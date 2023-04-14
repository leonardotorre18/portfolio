import React, { MouseEventHandler, useState } from 'react'

export default function Button( 
  {
    children,
    onClick = ()=>{},
    options = {}
  }: {
    children?: React.ReactNode,
    onClick?: MouseEventHandler,
    options?: object
  }
) {

  const [isHover, setIsHover] = useState(false)
  const handlerMouseEnter = () => setIsHover(true)
  const handlerMouseLeave = () => setIsHover(false)

  return (
    <button 
      {...options}
      className='py-2 px-6 bg-LightModeTertiaryBlue dark:bg-DarkModeGreen relative rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-LightModeSecondaryBlue hover:dark:ring-DarkModeGreen'
      onClick={onClick}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
      <div
        className={`absolute bg-LightModePrimaryBlue hover:bg-LightModeWhite dark:bg-DarkModeGrey w-full h-[calc(100%-.2rem)] top-0 left-0 ${isHover ? 'h-full': ''} transition-all`}
        style={{
          borderBottomLeftRadius: isHover ? '' :'4rem .8rem',
          borderBottomRightRadius: isHover ? '' :'4rem .8rem',
        }}
        />
      <span className='relative text-DarkModeWhite pointer-events-none transition-colors'
        style={{
          color: isHover ? '#262626' : ''
        }}
      >
        {children}
      </span>
    </button>
  )
}
