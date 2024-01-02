const VENDORMEAL_URL = '/api/vendor';
const VENDORMEALDETAILS_URL = '/api/meals';

import { apiSlice } from "../apiSlice";

export const getMealApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMeal: builder.mutation({
            query: ({ token, id }) => ({
                url: `${VENDORMEAL_URL}/${id}/meals`,
                method: 'GET',
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
        })
    })
});

export const getMealDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMealDetails: builder.mutation({
            query: ({ token, params }) => ({
                url: `${VENDORMEALDETAILS_URL}/${params}`,
                method: 'GET',
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
        })
    })
})

export const { useGetMealMutation } = getMealApiSlice
export const { useGetMealDetailsMutation } = getMealDetailsApiSlice