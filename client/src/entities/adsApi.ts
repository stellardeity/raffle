import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "@/shared/base-query";

export const adsApi = createApi({
  reducerPath: "ads",
  baseQuery,
  endpoints: (builder) => ({
    getAds: builder.query<any, void>({
      query: () => "/ads",
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
