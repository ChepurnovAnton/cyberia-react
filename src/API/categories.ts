import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.test.cyberia.studio/api/v1/' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (name) => name
    })
  })
})

export const { useGetCategoriesQuery } = categoriesApi