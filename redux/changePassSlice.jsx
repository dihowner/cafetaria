const AUTH_URL = '/api/user';
import { apiSlice } from "./apiSlice";
export const changePassSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        changePassword: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/change-password`,
                method: 'POST',
                body: data
            })
        })
    })
})


export const { useChangePasswordMutation } = changePassSlice