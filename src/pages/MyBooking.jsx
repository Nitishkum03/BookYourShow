import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets';
import Loading from '../component/Loading';
import BlurCircle from '../component/BlurCircle';
import timeFormate from '../lib/timeFormate';
import DateFormat from '../lib/DateFormat';

const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [booking , setBooking] = useState([]);
  const [isLoading , setIsLoading] =useState(true);

  const getMyBooking = async ()=>{
    setBooking(dummyBookingData);
    setIsLoading(false)
  }
  useEffect(()=>{
    getMyBooking()
  },[])
  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top='100px' left='100px' />
      <div>
        <BlurCircle bottom='0px' left='600px' />
      </div>
      <h1 className='text-lg font-semibold mb-4'>My Booking</h1>

      {booking.map((item , index)=>(
        <div key={index} className='flex flex-col md:flex-row justify-between bg-[#f63854]/8 border border-[#f63854]/20 rounded-lg mt-4 p-2 max-w-3xl'>
          <div className='flex flex-col md:flex-row'>
            <img
              src={item.show.movie.poster_path}
              alt=""
              className=" aspect-video object-cover object-bottom rounded h-auto md:max-w-45"
            />
            <div className='flex flex-col p-4'>
              <p className='text-lg font-semibold'>{item.show.movie.title}</p>
              <p className='text-gray-400 text-sm'>{timeFormate(item.show.movie.runtime)}</p>
              <p className='text-gray-400 text-sm mt-auto'>{DateFormat(item.show.showDateTime)}</p>
            </div>
          </div>
          <div className='flex flex-col md:items-end md:text-right justify-between p-4'>
            <div className='flex items-center gap-4 '>
              <p className='text-2xl mb-3 font-semibold'>{currency}{item.amount}</p>
              {!item.isPaid && 
              <button className='bg-[#f63854] px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer'>
                Pay Now
              </button>}
              <div className='text-sm'>
                <p><span className='text-gray-400 '>ToTal Tickects:{item.bookedSeats.lenght}</span></p>
                <p><span className='text-gray-400 '>Seat Number:{item.bookedSeats.join(", ")}</span></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : <Loading/>
}

export default MyBooking