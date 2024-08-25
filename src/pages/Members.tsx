import React from 'react'
import MemberCard from '../components/MemberCard'

function Members() {
  const members: Array<object> = [
    {
        'total_members': 8,
        'job': 'UI Designer',
    },
    {
        'total_members': 3,
        'job': 'Backend Developer',
    },
    {
        'total_members': 2,
        'job': 'FRontend Developer',
    },
    {
        'total_members': 5,
        'job': 'Mobile App Developer',
    },
    {
        'total_members': 4,
        'job': 'Social Media Manager',
    },
  ]

  return (
    <div className='p-5'>
      <div className='pb-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Members</h1>
                <p className='text-sm underline text-purple-500 cursor-pointer'>See all</p>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-2'>
                {
                    members && members.map((member)=>{
                        return <MemberCard member={member} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Members