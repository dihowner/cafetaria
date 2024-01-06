const BANK_URL = '/api/banks';
import { apiSlice } from "../apiSlice";

export const creatBankApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchBank: builder.mutation({
            query: () => ({
                url: `${BANK_URL}/all-banks`,
                method: 'GET',
            })
        })
    })
})
export const { useFetchBankMutation } = creatBankApiSlice


export const verifyBankApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        verifyAccount: builder.mutation({
            query: (data) => ({
                url: `${BANK_URL}/verify-account`,
                method: 'GET',
                body: data
            })
        })
    })
})

export const { useVerifyAccountMutation } = verifyBankApiSlice



export const saveBankApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        saveBank: builder.mutation({
            query: (data) => ({
                url: `${BANK_URL}/verify-account`,
                method: 'GET',
                body: data
            })
        })
    })
})

export const { useSaveBankMutation } = saveBankApiSlice