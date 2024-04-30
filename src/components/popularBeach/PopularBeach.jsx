import React from 'react'
import popularBeach1 from '/popularBeachImage1.png'
import popularBeach2 from '/popularBeachImage2.png'
import popularBeach3 from '/popularBeachImage3.png'
import popularBeach4 from '/popularBeachImage4.png'
import Heart from '/heart.png'
import { FaStar } from "react-icons/fa";
import { PiAirplaneLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiCarProfileLight } from "react-icons/pi";
import { MdOutlineElderly } from "react-icons/md";

const PopularBeach = () => {

  const data = [
    {
      title: 'Swiss Apls',
      img:popularBeach1
    },
    {
      title: 'Hallstatt',
      img:popularBeach2
    },
    {
      title: 'Faroe Island',
      img:popularBeach3
    },
    {
      title: 'Innsbruck',
      img:popularBeach4
    }
  ]

  return (
    <div className='bg-[#F5F5F5]'>
      <div className='w-[95%] py-24 mx-auto'>
        <div className='text-black text-center tracking-wide font-semibold  text-[4rem]'>Popular Beach Destinations</div>
        <div className='grid grid-cols-12 w-[95%] md:w-[87%] space-y-4 md:space-y-0 md:gap-10 py-16 mx-auto'>
          {
            data?.map((item, ind) => (
              <div key={ind} className='md:col-span-6 shadow-md col-span-12 lg:col-span-3 hover:scale-95 transition-all cursor-pointer bg-white p-7 rounded-[2rem]'>
                <div className='relative'>
                  <img src={item.img} alt='img' className='w-full rounded-[2rem]' />
                  <img src={Heart} alt='heart' className='absolute right-[3rem] top-[3rem]' />
                </div>
                <div className='pt-5 pb-3 text-black  flex items-center justify-between'>
                  <div className='text-[1.8rem]'>{item.title}</div>
                  <div className='flex items-center space-x-3'>
                    <FaStar size={18} />
                    <span className='text-[1.8rem]'>4.7</span>
                  </div>
                </div>
                <div className='pb-8'>
                  <div className='text-[1.2rem] text-gray-400'>3 Days 4 Nights</div>
                </div>
                <div className='flex items-center justify-between '>
                  <div className='flex flex-col space-y-1 items-center'>
                    <PiAirplaneLight size={20} />
                    <span className='text-[1.1rem] text-gray-400'>2 Flights</span>
                  </div>
                  <div className='flex flex-col space-y-1 items-center'>
                    <HiOutlineBuildingOffice2 size={20} />
                    <span className='text-[1.1rem] text-gray-400'>1 Hotel</span>
                  </div>
                  <div className='flex flex-col space-y-1 items-center'>
                    <PiCarProfileLight size={20} />
                    <span className='text-[1.1rem] text-gray-400'>2 Transfers</span>
                  </div>
                  <div className='flex flex-col space-y-1 items-center'>
                    <MdOutlineElderly size={20} />
                    <span className='text-[1.1rem] text-gray-400'>4 Activities</span>
                  </div>
                </div>
                <div className='py-5 pl-7'>
                  <ul className='space-y-3 text-[1.5rem] text-black text-opacity-40'>
                    <li className='list-disc'>Tour combo with return airport transfer</li>
                    <li className='list-disc'>City Tour</li>
                    <li className='list-disc'>Curious Corner</li>
                  </ul>
                </div>
                <div className='pt-2 flex items-center space-x-10'>
                  <del className='text-[1.3rem] text-gray-400'>₹980,000</del>
                  <div className='flex space-x-2 items-end'>
                    <span className='text-[2rem] font-semibold'>₹88,952</span>
                    <span className='text-gray-400'>Per Person</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PopularBeach
