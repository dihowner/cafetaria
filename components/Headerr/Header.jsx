import React from 'react'
import Link from 'next/link'
// import Logo from '../../public/'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex justify-center items-center w-[100%]  bg-[#F6F6F6]'>
      <div className='flex justify-between items-center width '>
        <div className='logo'>
          <Image
            src='/cafetarialogo.png'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
          {/* <img src={Logo} alt='Logo' /> */}
        </div>
        <div className='menu'>
          <ul className='flex gap-x-6 text-xl'>
            <li className='font-[600]'>
              <Link href=''> Home</Link>
            </li>
            <li className=' font-[600]'>
              <Link href=''> Resturants</Link>
            </li>
            <li className=' font-[600]'>
              <Link href=''>Groceries</Link>
            </li>
            <li className=' font-[600]'>
              <Link href=''>About</Link>
            </li>
          </ul>
        </div>
        <div className='loginandsigup flex gap-x-4 justify-center items-center'>
          <p className='login font-semibold text-lg'>Login</p>
          <p className='signup bg-[#FF9C06] flex justify-center align-center text-white rounded-full py-2 w-[100px] text-2xl '>
            Sign up
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
