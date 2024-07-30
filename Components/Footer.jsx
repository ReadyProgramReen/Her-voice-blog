import { assets } from '@/Assets/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-sky-800 py-5 items-center'>
        <Image src={assets.logo_light} width={120}/> 
        <p className='text-sm text-white'>All right reserved .Copyright © 2024 </p>
        <div className='flex'>
            <Image src={assets.facebook_icon} width={40}/>
            <Image src={assets.twitter_icon} width={40}/>
            <Image src={assets.googleplus_icon} width={40}/>

        </div>
    </div>
  )
}

export default Footer