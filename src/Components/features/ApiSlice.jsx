// services/productsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosInstance from '../Pages/AxiosConfig';
import { updateProduct } from '../Pages/ApiCall';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
        }),
        createProduct: builder.mutation({
            query: (productData) => ({
                url: '/products',
                method: 'POST',
                body: productData,
            }),
        }),
        updateProduct: builder.mutation({
            query: ({id,...data}) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),
    }),
});

export const { useGetProductsQuery, useDeleteProductMutation, useCreateProductMutation , useUpdateProductMutation } = productsApi;
