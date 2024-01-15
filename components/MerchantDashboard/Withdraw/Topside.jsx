import React from 'react'
import { AiFillAccountBook, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai'
const Topside = () => {
    return (
        <div className='width flex flex-col'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-6 w-full">
                <div className=" py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[10px] border ">
                    <div className="flex justify-center items-center gap-x-4">
                        <span className='bg-[#E1510D] text-[white] p-2 text-base'><AiFillAccountBook /></span>
                        <h4 className='text-base text-[#5B5B5B99]'>Account balance</h4>
                    </div>
                    <p className='text-lg font-bold text-center'>
                        150,000
                    </p>
                </div>
                <div className=" py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[10px] border ">
                    <div className="flex justify-center items-center gap-x-4">
                        <span className='bg-[#218B07] text-[white] p-2 text-base'><AiOutlineShoppingCart /></span>
                        <h4 className='text-base text-[#5B5B5B99]'>Pending balance</h4>
                    </div>
                    <p className='text-lg font-bold text-center'>
                        209
                    </p>
                </div>
                <div className=" py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[10px] border ">
                    <div className="flex justify-center items-center gap-x-4">
                        <span className='bg-[#218B07] text-[white] p-2 text-base'><AiOutlineShoppingCart /></span>
                        <h4 className='text-base text-[#5B5B5B99]'>Pending withdrawal</h4>
                    </div>
                    <p className='text-lg font-bold text-center'>
                        209
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Topside