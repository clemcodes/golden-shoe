import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header className=''>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="mr-auto">Golden Shoe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Men" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Casual</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Leather</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="sale" href="#action/3.4">Sale up to 50%</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Women" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Casual</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Leather</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="sale" href="#action/3.4">Sale up to 50%</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2 input__search" />
              <Button variant="outline btn__search">Search</Button>
            </Form>
            <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i> Cart</Nav.Link>
            <Nav.Link href="/login"><i class="fas fa-user"></i> Sign In</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
