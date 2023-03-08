import img from '../../assets/Animation_face.png'
import '../../styles/Jumbotron.css'

export default function Jumbotron() {
  return (
    <div className='jumbotron mb-20'>
      <div className='jumbotron__img'>
        <div className='jumbotron__img__figure dark:bg-DarkModeDarkGrey border-LightModeTertiaryBlue dark:border-DarkModeRed border-[.7rem] border-b-0' />
        <img src={img} alt="Animation Face" />
      </div>
      <div className='relative'>
        <h1 className='text-7xl font-black text-LightModePrimaryBlue dark:text-DarkModeGreen'>
          FULLSTACK
          <span className='flex w-full text-5xl items-center justify-between leading-7'>
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
        <p className='text-4xl leading-loose font-semibold'>Leonardo torrealba</p>
      </div>
    </div>
  )
}
