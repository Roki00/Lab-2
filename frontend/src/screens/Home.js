import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import { useGetProductsQuery } from '../slices/productsApiSlice.js'


const Home = () => {
  const{ data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
       { isLoading ? (
        <Loader/>
       ): error ? (
       <Message variant='danger'>{ error?.data?.message || error.error}</Message>
       ) : (<>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
       
       
       </>) }
        
    </>
  )
}

export default Home
