import React from 'react';
import { Button, Card, Col, Container, Form, Row ,Image} from 'react-bootstrap';
import Phone from 'assets/images/phone-icon.svg';
import { Footer, Header } from 'containers';
import styles from './contact.module.scss';
import messages from '../Contact/messages';
import Banner from '../../assets/images/contact.png';
import GoogleMap from 'components/GoogleMap';
import Footercontact from 'containers/FooterContact';
import arrow from '../../assets/images/icons8-arrow-24.png';



const Contact = () => {
  return (
    <div className="d-flex flex-column bg-white">
      <Header />
      <Container fluid className="p-0 overflow-auto" style={{ marginBottom: '100px' }}>
        <div className={`${styles.card_1} bg-white`}>
          <img src={Banner} width={1900}height={584} >
          </img>
          <div className={`${styles.text} text-white user-select-none`}>
            <p>{messages.title}</p>
            <p>{messages.title1}</p>
          </div>
        </div>
        <div className='bg-white'>
          <p className='text-center pt-5 fs-2 fw-bold'>{messages.text}</p>
          <form>
            <div className="mb-3 d-flex justify-content-center gap-5">
              <div>
                <label className="form-label">{messages.text1}</label>
                <input type="text" className={`${styles.input} form-control`}/>
              </div>
              <div>
                <label className="form-label">{messages.text2}</label>
                <input type="text" className={`${styles.input} form-control`}/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center gap-5">
              <div>
                <label className="form-label">{messages.text3}</label>
                <div className={`${styles.mobile_input} input-group`}>
                  <button className={`${styles.button} btn dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">IND +91</button>
                    <ul className="dropdown-menu">
                    </ul>
                    <input type="number" className={`${styles.input} form-control`} aria-label="Text input with dropdown button"/>
                </div>
              </div>
              <div>
                <label className="form-label">{messages.text4}</label>
                <input type="email" className={`${styles.input} form-control`}/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center gap-5">
              <div>
              <label className="form-label">{messages.text5}</label>
                <input type="text" className={`${styles.input} form-control`}/>
                
              </div>
              <div>
                <label className="form-label">{messages.text6}</label>
                <input type="text" className={`${styles.input} form-control`}/>
              </div>
            </div>
            <div className="mb-3">
              <label className={`${styles.label_message} mb-2`}>{messages.text7}</label>
              <div className='d-flex justify-content-center'>
              <textarea className={`${styles.textarea} form-control`} id="exampleFormControlTextarea1"></textarea>
              </div>
            </div>
            <div className={`${styles.formcheck} d-flex gap-1 mb-5`}>
              <input className={`${styles.checkbox} form-check-input`} type="checkbox" value="" id="invalidCheck" required/>
              <label className="form-check-label">
              {messages.text8}
              </label>
            </div>
            <button type="submit" className={`${styles.submit_button} btn text-white pt-3 mb-5 rounded-pill d-flex justify-content-center gap-4`}>Submit 
              <span>
                <img src={arrow}></img>
              </span>
            </button>
          </form>
        </div>
        <div className={`${styles.googlemap_container}`}>
        <GoogleMap />
        </div>
      </Container>
      <div className={`${styles.footer_container}`}>
      <Footercontact />
      </div>
      
    </div>
  );
};
export default Contact;
