import React from 'react'
import aboutTracknfly from '/aboutTrackenfly.png' 
import { Link } from 'react-router-dom'

const AboutTrackenFly = () => {
    return (
        <div className=''>
            <div className='w-[95%] py-5 md:py-24 mx-auto'>
                <div className='relative overflow-hidden rounded-[2rem]'>
                    <img src={aboutTracknfly} alt="img" className='rounded-[2rem] w-full hover:scale-125 transition-all object-cover'/>
                    <div className='absolute text-white top-[50%] left-5 lg:left-32 translate-y-[-50%]' >
                        <div className='font-bold md:text-[2.7rem] text-[1.3rem] lg:text-[3.6rem]'>About Trackn Fly</div>
                        <div className='md:text-[1.2rem] text-[.9rem] lg:text-[2rem] font-normal tracking-wide leading-relaxed'>Today, we have been solving billions of queries across the world and helping large numbers of travelers <br className='lg:block hidden'/>around the globe to make their trips more easy. Be it a query on holiday packages, flight and hotel booking <br className='lg:block hidden'/>car rental, or anything regarding the website, we are here to assist you in the simplest way. <Link to={'/about-us'} className='text-red-500 cursor-pointer'>Know more.</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTrackenFly
