import Hero from '../../components/hero/Hero'
import WhyTracknFly from '../../components/whyTracknFly/WhyTracknFly'
import React from 'react'

const AboutUs = () => {
  return (
    <>
       <Hero text={'Explore Flights - Hotels Online & Cars on Rent'}/>
       <div className='py-5 px-[2rem] md:px-0'>
         <div className='text-center text-[2.8rem] md:text-[3rem] lg:text-[4rem] font-semibold text-black'>Trackn Fly has evolved as the most unique and wonderful in <br className='md:block hidden'/>the travel industry</div>
         <div className='text-black text-[1.5rem] text-center w-full tracking-wide py-5 md:w-[70%] mx-auto'>Today, we have been solving billions of queries across the world and helping large numbers of travelers around the globe to make their trips more easy. Be it a query on holiday packages, flight and hotel booking car rental, or anything regarding the website, we are here to assist you in the simplest way.</div>
         <div className='text-black text-[1.5rem] text-center w-full tracking-wide pt-5 pb-10 md:pb-20 md:w-[70%] mx-auto'>Trackn Fly is the most renowned travel agency around the world that offers the best deals on flights, air tickets, budgetary hotels, and cars on rent. We also send notifications to our customers so that they can get the best deal at the right time. So, now you don’t have to increase your bucket list and plan your trip now with Trackn Fly exclusive offers.</div>
         <img src='/aboutus.png' alt='img' className='object-cover'/>
      </div>
      <WhyTracknFly />
    </>
   
  )
}

export default AboutUs
