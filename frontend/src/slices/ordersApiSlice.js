import {apiSlice} from "./apiSlice.js"
import { ORDERS_URL, PAYPAL_URL } from '../constants.js'



export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        createOrder:builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method:"Post",
                body: {...order}
            })
        }),
        getOrderDetails: builder.query({
            query:(orderId) => ({
            url: `${ORDERS_URL}/${orderId}`
            }),
            keepUnusedDataFor: 5
        }),
        payOrder: builder.mutation({
            query: (orderId, details) => ({
                url: `${ORDERS_URL}/${orderId}/pay`,
                method: 'PUT',
                body: {...details},
            }),
        }),
        getPayPalClientId: builder.query({
            query: () => ({
                url: PAYPAL_URL,

            }),
            keepUnusedDataFor: 5, 
        })
    }),
});

export const  {useCreateOrderMutation, useGetOrderDetailsQuery, usePayOrderMutation, useGetPayPalClientIdQuery} = orderApiSlice