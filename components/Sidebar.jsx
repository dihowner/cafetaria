
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars } from 'react-icons/fa'
import React, { useContext } from 'react'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
const Sidebar = ({ SideBarFirstLinks,
    SideBarSecondLinks }) => {
    const pathname = usePathname()
    const { isSidebarOpen, toggleSidebar, } = useContext(SidebarCreateContext)
    return (
        <div>

        </div>
    )
}

export default Sidebar