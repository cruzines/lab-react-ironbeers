import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


function Header() {

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
