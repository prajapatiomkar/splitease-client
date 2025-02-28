import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/auth",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      { message: string },
      { name: string; email: string; password: string }
    >({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = api;
