import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../component/Loading'
import { ArrowRightIcon, ClockIcon } from 'lucide-react'
import iosTimeFormate from '../lib/iosTimeFromat'
import BlurCircle from '../component/BlurCircle'
import toast from 'react-hot-toast'

const Seatlayout = () => {
  const groupRows = [["A","B"],["C","D"],["E","F"],["G","H"],["I","J"]]
  const {id ,date} =useParams()
  const [selectedSeat , setSelectedSeat] = useState([])
  const [selectedTime ,setSelectedTime] =useState(null)
  const [show ,setShow] =useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const getShow = async ()=>{
    setLoading(true)
    setError(null)
    try {
      const foundShow = dummyShowsData.find(show => show._id === id)
      if(foundShow){
        setShow({
          movie:foundShow,
          dataTime : dummyDateTimeData
        })
        // Check if the date exists in dataTime
        if (!dummyDateTimeData[date]) {
          setError('No timings available for this date.')
        }
      } else {
        setError('Show not found.')
      }
    } catch (err) {
      setError('An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }
  const handleSeatClick = (seatId) =>{
    if(!selectedTime){
     return toast("please select time first")
    }
    if(!selectedSeat.includes(seatId)&& selectedSeat.length > 4){
      return toast("you can only select 5 seats")
    }
    setSelectedSeat(prev => prev.includes(seatId) ? prev.filter(seat => seat !== seatId ): [...prev , seatId])
  }
const renderSeat = (row, count = 9) => (
  <div key={row} className='flex gap-2 mt-2'>
    <div className='flex flex-wrap items-center justify-center gap-2'>
      {Array.from({length : count} , (_ , i) => {
        const seatId = `${row}${i+1}`;
        return(
          <button key={seatId} onClick={()=>handleSeatClick(seatId)} className={`h-8 w-8 rounded border border-[#f63854]/60 ${selectedSeat.includes(seatId) && "bg-[#f63854] text-white" }`}>
            {seatId}
          </button>
        )
      })}
    </div>
  </div>
)

  useEffect(()=>{
    getShow()
    // eslint-disable-next-line
  },[id, date])

  if (loading) {
    return <div><Loading/></div>
  }
  if (error) {
    return <div className='text-red-500 text-center py-10'>{error}</div>
  }
  return show && show.dataTime && show.dataTime[date] ? (
    <div className='flex  justify-center flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
      {/*Available Timings*/}
      <div className='w-60 bg-[#f63854]/10 border border-[#f63854]/20 rounded-lg py-10 h-max md:sticky md:top-30'>
      <p className='text-lg font-semibold px-6'>Available Timing</p>
      <div className='mt-5 space-y-1'>
        {show.dataTime[date].map((item, idx)=>(
          <div onClick={()=>setSelectedTime(item)} key={item.time + idx} className={`flex items-center gap-2  px-6 py-2 w-full rounded-r-md cursour-pointer transition ${selectedTime?.time === item.time ? "bg-[#f63854]" :"hover:bg-[#f63854]/20" }`}>
            <ClockIcon className='w-5 h-5'/>
            <p className='text-sm '>{iosTimeFormate(item.time)}</p>
          </div>
        ))}
      </div>
      </div>
      {/* Seat layout  */}
      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <BlurCircle top='-100px' left='-100px'/>
        <BlurCircle bottom='0' right='0'/>
        <h1 className='text-2xl font-semibold mb-4'>Select your Seat </h1>
        <img src={assets.screenImage} alt="" />
        <p className='text-gary-400 text-sm mb-6'>
          SCREEN SIDE 
        </p>
        <div className='flex flex-col items-center mt-10 text-sx text-gray-300'>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
            {groupRows[0].map(row => renderSeat(row))}
          </div>
          <div className='grid grid-cols-2 gap-11'>
          {groupRows.slice(1).map((group , idx)=>(
            <div key={idx}>
              {group.map(row => renderSeat(row))}
            </div>
          ))}
        </div>
        </div>
        <button onClick={()=>navigate('/MyBooking')}
        className='flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-[#f51d3e] hover:bg-[#f63854] transtion rounded-full font-medium cursor-pointer active:scale-100'>
          Proceed to Checkout
          <ArrowRightIcon strokeWidth={3} className='w-3 h-3'/>
        </button>
      </div>
    </div>
  ) : null
}

export default Seatlayout