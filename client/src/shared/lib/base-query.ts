import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_SERVER_URL,
  prepareHeaders: (headers) => {
    headers.set("Access-Control-Allow-Credentials", "true");
    return headers;
  },
  credentials: "include",
});
