import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  Card,
  Button,
  Accordion,
  Table,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, product, error} = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <>
      <Link className='btn my-3 golden-btn' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader /> 
      ): error ? (
        <Message variant='danger'>{error}</Message>
      ): (
        <Row>
          <Col md={6}>
            <Image
              className='mb-4'
              src={product.image1}
              alt={product.name}
              fluid
            />
          </Col>

          <Col md={6}>
            <h3>{product.name}</h3>
            <h3 className='mt-3'>£{product.price}</h3>
            <p
              className='in-stock'
              style={{
                color: product.countInStock <= 0 && 'var(--secondary-color)',
              }}
            >
              {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
            </p>
            {
              product.countInStock > 0 && (
                <p>Qty
                  <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map(x => (
                      <option key={x+1} value={x+1}>{x+1}</option>
                    ))}
                  </Form.Control>
                </p>

              )
            }
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />

            <div className='size mt-3'>
              <span>SIZE</span>
              {product.size &&
                product.size.map((s) => (
                  <span key={s.name}>
                    <input
                      type='radio'
                      name='size'
                      id={s.name}
                      disabled={s.stock === 0}
                    />
                    <label htmlFor={s.name}>{s.num}</label>
                  </span>
                ))}
            </div>

            <Button
              onClick={addToCartHandler}
              className='mt-3 add-to-cart'
              type='button'
              disabled={product.countInStock === 0}
            >
              Add to Cart
            </Button>

            <Accordion className='mt-3' defaultActiveKey='0'>
              <Card className='accordion__card'>
                <Accordion.Toggle
                  className='accordion__header panel-link active'
                  as={Card.Header}
                  eventKey='0'
                >
                  INFORMATION
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body className='accordion__body'>
                    <p>{product.description}</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='accordion__card'>
                <Accordion.Toggle
                  className='accordion__header'
                  as={Card.Header}
                  eventKey='1'
                >
                  SIZE CHART
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='1'>
                  <Card.Body className='accordion__body'>
                    <Table striped bordered responsive>
                      <tbody>
                        <tr>
                          <td>UK</td>
                          {[3, 4, 4.5, 5, 6, 7, 8, 8.5, 9].map((size, index) => (
                            <td key={index}>{size}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>US</td>
                          {[4, 5, 5.5, 6, 7, 8, 9, 9.5, 10].map((size, index) => (
                            <td key={index}>{size}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>EU</td>
                          {[35.5, 36.5, 37.5, 38, 39, 41, 42.5, 43, 44].map(
                            (size, index) => (
                              <td key={index}>{size}</td>
                            )
                          )}
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='accordion__card'>
                <Accordion.Toggle
                  className='accordion__header'
                  as={Card.Header}
                  eventKey='2'
                >
                  SHIPPING & RETURNS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='2'>
                  <Card.Body className='accordion__body'>
                    <img
                      src='/images/payments.png'
                      alt='payment methods'
                      width='150px'
                    />
                    <h6 className='mt-3 mb-3'>7 Days FREE Return</h6>
                    <p>
                      Free delivery on orders over £50
                      <br />
                      Delivery within UK{' '}
                      <span className='accent'>2 - 4 days</span>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin pharetra tempor so dales. Phasellus sagittis auctor
                      gravida. Integer bibendum sodales arcu id te mpus. Ut
                      consectetur lacus leo, non scelerisque nulla euismod nec.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      )
      }
    </>
  );
};

export default ProductScreen;
