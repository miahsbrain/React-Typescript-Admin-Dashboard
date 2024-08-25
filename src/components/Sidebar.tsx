import React, { useState } from 'react'
import { Link } from "react-router-dom";
// ICONS
import { LuMessageSquare, LuBox, LuUser, LuCalendar } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { FaSuitcase } from "react-icons/fa";

function Sidebar(): React.ReactNode {
    const [actieLink, setActiveLink] = useState(0);
    const handleLinkClick = (index) => {
        setActiveLink(index);
    };
    const SIDEBAR_LINKS = [
        {'id': 1, path: '/', 'name': 'Dashboard', 'icon': <LuBox />},
        {'id': 2, path: '/members', 'name': 'Members', 'icon': <TbUsers />},
        {'id': 3, path: '/messages', 'name': 'Messages', 'icon': <LuMessageSquare />},
        {'id': 4, path: '/projects', 'name': 'Projects', 'icon': <LuBox />},
        {'id': 5, path: '/clients', 'name': 'Clients', 'icon': <LuUser />},
        {'id': 6, path: '/work', 'name': 'Work Plan', 'icon': <LuCalendar />},
    ];

  return (
    <div className='w-16 md:w-56 fixed left-0 top-0 h-screen z-10 border-r pt-8 px-4 bg-white'>
        {/* Logo */}
        <div className='mb-8'>
            <img src="./vite.svg" alt="clogo" className='w-20 hidden md:flex' />
            <img src="./vite.svg" alt="clogo" className='w-8 flex md:hidden' />
        </div>

        {/* Nav links */}
        <ul className='mt-6 space-y-4'>
            {
               SIDEBAR_LINKS.map((link, index)=>{
                return (<li key={index} className={`font-medium rounded-md py-2 px-4 hover:bg-slate-200 hover:text-purple-500 ${actieLink === index ? 'bg-purple-100 text-purple-500' : ''}`}>
                    <Link to={link.path} className='flex items-center justify-center md:justify-start md:space-x-5' onClick={()=>handleLinkClick(index)}>
                        <span>{link.icon}</span>
                        <span className='text-sm text-slate-600 hidden md:flex'>{link.name}</span>
                    </Link>
                </li>)
            })
            }
        </ul>

        {/* Help section */}
        <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
            <p className='flex items-center justify-center md:justify-start space-x-2 text-xs text-white px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full'><span>?</span><span className='hidden md:flex'>Need help?</span></p>
        </div>
    </div>
  )
}

export default Sidebar