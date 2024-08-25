import React from 'react'
import { TiAttachment } from 'react-icons/ti'

function ProjectCard({ project }): React.ReactNode {
  return (
    <div className='p-6 bg-white rounded-xl space-y-4'>
      <div>
        <h3 className='text-xl font-semibold text-slate-700'>{ project.name }</h3>
        <p className='text-sm text-slate-500'>{ project.type }</p>
      </div>
      <p><span className='text-xs p-2 rounded bg-slate-100'>{ project.date }</span></p>
      <div className='w-full bg-slate-200 rounded-full h-2'>
        <div className={`w-[${project.progress}%] bg-purple-500 rounded-full h-2`}></div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='relative'>
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="" className='w-8 h-8 aspect-square rounded-full border-4 border-white relative' />
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="" className='w-8 h-8 aspect-square rounded-full border-4 border-white absolute top-0 left-4' />
          <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="" className='w-8 h-8 aspect-square rounded-full border-4 border-white absolute top-0 left-8' />
        </div>
        <p className='flex space-x-1 items-center text-slate-500'><TiAttachment /> <span>{ project.files } files</span></p>
      </div>
    </div>
  )
}

export default ProjectCard