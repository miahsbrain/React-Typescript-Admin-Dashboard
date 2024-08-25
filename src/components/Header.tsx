import React from 'react'
import { GoBell } from "react-icons/go";

function Header(): React.ReactNode {
  return (
    <div className='flex justify-between items-center p-4'>
        <div>
            <h3 className='text-xs'>Welcome Back,</h3>
            <p className='text-xl font-semibold'>Jayden</p>
        </div>
        <div className='flex items-center space-x-5'>
            <div className="hidden md:flex">
                <input type="text" placeholder='Search...' className='bg-purple-100/40 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-purple-500' />
            </div>
            <div className='flex items-center space-x-5'>
                <button className='relative text-2xl text-slate-600'>
                    <GoBell size={30} />
                    <span className='absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-purple-600 text-white font-semibold text-xs w-5 h-5 rounded-full animate-pulse'>
                        11
                    </span>
                </button>
                <img src="/profile.jpg" alt="profile" className='w-9 rounded-full border-2 border-purple-500 aspect-square' />
            </div>
        </div>
    </div>
  )
}

export default Header