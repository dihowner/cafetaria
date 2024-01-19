import { useCreateGroceriesCategoryMutation, useDeleteGroceriesCategoryMutation, useEditGroceriesCategoryMutation, useGetCategoryMutation } from '@/redux/Vendor/GroceriesCategoryApiSlices';
import { create_Category, set_Categories, updateCategory } from '@/redux/Vendor/Slices/GroceriesCategorySlice';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useState } from 'react';


export const groceriesFetch = () => {
    const [createGroceriesCategory, { isLoading: create_CategoryGroceriesLoading }] = useCreateGroceriesCategoryMutation()
    const [getCategory, { isLoading: getCategoryLoading }] = useGetCategoryMutation()
    const [editGroceriesCategory, { isLoading: editGroceriesCategoryLoading }] = useEditGroceriesCategoryMutation()
    const [deleteGroceriesCategory, { isLoading: deleteGroceriesCategoryLoading }] = useDeleteGroceriesCategoryMutation()
    const { auth } = useSelector((state) => state.rootReducers);
    const { Details } = useSelector((state) => state.rootReducers)
    const vendordetails = Details?.Details
    const [error, setError] = useState()
    console.log(vendordetails)
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
            toast.error(err?.data?.message || err.error);
            setError(err.error)
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
            getcategory()
            toast.success('Category deleted Successfully')
            setIsOpenModal(false)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    return {
        Createcategory, create_CategoryGroceriesLoading, error, getcategory, getCategoryLoading, editCategory, editGroceriesCategoryLoading, deleteCategory, deleteGroceriesCategoryLoading
    }
}