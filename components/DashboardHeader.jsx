import React from 'react'
import { BsWechat, BsChatDots } from 'react-icons/bs'
const DashboardHeader = () => {
    return (
        <div className='hidden md:block bg-[#218B07] w-full'>
            <div className="flex justify-between items-center py-4 w-[90%]">
                <div className="flex justify-center items-center  gap-x-6">
                    <div className="bg-[#C9C9C9] rounded-full py-2 px-2 w-[160px] flex justify-center items-center text-[#FFFFFF]">
                        <h4>Welcome Amala Sky </h4>
                    </div>

                    <div className="bg-[#C9C9C9] rounded-full py-2 px-2 w-[300px]">
                        <input type="text" className='w-full  capitalize bg-[#C9C9C9] rounded-full border-none outline-none text-[#FFFFFF]' placeholder='search restuarants' />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                    <div className="flex justify-center items-center gap-x-2">
                        <div className="bg-[#C9C9C9] rounded-[10px] py-2 px-2 text-lg text-[#FFFFFF]">
                            <BsWechat />
                        </div>
                        <div className="bg-[#C9C9C9] rounded-[10px] py-2 px-2 text-lg text-[#FFFFFF]">
                            <BsChatDots />
                        </div>
                    </div>
                    <div className="bg-[#C9C9C9] rounded-[10px] py-2 px-2 text-lg text-[#FFFFFF]">
                        <BsChatDots />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashboardHeader