'use client'

import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { useGetMealDetailsMutation } from '@/redux/Vendor/getMealApiSlice'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import UploadEdit from '@/components/UploadEdit'
import Button from '@mui/material/Button'
import EditInput from '@/components/EditInput'
import AppLoader from '@/components/AppLoader'
import { BiMoneyWithdraw } from 'react-icons/bi'

const Editmeal = ({ mealId, details, DetailsLoading }) => {
    const router = useRouter()
    const status = [
        { value: true, status: 'Active' },
        { value: false, status: 'Not Active' },
    ]

    const NameRef = useRef(null)
    const descriptionRef = useRef(null)
    const is_availableRef = useRef(null)
    const priceRef = useRef(null)
    const styrofoamPriceRef = useRef(null)
    const plasticPlatePriceRef = useRef(null)
    const is_requiredstyrofoam = useRef(null)
    const is_requiredplasticPlate = useRef(null)
    const mealImage = useRef(null)
    const { updateMeals, loading } = mealsfetch()
    const update = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('description', descriptionRef?.current?.value)
        formData.append('mealImage', mealImage.current.files[0]) // A ssuming mealImage is a File object
        formData.append('name', NameRef?.current?.value)
        formData.append('is_available', is_availableRef?.current?.value)
        formData.append('unit_price', parseInt(priceRef?.current?.value))

        const Packaging = {
            styrofoam: {
                price: styrofoamPriceRef?.current?.value,
                is_required: is_requiredstyrofoam?.current?.value,
            },
            plastic_plate: {
                price: plasticPlatePriceRef?.current?.value,
                is_required: is_requiredplasticPlate?.current?.value,
            },
        }
        formData.append('packaging', JSON.stringify(Packaging))
        await updateMeals(formData, mealId)
        // console.log(formData)
    }
    return (
        <div className='w-full justify-center items-center flex flex-col gap-y-8'>
            {DetailsLoading ? (
                <AppLoader color={'#5f8357'} loading={DetailsLoading} />
            ) : null}
            {loading ? <AppLoader color={'#5f8357'} loading={loading} /> : null}
            <div className='width'>
                <div className='flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg w-[60%] md:w-[20%]'>
                    <span className='text-xl'>
                        <BiMoneyWithdraw />
                    </span>
                    <span>Edit Meal</span>
                </div>
            </div>
            <div className='flex justify-center flex-col items-center width'>
                <form
                    action=''
                    className='w-full flex flex-col gap-y-8 justify-center items-center '
                    onSubmit={update}
                >
                    <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3'>
                        <div className=''>
                            <UploadEdit reff={mealImage} defaultValue={details?.image} />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <EditInput
                                title={'Meal Name'}
                                type={'text'}
                                reff={NameRef}
                                defaultValue={details?.name}
                            />
                            <EditInput
                                title={'Description'}
                                type={'text'}
                                reff={descriptionRef}
                                defaultValue={details?.description}
                            />
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='text-sm'>Availability</label>
                                <select
                                    defaultValue={details?.isAvailable}

                                    ref={is_availableRef}
                                    className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] text-sm outline-none'
                                >
                                    <option value='' disabled selected>
                                        Select Availability
                                    </option>
                                    {status.map((item, index) => (
                                        <option key={index} value={item.value} className='capitalize text-sm'>
                                            {item.status}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <EditInput
                                title={'Price'}
                                type={'number'}
                                reff={priceRef}
                                defaultValue={details?.unitPrice}
                            />
                            <label htmlFor='' className='text-sm'>
                                Packaging
                            </label>
                            <div className='w-full'>
                                <div className='grid grid-cols-2 gap-x-2 items-center'>
                                    <p className='text-sm'>Stryofoam</p>
                                    <div className='flex gap-x-2'>
                                        <EditInput
                                            title={'Price'}
                                            type={'number'}
                                            reff={styrofoamPriceRef}
                                            defaultValue={details?.packaging?.styrofoam?.price}
                                        />

                                        <div className='flex flex-col w-full'>
                                            <label htmlFor='' className='text-sm'>Avaliability</label>
                                            <select
                                                ref={is_requiredstyrofoam}
                                                defaultValue={details?.packaging?.stryrofoam?.is_required}
                                                className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] text-sm outline-none'
                                            >
                                                {status.map((item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item.value}
                                                        className='capitalize text-sm'
                                                    >
                                                        {item.status}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-x-2 items-center'>
                                    <p className='text-sm'>Plastic Plate</p>
                                    <div className='flex gap-x-2'>
                                        <EditInput
                                            title={'Price'}
                                            type={'number'}
                                            reff={plasticPlatePriceRef}
                                            defaultValue={details?.packaging?.plastic_plate?.price}
                                        />

                                        <div className='flex flex-col w-full'>
                                            <label htmlFor='' className='text-sm'>Avaliability</label>
                                            <select
                                                ref={is_requiredplasticPlate}
                                                defaultValue={
                                                    details?.packaging?.plastic_plate?.is_required
                                                }
                                                className='flex gap-x-2 items-center px- py-4 border-2 rounded-[8px] text-sm outline-none'
                                            >
                                                {status.map((item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item.value}
                                                        className='capitalize text-sm'
                                                    >
                                                        {item.status}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-end w-full'>
                        <Button
                            sx={{
                                backgroundColor: '#218B07',
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#218B07',
                                },
                            }}
                            type='submit'
                        >
                            {loading ? 'Editing' : '  Update Meal'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Editmeal


// const [details, setDetails] = useState(null)
// const { getDetails, DetailsLoading } = mealsfetch()
// const mealId = params
// // console.log(mealId)
// useEffect(() => {
//     getDetails(setDetails, mealId)
// }, [mealId])