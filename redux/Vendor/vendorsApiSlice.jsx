const URL = 'api/vendor'
import { apiSlice } from "../apiSlice"
export const vendorDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        details: builder.mutation({
            query: (token) => ({
                url: `${URL}/details`,
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
export const { useDetailsMutation } = vendorDetailsApiSlice