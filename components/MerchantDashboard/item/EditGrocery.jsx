import EditInput from '@/components/EditInput'
import Modal from '@/components/Modal'
import Upload from '@/components/UploadEdit'
import { groceriesFetch } from '@/components/Utilis/Fetch/GroceriesFetch'
import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import LoaderTwo from '@/components/Utilis/LoaderTwo'
import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { useSelector, useDispatch } from 'react-redux'
const EditGrocery = ({ isOpenModal, setIsOpenModal, itemID }) => {
    // console.log(itemID)
    const status = [
        { value: true, status: 'Active' },
        { value: false, status: 'Not Active' },
    ]
    const { GroceriesCategory } = useSelector((state) => state.rootReducers)
    const categories = GroceriesCategory?.category
    const [store_image, setStore_image] = useState()

    const NameRef = useRef(null)
    const priceRef = useRef(null)
    const is_availableRef = useRef(null)
    const mealImage = useRef(null)
    const categoryRef = useRef(null)
    const { loading, editGrocery } = groceriesFetch()


    const update = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        const fileimage = store_image === undefined || store_image === null ? itemID?.image : store_image
        formData.append('martcategory', categoryRef?.current?.value)
        formData.append('groceryImage', fileimage) // A ssuming mealImage is a File object
        formData.append('name', NameRef?.current?.value)
        formData.append('is_available', is_availableRef?.current?.value)
        formData.append('unit_price', parseInt(priceRef?.current?.value))
        await editGrocery(formData, itemID?._id, setIsOpenModal)
        // console.log(formData)
    }
    return (
        <div>
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 py-8 px-3 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid className='text-sm' />
                    </span>
                    <div className='flex justify-center flex-col items-center w-full gap-y-4'>
                        <h1 className='text-lg text-[#218B07] font-[700] text-center'>Edit of {itemID?.name} </h1>
                        <form action=""
                            className='w-full flex flex-col gap-y-4 justify-center items-center '
                            onSubmit={update}
                        >
                            <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3'>

                                <Upload reff={mealImage} defaultValue={itemID?.image} setStore_image={setStore_image} />
                                <div className="w-full">
                                    <div className='  w-full flex flex-col md:flex-row justify-between gap-x-2 gap-y-2 items-center'>
                                        <EditInput
                                            title={'Item Name'}
                                            type={'text'}
                                            reff={NameRef}
                                            defaultValue={itemID?.name}
                                        />
                                        <EditInput
                                            title={'Price'}
                                            type={'number'}
                                            reff={priceRef}
                                            defaultValue={itemID?.unitPrice}
                                        />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor='' className='text-sm'>
                                            Availability
                                        </label>
                                        <select
                                            ref={is_availableRef}
                                            defaultValue={itemID?.isAvailable}
                                            // value={is_available}
                                            // onChange={(e) => setIs_available(e.target.value)}
                                            className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] text-sm outline-none'
                                        >
                                            <option value='' disabled selected>
                                                Select Availability
                                            </option>
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
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor='' className='text-sm'>
                                            Category
                                        </label>
                                        <select
                                            ref={categoryRef}
                                            defaultValue={itemID?.martcategory
                                            }
                                            // value={categoryId}
                                            // onChange={(e) => setCategoryId(e.target.value)}
                                            className='flex gap-x-2 items-center px-4 py-4 border-2 rounded-[8px] text-sm outline-none capitalize'
                                        >
                                            <option value='' disabled selected>
                                                Select a Category
                                            </option>
                                            {categories &&
                                                categories.map((item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item._id}
                                                        className='capitalize text-sm'
                                                    >
                                                        {item?.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end items-center w-[100%] p-4'>
                                <Button
                                    sx={{
                                        backgroundColor: '#218B07',
                                        color: '#ffffff',
                                        textTransform: 'capitalize',

                                        '&:hover': {
                                            backgroundColor: '#218B07',
                                        },
                                    }}
                                    type='submit'
                                >
                                    {'Add Item'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditGrocery