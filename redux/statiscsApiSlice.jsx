const AUTH_URL = '/api/user/statistic';
import { apiSlice } from "./apiSlice";

export const staticsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        statistic: builder.mutation({
            query: (params) => ({
                url: `${AUTH_URL}/${params}`,
                method: 'GET'
            })
        })
    })
})

export const { useStatisticMutation } = staticsApiSlice