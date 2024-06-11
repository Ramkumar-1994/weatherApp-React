import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='shadow-md '>
      <div className='flex w-[800px] justify-between items-center mx-auto'>
      <Link to='/' className='text-center p-3 font-semibold text-4xl uppercase font-Rampart'>Instagram</Link>
  
      <div className='flex gap-3'>
        <Link to='/about' className='font-semibold'>About US</Link>
        <Link to='/requests' className='font-semibold'>Request</Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
