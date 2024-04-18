import React from 'react'

const PreLoader = () => {
  return (
    <div className='bg-white w-screen h-screen  fixed top-0 left-0 z-[999999] '>
       <div className='w-full h-full relative'>
          <img src="/loading.png" alt="loading" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
       </div>
    </div>
  )
}

export default PreLoader
