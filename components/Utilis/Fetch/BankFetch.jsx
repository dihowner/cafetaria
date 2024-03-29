import { useFetchBankMutation, useSaveBankMutation } from '@/redux/Vendor/fetchBankApiSlice'
import { setBankDetails } from '@/redux/Vendor/Slices/BankDetailsSlice'
import { useVerifyAccountMutation } from '@/redux/Vendor/Slices/VerifyBankApiSlice'
import { setBanks } from '@/redux/Vendor/Slices/withdrawSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
// useState
import { useVendordetailsMutation } from '@/redux/Vendor/detailsApiSlice'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/Vendor/Slices/detailsSlice'
import axios from 'axios'


export const BanksFetch = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.rootReducers)
    const [fetchBank, { isLoading: fetchBankLoading }] = useFetchBankMutation()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const [vendordetails, { isLoading }] = useVendordetailsMutation()
    const [verifyAccount] = useVerifyAccountMutation()
    const [saveBank, { isLoading: saveBanKLoading }] = useSaveBankMutation()

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
        setLoading(true)
        await axios
            .post(
                'https://cafeteria-ekep.onrender.com/api/banks/verify-account', data

            )
            .then((response) => {
                // if(status===success){}
                setLoading(false)
                setBankAccount_name(response?.data?.data?.account_name)
                toast.success(response?.data.message)
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
                toast.error(err?.data?.error || err.message);
            })
    }
    const fetchDetails = async () => {
        try {
            const response = await vendordetails(auth?.token).unwrap()
            dispatch(setDetails(response))
        } catch (err) {
            // console.log(err)
            // toast.error(err?.data?.message + ' ' + 'Please Login Again' || err.error)
            if (err.status === 401) {
                dispatch(logout())
                toast.error(err?.data?.message + ' ' + 'Please Login Again')
                router.push('/vendor/login')
            } else {
                toast.error(err.error)
            }
        }
    }
    const saveBankDetails = async (info) => {
        try {
            const response = await saveBank({ info: info, token: auth.token }).unwrap()
            dispatch(setBankDetails())
            fetchDetails()
            toast.success(response.message)
            // console.log(response)
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

    const updatePin = async (data) => {
        setLoading(true)
        await axios
            .put(
                'https://cafeteria-ekep.onrender.com/api/user/modify-tx-pin', data, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'Application/json',
                    Authorization: `Bearer ${auth.token}`,
                },
            }

            )
            .then((response) => {
                // if(status===success){}
                setLoading(false)
                toast.success(response?.data?.message)
                // console.log(response)
            })
            .catch((err) => {
                setLoading(false)
                // console.log(err)
                toast.error(err?.response?.data?.message || err.error);
            })
    }

    return { verifyBank, Allbanks, fetchBankLoading, saveBankDetails, loading, updatePin, saveBanKLoading }
}