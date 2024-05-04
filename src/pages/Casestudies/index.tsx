import { Container, Card, CardBody } from 'react-bootstrap';
import { Header } from 'containers';
import styles from '../Casestudies/casestudies.module.scss';
import Banner from '../../assets/images/casestudy.png';
import messages from './messages';
import Footercontact from 'containers/FooterContact';

const Casestudies = () => {
    return (
        <div className="d-flex flex-column bg-white">
            <Header />
            <Container fluid className="p-0" style={{ marginBottom: '150px' }}>
                <div className={`${styles.card_1} bg-white`}>
                    <img src={Banner} width={1900} height={584}>
                    </img>
                    <div className={`${styles.text} text-white user-select-none`}>
                        <p>{messages.text1}</p>
                        <p>{messages.text2}</p>
                        <p>{messages.text3}</p>
                        <p>{messages.text4}</p>
                    </div>
                </div>
                <div>
                    <Card className={`${styles.casestudy_card} text-white text-center`}>
                        <CardBody>
                        {messages.text5}
                        </CardBody>
                    </Card>
                </div>
            </Container>
            <Footercontact />
        </div>
    );
};
export default Casestudies;