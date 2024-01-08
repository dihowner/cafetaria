const BANK_URL = '/api/banks';
const SAVE_BANK_URL = '/api/user';
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






export const saveBankApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        saveBank: builder.mutation({
            query: ({ info, token }) => ({
                url: `${SAVE_BANK_URL}/set-bank`,
                method: 'PUT',
                body: info,
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
        })
    })
})

export const { useSaveBankMutation } = saveBankApiSlice