import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "@/shared/lib/base-query";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery,
  endpoints: (builder) => ({
    getUserProfile: builder.query<any, void>({
      query: () => "/users/profile",
    }),
    getAdsProfile: builder.mutation<any, string>({
      query(id) {
        return {
          url: `/ads/profile?id=${id}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useLazyGetUserProfileQuery, useGetAdsProfileMutation } = usersApi;
