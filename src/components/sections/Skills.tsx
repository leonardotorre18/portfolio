import React from 'react'

export default function Skills() {
  const lista: Array<number> = [0,1,2,3,4,5,6,7,8,9]

  return (
    <div className='py-10'>
      <h3 className='text-3xl font-semibold mb-6'>Skills</h3>
      <div className='grid grid-cols-7'>
        {
          lista.map(id => (
            <div key={id} className='p-4'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
