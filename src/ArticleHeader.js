import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-green.png';
import styles from './ArticleHeader.module.css';


export default () => (
  <header className={styles.header}>
    <Link to='/'>
      <img
        src={logo}
        alt="Syson Logo"
        style={{ width: '150px' }}
      />
    </Link>
  </header>
);
