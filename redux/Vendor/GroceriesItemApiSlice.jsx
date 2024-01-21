const URL ='api/grocery'
import { apiSlice } from "../apiSlice"

export const getGroceriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getGroceries: builder.mutation({
            query: ({ token}) => ({
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

export const {useGetGroceriesMutation}=getGroceriesApiSlice