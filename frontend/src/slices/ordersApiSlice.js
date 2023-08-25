import {apiSlice} from "./apiSlice"
import { ORDERS_URL } from '../constants'



export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        createOrder:builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method:"Post",
                body: {...order}
            })
        })
    })
})

export const  {useCreateOrderMutation} = orderApiSlice