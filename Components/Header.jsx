import { assets } from '@/Assets/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between item-center'>
            <h1 className='text-3xl font-semibold text-sky-800 md:text-4xl lg:text-5xl'>"Her Voice"</h1>
            <button className='flex items-center gap-2 font-medium rounded-md py-1 px-3 sm:py-3 sm:px-6 border-2 border-solid border-blue-400 '>
                Get Started <Image src={assets.arrow}/> </button>
        </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl text-sky-950 sm:text-5xl font-medium'>Latest Blogs</h1>
                <p className='my-10 max-w-[740px] m-auto text-xs sm:text-base'>To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. </p>
              <form className='flex justify-between rounded-md max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10  border-2 border-solid border-blue-900 shadow-[0_35px_30px_-18px_rgba(0,0,0,0.5)]' action="">
                <input className='pl-4 outline-none font-medium' type="email" placeholder='Enter your email to join ' />
                 <button type="submit" className='border-l border-black py-4 px-4  sm:px-8 hover:bg-sky-950 active:bg-sky-800 active:text-white'>Subscribe</button>
             </form>
            </div>
        
    </div>
  )
}

export default Header