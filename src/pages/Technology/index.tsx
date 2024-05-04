import React from 'react';
import { Container ,Card,Row,Col, CardBody} from 'react-bootstrap';
import { Footer, Header } from 'containers';
import { localRedirect } from 'utils';
import Banner from '../../assets/images/technologies.png';
import styles from '../Technology/technology.module.scss';
import messages from './messages';
import arrow from '../../assets/images/icons8-arrow-24.png';
import cloud from '../../assets/images/google_cloud-ar21.png';
import aws from '../../assets/images/amazon-s3.png';
import cardVarients from './cardVarients';
import Union from '../../assets/images/Union 5.png';
import Cardstechnology from 'components/Cardstechnology';
import arrowblack from '../../assets/images/icons8-arrow-right-black-24.png';

const Technology = () => {
  return (
    <div className={`d-flex flex-column`}>
      <Header />
      <Container fluid className="p-0 overflow-auto" style={{ marginBottom: '150px' }}>
      <div className={`${styles.banner}`}>
        <img src={Banner} width={1900} height={584}>
        </img>
        <div className={`${styles.bannertext} text-white user-select-none`}>
          <p>{messages.text1}</p>
          <p>{messages.text2}</p>
          <p>{messages.text3}</p>
        </div>
      </div>
      <div className={`${styles.card_container} text-center bg-white`}>
      <h2 className='fw-bold text-center pt-5'>Global Technology Platform</h2>
      
      <Card className={`${styles.card} text-white text-start mt-5`}>
        <CardBody>
          <Row className={`${styles.card_row} p-5`}>
            <Col className={`${styles.card_text1} ps-5 pe-5`}>
              <p>{messages.cardtext1}</p>
            </Col>
            <Col className='ps-5 pe-5'>
              <p>{messages.cardtext1}</p>
            </Col>
          </Row>
          <div className={`${styles.card_inner} ps-5 pt-4 fw-bold rounded-pill d-flex gap-5 text-black`} onClick={() => localRedirect('/contact')}>
            <p>To harness the full potential of technology and thrive in the digital realm.</p>
            <button type="submit" className={`${styles.partner_button} btn text-white pt-3 mb-5 rounded-pill d-flex justify-content-center gap-4`}
            onClick={() => localRedirect('/contact')}>
            Partner with us
              <span>
                <img src={arrow}></img>
              </span>
            </button>
          </div>
        </CardBody>
      </Card>
        <h3 className='fw-bold text-center pt-5'>Cloud Platforms Expertise</h3>
        <div className={`${styles.cloud_container} d-flex gap-5 mt-5`}>
          <div className={`${styles.image_container}`}>
            <div className={`${styles.image_cloud} pt-4 pb-4`}>
              <img src={cloud}></img></div>
            <div className={`${styles.image_aws} pt-4 pb-4`}>
              <img src={aws}></img></div>
            </div>
          <div className={`${styles.text_container} text-start pt-2`}>
            <p>{messages.text4}</p>
            <p>{messages.text5}</p>
            <p>{messages.text6}</p>
            <p>{messages.text7}</p>
          </div>
        </div> 
      </div>

      <div className={`${styles.nav_container}`}>
        <nav className="navbar navbar-expand-lg">
        {cardVarients.map((variant: any, index: any) => (
          <div className="collapse navbar-collapse d-flex justify-content-evenly pb-2">
              <ul className={`${styles.nav_list} navbar-nav user-select-none text-black`}>
                <div className={`${styles.nav_link}`}>
                  <li className="nav-link fw-bold">{variant.list}</li>
                </div>
              </ul>   
            </div>
             ))}
          </nav>
          <img src={Union}></img>
          <div className={`${styles.text} d-flex gap-5 mt-5 text-start`}>
            <p>{messages.navtext1}</p>
            <p className='ms-5'>{messages.navtext2}</p>
          </div>
          <Cardstechnology />
          <p className={`${styles.text1} mt-5`}>{messages.navtext3}</p>
          <div className={`${styles.text2} mt-2 d-flex gap-1`}>
            <button type="submit" className={`${styles.partner} btn pt-3 rounded-pill d-flex`}
            onClick={() => localRedirect('/contact')}>
            Partner with us
              <span>
                <img src={arrowblack}></img>
              </span>
            </button>
                <p className={`${styles.text3} pt-3 ps-1`}>to unlock the full potential of Kubernetes and navigate the future of cloud-native computing with confidence.</p>
          </div>
      </div>
      </Container>
      <div className={`${styles.footer_container}`}>
      <Footer />
      </div>
    </div>
  );
};
export default Technology;
