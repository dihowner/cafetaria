import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://cafeteria-ekep.onrender.com",
  // prepareHeaders: (headers, { getState }) => {
  //     const auth = (getState().state.rootReducers)
  //     if (auth.token) {
  //         headers.set("authorization", `Bearer ${auth.token}`);
  //         headers.set('accept', 'application/json');
  //     }
  //     return headers
  // }
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["user"],
  endpoints: (builder) => ({}),
});
