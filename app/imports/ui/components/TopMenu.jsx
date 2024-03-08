import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const TopMenu = () => (
  <Container id="topMenu" fluid className="py-3">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <h1><i className="bi bi-steam steam-text"></i>STEAM</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#">STORE</Nav.Link>
            <Nav.Link href="#">COMMUNITY</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">SUPPORT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);

export default TopMenu;
