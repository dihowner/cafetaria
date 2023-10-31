import Link from 'next/link'

import React, { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
// Link
const SecondSideBar = ({ SideBarSecondLinks }) => {
    const pathname = usePathname()
    const { isSidebarOpen } =
        useContext(SidebarCreateContext)
    return (
        <div className='flex flex-col gap-y-4 w-full h-full'>
            {SideBarSecondLinks.map((item, index) => (
                <Link href={item.path} key={index}
                    className={`w-[100%] hover:bg-[#E0F3F3] rounded-[10px] bg-[#F8F8F863] p-3 text-white ${pathname.startsWith(item.path) ? 'bg-[#FAFAFA] text-[black]' : ''
                        }`}>
                    <div className='flex items-center text-base  w-[100%]  gap-x-4 capitalize'>
                        <div className='text-xl'>{item.icon}</div>
                        <div
                            className={`${isSidebarOpen ? 'block' : 'hidden lg:block'
                                }`}
                        >
                            {item.name}
                        </div>
                    </div>
                </Link>

            ))}
            <button className={`w-[100%] hover:bg-[#E0F3F3] rounded-[10px] bg-[#F8F8F863] p-3 text-white capitalize`}>
                Logout
            </button>
        </div>
    )
}

export default SecondSideBar