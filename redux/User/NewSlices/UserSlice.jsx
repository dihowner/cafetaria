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
    getUserProile: builder.query({
      query: ({ token }) => ({
        url: `${USER_URL}/details`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateUserProile: builder.query({
      query: ({ payLoad, token }) => ({
        url: `${USER_URL}/profile/update`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payLoad),
      }),
    }),
    changerUserPassword: builder.query({
      query: ({ payLoad, token }) => ({
        url: `${USER_URL}/change-password`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payLoad),
      }),
    }),

    // Add more
  }),
});

export const {
  useGetUserStatisticsQuery,
  useGetUserProileQuery,
  useUpdateUserProileQuery,
  useChangerUserPasswordQuery,
} = getUserSlice;
