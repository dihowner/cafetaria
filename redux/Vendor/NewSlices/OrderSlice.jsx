import { apiSlice } from "@/redux/apiSlice";
const ORDER_URL = "/api/orders";

const getOrderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrderHistory: builder.query({
      query: ({ type, page, token }) => ({
        url: `${ORDER_URL}/vendor/histories?type=${type}&page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getOneOrderHistory: builder.query({
      query: ({ id, token }) => ({
        url: `${ORDER_URL}/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetOrderHistoryQuery } = getOrderSlice;
