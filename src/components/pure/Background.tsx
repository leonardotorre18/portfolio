import '../../styles/Background.css'

export default function Background() {
  return (
    <div className='absolute w-full h-full top-0 left-0 -z-10'>
      <div id="background" />
      <div className='bg-LightModeWhite dark:bg-DarkModeDarkGrey w-full h-full'></div>
    </div>
  )
}
