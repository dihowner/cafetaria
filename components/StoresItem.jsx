import React from 'react'
import { StoresItem } from './Utilis/Dummy'
const StoresItems = () => {
    return (
        <div className='w-full flex justify-center items-center flex-col gap-y-8 pb-8'>
            <div className="w-full eachrest flex flex-col justify-center items-center min-h-[300px] p-6 "
                style={{
                    backgroundSize: 'cover', // Optional: Adjust the background image size
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <h1 className='font-[700] text-4xl text-white'>Currently Open</h1>
            </div>
            <div className="width flex gap-x-8 flex-col md:flex-row">

                <div className='flex flex-col gap-y-4 w-[100%] md:w-[20%]'>
                    <div className=" flex flex-col gap-y-4 w-full">
                        <h1 className='font-[600] text-2xl'>Categories</h1>
                        {/* <p className='font-[600] text-xl text-[#5B5B5B]'>({data})</p> */}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        {/* <div className="bg-[black] text-white rounded-md w-[100px]">
                          <CgSortAz className='text-[2rem]' />
                      </div> */}
                        <ul className='flex flex-col gap-y-2'>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>detergent</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Food supplement</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Bathing soap</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Gift box</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Toiletries</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Toiletries</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Toiletries</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Toiletries</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Toiletries</li>
                            <li className='flex items-center gap-x-2'><div className='h-[15px] w-[15px] rounded-[100%] bg-[#D9D9D9]'></div>Toiletries</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[100%] md:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 ">
                    {StoresItem.map((item,index) => (
                        <div className="border flex flex-col p-3 w-full gap-y-4">
                            <div className="w-full">
                                <img src={item.image} alt="" srcset="" className='object-fit w-[100%]' />
                            </div>
                            <div className=" flex justify-between items-center">
                                <p>{item.price}</p>
                                <span className=" bg-[#222222D4] text-white justify-center items-center flex h-8 w-8 rounded-full text-lg">
                                {item.Icon}
                              </span>
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StoresItems