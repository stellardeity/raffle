import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
  reducerPath: "ads",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080/api/v1",
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("access_token") || "{}");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAds: builder.query<any, void>({
      query: () => "/ads",
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
