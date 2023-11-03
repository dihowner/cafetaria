import CustomButton from '@/components/CustomButton'
import React from 'react'
import { chats } from './../../Utilis/Dummy'
const Chat = () => {
    return (
        <div className='w-[100%] lg:w-[40%] h-[100%] flex flex-col gap-y-4'>
            <h1 className='text-2xl font-semibold'>Messages</h1>
            {chats.map((item) => (
                <div className=" flex flex-col  gap-y-6">
                    <div className="flex gap-x-4 justify-between">
                        <div className="flex gap-x-4">
                            <div className="h-12 w-12 ">
                                <img src={item.image} alt="" className='w-[100%] h-[100%] rounded-full' />
                            </div>
                            <div className=''>
                                <h2 className='text-2xl font-semibold'>{item.name}</h2>
                                <span className='text-[#00000057]'>{item.msg}</span>
                            </div>
                        </div>
                        <div className="">
                            <span className='text-[#00000057]'>{item.time}</span>

                        </div>
                    </div>

                </div>
            ))}
            <div className="w-[100%] flex justify-center items-center ">
                <CustomButton
                    title='view all messages '
                    containerStyles=' bg-[#218B07]  py-4 px-2 flex justify-center items-center text-white rounded-[8px] text-lg w-[50%] '


                />
         </div>
        </div>
    )
}

export default Chat 