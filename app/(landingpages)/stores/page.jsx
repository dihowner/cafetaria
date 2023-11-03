import Headerandsearch from '@/components/Headerandsearch'
import AllStore from '@/components/Pages/Stores/AllStores'
import React from 'react'

const page = () => {
  return (
    <div className='py-4'>
      <Headerandsearch />
      <AllStore/>
    </div>
  )
}

export default page