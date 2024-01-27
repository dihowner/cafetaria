import { set_Meals, deleteMeal, createMeal, updateMeal } from '@/redux/Vendor/Slices/createMealSlice';
import { useDeleteMealMutation, useGetMealMutation, useCreateCategoryMutation, useGetCategoryMutation, useEditCategoryMutation, useCreateSubmealMutation, useDeleteCategoryMutation, useEditSubmealMutation, useDeleteSubmealMutation } from '@/redux/Vendor/getMealApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useState } from 'react';
import { useGetMealDetailsMutation } from '@/redux/Vendor/getMealApiSlice'
import { create_Category, set_Categories, updateCategory } from '@/redux/Vendor/Slices/CategorySlices';
import { create_Submeal, set_submeal } from '@/redux/Vendor/Slices/subMealSlice';
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
    const [deleteCategory, { isLoading: deleteCategoryLoading }] = useDeleteCategoryMutation()
    const [editSubmeal, { isLoading: editSubmealLoading }] = useEditSubmealMutation()
    const [deleteSubmeal, { isLoading: deleteSubmealLoading }] = useDeleteSubmealMutation()
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.rootReducers);
    const getMeals = async (status, page, setTotalPages) => {
        try {
            const response = await getMeal({ id: auth.vendor_id, token: auth.token, status: status, page: page }).unwrap()
            dispatch(set_Meals(response?.data))
            // console.log(response)
            setTotalPages(response?.pagination?.totalPages)
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


    const deleteAMeal = async (mealId, setIsOpenModal, status, page) => {
        try {
            const response = await deleteMeal({ params: mealId, token: auth.token }).unwrap()
            toast.success('Meal has been deleted successfully')
            getMeals(status, page)
            // console.log(response)
            setIsOpenModal(false)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }

    }
    const changeAvailabilty = async (data, mealId, status, page,) => {
        setLoading(true)
        await axios
            .put(
                `https://cafeteria-ekep.onrender.com/api/meals/${mealId}/activate`,
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
                // dispatch(updateMeal(response?.data?.data))
                dispatch(updateMeal(response?.data?.data))
                // console.log(response.data.data)
                toast.success(response.data.message)

                getMeals(status, page,)
                // console.log(response.data)
            })
            .catch((err) => {
                setLoading(false)
                // console.error(error)
                toast.error(err?.response?.data?.message || err.error);
            })
    }
    const createMealCategory = async (name, mealId, setIsOpenModal) => {
        try {
            const response = await createCategory({ name: name, params: mealId, token: auth.token }).unwrap()
            dispatch(create_Category(response?.data))
            toast.success(response.message)
            setIsOpenModal(false)
            console.log(response)

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
            // dispatch(set_submeal())
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
    const deletecategory = async (params, mealId) => {
        try {
            const response = await deleteCategory({ token: auth.token, params: params }).unwrap()
            getMealCategories(mealId)
            toast.success('Category has been deleted successfully')
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const createSubMeal = async (data, id, setIsOpenModal) => {
        try {
            const response = await createSubmeal({ data, params: id, token: auth.token }).unwrap()
            toast.success(response.message)
            dispatch(create_Submeal(response?.data))
            // console.log(response)
            getMealCategories(id)
            setIsOpenModal(false)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const editSubMeal = async (data, submealId, mealId, setIsOpenModal) => {
        try {
            const response = await editSubmeal({ data, params: submealId, token: auth.token }).unwrap()
            toast.success(response.message)

            // console.log(response)
            getMealCategories(mealId)
            setIsOpenModal(false)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    const deletesubMeal = async (submealId, mealId) => {
        try {
            const response = await deleteSubmeal({ params: submealId, token: auth.token }).unwrap()
            toast.success(response.message)

            // console.log(response)
            getMealCategories(mealId)
            setIsOpenModal(false)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            setError(err.error)
        }
    }
    return { getMeals, getMealLoading, createMeals, loading, getDetails, updateMeals, deleteAMeal, deleteMealLoading, error, changeAvailabilty, DetailsLoading, createMealCategory, createCategoryLoading, getMealCategories, getCategoryLoading, EditCategory, editCategoryLoading, createSubMeal, createSubMealLoading, deletecategory, deleteCategoryLoading, editSubMeal, editSubmealLoading, deletesubMeal, deleteSubmealLoading }
}