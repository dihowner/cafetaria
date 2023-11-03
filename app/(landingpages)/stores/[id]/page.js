'use client'
import EachRest from '@/components/Pages/Resturants/EachRest'
import React, { useState } from 'react'
import { restuarantsDetails } from '@/components/Utilis/Dummy'
import RestaurantMenu from '@/components/RestaurantMenu'
import StoresItem from '@/components/StoresItem'


const page = ({ params }) => {
  // console.log(params)
  const [isOpenModal,setIsOpenModal] =useState(false)
  const openModal=()=>{
    setIsOpenModal(true)
  }
  return (
    <div>
  
     <StoresItem/>
    </div>
  )
}

export default page
