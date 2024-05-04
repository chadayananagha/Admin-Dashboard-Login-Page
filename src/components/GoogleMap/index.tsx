import React from 'react';
import { Button, Card, CardBody } from 'react-bootstrap';

import styles from './googleMap.module.scss';

const GoogleMap = () => {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.643614358267!2d77.54675805!3d12.930612199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e3056254233%3A0x2287a5eba5febd80!2s2nd%20Block%2C%20Banashankari%203rd%20Stage%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560085%2C%20India!5e0!3m2!1sen!2sde!4v1705760275964!5m2!1sen!2sde" width="1890" height="400" loading="lazy"></iframe>
      <Card className={`${styles.contact_card_style} bg-white rounded-4`}>
        <CardBody>
        <div className={`${styles.address}  ps-5 pt-4 text-black`}>
          <p>620, 2nd Phase, 2nd cross, 7th Block</p> 
          <p>Banashankari 3rd Stage, Bangalore</p> 
          <p>Karnataka, India, 560085</p>
        </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default GoogleMap;
