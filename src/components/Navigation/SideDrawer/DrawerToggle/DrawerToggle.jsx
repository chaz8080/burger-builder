/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = ({ clicked }) => (
  <div onClick={clicked} className={classes.DrawerToggle}>
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
