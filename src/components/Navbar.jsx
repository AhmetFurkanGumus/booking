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
          <Navbar.Brand href="/">My Bookstore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menü"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/Categories">Kategoriler</NavDropdown.Item>
              <NavDropdown.Item href="/AllBooks">Tüm Kitaplar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Popüler</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Kitap Öneri</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/about">Hakkında</Nav.Link>
            <Nav.Link href="/login">Giriş Yap</Nav.Link>
            <Nav.Link href="/signup">Kaydol</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ marginTop: '80px' }}></div>
    </>
  );
};

export default Navbars;
