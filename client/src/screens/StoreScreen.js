import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';


const StoreScreen = () => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <>
      {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> :
        <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      } 
    </>
  );
};

export default StoreScreen;
