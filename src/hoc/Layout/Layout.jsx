/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../Auxillary/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState( 
      prevState => ({ showSideDrawer: !prevState.showSideDrawer })
    );
  }

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state; 
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={showSideDrawer} />
        <main className={classes.Content}>
          {children}
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
