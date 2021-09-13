import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const checkLoginStatusapi = createApi({
  reducerPath: 'checkLoginStatus',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lavista-authentication-api.herokuapp.com',
    mode: 'cors',
    credentials: 'include',
  }),
  tagTypes: ['Session', 'Expenses'],
  endpoints: (builder) => ({
    userSession: builder.mutation({
      query(body) {
        return {
          url: 'sessions',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Session'],
    }),
    registerUser: builder.mutation({
      query(body) {
        return {
          url: 'registrations',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Session'],
    }),
    getLoginUserInfo: builder.query({
      query: () => 'logged_in',
      providesTags: ['Session'],
    }),

    logoutUser: builder.mutation({
      query() {
        return {
          url: 'logout',
          method: 'DELETE',
        };
      },
    }),
    getUserExpenses: builder.query({
      query: () => 'expenses/',
      providesTags: ['Expenses'],
    }),
    postUserExpenses: builder.mutation({
      query(body) {
        return {
          url: 'expenses',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Expenses'],
    }),
    updateExpenses: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `expenses/${id}.json`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['Expenses'],
    }),
    deleteExpense: builder.mutation({
      query(id) {
        return {
          url: `expenses/${id}.json`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Expenses'],
    }),
  }),
});

export const {
  useGetLoginUserInfoQuery,
  useLogoutUserMutation,
  useUserSessionMutation,
  useRegisterUserMutation,
  useGetUserExpensesQuery,
  usePostUserExpensesMutation,
  useUpdateExpensesMutation,
  useDeleteExpenseMutation,
} = checkLoginStatusapi;
