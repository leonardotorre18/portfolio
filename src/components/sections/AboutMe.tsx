import img from '../../assets/perfil.jpg'
import SocialMedia from '../pure/SocialMedia'
import {FormattedMessage} from 'react-intl'

export default function AboutMe() {
  return (
    <div className='pb-10 pt-20 max-w-7xl mx-auto' id='aboutme'>
      <h3 className=' text-3xl font-semibold mb-6'>
        <FormattedMessage id='Section.Title.aboutme' />
      </h3>
    <div className='flex flex-wrap'>
      <div className='w-full sm:w-3/4'>
        <p className='pb-7'>
          <FormattedMessage id='AboutMe.description' />
        </p>
        <div className='flex justify-evenly items-center w-full'>
          <div className='flex'>
            <p className='text-6xl w-min text-LightModePrimaryBlue dark:text-DarkModeGreen'>1</p>
            <div className='text-lg'>
              <p>
                <FormattedMessage id='AboutMe.year' />
              </p>
              <p>
                <FormattedMessage id='AboutMe.experience' />
              </p>
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>

      <div className='w-full sm:w-1/4 flex'>
        <div className='w-full'>
          <img className='rounded-full ' src={img} alt="Foto perfil" />
        </div>
      </div>
    </div>
    </div>
  )
}
