import HeroSectionAbout from '@/components/Pages/About/HeroSectionAbout'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSectionAbout />
      <div className='flex bg-[#F9F9F9] justify-center items-center'>
        <h6 className='w-[70%] flex justify-center items-center text-center text-2xl font-semibold py-8 '>
          We are here to help you stay stress free, and enjoy undelayed
          deliveries
        </h6>
      </div>
      
    </div>
  )
}

export default page