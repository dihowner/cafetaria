import { set_Meals, deleteMeal, createMeal, updateMeal } from '@/redux/Vendor/Slices/createMealSlice';
import { useDeleteMealMutation, useGetMealMutation } from '@/redux/Vendor/getMealApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useState } from 'react';
import { useGetMealDetailsMutation } from '@/redux/Vendor/getMealApiSlice'
export const mealsfetch = () => {
    const [getMeal, { isLoading: getMealLoading }] = useGetMealMutation()
    const [error, setError] = useState()
    const [getMealDetails, { isLoading: DetailsLoading }] =
        useGetMealDetailsMutation()
    const [deleteMeal, { isLoading: deleteMealLoading }] = useDeleteMealMutation()
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.rootReducers);
    const getMeals = async () => {
        try {
            const response = await getMeal({ id: auth.vendor_id, token: auth.token }).unwrap()
            dispatch(set_Meals(response))
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const [loading, setLoading] = useState(false)
    const createMeals = async (formData, itemPage) => {
        setLoading(true)
        await axios
            .post(
                'https://cafeteria-ekep.onrender.com/api/meals/add-meal',
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
                dispatch(createMeal(response.data.data))
                itemPage()
                // console.log(response)
            })
            .catch((error) => {
                setLoading(false)
                console.error(error)
            })
    }
    const getDetails = async (setDetails, mealId) => {
        try {
            const response = await getMealDetails({ params: mealId, token: auth.token }).unwrap()
            setDetails(response)
            // console.log(response)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

    const updateMeals = async (formData, mealId) => {
        setLoading(true)
        await axios
            .put(
                `https://cafeteria-ekep.onrender.com/api/meals/${mealId}`,
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
                dispatch(updateMeal(response.data.data))
                // console.log(response.data)
            })
            .catch((error) => {
                setLoading(false)
                console.error(error)
            })
    }


    const deleteAMeal = async (mealId, setIsOpenModal) => {
        try {
            const response = await deleteMeal({ params: mealId, token: auth.token }).unwrap()
            toast.success('Meal has been deleted successfully')
            getMeals()
            // console.log(response)
            setIsOpenModal(false)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }

    }
    const changeAvailabilty = async (formData, mealId) => {
        setLoading(true)
        await axios
            .put(
                `https://cafeteria-ekep.onrender.com/api/meals/${mealId}`,
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
                dispatch(updateMeal(response.data.data))
                // console.log(response.data)
            })
            .catch((error) => {
                setLoading(false)
                console.error(error)
            })
    }
    return { getMeals, getMealLoading, createMeals, loading, getDetails, updateMeals, deleteAMeal, deleteMealLoading, error, changeAvailabilty }
}