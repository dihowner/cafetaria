const VENDORMEAL_URL = '/api/meals';
import { apiSlice } from "../apiSlice";

export const createMealApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        CreateMeal: builder.mutation({
            query: ({ formData, token }) => ({
                url: `${VENDORMEAL_URL}/add-meal`,
                method: 'POST',
                body: formData,
                formData: true,
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    // 'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,

                    'Content-Type': 'multipart/form-data',
                    // You can add more headers if needed
                },
            })
        })
    })
})

export const { useCreateMealMutation } = createMealApiSlice