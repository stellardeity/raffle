import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "@/shared/lib/base-query";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery,
  endpoints: (build) => ({
    register: build.mutation<any, { login: string; password: string }>({
      query(data) {
        return {
          url: `register`,
          method: "POST",
          body: data,
        };
      },
    }),
    login: build.mutation<any, { login: string; password: string }>({
      query(data) {
        return {
          url: `login`,
          method: "POST",
          body: data,
        };
      },
    }),
    logout: build.mutation<any, void>({
      query() {
        return {
          url: `logout`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;
