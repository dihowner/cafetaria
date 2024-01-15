'use client'
import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRouter, usePathname } from 'next/navigation'
import CustomButton from './CustomButton'
const Headerandsearch = () => {
    const router = useRouter()
    const pathname = usePathname();

    const redirect_url = () => {
        console.log("PATH_URL", pathname);
        pathname == '/stores' ? router.push('/restuarant') : router.push('/stores');
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='width flex justify-between flex-col md:flex-row gap-y-4 items-center w-[100%] gap-x-6 z-10'>
                <div className='flex gap-x-4 w-[100%] md:w-[50%]  '>
                    <CustomButton
                        title='Restuarant'
                        containerStyles={` ${pathname === '/restuarant'
                            ? 'bg-[#FF9C06] text-white py-4 px-2 flex justify-center items-center text-[#FF9C06] rounded-[8px] text-lg w-[40%]'
                            : 'bg-[white]  py-4 px-2 flex justify-center items-center text-[#FF9C06] rounded-[8px] text-lg w-[40%] border'
                            }`}
                        Icon={<GiKnifeFork />}
                        disable_btn={pathname === '/restuarant' ? true : false}
                        handleClick={redirect_url}

                    />

                    <CustomButton
                        title='Groceries'
                        containerStyles={` ${pathname === '/stores'
                            ? 'bg-[#FF9C06] text-white py-4 px-2 flex justify-center items-center text-[#FF9C06] rounded-[8px] text-lg w-[40%]'
                            : 'bg-[white] py-4 px-2 flex justify-center items-center text-[#FF9C06] rounded-[8px] text-lg w-[40%] border'
                            }`}
                        Icon={<AiOutlineShoppingCart />}

                        handleClick={redirect_url}

                        disable_btn={pathname === '/stores' ? true : false}
                    />
                </div>
                <div className="flex md:justify-end w-[100%] md:w-[50%]">
                    <div className='bg-[#83838326] flex items-center justify-end gap-x-2 py-4 px-2 text-base w-[80%] rounded-[8px]'>
                        <input
                            type='text'
                            placeholder='search anything here'
                            className='bg-[transparent] outline-none border-none w-[100%]'
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Headerandsearch