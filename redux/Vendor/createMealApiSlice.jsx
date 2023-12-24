const VENDORMEAL_URL = '/api/meals';
import { apiSlice } from "../apiSlice";

export const createMealApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        CreateMeal: builder.mutation({
            query: ({ data, token }) => ({
                url: `${VENDORMEAL_URL}/add-meal`,
                method: 'POST',
                body: data,
                headers: {
                    // Add your headers here
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                    // You can add more headers if needed0
                },
            })
        })
    })
})

export const { useCreateMealMutation } = createMealApiSlice