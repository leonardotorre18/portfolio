import img from '../../assets/Animation_face.png'
import '../../styles/Jumbotron.css'

export default function Jumbotron() {
  return (
    <div className='flex flex-col items-center sm:flex-row justify-center pt-10 pb-20 max-w-7xl mx-auto overflow-hidden'>
      <div className='jumbotron__img'>
        <div className='jumbotron__img__figure dark:bg-DarkModeDarkGrey border-LightModeTertiaryBlue dark:border-DarkModeGrey border-[.7rem] border-b-0' />
        <img src={img} alt="Animation Face" />
      </div>
      <div className='relative'>
        <h1 className='text-4xl sm:text-7xl font-black text-LightModePrimaryBlue dark:text-DarkModeGreen'>
          FULLSTACK
          <span className='flex w-full text-5xl items-center sm:justify-between leading-7'>
            <div>D</div>
            <div>e</div>
            <div>v</div>
            <div>e</div>
            <div>l</div>
            <div>o</div>
            <div>p</div>
            <div>e</div>
            <div>r</div>
          </span>
        </h1>
        <p className='text-2xl sm:text-4xl leading-loose font-semibold'>Leonardo Torrealba</p>
      </div>
    </div>
  )
}
