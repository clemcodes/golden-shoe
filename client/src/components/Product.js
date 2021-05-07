import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
      <Card className='my-3 p-3 rounded shoe-card'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image1} variant='top' />
        </Link>

        <Card.Body>
          <Card.Text as='p'>{product.gender}</Card.Text>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <div className='my-3'>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </div>
          </Card.Text>

          <Card.Text as='h3'>£{product.price}</Card.Text>

        </Card.Body>
      </Card>
  )
}

export default Product
