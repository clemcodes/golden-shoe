import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='mr-auto'>
              <img
                width='150px'
                src='/logo__golden-shoe.png'
                alt='golden shoe logo'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <NavDropdown title='Men' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/1'>All men's</NavDropdown.Item>
                <NavDropdown.Item href='#action/1.1'>
                  Mocassins
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/1.2'>Lace-up</NavDropdown.Item>
                <NavDropdown.Item href='#action/1.3'>Sneakers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='sale' href='#action/1.4'>
                  Sale up to 50%
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Women' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/2'>
                  All women's
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/2.1'>
                  Mocassins
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/2.2'>Lace-up</NavDropdown.Item>
                <NavDropdown.Item href='#action/2.3'>Boots</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='sale' href='#action/2.4'>
                  Sale up to 50%
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2 input__search'
              />
              <Button variant='outline golden-btn'>Search</Button>
            </Form>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i>
              </Nav.Link>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
