import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
  return <div className='flex flex-col justify-center items-center bg-[#F6F6F6] w-[100%] '>
    <div className="width flex flex-col gap-y-4 py-8">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4">
        <div className="flex flex-col gap-y-4">
          <h3 className='text-[1.3rem] font-[600]'>
            Need Help?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
            <ul className=' flex flex-col gap-y-2 capitalize'>
              <li className='text-[#218B07]'>help center</li>
              <li className='text-[#218B07]'>how to shop on cafeteria</li>
              <li className='text-[#218B07]'>delivery option and timeless</li>
              <li className='text-[#218B07]'>Report a vendor</li>
            </ul>
            <ul className='capitalize flex flex-col gap-y-2 '>
              <li className='text-[#218B07]'>contact us</li>
              <li className='text-[#218B07]'>how to become a vendor</li>
              <li className='text-[#218B07]'>cooperateand bulk purchases</li>
              <li className='text-[#218B07]'>dispute resolution policy</li>
            </ul>
          </div>

        </div>
        <div className=" flex flex-col gap-y-4">
          <h3 className='text-[1.3rem] font-[600]'>
            About cafeteria
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 ">
            <ul className='capitalize flex flex-col gap-y-2 '>
              <li className='text-[#218B07]'>About us</li>
              <li className='text-[#218B07]'> cafeteria express</li>
              <li className='text-[#218B07]'>privacy notice</li>
              <li className='text-[#218B07]'>cafeteria payment guidelines</li>
            </ul>
            <ul className='capitalize flex flex-col gap-y-2 '>
              <li className='text-[#218B07]'>cafeteria career</li>
              <li className='text-[#218B07]'>terms and conditions</li>
              <li className='text-[#218B07]'>store credit terms and condition</li>
              <li className='text-[#218B07]'>cafeteria flash sales</li>
            </ul>
          </div>

        </div> <div className="flex flex-col  gap-y-4">
          <h3 className='text-[1.3rem] font-[600] capitalize'>
            make money with  Cafeteria
          </h3>
          <ul className='capitalize flex flex-col gap-y-2 '>
            <li className='text-[#218B07]'>    Sell on Cafeteria</li>
            <li className='text-[#218B07]'> Become a Sales Consultant</li>
            <li className='text-[#218B07]'> Become a logistics Provider</li>
            <li className='text-[#218B07]'> Join our Training </li>
          </ul>
        </div>
        <div className="flex flex-col  gap-y-4">
          <h3 className='text-[1.3rem] font-[600] capitalize'>
            New  to Cafetaria?
          </h3>
          <p className='capitalize text-[#218B07]'>Subscribe to our newsletter to  </p>
          <p className='capitalize  text-[#218B07]'>get updates on our latest offers</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full flex-col lg:flex-row gap-y-4">
        <div className="flex gap-x-3">
          <Link href='' className='bg-white p-2 flex justify-center items-center rounded-[5px] font-semibold'>
            Sign In
          </Link>
          <Link href='' className='bg-[#218B07] p-2 flex justify-center items-center rounded-[5px] text-white'>
            Sign up
          </Link>
        </div>
        <div className="flex gap-x-4">
          <Link href=''>
            <FaFacebook className='text-[1.5rem]' />
          </Link>
          <Link href='' className='text-[1.5rem]'>
            < AiFillTwitterCircle />
          </Link>
          <Link href='' className='text-[1.5rem]'>
            <AiFillInstagram />
          </Link>
          <Link href='' className='text-[1.5rem]'>
            <FaFacebook />
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-[#218B07] py-6 w-full text-center text-white font-semibold text-lg">
      Cafeteria.com.ng 2023 all rights reserved
    </div>
  </div>
}

export default Footer
