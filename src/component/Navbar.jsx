import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { FaBars, FaSearch } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { TicketPlus } from 'lucide-react'


const Navbar = () => {

  const [menuOpen , setMenuOpen] = useState(false);
  const {user} = useUser();
  const {OpenSignIn} = useClerk()
  const navgiate = useNavigate()
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center
     justify-between px-6 md:px-16 lg:px-36 py-5'>
        <Link to='/' className='max-md:flex-1'>
        <img src={assets.logo} alt="" className='W-36 h-auto ' />
        </Link>

        <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium
        max-md:text-lg z-50 flex flex-col md:flex-row items-center 
        max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border
        border-gray-300/20 overflow-hidden transition-[width] duration-300 ${menuOpen ? 'max-md:w-full': 'max-md:w-0'} `}>

          <FaX className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' 
          onClick={()=>setMenuOpen(!menuOpen)}
          />

          <Link onClick={()=>{scrollTo(0,0);setMenuOpen(false)}} to='/'>Home</Link>
          <Link onClick={()=>{scrollTo(0,0);setMenuOpen(false)}} to='/Movies'>Movies</Link>
          <Link onClick={()=>{scrollTo(0,0);setMenuOpen(false)}} to='/'>Theaters</Link>
          <Link onClick={()=>{scrollTo(0,0);setMenuOpen(false)}} to='/'>Releases</Link>
          <Link onClick={()=>{scrollTo(0,0);setMenuOpen(false)}} to='/favorite'>Favorites</Link>
        </div>


        <div className='flex items-center gap-6'>
          <FaSearch className='max-md:hidden w-6 h-6 cursour-pointer'/>
          {
            !user ? (
              <button 
              className='px-4 py-1 sm:px-7 sm:py-2 bg-[#f84565]
               hover:bg-[#d63854] 
               transition rounded-full font-medium cursor-pointer'
              onClick={OpenSignIn}
               >
            login
          </button>
            ):(
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action label=''labelIcon={<TicketPlus width={15} onClick={()=>navgiate('/MyBooking')} />}/>
                </UserButton.MenuItems>
              </UserButton>
            )
          }
          
        </div>

           <FaBars className='max-md:ml-4 md:hidden w-6 h-6 cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}/>
    </div>
  )
}

export default Navbar