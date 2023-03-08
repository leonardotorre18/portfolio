import img from '../../assets/perfil.jpg'
import SocialMedia from '../pure/SocialMedia'


export default function AboutMe() {
  return (
    <div className='flex items-center'>
      <div className='w-3/5'>
        <h3 className=' text-3xl font-semibold'>About Me</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='flex justify-between w-full'>
          <div className='flex'>
            <p className='text-6xl w-min text-LightModePrimaryBlue dark:text-DarkModeGreen'>1</p>
            <div className='text-lg'>
              <p>Year</p>
              <p>Experience</p>
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>
      <div className='w-2/5'>
        <div className='rounded-full overflow-hidden'>
          <img src={img} alt="Foto perfil" />
        </div>
      </div>
    </div>
  )
}
