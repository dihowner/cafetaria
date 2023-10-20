import React from 'react'
import Link from 'next/link'
// import Logo from '../../public/'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex justify-center items-center w-[100%] mt-6'>
      <div className='flex justify-between items-center w-[90%]'>
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
          <ul className='flex gap-x-4 text-lg'>
            <li className='font-medium'>
              <Link href=''> All stores</Link>
            </li>
            <li className=' font-medium'>
              <Link href=''> Resturants</Link>
            </li>
            <li className=' font-medium'>
              <Link href=''>Groceries</Link>
            </li>
            <li className=' font-medium'>
              <Link href=''>About</Link>
            </li>
            <li className=' font-medium'>
              <Link href=''>Faq</Link>
            </li>
            <li className=' font-medium'>
              <Link href=''>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='loginandsigup flex gap-x-4 justify-center items-center'>
          <p className='login font-semibold text-lg'>Login</p>
          <p className='signup bg-[#218B07] flex justify-center align-center text-white rounded-full py-2 w-[100px] text-2xl '>
            Sign up
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
