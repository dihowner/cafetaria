import React from 'react'
import { MdOutlineLocationOn, MdDelete } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaGreaterThan } from 'react-icons/fa6'
import { EachRests } from '@/components/Utilis/Dummy'
import Link from 'next/link'
import CustomButton from '@/components/CustomButton'
const EachRest = ({ restuarantsDetails, open }) => {
    
    return (
        <div className='w-full flex justify-center items-center flex-col gap-y-8 pb-8'>
            <div className="w-full eachrest flex flex-col justify-center items-center min-h-[300px] p-6 "
                style={{
                    backgroundSize: 'cover', // Optional: Adjust the background image size
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <h1 className='font-[700] text-4xl text-white'>Currently Open</h1>
            </div>
            <div className="relative w-full flex flex-col justify-center items-center">
                <div className="width grid grid-cols-3 gap-x-4 absolute">
                    <div className="col-span-2 shadow-md bg-[white] rounded-md flex flex-col p-4 gap-y-2 ">
                        <h1 className='text-[#474747] text-3xl font-bold'>{restuarantsDetails.name}</h1>
                        <p className='text-[#929292]'>Amala, jollof rice, fried rice and dodo</p>
                        <div className='flex gap-x-2 items-center'>
                            <span className='text-[#5f8357] font-bold'>{restuarantsDetails.ratings}</span>
                            <span>{restuarantsDetails.Reviews}</span>
                        </div>
                        <div className="text-[#00000099] flex items-center">
                            <span><MdOutlineLocationOn /></span>
                            {restuarantsDetails.location}
                        </div>
                    </div>
                    <div className=" col-span-1 bg-[white] shadow-md rounded-md flex flex-col p-4 gap-y-6">
                        <div className="flex justify-between items-center">
                            <CustomButton
                                title='Cart'
                                containerStyles='text-[white] flex justify-center items-center py-2 px-6 rounded-[5px] gap-x-4  bg-[#218B07]'
                                Icon={<AiOutlineShoppingCart />}

                            />
                            <div className="flex justify-center items-center">
                                <p className='text-sm'>view all</p>
                                <span><FaGreaterThan /></span>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div className="flex w-[70%] gap-x-3">
                                <div className="w-[50%]">
                                    <img src="/Images/Rectangle 84.png" alt="" className='' />
                                </div>
                                <div className=" flex flex-col">
                                    <span className='text-[#000000BA] text-xl'>Amala Sky</span>
                                    <span className='text-[black] font-semibold'>Jollof rice</span>
                                    <span className='text-base text-[#000000BA] '>Takeaway</span>
                                </div>
                            </div>
                            <p>3,500</p>
                        </div>
                        <div className="flex justify-end items-center gap-x-6">
                            <span className='text-3xl'><MdDelete /></span>
                            <CustomButton
                                title='Check Out'
                                containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[18px] gap-x-4 bg-[#218B07]'

                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="width mt-[160px]">
                <div className='flex flex-col gap-y-4 w-[100%]'>
                    <div className=" flex flex-col md:flex-row gap-x-4 gap-y-4 ">
                        <h1 className='font-[700] text-3xl'>All Delicacies</h1>
                        <div className="flex w-[100%] md:w-[50%]">
                            <div className='bg-[#83838326] flex items-center justify-end gap-x-2 py-4 px-2 text-base w-[80%] rounded-[8px]'>
                                <input
                                    type='text'
                                    placeholder='search anything here'
                                    className='bg-[transparent] outline-none border-none w-[100%]'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                        {EachRests.map((item, index) => (
                            <div className="border flex justify-between items-center gap-x-8 w-full px-6 py-8">
                                <div className="flex-col flex gap-y-16 w-[60%]">
                                    <h1 className='font-[600] text-xl'>{item.name}</h1>
                                    <div className="">
                                        <p>Initial Menu: <span className='text-[#218B07]'> {item.price}</span></p>
                                        <CustomButton
                                            title='Buy menu'
                                            containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4  bg-[#218B07]'
                                            handleClick={open}
                                        />
                                    </div>
                                </div>
                                <div className="w-[40%] flex justify-center items-center h-[100%]">
                                    <img src={item.image} alt="" srcset="" className='w-[100%] h-[100%]' />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="width mt-8">
                <div className='flex flex-col gap-y-4 w-[100%]'>
                    <div className=" flex gap-x-4 ">
                        <h1 className='font-[700] text-3xl'>All Delicacies</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                        {EachRests.map((item, index) => (
                            <div className="border flex justify-between items-center gap-x-8 w-full px-6 py-8">
                                <div className="flex-col flex gap-y-16 w-[60%]">
                                    <h1 className='font-[600] text-xl'>{item.name}</h1>
                                    <div className="">
                                        <p>Initial Menu: <span className='text-[#218B07]'> {item.price}</span></p>
                                        <CustomButton
                                            title='Buy menu'
                                            containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4  bg-[#218B07]'
                                            handleClick={open}
                                        />
                                    </div>
                                </div>
                                <div className="w-[40%] flex justify-center items-center h-[100%]">
                                    <img src={item.image} alt="" srcset="" className='w-[100%] h-[100%]' />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EachRest