import React from 'react'
import { CgSortAz } from 'react-icons/cg'
const CustomFilter = ({title,data}) => {
    return (
        <div className='flex flex-col gap-y-4 w-[20%]'>
            <div className=" flex flex-col gap-y-4 w-full">
                <h1 className='font-[600] text-2xl'>All {title}</h1>
                <p className='font-[600] text-xl text-[#5B5B5B]'>({data})</p>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="bg-[black] text-white rounded-md w-[100px]">
                    <CgSortAz className='text-[2rem]' />
                </div>
                <ul className='flex flex-col gap-y-2'>
                    <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Most popular</li>
                    <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Nearest</li>
                    <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Highest Rated</li>
                    <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Newest</li>
                    <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Most rated</li>
                </ul>
            </div>
        </div>
    )
}

export default CustomFilter