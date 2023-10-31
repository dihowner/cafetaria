'use client'
import EachRest from '@/components/Pages/Resturants/EachRest'
import React, { useState } from 'react'
import { restuarantsDetails } from '@/components/Utilis/Dummy'
import RestaurantMenu from '@/components/RestaurantMenu'

const page = ({ params }) => {
  // console.log(params)
  const [isOpenModal,setIsOpenModal] =useState(false)
  const openModal=()=>{
    setIsOpenModal(true)
  }
  return (
    <div>
      <EachRest restuarantsDetails={restuarantsDetails} open={openModal} />
      <RestaurantMenu isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
    </div>
  )
}

export default page
