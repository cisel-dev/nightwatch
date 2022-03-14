import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import { Spinner } from '../common/components';

const Navigation = () => {
  return (
    <div className="Navigation">


      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">NightWatch</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/kubetools">Kubetools</Nav.Link>
            <Nav.Link as={NavLink} to="/gittools">Gittools</Nav.Link>
            <Nav.Link as={NavLink} to="/containertools">Containertools</Nav.Link>
          </Nav>
          <Spinner />
          
          <Logo />

        </Container>
      </Navbar>

    </div>
  );
};

export default Navigation;