import { apiSlice } from "@/redux/apiSlice";

const BANK_URL = '/api/banks';
// import { apiSlice } from "../apiSlice";

// apiSlice
export const verifyBankApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        verifyAccount: builder.mutation({
            query: (data) => ({
                url: `${BANK_URL}/verify-account`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(data),
                body: data,
            })
        })
    })
})

export const { useVerifyAccountMutation } = verifyBankApiSlice