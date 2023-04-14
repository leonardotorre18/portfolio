import Carousel from "../containers/Carousel"
import {FormattedMessage} from 'react-intl'

export default function Projects() {
  return (
    <div className='pb-10 pt-20 max-w-7xl mx-auto' id="projects">
      <h3 className=' text-3xl font-semibold mb-6'>
        <FormattedMessage id="Section.Title.projects" />
      </h3>
      <div>
        <Carousel />
      </div>
    </div>
  )
}
