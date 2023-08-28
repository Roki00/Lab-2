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

// Create a product
// @Route POST /api/products
//@access Private/Admin

const CreateProduct = asyncHandler(async (req, res ) => {
    const product = new Product({
        name:"Sample Name",
        price:0,
        user:req.user._id,
        image:"/images/sample.jpg",
        brand:"Sample Brand",
        category:"Sample Category",
        countInStock:0,
        numReviews:0,
        description:"Sample Description"
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

// update a product
// @Route PUT /api/products/:id
//@access Private/Admin

const updateProduct = asyncHandler(async (req, res ) => {
    const {name, price, description, image, brand,category,countInStock} = req.body

    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name
        product.price = price
        product.description= description
        product.image=image
        product.brand= brand
        product.category = category
        product.countInStock = countInStock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    }else {
        res.status(404)
        throw new Error("Resource not found")
    }
})


// delete a product
// @Route DELETE /api/products/:id
//@access Private/Admin


const deleteProduct = asyncHandler(async (req, res ) => {
    const product = await Product.findById(req.params.id)

    if(product){
      await Product.deleteOne({_id: product._id});
      res.status(200).json({message: 'Product deleted'});
    }else {
        res.status(404)
        throw new Error("Resource not found")
    }
})

export {getProductById, getProducts, CreateProduct, updateProduct, deleteProduct}