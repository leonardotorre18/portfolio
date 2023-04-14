import React from 'react'
import {FormattedMessage} from 'react-intl';

export default function Skills() {
  const lista: Array<string> = [
    '/assets/img/skill_javascript.png',
    '/assets/img/skill_typescript.png',
    '/assets/img/skill_nodejs.png',
    '/assets/img/skill_reactjs.png',
    '/assets/img/skill_webpack.png',
    '/assets/img/skill_tailwindcss.png',
    '/assets/img/skill_mongodb.png',
    '/assets/img/skill_git.png',
    '/assets/img/skill_figma.png',
    '/assets/img/skill_jest.png',
    '/assets/img/skill_github.png',
  ]

  return (
    <div className='pb-10 pt-20 max-w-7xl mx-auto' id='skills'>
      <h3 className='text-3xl font-semibold mb-6'>
        <FormattedMessage id='Section.Title.skills' />
      </h3>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
        {
          lista.map(url => (
            <div className='p-4' key={React.useId()}>
              <img src={url} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
