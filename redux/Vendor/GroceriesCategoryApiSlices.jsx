const URL = '/api/marts';

import { apiSlice } from "../apiSlice";






export const createGroceriesCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createGroceriesCategory: builder.mutation({
            query: ({ token, id, name }) => ({
                url: `${URL}/add-category/${id}`,
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
// export const getCategoryApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         getCategory: builder.mutation({
//             query: ({ token, params }) => ({
//                 url: `${VENDORMEALDETAILS_URL}/category/all/${params}`,
//                 method: 'GET',
//                 headers: {
//                     // Add your headers here
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             })
//         })
//     })
// })
// export const editCategoryApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         editCategory: builder.mutation({
//             query: ({ token, params, name }) => ({
//                 url: `${VENDORMEALDETAILS_URL}/category/${params}`,
//                 method: 'PUT',
//                 body: name,
//                 headers: {
//                     // Add your headers here
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             })
//         })
//     })
// })
// export const deleteCategoryApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         deleteCategory: builder.mutation({
//             query: ({ token, params }) => ({
//                 url: `${VENDORMEALDETAILS_URL}/category/${params}`,
//                 method: 'DELETE',
//                 headers: {
//                     // Add your headers here
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             })
//         })
//     })
// })
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