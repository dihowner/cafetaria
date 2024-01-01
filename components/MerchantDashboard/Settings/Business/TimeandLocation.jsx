import CustomButton from '@/components/CustomButton'
import Map from '@/components/Map'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const TimeandLocation = () => {
    return (
        <div className='col-span-2 w-full capitalize flex flex-col gap-y-8 order-2 md:order-1'>
            <div className="flex w-full flex-col gap-y-2">
                <Map />
                <label htmlFor="" className='font-bold'>Business location</label>
                <div className="bg-[#83838326] flex items-center gap-x-2 py-4 px-2 text-base w-[80%] sm:w-[70%] md:w-[70%] rounded-xl">
                    <span><HiOutlineLocationMarker /></span>
                    <input type="text" placeholder='Enter manually' className='bg-[transparent] outline-none border-none w-[100%]' />
                </div>
            </div>
            <div className="w-full md:w-[60%] flex flex-col gap-y-4">
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-2xl font-bold w-[30%]'>Monday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-lg font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-2xl font-bold w-[30%]'>Tuesday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-2xl font-bold w-[30%] '>wednesday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-2xl font-bold w-[30%]'>thursday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col  gap-y-3">
                            <p className='text-lg font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-2xl font-bold w-[30%]'>friday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-2xl font-bold w-[30%]'>saturday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-2xl font-bold w-[30%]'>sunday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col  gap-y-3">
                            <p className='text-lg font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-lg font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-12 px-4 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="" className='font-bold'>Business description</label>
                <div className="bg-[#F5F5F5]  w-[100%] sm:w-[70%] md:w-[70%] rounded-xl py-4 px-2 ">
                    <textarea name="" id="" cols="30" rows="8" className='w-full bg-transparent outline-none border-0' placeholder='A short description of your business'></textarea>

                </div>
            </div>

        </div>
    )
}

export default TimeandLocation