import { BsTwitter, BsFacebook, BsGithub, BsLinkedin, BsWhatsapp, BsInstagram } from 'react-icons/bs'

export default function SocialMedia() {
  return (
    <div className='flex text-LightModePrimaryBlue dark:text-DarkModeGreen w-full justify-center'>
      <BsTwitter className='h-full w-16 p-4' />
      <BsFacebook className='h-full w-16 p-4' />
      <BsGithub className='h-full w-16 p-4' />
      <BsLinkedin className='h-full w-16 p-4' />
      <BsWhatsapp className='h-full w-16 p-4' />
      <BsInstagram className='h-full w-16 p-4' />
    </div>
  )
}
