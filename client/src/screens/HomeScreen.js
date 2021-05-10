import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('api/products');

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className='showcase'>
        <video autoplay='autoplay' loop='loop' width='100%' muted>
          <source src='video.mp4'></source>
        </video>
        <div className='overlay'></div>
        <div className='showcase__text'>
          <h3>Quality & Style</h3>
          <p>Golden Shoe, glowing step. Shop quality and style from 1962.</p>
          <Button className='showcase__btn'>Shop Now</Button>
        </div>
      </section>

      <h4 className='text-center mt-5'>New Arrivals</h4>

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
