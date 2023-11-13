'use client'

import React, { useState,useEffect } from 'react'
import Link from 'next/link'
// import Logo from '../../public/'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ImCancelCircle } from 'react-icons/im'
import { usePathname } from 'next/navigation'
const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const threshold = 100 // Adjust this value as needed
      if (scrollTop > threshold) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const pathname =usePathname()
  return (
    <div className={`${isFixed ? 'w-[100%] flex justify-center items-center bg-[#F6F6F6] py-3 transition-all duration-75 fixed z-[999]' : 'w-[100%] flex justify-center items-center bg-[#F6F6F6] py-3 transition-all duration-75 '}`}>
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
        <ul className=' gap-x-3 text-lg hidden md:flex'>
          <li>
            <Link
              href='/'
              className={`${pathname === '/' ? 'font-bold' : 'font-medium hover:font-bold ease-in duration-300'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/restuarant'
              className={`${pathname === '/restuarant' ? 'font-bold' : 'font-medium hover:font-bold ease-in duration-300'}`}
            >
              Resturants
            </Link>
          </li>
          <li>
            <Link
              href='/stores'
              className={`${pathname === '/stores' ? 'font-bold' : 'font-medium hover:font-bold ease-in duration-300'}`}
            >
              Groceries
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className={`${pathname === '/about' ? 'font-bold' : 'font-medium hover:font-bold ease-in duration-300'}`}
            >
              About
            </Link>
          </li>
        </ul>
        <div className='loginandsigup hidden md:flex gap-x-4 justify-center items-center'>
          <Link href='/client/login' className='login font-semibold text-lg'>Login</Link>
          <Link href='/client/signup' className='signup bg-[#FF9C06] flex justify-center items-center text-white rounded-[8px] py-2 w-[100px]'>
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
            <ul className='flex gap-y-2 flex-col text-lg items-center justify-center'>
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
