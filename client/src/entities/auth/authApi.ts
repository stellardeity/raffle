import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8080/api/v1" }),
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
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
