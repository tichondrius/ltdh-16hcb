import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RouteApp = ({ component: Component, isPersisted, ...props }) => {
  if (isPersisted === true) {
     return (
      <Route {...props} render={props => (<Component {...props} />)} />
    );
  }
  else return (<div/>);
};

function mapStateToProps(state) {
  return {
    isPersisted: state.config.isPersisted,
  }
}

export default connect(mapStateToProps)(RouteApp);
