'use client'

import React, { useState } from 'react'
import Link from 'next/link'
// import Logo from '../../public/'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ImCancelCircle } from 'react-icons/im'
const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='w-[100%] flex justify-center items-center bg-[#F6F6F6] '>
      <div className='flex width justify-between items-center'>
        <Link href='/' className='logo w-[20%]'>
          <Image
            src='/cafetarialogo.png'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <ul className=' gap-x-3 hidden md:flex'>
          <li>
            <Link
              href='/'
              className='font-medium hover:font-bold ease-in duration-300'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/restuarant'
              className='font-medium hover:font-bold ease-in duration-300'
            >
              Resturants
            </Link>
          </li>
          <li>
            <Link
              href='/exhibitors'
              className='font-medium hover:font-bold ease-in duration-300'
            >
              Stores
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='font-medium hover:font-bold ease-in duration-300'
            >
              About
            </Link>
          </li>
        </ul>
        <div className='loginandsigup hidden md:flex gap-x-4 justify-center items-center'>
          <Link href='' className='login font-semibold text-lg'>Login</Link>
          <Link href='' className='signup bg-[#FF9C06] flex justify-center align-center text-white rounded-full py-2 w-[100px]'>
            Sign up
          </Link>
        </div>
        <RxHamburgerMenu
          className='inline-block md:hidden hamburger text-2xl '
          onClick={() => {
            setToggle(false)
          }}
        />{' '}
        {toggle && (
          <div className="mediumscreen flex justify-center">
            <ul className='flex gap-y-2 flex-col items-center justify-center'>
              <ImCancelCircle
                onClick={() => {
                  setToggle(false)
                }}
                className='close'
              />
              <li>
                <Link
                  href='/'
                  className='font-medium hover:font-bold ease-in duration-300'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/restuarant'
                  className='font-medium hover:font-bold ease-in duration-300'
                >
                  Resturants
                </Link>
              </li>

              <li>
                <Link
                  href='/'
                  className='font-medium hover:font-bold ease-in duration-300'
                >
                  stores
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='font-medium hover:font-bold ease-in duration-300'
                >
                  About
                </Link>
              </li>
            </ul>
            <div className='loginandsigup gap-y-2 justify-center items-center '>
              <Link href='' className='login font-semibold text-lg'>Login</Link>
              <Link href='' className='signup bg-[#FF9C06] flex justify-center align-center text-white rounded-full  w-[100px]'>
                Sign up
              </Link>
            </div>
          </div>

        )}
      </div>
    </div >




  )
}

export default Header
