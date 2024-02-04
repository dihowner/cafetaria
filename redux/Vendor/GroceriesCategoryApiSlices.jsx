const URL = '/api/marts';
const URL1 = '/api';

import { apiSlice } from "../apiSlice";






export const createGroceriesCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createGroceriesCategory: builder.mutation({
            query: ({ token, id, data }) => ({
                url: `${URL}/add-category/${id}`,
                method: 'POST',
                body: data,
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
        })
    })
})
export const getGroceriesCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.mutation({
            query: () => ({
                url: `${URL1}/grocery/category/all?isSelectOption=${true}`,
                method: 'GET',
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',

                },
            })
        })
    })
})

export const editGroceriesCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editGroceriesCategory: builder.mutation({
            query: ({ token, id, data }) => ({
                url: `${URL}/update-category/${id}`,
                method: 'PUT',
                body: data,
                headers: {
                    // Add your headers here
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
        })
    })
})
export const deleteGroceriesCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteGroceriesCategory: builder.mutation({
            query: ({ token, id }) => ({
                url: `${URL}/${id}`,
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
// export const createSubMealApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         createSubmeal: builder.mutation({
//             query: ({ token, params, data }) => ({
//                 url: `${VENDORSUBMEAL_URL}/submeal/add-new/${params}`,
//                 method: 'POST',
//                 body: data,
//                 headers: {
//                     // Add your headers here
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             })
//         })
//     })
// })

export const { useCreateGroceriesCategoryMutation } = createGroceriesCategoryApiSlice
export const { useGetCategoryMutation } = getGroceriesCategoryApiSlice
export const { useEditGroceriesCategoryMutation } = editGroceriesCategoryApiSlice
export const { useDeleteGroceriesCategoryMutation } = deleteGroceriesCategoryApiSlice