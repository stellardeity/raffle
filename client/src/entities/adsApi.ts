import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "@/shared/base-query";

export const adsApi = createApi({
  reducerPath: "ads",
  baseQuery,
  endpoints: (builder) => ({
    getAds: builder.query<any, void>({
      query: () => "/ads",
    }),
    getCategories: builder.query<any, void>({
      query: () => "/ads/categories",
    }),
    getAdsById: builder.mutation<any, string>({
      query(id) {
        return {
          url: `/ads?id=${id}`,
          method: "POST",
        };
      },
    }),
    getFields: builder.mutation<any, { title: string }>({
      query(data) {
        return {
          url: `/ads/fields`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetAdsQuery, useGetAdsByIdMutation, useGetFieldsMutation, useGetCategoriesQuery } = adsApi;
