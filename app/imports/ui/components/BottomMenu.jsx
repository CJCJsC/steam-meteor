import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const BottomMenu = () => (
  <footer id="bottomMenu" className="mt-auto py-3 bg-dark text-white">
    <Container fluid>
      <Row className="justify-content-center pt-3">
        <hr />
        <Col className="text-center">
          <p>© 2024 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.</p>
          <p>VAT included in all prices where applicable.   Privacy Policy   |   Legal   |   Steam Subscriber Agreement   |   Refunds   |   Cookies</p>
        </Col>
        <hr />
        <Col className="text-center">
          About Valve | Jobs | Steamworks | Steam Distribution | Support | Recycling | Gift Cards | <i className="bi bi-facebook"></i>Steam | <i className="bi bi-twitter"></i>@steam
        </Col>
      </Row>
    </Container>
  </footer>
);

export default BottomMenu;