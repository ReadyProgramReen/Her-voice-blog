"use client"; // This is a client component 
import { assets, blog_data } from '@/Assets/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

  const [data,setData] =useState(null);

  const fetchBlogData=()=>{
    for(let i=0 ; i< blog_data.length; i++){
      if(Number(params.id) === blog_data[i].id){
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;

      }
    }
  };

  useEffect(()=>{
    fetchBlogData();
  },[])

  return ( 
    data? <>

    <div className='bg-blue-100 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center '>
      <Link href={'/'}>
        <h1 className='text-3xl font-semibold text-white md:text-4xl lg:text-5xl p-2 rounded-2xl  border-4 border-sky-600 bg-sky-800'>"Her Voice"</h1>
      </Link>  
        <button className='flex items-center p-2 font-medium py-1 px-3 sm:py-3 sm:px-6 rounded-md border-2 border-sky-800 hover:shadow-[0px_15px_40px_-8px_rgba(0,0,0,0.8)]'>Get Started<Image src={assets.arrow}/> </button>

      </div>
        <div className='text-center my-24 '>
          <h1 className='text-2xl sm:text-4xl font-semibold max-w-[700px] mx-auto '>{data.title}</h1>
          <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60} alt=''/>
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
       
        </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 '>
      <Image className='border-2 border-sky-800' src={data.image} width={1280} height={720} alt=''/>
      <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 1 :Women blogs are currently on the top list on most read blogs.</h3>
      <p className='my-3'>Blogging has become the latest trend and does not limit anyone who knows they can attract a good number of audience.</p>
      <p className='my-3'>Blogging has become the latest trend and does not limit anyone who knows they can attract a good number of audience.</p>
   
      <h3 className='my-5 text-[18px] font-semibold'> Step 2 :Women blogs are currently on the top list on most read blogs.</h3>
      <p className='my-3'>Blogging has become the latest trend and does not limit anyone who knows they can attract a good number of audience.</p>
      <p className='my-3'>Blogging has become the latest trend and does not limit anyone who knows they can attract a good number of audience.</p>

      <h3 className='my-5 text-[18px] font-semibold'> Step 3:Women blogs are currently on the top list on most read blogs.</h3>
      <p className='my-3'>Blogging has become the latest trend and does not limit anyone who knows they can attract a good number of audience.</p>
      <p className='my-3'>Blogging has become the latest trend and does not limit anyone who knows they can attract a good number of audience.</p>

      <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
      <p className='my-3'>Whether it is on beauty, fashion, career, or anything, be creative and make sure your blog is up to date on current trends.</p>

      <div className='my-24 '>
        <p className='text-black font-semibold my-4 '>Share this article on social media</p>
      
      <div className='flex'>
        <Image src={assets.facebook_icon} width={50} alt=''/>
        <Image src={assets.twitter_icon} width={50} alt=''/>
        <Image src={assets.googleplus_icon} width={50} alt=''/>


      </div>
      </div>
    </div>
      <Footer/>
    </>: <></>
  )
}

export default page