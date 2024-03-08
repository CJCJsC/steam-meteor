import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const SecondMenu = () => (
  <Container fluid className="border-0 bg-primary container-padding">
    <Navbar expand="lg" className="justify-content-between">
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link href="#">Your Store</Nav.Link>
          <Nav.Link href="#">New & Noteworthy</Nav.Link>
          <Nav.Link href="#">Categories</Nav.Link>
          <Nav.Link href="#">Points Shop</Nav.Link>
          <Nav.Link href="#">News</Nav.Link>
          <Nav.Link href="#">Labs</Nav.Link>
          <Nav className="align-items-center">
            <label className="m-0">
              <input type="text" className="form-control" placeholder="Search"/>
            </label>
            <i className="bi bi-search p-2 ml-2"></i>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default SecondMenu;
