import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <video autoplay='autoplay' loop='loop' width='100%' muted >
        <source src='video.mp4'></source>
      </video>

      <h4 className='text-center mt-5'>New Arrivals</h4>

      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
