import React from 'react'

const page = () => {
  const status = [
    { value: true, status: 'Active' },
    { value: false, status: 'Not Active' },
  ]
  return (
    <div className='flex justify-center flex-col items-center w-full'>
      {' '}
      <form
        action=''
        className='width flex flex-col gap-y-8 justify-center items-center '
      >
        <div className=' w-full grid grid-cols-2 gap-x-4'>
            
        </div>
      </form>
    </div>
  )
}

export default page
