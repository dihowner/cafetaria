'use client'
import Account from '@/components/ClientDasboard/Settings/Account'
import Security from '@/components/ClientDasboard/Settings/Security'
import Link from 'next/link'
import React from 'react'
// Link

const page = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-y-8'>
      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 width gap-x-4'>
        <Account />
        <Security />
      </div>
    </div>
  )
}

export default page