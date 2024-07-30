"use client"; // This is a client component 
import { assets, blog_data } from '@/Assets/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogItem = ({title,description,category,image}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Image className='border-b border-black' src={image} width={400} height={400}  alt=''/>  
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-small'>{category}</p>
      <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-500'>{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
            <div className='inline-flex items-center py-2 font-semibold text-center'>
                Read More<Image className='ml-2' src={assets.arrow} width={12}/> 
            </div>
      </div>
    </div>
  )
}

export default BlogItem