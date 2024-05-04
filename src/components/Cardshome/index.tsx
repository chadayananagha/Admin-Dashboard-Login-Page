import {Row, Col, Card } from 'react-bootstrap';
import styles from './cardshome.module.scss';
import cardVarients from './cardVarients';
import cardimage3 from '../../assets/images/Mask Group 13.png';
import cardimage4 from '../../assets/images/Mask Group 14.png';
import cardimage5 from '../../assets/images/Mask Group 15.png';
import cardimage6 from '../../assets/images/Mask Group 32.png';
import arrow from '../../assets/images/icons8-arrow-right-24.png';

const card = [
    {
        id: 1,
        title:'Cloud Native Consulting',
        text:'Own the future of cloud-native landscape by solving the problems native to the cloud.',
        image:cardimage3,
    },
    {
        id: 2,
        title:'Web & Mobility Consulting',
        text:'We assist you to develop a precise architecture for your product by a process that involves identifying your user’s needs, business objectives, and market opportunity, among others.',
        image:cardimage4,
    },

  ];
  const card1 =[
    {
        id: 5,
        title:'Data & Analytics Consulting',
        text:'We offer advanced data analytics consulting services designed to help businesses unlock the power of their data and gain valuable insights for informed decision-making.',
        image:cardimage5,
        },
        {
        id: 6,
        title:'Internet of Things (IoT)',
        text:'The Internet of Things—a vast network of sensors and smart devices combined with advanced analytics and cloud services—promises to augment (and disrupt) many industry sectors.',
        image:cardimage6
        },
  ];

const Cardshome = () => {
  return (
    <div>
        <Row md={2} lg={2} className={`${styles.cards}`}>
            {cardVarients.map((variant: any, index: any) => (
              <Col xs={12} lg={6} key={index}>
                <Card className={`${styles.card}`}>
                  <Col>
                  <Card.Img src={variant.image} className={`${styles.cardimage}`}/>
                  </Col>
                  <Col>
                  <Card.Body>
                    <Card.Title className={`${styles.card_title} fw-bold`}>{variant.title}</Card.Title>
                    <Card.Text className={`${styles.card_text}`}>{variant.text}</Card.Text>
                    <button type="submit" className={`${styles.explore_button} btn pt-3 d-flex justify-content-center gap-2`}>
                      <span><img src={arrow}></img></span>
                      Explore More 
                    </button>
                  </Card.Body>
                  </Col>
                </Card>
              </Col>
            ))}
          </Row>
          <Row md={2} lg={2} className={`${styles.cards}`}>
            {card.map((variant: any, index: any) => (
              <Col xs={12} lg={6} key={index}>
                <Card className={`${styles.card}`}>
                  <Col>
                  <Card.Img src={variant.image} className={`${styles.cardimage}`}/>
                  </Col>
                  <Col>
                  <Card.Body>
                    <Card.Title className={`${styles.card_title} fw-bold`}>{variant.title}</Card.Title>
                    <Card.Text className={`${styles.card_text}`}>{variant.text}</Card.Text>
                    <button type="submit" className={`${styles.explore_button} btn pt-3 d-flex justify-content-center gap-2`}>
                      <span><img src={arrow}></img></span>
                      Explore More 
                    </button>
                  </Card.Body>
                  </Col>
                </Card>
              </Col>
            ))}
          </Row>
          <Row md={2} lg={2} className={`${styles.cards}`}>
            {card1.map((variant: any, index: any) => (
              <Col xs={12} lg={6} key={index}>
                <Card className={`${styles.card}`}>
                  <Col>
                  <img src={variant.image} className={`${styles.cardimage}`}/>
                  </Col>
                  <Col>
                  <Card.Body>
                    <Card.Title className={`${styles.card_title} fw-bold`}>{variant.title}</Card.Title>
                    <Card.Text className={`${styles.card_text}`}>{variant.text}</Card.Text>
                    <button type="submit" className={`${styles.explore_button} btn pt-3 d-flex justify-content-center gap-2`}>
                      <span><img src={arrow}></img></span>
                      Explore More 
                    </button>
                  </Card.Body>
                  </Col>
                </Card>
              </Col>
            ))}
          </Row>
      
    </div>
  );
};
export default Cardshome;