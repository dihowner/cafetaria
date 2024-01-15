import React from 'react'
import { BsBagFill, BsFillCreditCard2BackFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
const page = () => {
    return (
        <div className='flex w-full justify-center items-center'>
            <div className="width flex flex-col justify-center items-cente gap-y-8">
                <div className="flex justify-between md:items-center flex-col gap-y-4 md:flex-row w-full">
                    <h1 className='font-semibold uppercase text-lg text-[#444444]'>Order  Details: </h1>

                    <select
                        className='px-2 py-2 border rounded-sm outline-none bg-transparent'

                    >
                        <option value='' disabled selected>
                            Change status
                        </option>
                        <option value="">In progress</option>
                        <option value="">Succesful</option>
                        <option value="">Failed</option>
                    </select>
                </div>

                <div className="border-b p-2 w-[100%] md:w-[70%] capitalize flex justify-center flex-col gap-y-3 ">
                    <p className='font-semibold text-sm'>order Id: <span className='text-[#218B07]'>#737456</span></p>
                    <span className='text-sm'>Monday, 19th September 2023</span>
                    <div className="flex justify-center items-center bg-[#FF9C06] p-2 w-[40%] md:w-[15%]  text-white text-center text-sm capitalize ">
                        in progress
                    </div>
                </div>
                <div className="border-b p-4 w-[100%] md:w-[70%] capitalize flex flex-col gap-y-3 ">
                    <div className="flex  items-center gap-x-4">
                        <span className='bg-[#218B07] text-white flex text-sm justify-center items-center p-2 rounded-md'><BsBagFill /></span>
                        <p className='text-lg text-[#444444] font-semibold'>Order info:</p>
                    </div>
                    <div className="flex gap-x-8">
                        <span>Jollof Rice</span>
                        <ul className='list-disc text-[#218B07] text-sm font-medium'>
                            <li>Take away</li>
                            <li>1 portion pf jollof rice</li>
                            <li>4 beef meats</li>
                            <li>2 moi moi</li>
                            <li>1 portion of fried rice</li>
                            <li>2 pepsi coke</li>
                        </ul>
                    </div>
                </div>
                <div className="border-b p-2 w-[100%] md:w-[70%] capitalize flex flex-col gap-y-3 ">
                    <div className="flex  items-center gap-x-4">
                        <span className='bg-[#218B07] text-white flex text-sm justify-center items-center p-2 rounded-md'><BsFillCreditCard2BackFill /></span>
                        <p className='text-lg text-[#444444] font-semibold'>Payment status:</p>
                    </div>
                    <div className="flex flex-col gap-y-3 text-sm">

                        <p>Transaction Amount: <span className='text-[#218B07]'>2300</span> </p>
                        <p>Transaction id :  <span className='text-[#218B07]'>29299288281002810281080280188802801</span> </p>
                        <p>Transaction time: <span className='text-[#218B07]'> 24 minutes ago</span> </p>

                    </div>
                    <div className="text-[white] flex justify-center items-center py-2 px-2 md:px-4 rounded-[8px] gap-x-2 bg-[#218B07] w-[40%] md:w-[20%] text-sm">
                        Successful
                    </div>
                </div>
                <div className="border-b p-4 w-[100%] md:w-[70%] capitalize flex flex-col gap-y-3 ">
                    <div className="flex  items-center gap-x-2">
                        <span className='bg-[#218B07] text-white flex text-sm justify-center items-center p-2 rounded-md'><FaUser /></span>
                        <p className='text-lg text-[#444444] font-semibold'>Customer Details:</p>
                    </div>
                    <div className="flex flex-col gap-y-3 text-sm">

                        <p className='text-[#00000047]'>Name: <span className='text-[#218B07]'>Abayomi Daniel</span> </p>
                        <p className='text-[#00000047]'>Address:  <span className='text-[#218B07]'>J and p bus-stop moniya ibadan, Fatokun street
                            ,Iyanu oluwa block industry
                            | Oyo - AKINYELE | +234 8162567067</span> </p>
                        <p className='text-[#00000047]'>Phone: <span className='text-[#218B07]'> 08032244772</span> </p>
                        <p className='text-[#00000047]'>Phone: <span className='text-[#218B07]'> phili***********@gmail.com</span> </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default page