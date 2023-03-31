import FormEmail from "../forms/FormEmail"
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import { FiMapPin } from "react-icons/fi"
import {FormattedMessage} from 'react-intl'

export default function () {
  return (
    <div className="pb-10 pt-20 max-w-7xl mx-auto" id="contact">
      <h3 className=' text-3xl font-semibold mb-3'>
        <FormattedMessage id="Section.Title.contact" />
      </h3>
      <p className="mb-6">
        <FormattedMessage id="Contact.description" />  
      </p>
      <div className='flex'>
        <div className='w-1/2 flex flex-col gap-6'>
          <div className="flex items-center gap-4">
            <AiOutlineMail className="dark:text-DarkModeGreen text-LightModePrimaryBlue text-2xl" />
            <p>Leonardotorre14@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlinePhone className="dark:text-DarkModeGreen text-LightModePrimaryBlue text-2xl" />
            <p>(+58)412 5077183</p>
          </div>
          <div className="flex items-center gap-4">
            <FiMapPin className="dark:text-DarkModeGreen text-LightModePrimaryBlue text-2xl" />
            <p>
              <FormattedMessage id="Contact.address" />
            </p>
          </div>

        </div>
        <div className='w-1/2'>
          <FormEmail />
        </div>
      </div>
    </div>
  )
}

