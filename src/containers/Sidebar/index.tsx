import React from 'react';
import { Nav } from 'react-bootstrap';
import menuItems from './menuItems';
import styles from './sidebar.module.scss';

const Sidebar = (props: any) => {
  return (
    <Nav
      defaultActiveKey="/dashboard"
      className={`flex-column pt-4 px-2 ${props.sidebarDrawerCollapsed ? `${styles.hide}` : `${styles.sidebar}`} `}
    >
      {menuItems.map((nav: any, index: any) => (
        <Nav.Link eventKey={index} key={index} className={`text-dark mb-2 d-flex align-items-center ${styles.navLink}`}>
          <img src={nav.src} />
          <span className={`ms-4 text-nowrap ${props.sidebarDrawerCollapsed ? 'd-none' : ''} `}>{nav.description}</span>
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Sidebar;
