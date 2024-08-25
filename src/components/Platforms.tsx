import React from 'react'

// Icons
import { CiGlobe } from 'react-icons/ci'
import { FaApple, FaTabletAlt } from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'

function Platforms(): React.ReactNode {
  return (
    <div className='p-5 bg-white rounded-xl'>
      <h3 className='text-2xl font-bold text-slate-700'>Platforms</h3>
      <div className='p-2 grid grid-cols-2 gap-8'>
        <div className='space-y-3 text-slate-500'>
          <h3 className='text-2xl font-bold'>58</h3>
          <p className='flex space-x-2 items-center'>
            <span><CiGlobe /></span><span>Website</span>
          </p>
        </div>
        <div className='space-y-3 text-slate-500'>
          <h3 className='text-2xl font-bold'>87</h3>
          <p className='flex space-x-2 items-center'>
            <span><FaApple /></span><span>iOS</span>
          </p>
        </div>
        <div className='space-y-3 text-slate-500'>
          <h3 className='text-2xl font-bold'>69</h3>
          <p className='flex space-x-2 items-center'>
            <span><DiAndroid /></span><span>Android</span>
          </p>
        </div>
        <div className='space-y-3 text-slate-500'>
          <h3 className='text-2xl font-bold'>74</h3>
          <p className='flex space-x-2 items-center'>
            <span><CiGlobe /></span><span>Tablet</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Platforms