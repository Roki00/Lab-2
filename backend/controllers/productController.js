import asyncHandler from '../middleware/asyncHandler.js'
import Product from "../models/productModel.js"


// Fetch all products
// @Route GET /api/products
//@access Public

const getProducts = asyncHandler(async (req, res ) => {
    const products = await Product.find({})
    res.json(products);
})


// Fetch all products
// @Route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res ) => {
    const product = await Product.findById(req.params.id)
    
    if(product) {
        res.json(product);
    }else{
        res.stauts(404)
        throw new Error("Product not found")
    }
})

export {getProductById, getProducts}