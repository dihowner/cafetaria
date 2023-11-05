import Dedicate from '@/components/Pages/About/Dedicate'
import GetStarted from '@/components/Pages/About/GetStarted'
import HeroSectionAbout from '@/components/Pages/About/HeroSectionAbout'
import Reviews from '@/components/Pages/About/Reviews'
import Stress from '@/components/Pages/About/Stress'
import Link from 'next/link'
import React from 'react'
// Link
const page = () => {
  return (
    <div className='flex flex-col gap-y-16 pb-6'>
      <HeroSectionAbout />
      <div className='flex bg-[#F9F9F9] justify-center items-center'>
        <h6 className='w-[70%] flex justify-center items-center text-center text-2xl font-semibold py-6 '>
          We are here to help you stay stress free, and enjoy undelayed
          deliveries
        </h6>
      </div>
      <GetStarted />
      <div className='flex bg-[#F9F9F9] justify-center items-center'>
        <h6 className='w-[70%] flex justify-center items-center text-center text-2xl font-semibold py-6 '>
          Reviews
        </h6>
      </div>
      <Reviews />
      <Stress />
      <Dedicate />
      <div className='flex bg-[#F9F9F9] justify-center items-center'>
        <div className='w-[100%] md:w-[70%] flex justify-center items-center text-center text-2xl  md:text-4xl font-semibold py-12 whitespace-wrap '>
          Have any problem?{' '} 
          <Link href='' className='text-[#218B07] text-center'>
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
