import React from 'react'
import TopSideBar from './TopSideBar'
import SecondSideBar from './SecondSideBar'
import { FaTimes } from 'react-icons/fa'

const MSideBar = ({ SideBarFirstLinks,
    SideBarSecondLinks, close }) => {
    return (
        <div className='smallside h-[100vh] w-[70%] sm:w-[50%] py-8  bg-[#218B07] overflow-auto'>
            <div className='flex flex-col gap-y-4 w-[100%] h-[100%]  justify-center items-center'>
                <div className='pl-3 py-2  '>
                    <FaTimes
                        className='closee'
                        onClick={() => {
                            close(false)
                        }}
                    />
                </div>
                <div className="flex w-[90%] flex-col justify-cente items-center gap-y-4 h-[100%] overflow-auto">
                    <TopSideBar SideBarFirstLinks={SideBarFirstLinks} close={() => {
                        close(false)
                    }} />
                    {/* <div className='border-b-2 w-full  border-[white] '></div> */}

                    <SecondSideBar SideBarSecondLinks={SideBarSecondLinks} close={() => {
                        close(false)
                    }} />
                    {/* <SecondSideBar SideBarSecondLinks={SideBarSecondLinks} /> */}

                </div>
                {/* <TopSideBar/>
               <SecondSideBar/> */}
            </div>
        </div>
    )
}

export default MSideBar