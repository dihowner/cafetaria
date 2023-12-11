// import { apiSlice } from "../apiSlice";
const AUTH_URL = '/api/auth';
import { apiSlice } from "./apiSlice";
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
        completeRegistration: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/verify/account`,
                body: JSON.stringify(data),
                method: 'POST',
                headers: { 'content-type': 'application/json' }
            }),
        }),
        RequestResetpassword: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/passwordreset/request`,
                body: JSON.stringify(data),
                method: 'POST',
                headers: { 'content-type': 'application/json' }
            }),
        }),
        verifypasswordToken: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/passwordreset/verify`,
                body: JSON.stringify(data),
                method: 'POST',
                headers: { 'content-type': 'application/json' }
            }),
        }),
        verifyNewpassword: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/passwordreset/change-password`,
                body: JSON.stringify(data),
                method: 'PUT',
                headers: { 'content-type': 'application/json' }
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${AUTH_URL}/logout`,
                // body: JSON.stringify(data),
                method: 'POST',
                // headers: { 'content-type': 'application/json' }
            }),
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useCompleteRegistrationMutation,
    useRequestResetpasswordMutation,
    useVerifypasswordTokenMutation, 
    useVerifyNewpasswordMutation,
    useLogoutMutation
} = userApiSlice;