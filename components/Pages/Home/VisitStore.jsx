import Link from 'next/link'
import React from 'react'
// Link
const VisitStore = () => {
    return (
        <div className='w-full flex justify-center items-center my-2'>
            <div className="width grid grid-cols-1  md:grid-cols-2 gap-x-6 gap-y-4  ">
                <div className="flex flex-col justify-center w-[100%]  gap-y-4 ">
                    <h2 className='text-[3rem] md:text-[3rem] lg:text-[4.5rem] font-[800]'>Over a thousand <span className='bg-black text-white rounded-full p-2'>groceries</span> stores</h2>
                 
                    <p className='font-[500]'>There are over a thousand groceries store to order from with the
                        ability to deliver fast.</p>
                    <Link href='' className='bg-[#FF9C06] w-[200px] p-2 flex justify-center items-center rounded-full text-white'>
                        Visit stores
                    </Link>
                </div> 
                <div className="w-full flex justify-center items-center">
                    <img src="/Images/Rectangle 85.png" alt="imgae" className='w-[100%] md:w-[100%]' />
                </div>
            </div>
        </div>
    )
}

export default VisitStore