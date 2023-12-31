import React from 'react'
import { BsWechat, BsChatDots } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { useSelector } from 'react-redux';
const DashboardHeader = ({ isSidebarOpen, toggleSidebar }) => {
    const { vendorDetails } = useSelector((state) => state.rootReducers)
    const details = vendorDetails?.vendorDetails
    return (
        <div className={` ${isSidebarOpen
            ? 'pl-[260px] hidden md:block bg-[#218B07] w-[100%] fixed h-[70px] z-10'
            : 'pl-0 md:pl-[80px] lg:pl-[260px] hidden md:flex justify-center bg-[#218B07] w-[100%] fixed h-[70px] z-10 '
            }`}>
            <div className="flex justify-between items-center py-4 w-[95%]">
                <div className="flex justify-center items-center gap-x-4 w-full">
                    <div className="flex gap-3 items-center w-[40%] lg:w-[20%]">
                        <div
                            className='md:flex items-center gap-x-4 capitalize pl-3 py-2 text-xl lg:hidden '
                            onClick={() => {
                                !toggleSidebar()
                            }}
                        >
                            <FaBars />
                        </div>
                        <div className="bg-[#C9C9C9]  py-2 px-2 w-[100%] flex justify-center items-center text-[#FFFFFF] min-h-12 text-2xl">
                            <h4>Welcome {details?.store_name}</h4>
                        </div>
                    </div>
                    <div className="bg-[#C9C9C9]  py-2 px-2 w-[60%] lg:w-[80%] h-12 flex justify-center items-center text-2xl">
                        <input type="text" className='w-full  capitalize bg-[#C9C9C9] rounded-full border-none outline-none text-[#FFFFFF]' placeholder='search Anything here' />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-4 w-[40%]">
                    <div className="flex justify-center items-center gap-x-2">
                        <div className="flex justify-center items-center bg-[#C9C9C9]  py-2 px-2 text-lg text-[#FFFFFF] min-h-12">
                            <BsWechat />
                        </div>
                        <div className=" flex justify-center items-center bg-[#C9C9C9] py-2 px-2 text-lg text-[#FFFFFF] min-h-12">
                            <BsChatDots />
                        </div>
                    </div>
                    <div className="bg-[#C9C9C9] flex justify-center items-center py-2 px-2 text-lg text-[#FFFFFF] min-h-12 w-20">
                        <BsChatDots />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashboardHeader