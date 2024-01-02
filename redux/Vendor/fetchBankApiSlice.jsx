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