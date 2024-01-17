import { mealsfetch } from '@/components/Utilis/Fetch/MealsFetch'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button';
import AppLoader from '@/components/AppLoader';
import EditCategory from './EditCategory';
import AddSubMeal from './AddSubMeal';
import DeleteCategory from './DeleteCategory';
const Categories = ({ itemID,details }) => {
    const { getMealCategories, getCategoryLoading, error } = mealsfetch()
    const getcategory = async () => {
        await getMealCategories(itemID)
    }
    useEffect(() => {
        getcategory()
    }, [])
    const { categories } = useSelector((state) => state.rootReducers)
    const [isEditCategoryOpenModal, setIsEditCategoryOpenModal] = useState(null)
    const openEditCategoryModal = (index) => {
        setIsEditCategoryOpenModal(index)
    }
    const [isDeleteCategoryOpenModal, setIsDeleteCategoryOpenModal] = useState(null)
    const openDeleteCategoryModal = (index) => {
        setIsDeleteCategoryOpenModal(index)
    }
    const [isSubOpenModal, setIsSubOpenModal] = useState(false)
    const openSubModal = () => {
        setIsSubOpenModal(true)
    }
    const category = categories?.category
    const noItemMessage = category && category?.length === 0 ? 'No category Created' : null
    return (
        <div className='width flex flex-col gap-y-8 justify-center items-center'>
            {error ? (<div className='text-center text-3xl w-full capitalize'>{error}</div>) : (<>
                {getCategoryLoading ? <AppLoader color={'#5f8357'} loading={getCategoryLoading} /> : <>
                    {noItemMessage ? (
                        <div className='text-center text-3xl w-full capitalize'>
                            {noItemMessage}
                        </div>) : (
                        <>
                            {category && category.map((item, index) => (
                                <div className="w-full bg-[#F8F8F8] flex justify-center items-cente gap-y-6 flex-col rounded-[8px] p-6 " key={index}>
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex flex-col gap-y-4">
                                            <h1 className='text-lg text-[#000000] font-bold capitalize'>{item?.name}</h1>
                                            <span className='text-[#218B07] font-bold text-sm cursor-pointer' onClick={() => openEditCategoryModal(index)}>Edit Category</span>
                                        </div>
                                        <div className="flex sm:items-center justify-start flex-col sm:flex-row gap-y-4 gap-x-4">
                                            <Button sx={{
                                                backgroundColor: 'transparent',
                                                color: '#218B07',
                                                border: '#218B07 solid 1px',
                                                fontWeight: "bold",
                                                
                                                padding: '.3rem',
                                                textTransform: 'capitalize', fontSize: '.8rem',
                                                '&:hover': {
                                                    backgroundColor: 'transparent',
                                                },
                                            }}
                                                onClick={() => openDeleteCategoryModal(index)}

                                            >delete category</Button>
                                            <Switch
                                                // checked={item?.isAvailable}
                                                // onChange={() => changeavai(item)}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                                sx={{
                                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                                        color: '#5f8357',
                                                    },
                                                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                        backgroundColor: '#4CAF50',
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex sm:items-center justify-start flex-col sm:flex-row gap-y-4 gap-x-4 w-full'>
                                        <Button sx={{
                                            backgroundColor: 'transparent',
                                            color: '#218B07',
                                            border: '#218B07 solid 1px',
                                            fontWeight: "bold",
                                           
                                            padding: '.3rem',
                                            textTransform: 'capitalize', fontSize: '.8rem',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                            onClick={() => openSubModal()}

                                        >Add Item</Button>
                                        <Button sx={{
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            fontWeight: "bold",
                                            border: '#0000000F solid 1px',
                                           
                                            padding: '.3rem',
                                            textTransform: 'capitalize', fontSize: '.8rem',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                        // onClick={() => openCategoryModal()}
                                        >

                                            Delete Item
                                        </Button>
                                    </div>
                                    <EditCategory isOpenModal={isEditCategoryOpenModal === index} setIsOpenModal={setIsEditCategoryOpenModal} itemID={item} />
                                    <DeleteCategory isOpenModal={isDeleteCategoryOpenModal === index} setIsOpenModal={setIsDeleteCategoryOpenModal} itemID={item} />
                                    <AddSubMeal isOpenModal={isSubOpenModal} setIsOpenModal={setIsSubOpenModal} itemID={details} />
                                </div>

                            ))}
                        </>)}
                </>}
            </>)}

        </div>
    )
}

export default Categories