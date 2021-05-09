import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='my-3'>
      <Container>
        <Row>
          <Col className='text-center py-3' sm={12} md={4}>
            <h6 className='pb-3'>Shopping with Us</h6>
            <p>Men's</p>
            <p>Women's</p>
            <p>Fit Guide</p>
            <p>About Us</p>
          </Col>
          <Col className='text-center py-3' sm={12} md={4}>
            <h6 className='pb-3'>Customer Service</h6>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Store Locator</p>
          </Col>
          <Col className='text-center py-3' sm={12} md={4}>
            <h6 className='pb-3'>Contact Us</h6>
            <p>Mon-Sat 9AM - 5PM</p>
            <p><i className="fas fa-phone-alt"></i> +44 0123 4567 8900</p>
            <p><i className="fas fa-envelope"></i> support@goldenshoe.com</p>
            <p className='social-panel'>
              <i className="fab fa-twitter mr-3"></i>
              <i className="fab fa-facebook mr-3"></i>
              <i className="fab fa-instagram"></i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
