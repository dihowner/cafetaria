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
export const deleteMealApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteMeal: builder.mutation({
            query: ({ token, params }) => ({
                url: `${VENDORMEALDETAILS_URL}/${params}`,
                method: 'DELETE',
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
        })
    })
})
export const createCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: ({ token, params, name }) => ({
                url: `${VENDORMEALDETAILS_URL}/category/${params}`,
                method: 'POST',
                body: name,
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
        })
    })
})
export const getCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.mutation({
            query: ({ token, params }) => ({
                url: `${VENDORMEALDETAILS_URL}/category/all/${params}`,
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
export const { useDeleteMealMutation } = deleteMealApiSlice
export const { useCreateCategoryMutation } = createCategoryApiSlice
export const { useGetCategoryMutation } = getCategoryApiSlice