import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class MiddlewareRoute extends Component {
  componentDidUpdate(prevProps) {
    const currentLocation = prevProps.location;
    const prevLocation = this.props.location;
    if (currentLocation !== prevLocation
        && currentLocation.pathname !== prevLocation.pathname) {
      // Scroll to top every change route
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(MiddlewareRoute);