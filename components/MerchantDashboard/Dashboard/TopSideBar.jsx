import CustomButton from '@/components/CustomButton'
import React from 'react'
import { AiFillAccountBook, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai'

const TopSideBar = () => {
    return (
        <div className='width flex items-cente flex-col lg:flex-row gap-x-8 gap-y-4 '>
            <div className="flex flex-col w-[100%] lg:w-[70%] border p-3">
                <div className="flex items-center flex-col md:flex-row gap-y-5 gap-x-6 w-full">
                    <div className=" py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[10px] border w-[100%] md:w-[50%] ">
                        <div className="flex justify-center items-center gap-x-4">
                            <span className='bg-[#E1510D] text-[white] p-2 text-3xl'><AiFillAccountBook /></span>
                            <h4 className='text-2xl text-[#5B5B5B99]'>Account balance</h4>
                        </div>
                        <p className='text-4xl font-bold text-center'>
                            150,000
                        </p>
                    </div>
                    <div className=" py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[10px] border w-[100%] md:w-[50%]  ">
                        <div className="flex justify-center items-center gap-x-4">
                            <span className='bg-[#218B07] text-[white] p-2 text-3xl'><AiOutlineShoppingCart /></span>
                            <h4 className='text-2xl text-[#5B5B5B99]'>Total items delivered</h4>
                        </div>
                        <p className='text-4xl font-bold text-center'>
                            209
                        </p>
                    </div>
                </div>
                <div className="graph">
                    fghjkl;
                </div>
            </div>
            <div className="flex flex-col gap-y-6 ">
                <div className="border rounded-lg py-4 px-6 flex flex-col gap-y-8">
                    <h3 className='text-2xl font-semibold'>Notification</h3>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col  gap-y-4 p-2 border-b">
                            <span className='bg-[#FF9C06] p-2 text-white w-[40%] rounded-md flex justify-center items-center '>
                                New order
                            </span>
                            <p>You just received a new order from Abayomi daniels</p>
                        </div>
                        <div className="flex flex-col gap-y-4 p-2 border-b">
                            <span className='bg-[#FF9C06] p-2 text-white w-[40%] rounded-md flex justify-center items-center'>
                                New order
                            </span>
                            <p>You just received a new order from Abayomi daniels</p>
                        </div>
                        <div className="flex flex-col gap-y-4 border-b p-2">
                            <span className='bg-[#FF9C06] p-2 text-white w-[40%] rounded-md flex justify-center items-center'>
                                New order
                            </span>
                            <p>You just received a new order from Abayomi daniels</p>
                        </div>
                    </div>
                    <CustomButton title='View all notifications'
                        containerStyles='bg-[#218B07]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[50%] md:w-[30%]  lg:w-[100%]' />
                </div>
                <div className=" border flex flex-col py-4 px-6 rounded-lg ">
                    <div className="py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[10px] ">
                        <div className="flex justify-center items-center gap-x-4">
                            <span className='bg-[#FF9C06] text-[white] p-2 text-3xl'><AiOutlineStar /></span>
                            <h4 className='text-2xl text-[#5B5B5B99]'>Satisfaction rating</h4>
                        </div>
                        <p className='text-4xl font-bold text-center'>
                            4.9
                        </p>
                    </div>
                    <CustomButton title='View product rating'
                        containerStyles='bg-[#218B07]  py-2 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[50%] md:w-[30%]  lg:w-[100%]' />
                </div>
            </div>
            {/* <div className="py-6 px-4 flex justify-center items-center flex-col gap-y-4 rounded-[10px] border ">
                <div className="flex justify-center items-center gap-x-4">
                    <span className='bg-[#FF9C06] text-[white] p-2 text-3xl'><AiOutlineStar /></span>
                    <h4 className='text-2xl text-[#5B5B5B99]'>Satisfaction rating</h4>
                </div>
                <p className='text-4xl font-bold text-center'>
                    90%
                </p>
           </div>
          */}
        </div>
    )
}

export default TopSideBar