import { set_Meals } from '@/redux/Vendor/Slices/createMealSlice';
import { useGetMealMutation } from '@/redux/Vendor/getMealApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

export const mealsfetch = () => {
    const [getMeal] = useGetMealMutation()
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.RootReducers);
    const getMeals = async () => {
        try {
            const response = await getMeal({ id: auth.vendor_id, token: auth.token }).unwrap()
            dispatch(set_Meals(response))
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
    return { getMeals }
}