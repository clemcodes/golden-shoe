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
            <p><i class="fas fa-phone-alt"></i> +44 0123 4567 8900</p>
            <p><i class="fas fa-envelope"></i> support@goldenshoe.com</p>
            <p>
              <a href="#" className="mr-3"><i class="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook mr-3"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Golden Shoe
          </Col>
        </Row> */}
      </Container>
    </footer>
  )
}

export default Footer
