'use client'
import React from 'react'
import { mostVisited } from '@/components/Utilis/Dummy'
// import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
const MostVisteedItem = ({ scrollref, scroll }) => {
  return (
    <div
      className='flex gap-x-4 max-w-max overflow-hidden scrollbar-none relative'
      ref={scrollref}
    >
      {mostVisited.map((item, index) => (
        <div
          className='min-w-[240px] md:min-w-[301px] h-[400px] bg-cover bg-center bg-no-repeat rounded-[20px] flex flex-col  scrollbar-none gap-x-4'
          key={index}
        >
          <div className='w-full'>
            <img src={item.image} alt='' className='object-fit w-[100%]' />
          </div>

          <h3 className='font-[600] text-lg'>{item.name}</h3>
          <div className=' flex flex-col  gap-y-4 '>
            <p>{item.descpription}</p>
            <div className='flex gap-x-2 items-center'>
              <span className='text-[#218B07]'>{item.ratings}</span>
              <span>{item.Reviews}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MostVisteedItem
