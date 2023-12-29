const BANK_URL = '/api/banks';
import { apiSlice } from "../apiSlice";

export const creatBankApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchBank: builder.mutation({
            query: ({ data, token }) => ({
                url: `${BANK_URL}/all-banks`,
                method: 'GET',
            })
        })
    })
})