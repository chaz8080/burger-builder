/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Button.module.css';

const button = ({ children, clicked, btnType }) => (
  <button
    onClick={clicked}
    className={[classes.Button, classes[btnType]].join(' ')}
  >
    {children}
  </button>
);

export default button;
