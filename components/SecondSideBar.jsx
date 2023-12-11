'use client'
import Link from 'next/link'

import React, { useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import { AiOutlinePoweroff } from 'react-icons/ai'
import Modal from './Modal'
import { LiaTimesSolid } from 'react-icons/lia'
import CustomButton from './CustomButton'
import bgsidebar from '../public/Rectangle 87.png'
import { logout } from '../user/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '@/redux/userApiSlice'
// Link
const SecondSideBar = ({ SideBarSecondLinks, closes }) => {
    const pathname = usePathname()
    const router = useRouter()
    const { isSidebarOpen } =
        useContext(SidebarCreateContext)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => {

        setIsOpenModal(true)

    }
    const handleLogout = () => {
        closes(); // Close the sidebar when the modal is opened
        // Open the modal

        // if (isOpenModal) {
        setIsOpenModal(true)
        // }
    };
    const dispatch = useDispatch();
    const handleLogoutFun = async () => {
        dispatch(logout());
        router.push('/client/login')
    };

    return (
        <div className='flex flex-col gap-y-4 w-full h-full'>
            {SideBarSecondLinks.map((item, index) => (
                <Link href={item.path} key={index}
                    className={`w-[100%] hover:bg-[#E0F3F3] hover:text-[black] rounded-[10px] bg-[#F8F8F863] p-3 ${pathname.startsWith(item.path) ? 'bg-[#FAFAFA] text-[black]' : ' text-white'
                        }`} onClick={closes}>
                    <div className='flex items-center text-base  w-[100%]  gap-x-4 capitalize'>
                        <div className='text-xl'>{item.icon}</div>
                        <div
                            className={`${isSidebarOpen ? 'block' : ' block md:hidden lg:block'
                                }`}
                        >
                            {item.name}
                        </div>
                    </div>
                </Link>
            ))}
            <button className={`w-[100%] hover:bg-[#E0F3F3] hover:text-[black] rounded-[10px] bg-[#F8F8F863] p-3 text-white capitalize hidden md:block`} onClick={openModal}>
                <div className='flex items-center text-base  w-[100%]  gap-x-4 capitalize'>
                    <div className='text-xl'><AiOutlinePoweroff /></div>
                    <div
                        className={`${isSidebarOpen ? 'block' : ' block md:hidden lg:block'
                            }`}
                    >
                        Logout
                    </div>
                </div>
            </button>
            <button className={`w-[100%] hover:bg-[#E0F3F3] hover:text-[black] rounded-[10px] bg-[#F8F8F863] p-3 text-white capitalize md:hidden`} onClick={handleLogout}>
                <div className='flex items-center text-base  w-[100%]  gap-x-4 capitalize'>
                    <div className='text-xl'><AiOutlinePoweroff /></div>
                    <div

                    >
                        Logout
                    </div>
                </div>
            </button>
            {pathname.startsWith('/client') && <div className={`bgsideebar h-[120px] ${isSidebarOpen ? 'block' : ' block md:hidden lg:block w-[100%] md:bgsideebar md:h-[120px] h-[120px] rounded-xl bgsideebar '
                }`} style={{
                    // backgroundImage: 'url(/Rectangle/ 87.png)',
                    backgroundSize: 'cover', // Optional: Adjust the background image size
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',

                }}>
                <div className="w-full justify-center items-end flex py-4 h-full">
                    <p className='justify-center flex bg-[#FF9C06] w-[80%] py-3 capitalize text-white rounded-xl'>  earn with cafeteria</p>
                </div>
            </div>}

            <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-12 justify-center flex items-center rounded-md absolute top-0 right-0 text-white'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-xl' />
                    </span>
                    <div className="flex flex-col justify-center items-center w-full gap-y-6">
                        <h1 className='text-5xl text-center'>Are you sure you to log out?</h1>
                        <div className="flex justify-center items-center w-full gap-x-4">
                            {/* <CustomButton title='yes'
                                containerStyles='text-[white] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 bg-[#218B07] w-[40%] capitalize'
                                // handleClick={handleLogoutFun}
                            /> */}
                            <button className='text-[white] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 bg-[#218B07] w-[40%] capitalize' onClick={handleLogoutFun}>
                                yes
                            </button>
                            <CustomButton title='no'
                                containerStyles='text-[white] flex justify-center items-center py-4 px-4 rounded-[5px] gap-x-4 bg-[#FF9C06] w-[40%] capitalize'
                                handleClick={() => setIsOpenModal(false)}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SecondSideBar