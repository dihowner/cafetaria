import { apiSlice } from "@/redux/apiSlice";
const VENDOR_URL = "/api";

const getVendorStatisticSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStatistic: builder.query({
      query: ({ id, token }) => ({
        url: `${VENDOR_URL}/vendor/statistic/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
export const { useGetStatisticQuery } = getVendorStatisticSlice;
