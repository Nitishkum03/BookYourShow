import React from 'react'
import AdminNavbar from '../../component/AdminNavbar'
import AdminSideBar from '../../component/AdminSideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     <AdminNavbar/>
     <div className='flex'>
        <AdminSideBar/>
     </div>
     <div className='flex-1 px-4 py-10 h-[calc (100vh-64px)] overflow-y-auto'>
        <Outlet/>
     </div>
    </>
   
    
  )
}

export default Layout