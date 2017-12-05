import React, { Component } from 'react';
import Router, { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ROUTE_PATH } from '../Routes';

const LoginRequired = ({ component: Component, isPersisted, token, ...props }) => {
  if (isPersisted === false) return (<div />);
  if (token) {
    return (
      <Route {...props} render={props => (<Component {...props} />)} />
    );
  } else if (!token) {
    return (
      <Redirect to={ROUTE_PATH.LOGIN} />
    );
  }
};

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    isPersisted: state.config.isPersisted,
  };
}


// export default LoginRequired;
export default withRouter(connect(mapStateToProps)(LoginRequired));
