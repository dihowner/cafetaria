'use client'

import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import { useGetMealDetailsMutation } from '@/redux/Vendor/getMealApiSlice'
import React, { useEffect, useRef, useState } from 'react'
// import { useState } from 'react'
import { useRouter } from 'next/navigation'
import UploadEdit from '@/components/UploadEdit'
import Button from '@mui/material/Button'
import EditInput from '@/components/EditInput'
import AppLoader from '@/components/AppLoader'
import { LiaTimesSolid } from 'react-icons/lia'

import { BiMoneyWithdraw } from 'react-icons/bi'

const Editmeal = ({ mealId, details, DetailsLoading }) => {
    const router = useRouter()
    const status = [
        { value: true, status: 'Active' },
        { value: false, status: 'Not Active' },
    ]
    const [store_image, setStore_image] = useState()
    const [is_available, setIs_available] = useState()
    const [is_requiredstyrofoam, setIs_requiredstyrofoam] = useState()
    const [is_requiredplasticPlate, setIs_requiredplasticPlate] = useState()
    const NameRef = useRef(null)
    const descriptionRef = useRef(null)
    const is_availableRef = useRef(null)
    const priceRef = useRef(null)
    const styrofoamPriceRef = useRef(null)
    const plasticPlatePriceRef = useRef(null)
    // const is_requiredstyrofoam = useRef(null)
    // const is_requiredplasticPlate = useRef(null)
    const mealImage = useRef(null)
    const { updateMeals, loading } = mealsfetch()
    console.log(typeof (details?.isAvailable))
    const update = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        const fileimage = store_image === undefined || store_image === null ? details?.image : store_image
        formData.append('description', descriptionRef?.current?.value)
        formData.append('mealImage', fileimage) // A ssuming mealImage is a File object
        formData.append('name', NameRef?.current?.value)
        formData.append('is_available', is_available === undefined ? details?.isAvailable : is_available)
        formData.append('unit_price', parseInt(priceRef?.current?.value))

        const Packaging = {
            styrofoam: {
                price: styrofoamPriceRef?.current?.value,
                is_required: is_requiredstyrofoam === undefined ? details?.packaging?.stryrofoam?.is_required : is_requiredstyrofoam,
            },
            plastic_plate: {
                price: plasticPlatePriceRef?.current?.value,
                is_required: is_requiredplasticPlate === undefined ? details?.packaging?.stryrofoam?.is_required : is_requiredplasticPlate,
            },
        }
        formData.append('packaging', JSON.stringify(Packaging))
        await updateMeals(formData, mealId, router)
        // console.log(formData)
    }
    return (
        <div className='w-full justify-center items-center flex flex-col gap-y-8'>
            {DetailsLoading ? (
                <AppLoader color={'#5f8357'} loading={DetailsLoading} />
            ) : null}
            {loading ? <AppLoader color={'#5f8357'} loading={loading} /> : null}
            <div className='width flex justify-between'>
                <div className='flex items-center text-sm  gap-x-4 capitalize  p-2 border-2 bg-[#FAFAFA] rounded-lg w-[60%] md:w-[20%]'>
                    <span className='text-xl'>
                        <BiMoneyWithdraw />
                    </span>
                    <span>Edit Meal</span>
                </div>
                <span
                    className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md text-white cursor-pointer'
                    onClick={() => router.back()}
                >
                    <LiaTimesSolid className='text-sm' />
                </span>
            </div>
            <div className='flex justify-center flex-col items-center width'>
                <form
                    action=''
                    className='w-full flex flex-col gap-y-8 justify-center items-center '
                    onSubmit={update}
                >
                    <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3'>
                        <div className=''>
                            <UploadEdit reff={mealImage} defaultValue={details?.image} setStore_image={setStore_image} />
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
                                {details?.isAvailable.toString()}
                                <select
                                    // ref={is_availableRef}
                                    // defaultValue={details?.isAvailable}
                                    value={is_available === undefined ? details?.isAvailable : is_available}
                                    onChange={(e) => setIs_available(e.target.value)}
                                    className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] text-sm outline-none'
                                >
                                    <option value='' disabled>
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
                                                value={is_requiredstyrofoam === undefined ? details?.packaging?.stryrofoam?.is_required : is_requiredstyrofoam}
                                                onChange={(e) => setIs_requiredstyrofoam(e.target.value)}

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
                                                value={is_requiredplasticPlate === undefined ? details?.packaging?.stryrofoam?.is_required : is_requiredplasticPlate}
                                                onChange={(e) => setIs_requiredplasticPlate(e.target.value)}
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