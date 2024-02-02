const AUTH_URL = '/api/user';
import { apiSlice } from "./apiSlice";



export const changePassSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        changePassword: builder.mutation({
            query: ({ data, token }) => ({
                url: `${AUTH_URL}/change-password`,
                method: 'PUT',
                body: data,
                headers: {
                    // Add your headers here
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    "Accept": 'application/json',
                    // You can add more headers if needed
                },
            })
        })
    })
})


export const { useChangePasswordMutation } = changePassSlice