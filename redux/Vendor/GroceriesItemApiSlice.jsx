const URL = 'api/grocery'
import { apiSlice } from "../apiSlice"

export const getGroceriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getGroceries: builder.mutation({
            query: ({ token }) => ({
                url: `${URL}/all`,
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


export const deleteGroceriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deletegroceries: builder.mutation({
            query: ({ token, params }) => ({
                url: `${URL}/${params}`,
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
export const { useGetGroceriesMutation } = getGroceriesApiSlice
export const { useDeletegroceriesMutation } = deleteGroceriesApiSlice