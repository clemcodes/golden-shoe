import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';


const StoreScreen = () => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader /> 
      ): error ? (
        <Message variant='danger'>{error}</Message>
      ): (
        <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
        </Row>
        )
      } 
    </>
  );
};

export default StoreScreen;
