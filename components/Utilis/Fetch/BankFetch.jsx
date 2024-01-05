import { useFetchBankMutation, useSaveBankMutation, useVerifyAccountMutation } from '@/redux/Vendor/fetchBankApiSlice'
import { setBankDetails } from '@/redux/Vendor/Slices/BankDetailsSlice'
import { setBanks } from '@/redux/Vendor/Slices/withdrawSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'



export const BanksFetch = () => {
    const dispatch = useDispatch();
    // const { banks } = useSelector((state) => state.rootReducers)
    const [fetchBank, { isLoading: fetchBankLoading }] = useFetchBankMutation()

    const [verifyAccount] = useVerifyAccountMutation()
    const [saveBank] = useSaveBankMutation()

    const Allbanks = async () => {
        try {

            const response = await fetchBank().unwrap()
            // if (isSuccess) {
            dispatch(setBanks(response))
            // }
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
    const verifyBank = async (data, setBankAccount_name) => {
        try {
            const response = await verifyAccount(data).unwrap()
            // if (isSuccess) {
            dispatch(setBankAccount_name(response.data.account_name))

            // }
            console.log(response)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
    const saveBankDetails = async () => {
        try {
            const response = await saveBank().unwrap()
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
    return { verifyBank, Allbanks, fetchBankLoading,saveBankDetails }
}