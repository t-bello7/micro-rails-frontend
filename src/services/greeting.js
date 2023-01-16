// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const greetingApi = createApi({
  reducerPath: 'greetingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL
  }),
  endpoints: (builder) => ({
    getGreeting: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGreetingQuery } = greetingApi;
