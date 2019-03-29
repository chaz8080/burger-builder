/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = ({ show, clicked }) => (
  show ? <div className={classes.Backdrop} onClick={clicked} role="presentation" /> : null
);

export default backdrop;
