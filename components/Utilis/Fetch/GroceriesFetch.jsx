import { useCreateGroceriesCategoryMutation, useDeleteGroceriesCategoryMutation, useEditGroceriesCategoryMutation, useGetCategoryMutation } from '@/redux/Vendor/GroceriesCategoryApiSlices';
import { create_Category, set_Categories, updateCategory } from '@/redux/Vendor/Slices/GroceriesCategorySlice';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { createGroceries, set_Groceries, updateGroceries } from '@/redux/Vendor/Slices/GroceriesSlice';

import axios from 'axios'
import { useDeletegroceriesMutation, useGetGroceriesMutation } from '@/redux/Vendor/GroceriesItemApiSlice';

export const groceriesFetch = () => {
    const [createGroceriesCategory, { isLoading: create_CategoryGroceriesLoading }] = useCreateGroceriesCategoryMutation()
    const [getCategory, { isLoading: getCategoryLoading }] = useGetCategoryMutation()
    const [editGroceriesCategory, { isLoading: editGroceriesCategoryLoading }] = useEditGroceriesCategoryMutation()
    const [deleteGroceriesCategory, { isLoading: deleteGroceriesCategoryLoading }] = useDeleteGroceriesCategoryMutation()
    const [getGroceries, { isLoading: getGroceriesLoading }] = useGetGroceriesMutation()
    const [deletegroceries, { isLoading: deletegroceriesLoading }] = useDeletegroceriesMutation()
    const { auth } = useSelector((state) => state.rootReducers);
    const { Details } = useSelector((state) => state.rootReducers)
    const vendordetails = Details?.Details
    const [error, setError] = useState()
    // console.log(vendordetails)
    const dispatch = useDispatch();
    const Createcategory = async (data) => {
        try {
            const response = await createGroceriesCategory({
                data, id: vendordetails?.mart?._id
                , token: auth.token
            }).unwrap()
            // console.log(response)
            dispatch(create_Category(response.data))
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const getcategory = async () => {
        try {
            const response = await getCategory({
                id: vendordetails?.mart?._id
                , token: auth.token
            }).unwrap()
            console.log(response)
            dispatch(set_Categories(response))
        } catch (err) {
            // toast.error(err?.data?.message || err.error);
            // setError(err.error)
        }
    }

    const editCategory = async (data, id) => {
        try {
            const response = await editGroceriesCategory({ data, id, token: auth.token }).unwrap()
            dispatch(updateCategory(response.data))
            toast.success(response?.message)
            getcategory()
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const deleteCategory = async (id, setIsOpenModal) => {
        try {
            const response = await deleteGroceriesCategory({ id, token: auth.token }).unwrap()
            toast.success('Category deleted Successfully')
            setIsOpenModal(false)
            console.log(id)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }

    const [loading, setLoading] = useState(false)
    const createGrocery = async (formData) => {
        setLoading(true)
        await axios
            .post(
                'https://cafeteria-ekep.onrender.com/api/grocery/add',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/formData',
                        Accept: 'Application/json',
                        Authorization: `Bearer ${auth.token}`,
                    },
                }
            )
            .then((response) => {
                setLoading(false)
                toast.success(response.data.message)
                dispatch(
                    createGroceries(response.data.data)
                )
                // console.log(response)
            })
            .catch((err) => {
                setLoading(false)
                toast.error(err?.response?.data?.message || err.error);
                // console.error(error)
            })
    }
    const getGrocery = async () => {
        try {
            const response = await getGroceries({ token: auth.token }).unwrap()
            dispatch(set_Groceries(response))
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }

    const deleteGroceries = async (id, setIsOpenModal) => {
        try {
            const response = await deletegroceries({ params: id, token: auth.token }).unwrap()
            toast.success('Item deleted successfully')
            getGrocery()
            setIsOpenModal(false)
            // console.log(response)
            setIsOpenModal(false)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }

    }
    const changeAvailabilty = async (data, groceryId) => {
        setLoading(true)
        await axios
            .put(
                `https://cafeteria-ekep.onrender.com/api/grocery/${groceryId}/activate`,
                data,
                {
                    headers: {
                        'Content-Type': 'Application/json',
                        Accept: 'Application/json',
                        Authorization: `Bearer ${auth.token}`,
                    },
                }
            )
            .then((response) => {
                setLoading(false)
                getGrocery()
                toast.success(response.data.message)

                // dispatch(updateGroceries(response?.data?.data))

            })
            .catch((err) => {
                setLoading(false)
                // console.error(error)
                toast.error(err?.response?.data?.message || err.error);
            })
    }
    const editGrocery = async (formData, id, setIsOpenModal) => {
        setLoading(true)
        await axios
            .put(
                `https://cafeteria-ekep.onrender.com/api/grocery/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/formData',
                        Accept: 'Application/json',
                        Authorization: `Bearer ${auth.token}`,
                    },
                }
            )
            .then((response) => {
                setLoading(false)
                toast.success(response?.data?.message)
                setIsOpenModal(false)
                // dispatch(
                //     createGroceries(response.data.data)
                // )
                // console.log(response)
            })
            .catch((err) => {
                setLoading(false)
                toast.error(err?.response?.data?.message || err.error);
                // console.error(error)
            })
    }
    return {
        Createcategory, create_CategoryGroceriesLoading, error, getcategory, getCategoryLoading, editCategory, editGroceriesCategoryLoading, deleteCategory, deleteGroceriesCategoryLoading, createGrocery, loading, getGrocery, getGroceriesLoading, deleteGroceries, changeAvailabilty, deletegroceriesLoading, editGrocery 
    }
}