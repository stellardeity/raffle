import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8080/api/v1",
  prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem("access_token") || "{}");
    console.log(token);
    headers.set("Authorization", `Bearer ${token}`);
    headers.set("Access-Control-Allow-Credentials", "true");
    return headers;
  },
});
