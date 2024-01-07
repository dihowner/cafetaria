import { useFetchBankMutation, useSaveBankMutation } from '@/redux/Vendor/fetchBankApiSlice'
import { setBankDetails } from '@/redux/Vendor/Slices/BankDetailsSlice'
import { useVerifyAccountMutation } from '@/redux/Vendor/Slices/VerifyBankApiSlice'
import { setBanks } from '@/redux/Vendor/Slices/withdrawSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
// useState
import axios from 'axios'


export const BanksFetch = () => {
    const dispatch = useDispatch();
    // const { banks } = useSelector((state) => state.rootReducers)
    const [fetchBank, { isLoading: fetchBankLoading }] = useFetchBankMutation()
    const [loading, setLoading] = useState(false)


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


    const verifyBank = async (data,setBankAccount_name) => {
        await axios
            .post(
                'https://cafeteria-ekep.onrender.com/api/banks/verify-account', data
                   
            )
            .then((response) => {
                // if(status===success){}
                setLoading(false)
                setBankAccount_name(response?.data?.account_name)
                toast.success(response?.message)
                console.log(data)
            })
            .catch((err) => {
                toast.error(err?.message || err.error);
            })
    }
    const saveBankDetails = async () => {
        try {
            const response = await saveBank().unwrap()
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
    return { verifyBank, Allbanks, fetchBankLoading, saveBankDetails, loading }
}