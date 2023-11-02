import Link from 'next/link'
import React, { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
// Link
const TopSideBar = ({ SideBarFirstLinks }) => {
    const pathname = usePathname()
    const { isSidebarOpen } =
        useContext(SidebarCreateContext)
    // const isActive = pathname.startsWith(SideBarLink.path)
    return (
        <div className='flex flex-col gap-y-4 w-full'>
            {SideBarFirstLinks.map((item, index) => (

                <Link href={item.path} key={index}
                    className={`w-[100%] hover:bg-[#E0F3F3] rounded-[10px] bg-[#F8F8F863]  p-3 ${pathname.startsWith(item.path) ? 'bg-[#FAFAFA] text-[black]' : 'text-white'
                        }`}>
                    <div className='flex items-center text-lg  w-[100%]  gap-x-4 capitalize'>
                        <div className='text-xl'>{item.icon}</div>
                        <div
                            className={`${isSidebarOpen ? 'block' : 'block md:hidden lg:block'
                                }`}
                        >
                            {item.name}
                        </div>
                    </div>
                </Link>

            ))}
        </div>
    )
}

export default TopSideBar