import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Footer, Header } from 'containers';
import styles from './about.module.scss';
import messages from './messages';
import cardVarients from './cardVarients';
import Banner  from '../../assets/images/about.png';
import cardimage from '../../assets/images/Mask Group 29.png';
import Photo1 from '../../assets/images/Mask Group 24.png';
import Photo2 from '../../assets/images/Mask Group 25.png';
import Photo3 from '../../assets/images/Mask Group 26.png';
import Photo4 from '../../assets/images/Mask Group 27.png';

const team = [
  {
    id: 1,
    image: Photo1,  
    title:'Gopinath Guptha',
    text:'Chairman',
  },
  {
    id: 1,
    image: Photo2,  
    title:'Firoz Fazil',
    text:'CTO',
  },
  {
    id: 1,
    image: Photo3,  
    title:'Nidhin Tony',
    text:'SVP',
  },
  {
    id: 1,
    image: Photo4,  
    title:'Lorem Ipsum',
    text:'Lorem ipsum dolor',
  },
];

const About = () => {
  return (
    <div className="d-flex flex-column bg-white">
      <Header />

      <Container fluid className="p-0" style={{ marginBottom: '150px' }}>
        <div className={`${styles.bannercard}`}>
          <img src={Banner} width={1900}>
          </img>
          <div className={`${styles.bannertext} text-white user-select-none`}>
            <p>{messages.text1}</p>
            <p>{messages.text2}</p>
            <p>{messages.text3}</p>
          </div>
        </div>
        <div className={`${styles.card_container}`}>
          <h2 className='text-center'>{messages.title1}</h2>
          <div className='mt-4 text-center'>
            <p>{messages.content1}</p>
            <p>{messages.content2}</p>
            <p>{messages.content3}</p>
            <p>{messages.content4}</p>
          </div>
          <Row md={2} lg={2} className={`${styles.about}`}>
            {cardVarients.map((variant: any, index: any) => (
              <Col xs={12} lg={6} key={index}>
                <Card className={`${styles.cards}`}>
                  <Card.Body>
                    <Card.Text className={`${styles.card_text} pe-5 ps-5 pt-4 lh-sm text-black text-left`}>
                      {variant.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Card className={`${styles.card_inner}`}>
            <Row>
              <Col>
                <Card.Img src={cardimage} className={`${styles.card_image}`}/>
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title className={`${styles.cardinner_title} text-white`}>{messages.cardtitle}</Card.Title>
                  <Card.Text className={`${styles.cardinner_text} text-white text-left`}>
                  <p className='lh-sm'>{messages.cardtext1}</p>
                  <p className='lh-sm'>{messages.cardtext2}</p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>         
        </div>
        <div className={`${styles.team} text-white text-left`}>
          <h2 className='text-center text-black'>
          Our Team
          </h2>
          <Row md={1} lg={1} className={`${styles.teamcards}`}>
            {team.map((variant: any, index: any) => (
              <Col xs={6} lg={2} key={index}>
                <Card className={`${styles.teamcard} text-center`}>
                  <Card.Img variant="top" src={variant.image} />
                  <Card.Body>
                    <Card.Title className='fw-bold'>{variant.title}</Card.Title>
                      <Card.Text>{variant.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        
      </Container>
      <Footer />
    </div>
  );
};
export default About;
