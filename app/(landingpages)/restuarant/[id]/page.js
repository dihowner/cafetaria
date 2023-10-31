import EachRest from '@/components/Pages/Resturants/EachRest'
import React from 'react'
import { restuarantsDetails } from '@/components/Utilis/Dummy'

const page = ({ params }) => {
  // console.log(params)
  return (
    <div>
      {params.id}
      <EachRest restuarantsDetails={restuarantsDetails} />
    </div>
  )
}

export default page
