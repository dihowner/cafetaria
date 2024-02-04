import { useGetCategoryMutation, useGetRestuarantMutation, useGetVendorMealsMutation } from "@/redux/User/ApiSlices/MealApiSlice"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { set_Meals, set_SubMeals, set_restuarant } from "@/redux/User/mealSlice";
export const randomFetch = () => {
    const [getRestuarant, { isLoading: getRestuarantLoading }] = useGetRestuarantMutation()
    const [getVendorMeals, { isLoading: getVendorMealsLoading }] = useGetVendorMealsMutation()
    const [getCategory, { isLoading: getCategoryLoading }]=useGetCategoryMutation()
    const [error, setError] = useState()
    const dispatch = useDispatch();
    const getRestuarants = async (status, page, setTotalPages) => {
        try {
            const response = await getRestuarant({ status: status, page: page }).unwrap()
            dispatch(set_restuarant(response?.data))

            // console.log(response)
            setTotalPages(response?.pagination?.totalPages)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const getMeals = async (id, status, page, setTotalPages) => {
        try {
            const response = await getVendorMeals({ id: id, status: status, page: page }).unwrap()
            dispatch(set_Meals(response?.data))

            console.log(response)
            setTotalPages(response?.pagination?.totalPages)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const getSubmeal = async (params) => {
        try {
            const response = await getCategory(params).unwrap()
            dispatch(set_SubMeals(response))

            // console.log(response)
            // setTotalPages(response?.pagination?.totalPages)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    return { getRestuarantLoading, getRestuarants, error, getMeals, getVendorMealsLoading,getSubmeal , getCategoryLoading }

}