import React from 'react'
import { assets } from '../assets/assets'
import { FaCalendar } from 'react-icons/fa6'
import { FaClock } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-start justify-center gap-4 
    px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")]
     bg-cover h-screen'>
        <img src={assets.marvelLogo}  className="max-h-11 lg:h-11 mt-20" alt="" />
          <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Guardians <br /> Of the Galaxy</h1>
          <div className='flex items-center gap-4 text-gray-300'>
            <span className='flex items-center gap-1 '>Action | Adventure | Sci-Fi </span>
            <FaCalendar className='w-4.5 h-4.5'/> 2018
          
         <FaClock className='w-4.5 h-4.5'/> 2h 18m
          </div>
           <p className='text-gray-300 max-w-md'>In a post-apocalyptic world where cities ride on wheels and 
            consume each other to survive , two people meet in london and try to stop a 
            conspiracy.
           </p>
           <button className='flex items-center gap-1 px-6 py-3 text-sm bg-[#f84565] hover:bg-[#d63854]
           transition rounded-full font-medium cursor-pointer
            ' onClick={()=>navigate('/Movies') }>
            Explore Movies 
            <ArrowRight className='w-5 h-5'/>
           </button>
     </div>
  )
}

export default HeroSection