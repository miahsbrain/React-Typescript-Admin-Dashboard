import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

function MemberCard({ member }): React.ReactNode {
  return (
    <div className='p-6 bg-white rounded-xl space-y-4'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-bold text-slate-700'>{member.total_members}</h3>
        <FaChevronRight />
      </div>
      <div>
        <p className='text-sm text-slate-400'>{member.job}</p>
        <div className='relative'>
          <img src="https://randomuser.me/api/portraits/women/16.jpg" alt="" className='w-8 h-8 aspect-square rounded-full border-4 border-white relative' />
          <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="" className='w-8 h-8 aspect-square rounded-full border-4 border-white absolute top-0 left-4' />
          <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" className='w-8 h-8 aspect-square rounded-full border-4 border-white absolute top-0 left-8' />
        </div>
      </div>
    </div>
  )
}

export default MemberCard