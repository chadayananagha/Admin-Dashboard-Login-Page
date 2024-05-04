import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Twitter from 'assets/images/icons8-twitter-24.png';
import LinkedIn from 'assets/images/icons8-linkedin-24.png';
import Facebook from 'assets/images/icons8-facebook-24.png';
import styles from './footercontent.module.scss';
import Logo from 'assets/images/Group 68.svg';
import { localRedirect } from 'utils';

const Footercontact = () => {
  return (
    <>
      <footer>
        <div className={`${styles.footer_main}`}>
          <Container>
          <div className='pt-5 d-flex justify-content-center pb-1'>
              <Stack direction="horizontal" className="my-3" gap={5}>
                <img className="me-2" src={LinkedIn} />
                <img className="me-2" src={Twitter} />
                <img className={`${styles.youtube_icon}`} src={Facebook} />
              </Stack>
              </div>
              <div className={`${styles.border}`}>
              <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse d-flex justify-content-evenly pb-2">
                  <ul className={`${styles.ul} navbar-nav user-select-none`}>
                    <li className="nav-link">Home</li>
                    <li className="nav-link">About Us</li>
                    <li className="nav-link">Services</li>
                    <li className="nav-link">Solutions</li>
                    <li className="nav-link">Products</li>
                    <li className="nav-link">Contact Us</li>
                  </ul>   
                </div>
              </nav>
              </div>
              <div className={`${styles.logo} d-flex justify-content-center pt-4 pb-4`}>
                <img src={Logo}/>
              </div>
              <div className='pb-5 user-select-none'>
                <p className='text-center text-white'>620, 2nd Phase, 2nd cross, 7th Block, Banashankari 3rd Stage, Bangalore, Karnataka, India, 560085
                </p>
                <p className={`${styles.text} text-center`}>© 2023 Cloudloom Technologies Pvt. Ltd. All rights reserved.</p>
              </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footercontact;
