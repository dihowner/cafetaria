import Link from 'next/link'
import React, { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
// Link
const TopSideBar = ({ SideBarFirstLinks, closes }) => {
    const pathname = usePathname()
    const { isSidebarOpen } =
        useContext(SidebarCreateContext)
    // const isActive = pathname.startsWith(SideBarLink.path)
    return (
        <div className='flex flex-col gap-y-1 w-full'>
            <span className={` ${isSidebarOpen ? ' text-xs text-[#FFFFFFBD] block' : 'block md:hidden lg:block text-xs text-[#FFFFFFBD] '
                }`}>Account </span>
            <div className='flex flex-col gap-y-4 w-full'>
                {SideBarFirstLinks.map((item, index) => (
                    <Link href={item.path} key={index}
                        className={`w-[100%] hover:bg-[#E0F3F3] hover:text-[black] rounded-[5px] bg-[#F8F8F863]  p-2 text-sm  ${pathname.startsWith(item.path) ? 'bg-[#FAFAFA] text-[black]' : 'text-white'
                            }`} onClick={closes}>
                        <div className='flex items-center text-sm  w-[100%]  gap-x-2 capitalize'>
                            <div className='text-sm'>{item.icon}</div>
                            <div
                                className={` ${isSidebarOpen ? 'block' : 'block md:hidden lg:block '
                                    }`}
                            >
                                {item.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default TopSideBar