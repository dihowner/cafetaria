import React from 'react'
import { AiFillAccountBook, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai'

const TopSideBar = () => {
    return (
        <div className='width grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-x-8 gapy-4  '>
            <div className="bg-[white] py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[16px]">
                <div className="flex justify-center items-center gap-x-4">
                    <span className='bg-[#E1510D] text-[white] p-2 text-3xl'><AiFillAccountBook /></span>
                    <h4 className='text-2xl text-[#5B5B5B99]'>Account balance</h4>
                </div>
                <p className='text-4xl font-bold'>
                    150,000
                </p>
           </div>
            <div className="bg-[white] py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[16px]">
                <div className="flex justify-center items-center gap-x-4">
                    <span className='bg-[#218B07] text-[white] p-2 text-3xl'><AiOutlineShoppingCart /></span>
                    <h4 className='text-2xl text-[#5B5B5B99]'>Total items delivered</h4>
                </div>
                <p className='text-4xl font-bold'>
                    209
                </p>
           </div>
            <div className="bg-[white] py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[16px]">
                <div className="flex justify-center items-center gap-x-4">
                    <span className='bg-[#FF9C06] text-[white] p-2 text-3xl'><AiOutlineStar /></span>
                    <h4 className='text-2xl text-[#5B5B5B99]'>Satisfaction rating</h4>
                </div>
                <p className='text-4xl font-bold'>
                    90%
                </p>
           </div>
        </div>
    )
}

export default TopSideBar