const USER_URL = 'api/user'
const VENDOR_URL = 'api/vendor'
import { apiSlice } from "../apiSlice"
export const userDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userdetails: builder.mutation({
            query: (token) => ({
                url: `${USER_URL}/details`,
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
export const { useUserdetailsMutation } = userDetailsApiSlice
export const VendorDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        vendordetails: builder.mutation({
            query: (token) => ({
                url: `${VENDOR_URL}/details`,
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
export const { useVendordetailsMutation} = VendorDetailsApiSlice