import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const StoreScreen = () => {
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

export default StoreScreen;
