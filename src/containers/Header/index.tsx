import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from 'assets/images/Group 68.svg';
import { localRedirect } from 'utils';
import { Offcanvas } from 'react-bootstrap';
import styles from './header.module.scss';

const HeaderHome = ({ innerRef, className = '' }: any) => {
  return (
    <Navbar ref={innerRef} key="lg" expand="lg" className={`bg-white ${styles.nav_height} ${className}`} sticky="top">
      <Container className={`d-flex ${styles.navbar_brand}`}>
        <Navbar.Brand>
          <img src={Logo} onClick={() => localRedirect('/home')} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'lg'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="me-auto"></Nav>
            <Nav>
              <div className={`${styles.nav}`}>
              <Nav.Link onClick={() => localRedirect('/home')} className="me-4">
                Home
              </Nav.Link>
              </div>
              <div className={`${styles.nav}`}>
              <Nav.Link onClick={() => localRedirect('/consulting')} className="me-4">
                Consulting
              </Nav.Link>
              </div>
              <div className={`${styles.nav}`}>
              <Nav.Link onClick={() => localRedirect('/technology')} className="me-4">
                Technology
              </Nav.Link>
              </div>
              <div className={`${styles.nav}`}>
              <Nav.Link onClick={() => localRedirect('/casestudies')} className="me-4">
                Case Studies
              </Nav.Link>
              </div>
              <div className={`${styles.nav}`}>
              <Nav.Link onClick={() => localRedirect('/about')} className="me-4">
                About Us
              </Nav.Link>
              </div>
              <div className={`${styles.nav}`}>
              <Nav.Link onClick={() => localRedirect('/contact')} className="me-4">
                Contact Us
              </Nav.Link>
              </div>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default HeaderHome;
