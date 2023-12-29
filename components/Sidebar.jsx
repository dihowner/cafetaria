'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars } from 'react-icons/fa'
import React, { useContext, useEffect } from 'react'
import { SidebarCreateContext } from '@/context/Sidebar/SideBarContext'
import TopSideBar from './TopSideBar'
import SecondSideBar from './SecondSideBar'
import { useSelector, useDispatch } from 'react-redux'
import { setStat } from '@/redux/DashBoard/StatisticSlice'
import { useStatisticMutation } from '@/redux/statiscsApiSlice'
const Sidebar = ({ SideBarFirstLinks,
    SideBarSecondLinks, color }) => {
    const { isSidebarOpen, toggleSidebar, } = useContext(SidebarCreateContext)
    const [statistic, data] = useStatisticMutation()
    const dispatch = useDispatch();
    // const id = typeof window !== 'undefined' && localStorage.getItem('userId') ? JSON.parse(localStorage.getItem('userId')) : null
    // const fetchstat = async () => {
    //     try {
    //         const response = await statistic(id).unwrap()
    //         dispatch(setStat(response))
    //         console.log(response)
    //     } catch (err) {
    //         toast.error(err?.data?.message || err.error)
    //     }
    // }
    // useEffect(() => {
    //     fetchstat()
    // }, [])
    // console.log(data)

    return (
        <div className={`${isSidebarOpen
            ? `hidden  w-[250px] lg:block lg:w-[250px] bg-[${color}] fixed overflow-auto shadow-[rgb(113 122 131 / 11%) 0px 7px 30px 0px;] h-[100vh] transition-[all] ease duration-[.3s] z-[10] md:block`
            : `hidden w-[100%] md:w-[80px] lg:w-[250px] bg-[${color}]  fixed  h-[100vh] overflow-auto shadow-[rgb(113 122 131 / 11%) 0px 7px 30px 0px;] transition-[all] z-[10] md:block py-4`
            } `}>
            <div className='flex flex-col justify-center items-center gap-y-8 w-[100%] h-[100%]  '>
                <div >
                    <img src="/logo2.png" alt="" srcSet="" className={`${isSidebarOpen ? 'block' : 'block md:hidden lg:block'
                        }`} />
                </div>
                <div className="flex w-[90%] flex-col py-4 items-center gap-y-4 h-[100%]  overflow-auto">
                    <TopSideBar SideBarFirstLinks={SideBarFirstLinks} />
                    <div className='border-b-2 w-full  border-[white] '></div>
                    <SecondSideBar SideBarSecondLinks={SideBarSecondLinks} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar