import { apiSlice } from "@/redux/apiSlice";

const MEALURL = "/api";

export const getUserMealApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestuarant: builder.mutation({
      query: ({ status, page }) => ({
        url: `${MEALURL}/vendor/all?status=${status}&page=${page}`,
        method: "GET",
        headers: {
          // Add your headers here
          Accept: "application/json",
        },
      }),
    }),

    getVendorMeals: builder.mutation({
      query: ({ id, status, page }) => ({
        url: `${MEALURL}/vendor/${id}/meals?status=${status}&page=${page}`,
        method: "GET",
        headers: {
          // Add your headers here
          Accept: "application/json",
        },
      }),
    }),

    getCategory: builder.mutation({
      query: (params) => ({
        url: `${MEALURL}/meals/category/all/${params}`,
        method: "GET",
        headers: {
          // Add your headers here
          Accept: "application/json",
        },
      }),
    }),

    getMeals: builder.query({
      query: (query) => ({
        url: `${MEALURL}/meals/all?status=${query.status}&page=${query.page}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetMealsQuery,
  useGetRestuarantMutation,
  useGetVendorMealsMutation,
  useGetCategoryMutation,
} = getUserMealApiSlice;
