import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../component/BlurCircle';
import { HeartIcon, PlayIcon, StarIcon } from 'lucide-react';
import timeFormate from '../lib/timeFormate';
import DateSelect from '../component/DateSelect';
import Loading from '../component/Loading';


const Moviedetail = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [ show , setShow] = useState(null);
  const getShow = async () => {
    // Ensure id type matches (string comparison)
    const foundShow = dummyShowsData.find(show => String(show._id) === String(id));

  if(foundShow){
    setShow({
      movie: foundShow,
      dateTime: dummyDateTimeData
    });
  }
    
  }
  useEffect(()=>{
    getShow();
  },[id])
  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-6 max-w-6xl mx
      auto'>
        <img src={show.movie.poster_path } alt="" className='max
        md:mx-auto rounded-xl h-104 max-w-70 object-cover ' />
        <div className='relative flex flex-col gap-3'>
          <BlurCircle top='-100px ' left='-590px'/>
          <p className='text-[#f84565]'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
          <div className='flex text-gray-300 items-center gap-2'>
            <StarIcon/>
            {show.movie.vote_average.toFixed(1)} user Rating
          </div>
          <p className='text-gray-400  mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview}</p>
          <p>
            {timeFormate(show.movie.runtime)} | {show.movie.genres.map(genre => genre.name ).join(", ")} | {show.movie.release_date.split("-")[0]}
          </p>
          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex items-center pag-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer'>
              <PlayIcon className='w-5 h-5 '/>
              Watch Traile
            </button>
            <a href="#dateSelect" className='px-10 py-3 text-sm bg-[#f84565] hover:bg-[#d63854] transition rounded-md font-medium cursor-pointer active:scale-97'>Buy Tickets</a>
            <button className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
              <HeartIcon className={`w-5 h-5`}/>
            </button>
          </div>
        </div>
      </div>

      <p className='mt-20'>Your Fav Cast</p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4 '>
          {show.movie.casts.slice(0,12).map((cast ) =>(
            <div className='flex flex-col items-center text-center'>
              <img src={cast.profile_path} alt=""
              className='rounded-full h-20 md:h-20 aspect-square object-cover' />
              <p className='text-sm font-medium mt-3'>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      <DateSelect dateTime={show.dateTime} id={id}/>
      <div className='justify-center mt-20 flex'>
 <button onClick={()=>{navigate('/movies');scrollTo(0,0)}}
 className='px-10 py-3 text-sm bg-[#f63854] hover:bg-[#f63854] cursor-pointer transition rounded-md font-medium'>
        Show More
      </button>
      </div>
     
    </div>
  ) : (
    <div>
      <Loading/>
    </div>
  )
}

export default Moviedetail