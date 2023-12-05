import { apiSlice } from "./apiSlice";
const AUTH_URL = '/api/auth';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signin`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signup`,
                body: JSON.stringify(data),
                method: 'POST',
                headers: { 'content-type': 'application/json' }
            }),
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation

} = userApiSlice;