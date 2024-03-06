import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-manager-server-xi-lemon.vercel.app/api/v1",
  }),
  tagTypes: ["Auth", "Todo"],
  endpoints: (builder) => ({}),
});

export default baseApi;
