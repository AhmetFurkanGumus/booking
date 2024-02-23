import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
    <>
      <Navbar sticky='top' className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Kategoriler</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Yazarlar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Populer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Kitap Öneri</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
          <Nav>
            <Nav.Link href="/about">Hakkında</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="/Signup">Signup</Nav.Link>
          </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
