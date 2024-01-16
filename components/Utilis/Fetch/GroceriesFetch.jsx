import { useCreateGroceriesCategoryMutation } from '@/redux/Vendor/GroceriesCategoryApiSlices';
import { set_Categories } from '@/redux/Vendor/Slices/GroceriesCategorySlice';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useState } from 'react';


export const groceriesFetch = () => {
    const [createGroceriesCategory, { isLoading: create_CategoryGroceriesLoading }] = useCreateGroceriesCategoryMutation()
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
            dispatch(set_Categories())
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    return {
        Createcategory, create_CategoryGroceriesLoading, error
    }
}