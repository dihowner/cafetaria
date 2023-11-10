import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import MSideBar from '../MSideBar'

const MHeader = ({ SideBarFirstLinks,
  SideBarSecondLinks,color }) => {
  const [smallscreen, setSmallscreen] = useState(false)
  return (
    <div className='md:hidden bg-[#218B07] flex items-center justify-between fixed z-[100] w-[100%] h-[70px] shadow-md  p-4'>
      <FaBars
        className='lg:hidden text-xl pointer text-white'
        onClick={() => setSmallscreen(!smallscreen)}
      />
      {smallscreen && <MSideBar close={setSmallscreen} color={color}
        SideBarFirstLinks={SideBarFirstLinks}
        SideBarSecondLinks={SideBarSecondLinks} />}
    </div>
  )
}

export default MHeader