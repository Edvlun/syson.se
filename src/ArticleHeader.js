import React from 'react';
import logo from './logo-green.png';

export default () => {

  const onClick = () => {
    window.location = '/'
  }

  return (
    <header>
      <img src={logo} style={{ width: '150px', cursor: 'pointer' }} onClick={onClick} />
    </header>
  );
};
