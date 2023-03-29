import img from '../../assets/perfil.jpg'
import SocialMedia from '../pure/SocialMedia'
import {FormattedMessage} from 'react-intl'

export default function AboutMe() {
  return (
    <div className='py-10 max-w-7xl mx-auto'>
      <h3 className=' text-3xl font-semibold mb-6'>
        <FormattedMessage id='Section.Title.aboutme' />
      </h3>

    <div className='flex'>
      <div className='w-3/5'>
        <p className='pb-7'>
          <FormattedMessage id='AboutMe.description' />
        </p>
        <div className='flex justify-between w-full'>
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
      <div className='w-2/5 flex justify-end'>
        <div className='w-5/6'>
          <img className='rounded-full ' src={img} alt="Foto perfil" />
        </div>
      </div>
    </div>
    </div>
  )
}
