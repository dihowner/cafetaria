import { apiSlice } from "@/redux/apiSlice";
const USER_URL = "/api/user";

const getUserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserStatistics: builder.query({
      query: ({ id, token }) => ({
        url: `${USER_URL}/statistic/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    // text one
  }),
});

export const { useGetUserStatisticsQuery } = getUserSlice;
