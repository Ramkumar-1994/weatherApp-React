import React from 'react'
import {Link} from 'react-router-dom'

const Usercard = ({img,name,prof,username}) => {
  return (
    <div>
      <Link to={`/${username}`}>
      <div className='w-[600px] mx-auto justify-center mt-4 flex gap-5 items-center p-3'>
        <img src={img} alt="" className='w-16 h-16 rounded-full '/>
        
        <div className=''>
          <p className='text-xl font-semibold'>{name}</p>
          <p className='text-sm text-neutral-600'>{prof}</p>
        </div>
      </div>
      </Link>
      
    </div>
  )
}

export default Usercard
