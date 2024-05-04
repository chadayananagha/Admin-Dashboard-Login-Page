import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Footer, Header } from 'containers';
import Banner1 from '../../assets/images/home-banner1.png';
import Banner2 from '../../assets/images/home-banner2.png';
import Banner3 from '../../assets/images/home-banner3.png';
import Banner4 from '../../assets/images/home-banner4.png'; 
import Carousel from 'react-bootstrap/Carousel';
import styles from './home.module.scss';
import './home.css';
import messages from './messages';
import arrow from '../../assets/images/icons8-arrow-24.png';
import cardimage from '../../assets/images/Group 76.png';
import Cardshome from 'components/Cardshome';
import card1image from '../../assets/images/Mask Group 19.png';
import icon1 from '../../assets/images/Group 167.svg';
import { useState } from 'react';
import { localRedirect } from 'utils';


const cardVarients = [
  {
      id: 1,
      title:'Commerce',
      text1:'Reimagining commerce through future-proof solutions that meet the',
      text2:'shifting consumption patterns driven by consumer craving for digital',
      text3:'and contactless ways of shopping.',
      image:icon1,
  },
  {
      id: 1,
      title:'BFSI',
      text1:'ROI-driven digital solutions for building agile models to deter fraud, ',
      text2:'automate transaction-based processes, and reimagine how manual',
      text3:'tasks are completed in terms of security and scalability.',
      image:icon1,
  },
  {
      id: 1,
      title:'Payments',
      text1:'Robust payment solutions leveraging next generation technology',
      text2:'for rapid business development, higher operational efficiencies, ',
      text3:'and improved service innovations.',
      image:icon1,
  },
    {
      id: 1,
      title:'Education',
      text1:'One-stop destination crafted to function in tandem with the latest',
      text2:'institutional practices optimising the use and implementation of the',
      text3:'education curriculum.',
      image:icon1,
  },

];

const Home = () => {
  
  return (
    <div className="d-flex flex-column bg-white">
       <Header />
      <Container fluid className="p-0 overflow-auto" style={{ marginBottom: '100px' }}>
      <Carousel slide={false} interval={null} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed user-select-none" />}
      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon changed" />}
      >
      <Carousel.Item>
        <img src={Banner1} width={1900} height={800}></img>
        <Carousel.Caption>
          <div className={`${styles.text} user-select-none`}>
            <p>{messages.text1}</p>
            <p>{messages.text2}</p>
            <p>{messages.text3}</p>
          </div>
          <div className={`${styles.text1} user-select-none`}>
            <p>{messages.text4}</p>
            <p>{messages.text5}</p>
            <p>{messages.text6}</p>
          </div>
          <button type="submit" className={`${styles.submit_button} btn text-white pt-3 mb-5 rounded-pill d-flex justify-content-center gap-4`}
          onClick={() => localRedirect('/contact')}>
            {messages.text7} 
            <span>
              <img src={arrow}></img>
            </span>
          </button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner2} width={1900} height={800}></img>
        <Carousel.Caption>
          <div className={`${styles.text} user-select-none`}>
              <p>{messages.text8}</p>
              <p>{messages.text9}</p>
              <p>{messages.text10}</p>
              <p>{messages.text}</p>
            </div>
            <div className={`${styles.text1} user-select-none`}>
              <p>{messages.text11}</p>
              <p>{messages.text12}</p>
              <p>{messages.text13}</p>
            </div>
            <button type="submit" className={`${styles.submit_button} btn text-white pt-3 mb-5 rounded-pill d-flex justify-content-center gap-4`}
             onClick={() => localRedirect('/contact')}>
              {messages.text14} 
              <span>
                <img src={arrow}></img>
              </span>
            </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner3} width={1900} height={800}></img> 
        <Carousel.Caption>
        <div className={`${styles.text} user-select-none`}>
              <p>{messages.text15}</p>
              <p>{messages.text16}</p>
            </div>
            <div className={`${styles.text1} user-select-none`}>
              <p>{messages.text18}</p>
              <p>{messages.text19}</p>
              <p>{messages.text20}</p>
            </div>
            <button type="submit" className={`${styles.submit_button} btn text-white pt-3 mb-5 rounded-pill d-flex justify-content-center gap-4`}
             onClick={() => localRedirect('/contact')}>
              {messages.text21} 
              <span>
                <img src={arrow}></img>
              </span>
            </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner4} width={1900} height={800}></img> 
        <Carousel.Caption>
        <div className={`${styles.text} user-select-none`}>
              <p>{messages.text22}</p>
              <p>{messages.text23}</p>
              <p>{messages.text24}</p>
              <p>{messages.text25}</p>
            </div>
            <div className={`${styles.text1} user-select-none`}>
              <p>{messages.text26}</p>
              <p>{messages.text27}</p>
            </div>
            <button type="submit" className={`${styles.submit_button} btn text-white pt-3 mb-5 rounded-pill d-flex justify-content-center gap-4`}
             onClick={() => localRedirect('/contact')}>
              {messages.text21} 
              <span>
                <img src={arrow}></img>
              </span>
            </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card className={`${styles.card}`}>
            <Row>
              <Col>
                <Card.Img src={cardimage} className={`${styles.card_image}`}/>
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title className={`${styles.card_title}`}>
                    <h1>{messages.cardtitle1}</h1>
                    <h2>{messages.cardtitle2}</h2>
                    </Card.Title>
                  <Card.Text className={`${styles.card_text} text-white text-left`}>
                  <p>{messages.cardtext1}</p>
                  <p>{messages.cardtext2}</p>
                  <p>{messages.cardtext3}</p>
                  <p className='pt-4'>{messages.cardtext5}</p>
                  <p className='fs-3 pt-4'>{messages.cardtext4}</p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <div className={`${styles.cardscontainer}`}>
            <h2 className='fw-bold text-center'>Simplifying the complex</h2>
            <h3>with integrated cutting-edge consulting services</h3>
            <Cardshome />
            <Card className={`${styles.card1}`}>
            <Row>   
              <Col>
                <Card.Body>
                  <Card.Title className={`${styles.card1_title} ps-5`}>
                    <h1 className='fw-bold'>{messages.card1title}</h1>
                  </Card.Title>
                  <div className={`${styles.card1_text} text-left pt-4`}>
                    <Col>
                    {cardVarients.map((variant: any, index: any) => (
                    <Row>
                    <Row>
                      <Col>
                        <img src={variant.image}></img>
                      </Col>
                      <Col>
                        <h4>{variant.title}</h4>
                        <p>{variant.text1}</p>
                        <p>{variant.text2}</p>
                        <p>{variant.text3}</p>
                      </Col>
                    </Row>
                    <div className={`${styles.border} mt-3 mb-3`}> </div>
                    </Row>
                     ))}
                    </Col>
                  </div>
                </Card.Body>
              </Col>
              <Col>
                <Card.Img src={card1image} className={`${styles.card1_image}`}/>
              </Col>
            </Row>
          </Card> 
          </div> 
      </Container>
      <div className={`${styles.footer_container}`}>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
