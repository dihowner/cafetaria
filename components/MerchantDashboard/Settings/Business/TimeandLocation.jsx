import CustomButton from '@/components/CustomButton'
import Map from '@/components/Map'
import axios from 'axios';
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'

const TimeandLocation = () => {
    const { auth } = useSelector((state) => state.rootReducers);

    const [openingClosingTimes, setOpeningClosingTimes] = useState({
        Sunday: { openingTime: "", closingTime: "" },
        Monday: { openingTime: "", closingTime: "" },
        Tuesday: { openingTime: "", closingTime: "" },
        Wednesday: { openingTime: "", closingTime: "" },
        Thursday: { openingTime: "", closingTime: "" },
        Friday: { openingTime: "", closingTime: "" },
        Saturday: { openingTime: "", closingTime: "" },
    });

    const handleTimeChange = (day, timeType, newTime) => {
        setOpeningClosingTimes((prevTimes) => ({
            ...prevTimes,
            [day]: {
                ...prevTimes[day],
                [timeType]: newTime,
            },
        }));
    };
    console.log(openingClosingTimes)
    const updatedBusinessTime = async (e) => {
        e.preventDefault()
        await axios.put('https://cafeteria-ekep.onrender.com/api/vendor/update-business-hour', openingClosingTimes, {
            headers: {
                'Content-Type': 'multipart/formData',
                Accept: 'Application/json',
                Authorization: `Bearer ${auth.token}`,
            },
        })

            .then(response => {
                console.log('Success:', response.data);
                // You can handle the response from the backend here if needed
            })
            .catch(error => console.error('Error:', error));
    }
    return (
        <div className=''>
            <form onSubmit={updatedBusinessTime} className="w-full md:w-[60%] flex flex-col gap-y-4">
                {Object.keys(openingClosingTimes).map((day) => (
                    <div className="flex flex-col md:flex-row w-full gap-x-6" key={day}>
                        <h4 className='text-sm font-bold w-[30%]'>{day}</h4>
                        <div className="flex gap-x-6 w-[70%]">
                            <div className="flex flex-col gap-y-3 ">
                                <p className='text-sm font-semibold'>open</p>
                                <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                    <input
                                        type="time"
                                        value={openingClosingTimes[day].openingTime}
                                        onChange={(e) => handleTimeChange(day, 'openingTime', e.target.value)}
                                        step='1800'
                                        className='bg-[transparent]  h-full border-0 outline-none text-sm'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <p className='text-sm font-semibold'>close</p>
                                <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                    <input
                                        type="time"
                                        value={openingClosingTimes[day].closingTime}
                                        onChange={(e) => handleTimeChange(day, 'closingTime', e.target.value)}
                                        step='1800'
                                        className='bg-[transparent]  h-full border-0 outline-none'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Button
                    sx={{
                        backgroundColor: '#218B07',
                        color: '#ffffff',
                        fontSize: '.8rem',
                        '&:hover': {
                            backgroundColor: '#218B07',
                        },
                    }}
                    type='submit'
                > Update</Button>
                {/* <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Monday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Tuesday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>wednesday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Thursday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Friday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Saturday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Sunday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div> */}
            </form>
        </div>
    )
}

export default TimeandLocation