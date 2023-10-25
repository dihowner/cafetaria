'use client'
import React, { useRef } from 'react'
import MostVisteedItem from './MostVisteedItem'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const Mostvisited = () => {
  const scrollref = useRef(null)
  const scroll = (direction) => {
    const { current } = scrollref
    if (direction === 'left') {
      current.scrollLeft -= 250
    } else {
      current.scrollLeft += 250
    }
  }
  return (
    <div className='flex w-[100%] flex-col gap-x-4 gap-y-8 justify-center items-center py-8'>
      <div className='width flex flex-col gap-y-8'>
        <h1 className='font-[700] text-3xl text-[#000000B8]'>
          Mostly visited this week
        </h1>
        <div className='w-[100%] relative'>
          <MostVisteedItem scrollref={scrollref} scroll={scroll} />
          <div className='w-full flex justify-between absolute items-center bottom-[60%]'>
            <div
              className='bg-[#FF9C06] rounded-full text-lg flex justify-center items-center w-[40px] h-[40px] text-white'
              onClick={() => scroll('left')}
            >
              <FaArrowLeft className='text-[1.5rem]' />
            </div>
            <div
              className='bg-[#FF9C06] rounded-full text-lg flex justify-center items-center w-[40px] h-[40px] text-white'
              onClick={() => scroll('right')}
            >
              <FaArrowRight className='text-[1.5rem]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mostvisited
