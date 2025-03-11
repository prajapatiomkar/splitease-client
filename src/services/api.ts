import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    credentials: "include",
  }),
  tagTypes: ["Groups"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      { message: string },
      { name: string; email: string; password: string }
    >({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation<
      { message: string },
      { email: string; password: string }
    >({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (userData) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: userData,
      }),
    }),
    resetPassword: builder.mutation({
      query: (userData) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: userData,
      }),
    }),
    getUserProfile: builder.query({
      query: () => "/user/profile",
    }),
    createGroup: builder.mutation({
      query: (userData) => ({
        url: "/user/create-group",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Groups"],
    }),
    getGroups: builder.query({
      query: () => "/user/get-group",
      providesTags: ["Groups"],
    }),
    deleteGroup: builder.mutation({
      query: (userData) => ({
        url: "/user/delete-group",
        method: "DELETE",
        body: userData,
      }),
      invalidatesTags: ["Groups"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserProfileQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useCreateGroupMutation,
  useGetGroupsQuery,
  useDeleteGroupMutation,
} = api;
