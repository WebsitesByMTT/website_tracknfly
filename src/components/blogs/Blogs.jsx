import React from 'react'

const Blogs = () => {

    const data = [
        {
            id: 1,
            image: '/blogs1.png',
            title: 'Sydeny’s 10 most fashionable 5 star hotels',
            para: 'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....'
        },
        {
            id: 2,
            image: '/blogs2.png',
            title: 'Top cities for Vegan Travellers',
            para: 'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...'
        },
        {
            id: 3,
            image: '/blogs3.png',
            title: 'World’s top destinations during and post covid timeline',
            para: 'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...'
        },
        {
            id: 4,
            image: '/blogs1.png',
            title: 'Sydeny’s 10 most fashionable 5 star hotels',
            para: 'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....'
        }
    ]

    return (
        <div className='bg-white py-8'>
            <div className='text-[4rem] pb-12 text-center font-semibold'>Blogs</div>
            <div className='w-[96%] 2xl:w-[90%] mx-auto'>
                <div className='grid grid-cols-12 space-y-5 md:space-y-0  gap-5 2xl:gap-10'>
                    {
                        data?.map((item) => (
                            <div key={item.id} className='group rounded-3xl overflow-hidden md:col-span-6 transition-all cursor-pointer col-span-12 lg:col-span-3 relative'>
                                <img src={item.image} alt="img" className='w-full object-cover' />
                                <div className='absolute -bottom-[7%] group-hover:bottom-0 bg-opacity-50 transition-all group-hover:h-[60%] h-[40%] md:h-[50%] lg:h-[50%] 2xl:h-[55%] px-4 w-[100%] rounded-2xl bg-black'>
                                    <div className='text-white font-semibold text-[2rem] lg:text-[1.5rem] 2xl:text-[2rem]'>{item.title}</div>
                                    <div 
                                    className='lg:text-[1rem] text-[1.2rem] 2xl:text-[1.2rem] text-white text-opacity-70'>{item.para}</div>
                                    <div className=' pb-[10%] pt-[5%] group-hover:block hidden text-[1.2rem] text-white'><span className='bg-blue-500 px-4 py-1.5 rounded-lg'>Read More</span></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs
