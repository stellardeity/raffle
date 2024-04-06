import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "@/shared/base-query";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery,
  endpoints: (builder) => ({
    getUsersProfile: builder.query<any, void>({
      query: () => "/users/profile",
    }),
  }),
});

export const { useGetUsersProfileQuery } = usersApi;
