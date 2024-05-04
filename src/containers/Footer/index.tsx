import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Twitter from 'assets/images/icons8-twitter-24.png';
import LinkedIn from 'assets/images/icons8-linkedin-24.png';
import Facebook from 'assets/images/icons8-facebook-24.png';
import styles from './footer.module.scss';
import Logo from 'assets/images/Group 68.svg';
import { localRedirect } from 'utils';
import arrow from '../../assets/images/icons8-arrow-24.png';
import messages from './messages';

const Footer = () => {
  return (
    <>
      <footer>
        <div className={`${styles.footer_main}`}>
          <Container>
            <div className={`${styles.card} d-flex justify-content-center`} onClick={() => localRedirect('/contact')} >
              <Row className={`${styles.row} pt-5 ps-5 pe-5 rounded-pill bg-white`}>
                <Col className='ps-4'>
                    <p className={`${styles.p} text-left pt-3`}>{messages.text1}</p>
                    <p className={`${styles.p1} text-left`}>{messages.text2}</p>
                </Col>
                <Col>
                <button type="submit" className={`${styles.card_inner} btn text-white pt-3 mb-5 rounded-pill d-flex justify-content-center gap-4`}
                onClick={() => localRedirect('/contact')}>Let's Discuss 
                  <span>
                    <img src={arrow}></img>
                  </span>
                </button>
                </Col>
              </Row>
            </div>
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

export default Footer;
