import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8080/api/v1",
  prepareHeaders: (headers) => {
    headers.set("Access-Control-Allow-Credentials", "true");
    return headers;
  },
  credentials: "include",
});
