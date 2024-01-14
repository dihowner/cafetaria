import { set_Meals, deleteMeal, createMeal, updateMeal } from '@/redux/Vendor/Slices/createMealSlice';
import { useDeleteMealMutation, useGetMealMutation, useCreateCategoryMutation, useGetCategoryMutation, useEditCategoryMutation, useCreateSubmealMutation } from '@/redux/Vendor/getMealApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useState } from 'react';
import { useGetMealDetailsMutation } from '@/redux/Vendor/getMealApiSlice'
import { create_Category, set_Categories, updateCategory } from '@/redux/Vendor/Slices/CategorySlices';
export const mealsfetch = () => {
    const [getMeal, { isLoading: getMealLoading }] = useGetMealMutation()
    const [error, setError] = useState()
    const [getMealDetails, { isLoading: DetailsLoading }] =
        useGetMealDetailsMutation()
    const [deleteMeal, { isLoading: deleteMealLoading }] = useDeleteMealMutation()
    const [createCategory, { isLoading: createCategoryLoading }] = useCreateCategoryMutation()
    const [getCategory, { isLoading: getCategoryLoading }] = useGetCategoryMutation()
    const [editCategory, { isLoading: editCategoryLoading }] = useEditCategoryMutation()
    const [createSubmeal, { isLoading: createSubMealLoading }] = useCreateSubmealMutation()
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
            .catch((err) => {
                setLoading(false)
                toast.error(err?.response?.data?.message || err.error);
                // console.error(error)
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
            .catch((err) => {
                setLoading(false)
                toast.error(err?.response?.data?.message || err.error);
                // console.error(error)
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
            .catch((err) => {
                setLoading(false)
                // console.error(error)
                toast.error(err?.response?.data?.message || err.error);
            })
    }
    const createMealCategory = async (name, mealId) => {
        try {
            const response = await createCategory({ name: name, params: mealId, token: auth.token }).unwrap()
            dispatch(create_Category(response.data))
            toast.success(response.message)
            // console.log(response)

        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }

    const getMealCategories = async (itemID) => {
        try {
            const response = await getCategory({ params: itemID, token: auth.token }).unwrap()
            // console.log(response)
            dispatch(set_Categories(response))
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const EditCategory = async (name, params, mealId) => {
        try {
            const response = await editCategory({ name: name, token: auth.token, params: params }).unwrap()
            dispatch(updateCategory(response.data))
            getMealCategories(mealId)
            toast.success(response.message)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const createSubMeal = async (data, categoryId, id) => {
        try {
            const response = await createSubmeal({ data, params: id, token: auth.token }).unwrap()
            toast.success(response.message)
            // console.log(response)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    return { getMeals, getMealLoading, createMeals, loading, getDetails, updateMeals, deleteAMeal, deleteMealLoading, error, changeAvailabilty, DetailsLoading, createMealCategory, createCategoryLoading, getMealCategories, getCategoryLoading, EditCategory, editCategoryLoading, createSubMeal, createSubMealLoading }
}