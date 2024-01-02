import { set_Meals } from '@/redux/Vendor/Slices/createMealSlice';
import { useGetMealMutation } from '@/redux/Vendor/getMealApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios'

export const mealsfetch = () => {
    const [getMeal, { isLoading: getMealLoading }] = useGetMealMutation()
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.rootReducers);
    const getMeals = async () => {
        try {
            const response = await getMeal({ id: auth.vendor_id, token: auth.token }).unwrap()
            dispatch(set_Meals(response))
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

    const createMeal = async (formData) => {
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
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return { getMeals, getMealLoading,createMeal }
}