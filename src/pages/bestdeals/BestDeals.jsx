import React from 'react'
import bestdealsbg from '/bestdeals.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutTrackenFly from '../../components/aboutTrackenFly/AboutTrackenFly';

const BestDeals = () => {
    const data = [
        {
            id: 1,
            image: 'BeastDealsCrausal1.png',
            title: 'Innsbruck get 20% off on pre booking',
            para: 'Now book flight and get a free meal & save BIG bucks on our journey.',
        },
        {
            id: 2,
            image: 'BeastDealsCrausal1.png',
            title: 'Innsbruck get 20% off on pre booking',
            para: 'Now book flight and get a free meal & save BIG bucks on our journey.',
        },
        {
            id: 3,
            image: 'BeastDealsCrausal1.png',
            title: 'Innsbruck get 20% off on pre booking',
            para: 'Now book flight and get a free meal & save BIG bucks on our journey.',
        }
    ]
    return (
        <>
            <div className='h-auto relative'>
                <img src={bestdealsbg} alt='img' className=' h-[70vh] md:h-[70vh] md:block  lg:h-[80vh] object-cover' />
                <div className='grid grid-cols-12 gap-y-10 md:gap-y-0 md:items-center absolute bottom-0 left-0 w-full h-auto'>
                    <div className='col-span-12 order-2 md:order-1 pb-10 md:pb-0 md:col-span-6 lg:col-span-8'>
                        <div className='pl-10 md:pl-20 lg:pl-32'>
                            <div className='text-white pb-12 text-[3.5rem] lg:text-[5rem] font-semibold'>Now plan your trip with <br className='md:hidden block' />us and<br className='md:block hidden' /> create memories.</div>
                            <button className='bg-[#2F80ED] text-white text-[1.4rem] py-4 px-5 rounded-xl hover:bg-blue-600 hover:scale-90 transition-all'>Book Your Tickets Now</button>
                        </div>
                    </div>
                    <div className='col-span-12 order-1 md:col-span-6  lg:col-span-4'>
                        <Carousel className='md:pb-[20%] pb-[5%] lg:pb-[16%]' infiniteLoop autoPlay centerSlidePercentage={80} centerMode showThumbs={false} showArrows={false} emulateTouch showStatus={false}>
                            {
                                data?.map((item, ind) => (
                                    <div key={ind} className='bg-white p-8 mr-8 lg:mr-16 rounded-[3rem]'>
                                        <img src={item.image} alt='img' className='w-full' />
                                        <div className='py-8 text-black font-bold text-[2.3rem] text-start '>{item.title}</div>
                                        <div className='text-black text-opacity-50 text-[1.5rem] text-start'>{item.para}</div>
                                        <div className='flex items-center pt-8 justify-between'>
                                            <div className='text-black text-[1.3rem]'>EXPIRING SOON</div>
                                            <button className='bg-[#FB4A2A] text-white text-[1.4rem] py-1.5 px-5 rounded-full hover:bg-red-800 hover:scale-90 transition-all'>BOOK NOW</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
            <AboutTrackenFly />
        </>
    )
}

export default BestDeals
