'use client'
import CustomButton from '@/components/CustomButton'
import AllResturant from '@/components/Pages/Resturants/AllResturants'
import Mostvisited from '@/components/Pages/Resturants/Mostvisited'
import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRouter, usePathname } from 'next/navigation'
import Headerandsearch from '@/components/Headerandsearch'
const page = () => {

  return (
    <div className='py-4'>
      <Headerandsearch/>
      <Mostvisited />
      <AllResturant />
    </div>
  )
}

export default page
