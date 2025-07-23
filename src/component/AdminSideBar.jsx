import React from 'react'
import { assets } from '../assets/assets'
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const AdminSideBar = () => {

    const user = {
        firstName: "Admin",
        LastName : "user",
        imageUrl : assets.profile,
    }

    const adminNavlinks = [
        {name : "DashBoard", path: '/admin', icon: LayoutDashboardIcon},
        {name : "DashBoard", path: '/admin/add-Show', icon: PlusSquareIcon },
        {name : "DashBoard", path: '/admin/list-Show', icon: ListIcon},
        {name : "DashBoard", path: '/admin/list-Booking', icon: ListCollapseIcon},
    ]

  return (
    <div className=' h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-gray-300/20 text-sm '>
        <img src={user.imageUrl} alt="" className=' h-9 md:h-14 w-9 md:w-14 rounded-full max-auto'/>
        <p className='mt-2 text-base max-md:hidden'>{user.firstName}{user.LastName}</p>
        <div className='w-full'>
            {adminNavlinks.map((link , index)=>(
                <NavLink key={index} to={link.path} end className={({isActive})=>`relative flex max-md:justify-center items-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6 text-gray-400 ${isActive && 'bg-[#f63854]/15 text-[#f63854] group'}`}>
                    {({ isActive })=>(
                    <>
                    <link.icon className='w-5 h-5'/>
                    <p>{link.name}</p>
                    <span className={`w-1.5 h-10 rounded-1 right-0 absolute ${isActive&& "bg-[#f63854]"}`}/>
                    </>
                    )}
                </NavLink>
            ))}
        </div>

    </div>
  )
}

export default AdminSideBar