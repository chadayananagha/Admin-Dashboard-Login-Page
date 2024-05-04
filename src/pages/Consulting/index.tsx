import React from 'react';
import { Footer, Header } from 'containers';
import { Container,Card,Col,Row,CardGroup } from 'react-bootstrap';
import Banner from '../../assets/images/consulting.png';
import styles from '../Consulting/consulting.module.scss';
import messages from './messages';
import image1 from '../../assets/images/Group 187.png';
import image2 from '../../assets/images/Group 189.png';
import image3 from '../../assets/images/Group 188.png';
import Cardsconsulting from 'components/Cardsconsulting';
import Efficiency from '../../assets/images/Group 180.png';
import Innovation from '../../assets/images/Group 178.png';
import Cost from '../../assets/images/Group 181.png';
import arrow from '../../assets/images/icons8-arrow-24.png';
import { localRedirect } from 'utils';
import cardimage1 from '../../assets/images/0d5510513a1ff863bd5a8c3ca91d831e.png';
import cardimage2 from '../../assets/images/Mask Group 12.png';
import cardVarients from './cardVarients';
import arrow1 from '../../assets/images/icons8-arrow-right-24.png'

const card = [
  {
    id: 1,
    title:'Digital Transformation',
    text:'Embrace digital transformation to stay competitive in the modern era.',
    image:cardimage1,
  },
  {
    id: 2,
    title:'Digital Transformation Consulting',
    text:'Unlock the potential of your data assets with advanced analytics.',
    image:cardimage2,
  },

];
const Consulting = () => {
  return (
    <div className='d-flex flex-column'>
      <Header />

      <Container
        fluid
        className="p-0 overflow-auto"
        style={{ marginBottom: '150px' }}
      >
        <div className={`${styles.banner}`}>
          <img src={Banner} width={1900} height={584}>
          </img>
          <div className={`${styles.banner_text} text-white user-select-none`}>
            <p>{messages.text1}</p>
            <p>{messages.text2}</p>
          </div>
          <div className={`${styles.banner_text1} text-white`}>
            <p>{messages.text3}</p>
            <p>{messages.text4}</p>
            <p>{messages.text5}</p>
            <p>{messages.text6}</p>
          </div>
        </div>

        <div className={`${styles.card_container} text-center bg-white`}>
          <h1 className='fw-bold text-center pt-5'>IT Strategy Development</h1>
          <div className={`${styles.cardgroup_container} mt-5 mb-5`}>
            <CardGroup className={`${styles.card_group} border-0`}>
              <Card className={`${styles.card1_border} border-top-0 border-start-0 border-bottom-0`}>
                <Card.Body>
                  <img src={image1} className='pt-2'></img>
                  <Card.Text className='pt-3'>{messages.cardtext1}</Card.Text>
                </Card.Body>
              </Card>
              <Card className={`${styles.card2_border} border-top-0 border-start-0 border-bottom-0`}>
                <Card.Body>
                  <img src={image2} className='pt-2'></img>
                  <Card.Text className='pt-3'>{messages.cardtext2}</Card.Text>
                </Card.Body>
              </Card>
              <Card className='border-top-0 border-start-0 border-bottom-0 border-end-0'>
                <Card.Body>
                  <img src={image3} className='pt-2'></img>
                  <Card.Text className='pt-3'>{messages.cardtext3}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
          <div className={`${styles.p} text-center`}>
            <h2 className='fw-bold text-center pt-5'>Crafting a Roadmap to Success</h2>
            <p className='text-center text-wrap pt-2'>
            In today’s fast-paced business landscape, technology plays a pivotal
            role in driving growth, efficiency, and competitiveness. At Cloudloom,
            we understand that a well-defined IT strategy is the foundation upon 
            which your organization can thrive.
            </p>
          </div>
          <Cardsconsulting/>
          <h2 className='fw-bold text-center pt-5 pb-3'>Why IT Strategy Matters</h2>
          <div className={`${styles.cardgroup_container1} mt-5 mb-5`}>
            <CardGroup className={`${styles.card_group1} border-0`}>
              <Card className={`${styles.card1_border} border-top-0 border-start-0 border-bottom-0`}>
                <Card.Body>
                  <img src={Efficiency} className='pt-2'></img>
                  <p className='fw-bold'>Efficiency</p>
                  <Card.Text className='text-black'>{messages.cardtext4}</Card.Text>
                </Card.Body>
              </Card>
              <Card className={`${styles.card2_border} border-top-0 border-start-0 border-bottom-0`}>
                <Card.Body>
                  <img src={Innovation} className='pt-2'></img>
                  <p className='fw-bold'>Innovation</p>
                  <Card.Text className='text-black'>{messages.cardtext5}</Card.Text>
                </Card.Body>
              </Card>
              <Card className='border-top-0 border-start-0 border-bottom-0 border-end-0'>
                <Card.Body>
                  <img src={Cost} className='pt-2'></img>
                  <p className='fw-bold'>Cost Optimization</p>
                  <Card.Text className='text-black'>{messages.cardtext6}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
          <div className={`${styles.p} text-center mt-5 mb-4`}>
            <h2 className='fw-bold text-center pt-5'>Unlock Your Potential</h2>
            <p className='text-black'>Unlock the full potential of your technology investments with a 
              well-crafted IT strategy. At Cloudloom, we have a proven track 
              record of helping organizations of all sizes achieve their technology 
              objectives. Our dedicated team of experts is here to guide you on your 
              journey toward IT excellence.
            </p>
          </div>
          <div className={`${styles.unlock} mt-5`}>
            <p className='fw-bold'>Ready to take the next step?</p>
            <p>Contact us today to discuss how we can tailor an IT 
              strategy to your specific needs and goals.
            </p>
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className={`${styles.submit} btn text-white pt-3 mt-5 mb-5 rounded-pill d-flex justify-content-center gap-4`}
              onClick={() => localRedirect('/contact')}>Contact now 
              <span>
                <img src={arrow}></img>
              </span>
            </button>
          </div>
        </div>
        <div className={`${styles.card_container1}`}>
        <h1 className='fw-bold text-center pt-5'>Consulting Services</h1>
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
                      <span><img src={arrow1}></img></span>
                      Explore More 
                    </button>
                  </Card.Body>
                  </Col>
                </Card>
              </Col>
            ))}
          </Row>
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
                      <span><img src={arrow1}></img></span>
                      Explore More 
                    </button>
                  </Card.Body>
                  </Col>
                </Card>
              </Col>
            ))}
          </Row>

        </div>
        
      </Container>
      <div className={`${styles.footer_container}`}>
      <Footer />
      </div>
    </div>
  );
};
export default Consulting;
