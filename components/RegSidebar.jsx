import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ImCancelCircle } from 'react-icons/im'
const RegSidebar = ({setToggle,toggle}) => {
  return (
    <div>
          {toggle && (
              <div className='mediumscreenn gap-y-6'>
                  <Link href='/' className='logo w-[50%]'>
                      <Image
                          src='/cafetarialogo.png'
                          alt='logo'
                          width={118}
                          height={18}
                          className='object-contain'
                      />
                  </Link>
                  <ul className='flex gap-y-6 flex-col text-lg'>
                      <ImCancelCircle
                          onClick={() => {
                              setToggle(false)
                          }}
                          className='closee'
                      />
                      <li>
                          <Link
                              href='/'
                              className='font-medium hover:font-bold ease-in duration-300'
                              onClick={() => {
                                  setToggle(false)
                              }}
                          >
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link
                              href='/restuarant'
                              className='font-medium hover:font-bold ease-in duration-300'
                              onClick={() => {
                                  setToggle(false)
                              }}
                          >
                              Resturants
                          </Link>
                      </li>

                      <li>
                          <Link
                              href='/'
                              className='font-medium hover:font-bold ease-in duration-300'
                              onClick={() => {
                                  setToggle(false)
                              }}
                          >
                              stores
                          </Link>
                      </li>
                      <li>
                          <Link
                              href='/'
                              className='font-medium hover:font-bold ease-in duration-300'
                              onClick={() => {
                                  setToggle(false)
                              }}
                          >
                              About
                          </Link>
                      </li>
                      <li>
                          {' '}
                          <Link
                              href='/client/login'
                              className='login font-semibold text-lg'
                              onClick={() => {
                                  setToggle(false)
                              }}
                          >
                              Login
                          </Link>
                      </li>
                      <li>
                          <Link
                              href='/client/signup'
                              className='signup bg-[#218B07] flex justify-center align-center text-white rounded-sm  w-[100px] py-4 '
                              onClick={() => {
                                  setToggle(false)
                              }}
                          >
                              Sign up
                          </Link>
                      </li>
                  </ul>
              </div>
          )}
    </div>
  )
}

export default RegSidebar