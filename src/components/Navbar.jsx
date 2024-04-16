import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  const handleLogOut = async () => {
    try{
      await logOut()
      navigate('/login')
    }catch(error){
      alert(error)
    } 
    
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to='/'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
      {user ? (
        <div>
          <Link to='/account'>
          <button className='bg-black text-white mr-4 px-6 py-2 rounded cursor-pointer'>Account</button>
          </Link>
          <button
          onClick={handleLogOut}
          className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Logout</button>
        </div>
      ) : (
        <div>
      <Link to='login'>
        <button className='bg-black text-white mr-4 px-6 py-2 rounded cursor-pointer'>Sign In</button>
      </Link>
      <Link to='/signup'>
        <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
      </Link>
       </div>
      )
      }
    </div>
  )
}

export default navbar
