import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';


const FeatureSection = () => {
    const navigate = useNavigate();
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
        <div className='relative flex items-center justify-between pt-20 pb-10  '>
            <BlurCircle top='0' right='-80px'/>
            <p className='text-gary-300 font-medium text-lg'>Now Showing</p>
            <button className='group flex items-center gap-2 text-gray-300 text-sm'
            onClick={()=>navigate('/Movies')}
            >
                View All 
                <ArrowRight className='group-hover:-translate-x-0.5 transition w-4.5 h-4.5'/>
            </button>
        </div>
        <div className='flex flex-wrap justify-center max-sm:justify-center gap-8 mt-8'>
          {dummyShowsData.slice(0,4).map((show)=>(
            <MovieCard key={show._id} movie={show}/>
          ))}
        </div>
        <div  className='flex justify-center mt-20'>
          <button onClick={()=>navigate('/Movies')} 
           className='px-10 py-3 text-sm bg-[#f84565] hover:bg-[#d63854] 
          rounded-md font-medium cursor-pointer'>
            Show More 
          </button>
        </div>
    </div>
  )
}

export default FeatureSection