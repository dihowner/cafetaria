const VENDORMEAL_URL = '/api/vendor';
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
})

export const { useGetMealMutation } = getMealApiSlice