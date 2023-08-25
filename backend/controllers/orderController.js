import asyncHandler from '../middleware/asyncHandler.js'
import Order from "../models/orderModel.js"


// Create new order
// @Route Post /api/orders
//@access private

const addOrderItems = asyncHandler(async (req, res ) => {
    res.send("Add order items")
})


// Get logged in user orders
// @Route GET /api/orders/myorders
//@access private

const getMyOrders = asyncHandler(async (req, res ) => {
    res.send("Get my orders")
})


// Get order by ID
// @Route Post /api/orders/:id
//@access private

const getOrderById = asyncHandler(async (req, res ) => {
    res.send("Order by id")
})

// Update order to paid
// @Route GET /api/orders/:id/pay
//@access private

const updateOrderToPaid = asyncHandler(async (req, res ) => {
    res.send("update order to paid")
})

// Update order to delivered
// @Route GET /api/orders/:id/deliver
//@access private/admin
const updateOrderToDelivered = asyncHandler(async (req, res ) => {
    res.send("Update order to delivered")
})

// Get all orders
// @Route GET /api/orders
//@access private/admin

const getOrders = asyncHandler(async (req, res ) => {
    res.send("get all orders")
})

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,
    updateOrderToPaid,
    getOrders

}