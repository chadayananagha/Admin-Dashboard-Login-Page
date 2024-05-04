import { Card,Row,Col } from "react-bootstrap";
import messages from "../Cardsconsulting/messages";
import styles from './cardsconsulting.module.scss';
import cardimage from '../../assets/images/Mask Group 20.png';
import cardimage1 from '../../assets/images/Mask Group 21.png';

const Cardsconsulting = () => {
    return (
        <div>
             <Card className={`${styles.card} mt-5`}>
            <Row>   
              <Col>
                <Card.Body>
                  <Card.Title>
                    <h1 className='fw-bold'>{messages.cardtitle}</h1>
                  </Card.Title>
                  <Card.Text>
                    <p><span>{messages.span1}</span>{messages.description1}</p>
                    <p><span>{messages.span2}</span>{messages.description2}</p>
                    <p><span>{messages.span3}</span>{messages.description3}</p>
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col>
                <Card.Img src={cardimage} className={`${styles.card_image}`}/>
              </Col>
            </Row>
          </Card> 

          <Card className={`${styles.card1} mt-5 mb-5`}>
            <Row>  
                <Col>
                    <Card.Img src={cardimage1} className={`${styles.card_image1}`}/>
                </Col> 
                <Col>
                    <Card.Body>
                    <Card.Title>
                        <h1 className='fw-bold'>{messages.cardtitle1}</h1>
                    </Card.Title>
                    <Card.Text>
                        <p><span>{messages.span4}</span>{messages.description4}</p>
                        <p><span>{messages.span5}</span>{messages.description5}</p>
                        <p><span>{messages.span6}</span>{messages.description6}</p>
                    </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
          </Card> 
        </div>
        );
    };
    export default Cardsconsulting;