import FormEmail from "../forms/FormEmail"
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import { FiMapPin } from "react-icons/fi"

export default function () {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h3 className=' text-3xl font-semibold mb-6'>Contact Me</h3>
      <div className='flex'>
        <div className='w-1/2'>
          <div>
            <AiOutlineMail />
            <p>Leonardotorre14@gmail.com</p>
          </div>
          <div>
            <AiOutlinePhone />
            <p>(+58)412 5077183</p>
          </div>
          <div>
            <FiMapPin />
            <p>Valencia, Venezuela estado Carabobo</p>
          </div>

        </div>
        <div className='w-1/2'>
          <FormEmail />
        </div>
      </div>
    </div>
  )
}

