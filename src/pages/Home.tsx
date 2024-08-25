import React from 'react'
import ProjectStats from '../components/ProjectStats'
import Platforms from '../components/Platforms'
import ProjectCard from '../components/ProjectCard'
import ClientCard from '../components/ClientCard'
import MemberCard from '../components/MemberCard'

function Home() {
    const projects: Array<object> = [
        {
            'name': 'Website Redesign',
            'type': 'Web Development',
            'date': '2022-01-15',
            'members': ['Alice', 'Meilin', 'Bryan'],
            'files': 4,
            'progress': 25
        },
        {
            'name': 'Mobile App Development',
            'type': 'Mobile Application',
            'date': '2022-06-25',
            'members': ['Alice', 'Bob', 'Guinn'],
            'files': 4,
            'progress': 40
        },
        {
            'name': 'Content Creation',
            'type': 'Social Media',
            'date': '2023-02-05',
            'members': ['Brandon', 'Margaret', 'Tobi'],
            'files': 4,
            'progress': 16
        },
        {
            'name': 'Website Promotion',
            'type': 'Marketing Campaign',
            'date': '2022-11-10',
            'members': ['Reed', 'Choi', 'Anna'],
            'files': 4,
            'progress': 70
        },
        {
            'name': 'Website Development',
            'type': 'Web Development',
            'date': '2023-01-09',
            'members': ['Alice', 'Bryan', 'Meilin'],
            'files': 4,
            'progress': 22
        },
    ]
    const clients: Array<object> = [
        {
            'name': 'ABC Logistics',
            'title': 'CEO',
            'date': '2022-01-15',
        },
        {
            'name': 'Fintech LTD',
            'title': 'Manager',
            'date': '2022-06-25',
        },
        {
            'name': 'Simple Industries',
            'title': 'Social Media Marketer',
            'date': '2023-02-05',
        },
        {
            'name': 'Tech Innovations',
            'title': 'Software Developer',
            'date': '2023-08-26',
        },
        {
            'name': 'Simple Industries',
            'title': 'Social Media Marketer',
            'date': '2023-11-18',
        },
    ]
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
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
            <ProjectStats />
            <Platforms />
            <ProjectStats />
            <Platforms />
        </div>

        <div className='py-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Current Projects</h1>
                <p className='text-sm underline text-purple-500 cursor-pointer'>See all</p>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-2'>
                {
                    projects && projects.map((project)=>{
                        return <ProjectCard project={project} />
                    })
                }
            </div>
        </div>
        <div className='pb-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Current Clients</h1>
                <p className='text-sm underline text-purple-500 cursor-pointer'>See all</p>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-2'>
                {
                    clients && clients.map((client)=>{
                        return <ClientCard client={client} />
                    })
                }
            </div>
        </div>
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

export default Home