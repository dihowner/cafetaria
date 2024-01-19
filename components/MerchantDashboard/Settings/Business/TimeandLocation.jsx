import CustomButton from '@/components/CustomButton'
import Map from '@/components/Map'
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import { toast } from 'react-toastify';

const TimeandLocation = () => {
    const { auth } = useSelector((state) => state.rootReducers);
    const { Details } = useSelector((state) => state.rootReducers)
    const vendorDetails = Details?.Details?.businessHour
    const [loading, setisLoading] = useState(false)
    const [editMode, setEditMode] = useState(false);
    const handleEditClick = () => {
        setEditMode(true);
    };
    const handleCancelClick = () => {
        setEditMode(false);
    };

    const [vendordetails] = useVendordetailsMutation()

    const initialBusinessHours = {
        sunday: { openingTime: "", closingTime: "" },
        monday: { openingTime: "", closingTime: "" },
        tuesday: { openingTime: "", closingTime: "" },
        wednesday: { openingTime: "", closingTime: "" },
        thursday: { openingTime: "", closingTime: "" },
        friday: { openingTime: "", closingTime: "" },
        saturday: { openingTime: "", closingTime: "" },
    };

    const [openingClosingTimes, setOpeningClosingTimes] = useState(initialBusinessHours);

    useEffect(() => {
        if (vendorDetails) {
            setOpeningClosingTimes((prevTimes) => {
                const updatedTimes = { ...prevTimes };
                Object.keys(vendorDetails).forEach((day) => {
                    const lowercasedDay = day.toLowerCase();
                    updatedTimes[lowercasedDay] = {
                        openingTime: vendorDetails[day]?.openingTime || "",
                        closingTime: vendorDetails[day]?.closingTime || "",
                    };
                });
                return updatedTimes;
            });
        }
    }, [vendorDetails]);

    const handleTimeChange = (day, timeType, newTime) => {
        setOpeningClosingTimes((prevTimes) => ({
            ...prevTimes,
            [day]: {
                ...prevTimes[day],
                [timeType]: newTime,
            },
        }));
    };


    //   const initialBusinessHoursRef = useRef({
    //         sunday: { openingTime: "", closingTime: "" },
    //         monday: { openingTime: "", closingTime: "" },
    //         tuesday: { openingTime: "", closingTime: "" },
    //         wednesday: { openingTime: "", closingTime: "" },
    //         thursday: { openingTime: "", closingTime: "" },
    //         friday: { openingTime: "", closingTime: "" },
    //         saturday: { openingTime: "", closingTime: "" },
    //     });

    //     useEffect(() => {
    //         if (vendorDetails) {
    //             Object.keys(vendorDetails).forEach((day) => {
    //                 initialBusinessHoursRef.current[day.toLowerCase()] = {
    //                     openingTime: vendorDetails[day]?.openingTime || "",
    //                     closingTime: vendorDetails[day]?.closingTime || "",
    //                 };
    //             });
    //         }
    //     }, [vendorDetails]);

    //     const [openingClosingTimes, setOpeningClosingTimes] = useState(initialBusinessHoursRef.current);

    //     const handleTimeChange = (day, timeType, newTime) => {
    //         setOpeningClosingTimes((prevTimes) => ({
    //             ...prevTimes,
    //             [day]: {
    //                 ...prevTimes[day],
    //                 [timeType]: newTime,
    //             },
    //         }));
    //     };



    // console.log(openingClosingTimes)
    const fetchDetails = async () => {
        try {
            const response = await vendordetails(auth?.token).unwrap()
            dispatch(setDetails(response))
        } catch (err) {
            if (err.status === 401) {
                dispatch(logout())

            } else {
                toast.error(err.error)
                setError(err.error)
            }
        }
    }
    const updatedBusinessTime = async (e) => {
        e.preventDefault()
        setisLoading(true)
        await axios.put('https://cafeteria-ekep.onrender.com/api/vendor/update-business-hour', openingClosingTimes, {
            headers: {
                'Content-Type': 'Application/json',
                Accept: 'Application/json',
                Authorization: `Bearer ${auth.token}`,
            },
        })

            .then(response => {
                setisLoading(false)
                toast.success(response.data.message)
                dispatch(setDetails(response.data))
                fetchDetails()
                handleCancelClick()

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
                                        disabled={!editMode}
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
                                        disabled={!editMode}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="w-full flex items-center gap-x-4">
                    {!editMode ? (
                        <div
                            className='bg-[#218B07] text-white flex justify-center items-center py-2 px-2 rounded-[5px] gap-x-4 w-1/2 text-sm'
                            onClick={handleEditClick}
                        >Edit</div>
                    ) : (
                        <>
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
                            > {loading ? 'loading' : 'update'}</Button>

                            <Button
                                sx={{
                                    backgroundColor: '#218B07',
                                    color: '#ffffff',
                                    fontSize: '.8rem',
                                    '&:hover': {
                                        backgroundColor: '#218B07',
                                    },
                                }}
                                onClick={handleCancelClick}

                            > cancel</Button>

                        </>
                    )}
                </div>

            </form>
        </div>
    )
}

export default TimeandLocation