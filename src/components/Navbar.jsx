import React from 'react'

const navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      <div>
        <button className='bg-black text-white mr-4 px-6 py-2 rounded cursor-pointer'>Sign In</button>
        <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
      </div>
    </div>
  )
}

export default navbar
