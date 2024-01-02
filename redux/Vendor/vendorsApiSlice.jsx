const URL = 'api/vendor'
import { apiSlice } from "../apiSlice"
export const vendorDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        details: builder.mutation({
            query: (vendor_id) => ({
                url: `${URL}/${vendor_id}`,
                method: 'GET',
            })
        })
    })
})
export const { useDetailsMutation } = vendorDetailsApiSlice