import React from 'react'
import { BsWechat, BsChatDots } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
const DashboardHeader = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={` ${isSidebarOpen
            ? 'pl-[220px] hidden md:block bg-[#218B07] w-[100%] fixed h-[70px]'
            : 'pl-0 md:pl-[80px] lg:pl-[220px] hidden md:flex justify-center bg-[#218B07] w-[100%] fixed h-[70px] '
            }`}>

            <div className="flex justify-between items-center py-4 w-[95%]">

                <div className="flex justify-center items-center gap-x-4">
                    <div className="flex gap-3 items-center">
                        <div
                            className='md:flex items-center gap-x-4 capitalize pl-3 py-2 text-xl lg:hidden '
                            onClick={() => {
                                !toggleSidebar()
                            }}
                        >
                            <FaBars />
                        </div>
                        <div className="bg-[#C9C9C9] rounded-[8px] py-2 px-2 w-[180px] flex justify-center items-center text-[#FFFFFF]">
                            <h4>Welcome Amala Sky </h4>
                        </div>
                    </div>

                    <div className="bg-[#C9C9C9] rounded-[8px] py-2 px-2 w-[400px]">
                        <input type="text" className='w-full  capitalize bg-[#C9C9C9] rounded-full border-none outline-none text-[#FFFFFF]' placeholder='search restuarants' />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                    <div className="flex justify-center items-center gap-x-2">
                        <div className="bg-[#C9C9C9] rounded-[10px] py-2 px-2 text-lg text-[#FFFFFF]">
                            <BsWechat />
                        </div>
                        <div className="bg-[#C9C9C9] rounded-[8px] py-2 px-2 text-lg text-[#FFFFFF]">
                            <BsChatDots />
                        </div>
                    </div>
                    <div className="bg-[#C9C9C9] rounded-[8px] py-2 px-2 text-lg text-[#FFFFFF]">
                        <BsChatDots />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashboardHeader