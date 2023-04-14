import { BsTwitter, BsFacebook, BsGithub, BsLinkedin, BsWhatsapp, BsInstagram } from 'react-icons/bs'

export default function SocialMedia() {
  return (
    <div className='flex gap-4 text-LightModePrimaryBlue dark:text-DarkModeGreen justify-center px-4'>
      <BsTwitter className=' text-2xl' />
      <BsFacebook className=' text-2xl' />
      <BsGithub className=' text-2xl' />
      <BsLinkedin className=' text-2xl' />
      <BsWhatsapp className=' text-2xl' />
      <BsInstagram className=' text-2xl' />
    </div>
  )
}
