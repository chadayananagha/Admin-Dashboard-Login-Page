import { Row, Col, Card, CardBody } from 'react-bootstrap';
import Deployment from '../../assets/images/Group 225.png';
import Contain from '../../assets/images/Group 222.png';
import Scaling from '../../assets/images/Group 218.png';
import Integration from '../../assets/images/Group 214.png';
import Security from '../../assets/images/Group 219.png';
import Monitoring from '../../assets/images/Group 220.png';
import Application from '../../assets/images/Group 221.png';
import Troubleshooting from '../../assets/images/Group 223.png';

import styles from '../Cardstechnology/cardstechnology.module.scss';
import messages from './messages';

const Cardstechnology = () => {
    return (
        <>
        <div>
            <Row className={`${styles.row} mt-4`}>
                <Col>
                    <Card className={`${styles.card}`}>
                    <img src={Deployment} width={40}></img>
                        <CardBody className='ps-4 pt-2'>
                            <Card.Title className='text-black'>{messages.cardtitle1}</Card.Title>
                            <Card.Text>{messages.cardtext1}</Card.Text>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className={`${styles.card1}`}>
                    <img src={Contain} width={40}></img>
                        <CardBody className='ps-4 pt-2'>
                            <Card.Title className='text-black'>{messages.cardtitle2}</Card.Title>
                            <Card.Text>{messages.cardtext2}</Card.Text>
                            </CardBody>
                        </Card>
                </Col>
                <Col>
                    <Card className={`${styles.card2}`}>
                        <img src={Scaling} width={40}></img>
                        <CardBody className='ps-4 pt-2'>       
                            <Card.Title className='text-black'>{messages.cardtitle3}</Card.Title>
                            <Card.Text>{messages.cardtext3}</Card.Text>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className={`${styles.card3}`}>
                    <img src={Integration} width={40}></img>
                        <CardBody className='ps-4 pt-2'>
                            <Card.Title className='text-black'>{messages.cardtitle4}</Card.Title>
                            <Card.Text>{messages.cardtext4}</Card.Text>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

        <div>
        <Row className={`${styles.row1} mt-4`}>
                <Col>
                    <Card className={`${styles.card4}`}>
                    <img src={Security} width={40}></img>
                        <CardBody className='ps-4 pt-2'>
                            <Card.Title className='text-black'>{messages.cardtitle1}</Card.Title>
                            <Card.Text>{messages.cardtext1}</Card.Text>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className={`${styles.card5}`}>
                    <img src={Monitoring} width={40}></img>
                        <CardBody className='ps-4 pt-2'>
                            <Card.Title className='text-black'>{messages.cardtitle2}</Card.Title>
                            <Card.Text>{messages.cardtext2}</Card.Text>
                            </CardBody>
                        </Card>
                </Col>
                <Col>
                    <Card className={`${styles.card6}`}>
                        <img src={Application} width={40}></img>
                        <CardBody className='ps-4 pt-2'>       
                            <Card.Title className='text-black'>{messages.cardtitle3}</Card.Title>
                            <Card.Text>{messages.cardtext3}</Card.Text>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className={`${styles.card7}`}>
                    <img src={Troubleshooting} width={40}></img>
                        <CardBody className='ps-4 pt-2'>
                            <Card.Title className='text-black'>{messages.cardtitle4}</Card.Title>
                            <Card.Text>{messages.cardtext4}</Card.Text>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
        </>
    );
  };
  export default Cardstechnology;