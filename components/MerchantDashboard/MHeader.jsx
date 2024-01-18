import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import MSideBar from '../MSideBar'
import { BsWechat, BsChatDots } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
const MHeader = ({ SideBarFirstLinks,
  SideBarSecondLinks,color }) => {
  const [smallscreen, setSmallscreen] = useState(false)
  const { Details } = useSelector((state) => state.rootReducers)
  return (
    <div className='md:hidden bg-[#218B07] flex items-center justify-between fixed z-[100] w-[100%] h-[70px] shadow-md  p-4'>
      <FaBars
        className='lg:hidden text-xl pointer text-white'
        onClick={() => setSmallscreen(!smallscreen)}
      />

      <div className="flex justify-center items-center gap-x-4 w-[40%]">
        <div className="flex justify-center items-center gap-x-2">
          <div className="flex justify-center items-center bg-[#FFFFFF5E]  py-2 px-2 text-lg text-[#FFFFFF] min-h-12">
            <BsWechat />
          </div>
          <div className=" flex justify-center items-center bg-[#FFFFFF5E] py-2 px-2 text-lg text-[#FFFFFF] min-h-12">
            <BsChatDots />
          </div>
        </div>
        <div className=" flex justify-center items-center h-12 w-16 ">
          {Details?.Details?.user?.store_image === null || Details?.Details?.user?.store_image === undefined ? <img
            src='/Images/Rectangle 86.png'
            alt='store image'
            className='w-full h-full'
          /> : <img
            src={Details?.Details?.user?.store_image}
            alt='store image'
            className='w-full h-full'
          />}
        </div>
      </div>
      {smallscreen && <MSideBar close={setSmallscreen} color={color}
        SideBarFirstLinks={SideBarFirstLinks}
        SideBarSecondLinks={SideBarSecondLinks} />}
    </div>
  )
}

export default MHeader