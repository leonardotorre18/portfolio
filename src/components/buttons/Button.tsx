import React, { MouseEventHandler } from 'react'

export default function Button( 
  {
    children,
    onClick = ()=>{}
  }: {
    children?: React.ReactNode,
    onClick?: MouseEventHandler
  }
) {
  return (
    <button 
      className='py-2 px-6 bg-LightModeTertiaryBlue dark:bg-DarkModeGreen relative rounded-lg overflow-hidden'
      onClick={onClick}
    >
      <div
        className='absolute bg-LightModePrimaryBlue dark:bg-DarkModeGrey w-full h-[calc(100%-.2rem)] top-0 left-0'
        style={{
          borderBottomLeftRadius: '4rem .8rem',
          borderBottomRightRadius: '4rem .8rem'
        }}
      />
      <span className='relative text-LightModeWhite dark:text-DarkModeWhite'>
        {children}
      </span>
    </button>
  )
}
