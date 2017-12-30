import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './modules/core/components'
import { LoginPage } from './modules/login/containers';
import { HomePage } from './modules/home/containers';

import configureStore from './redux/configureStore'

import LoginRequired from './utils/LoginRequired';
import RouteMiddleware from './utils/RouteMiddleware';
import Route from './utils/Route';

export const ROUTE_PATH = {
  ROOT: '/',
  HOME: '/home',
  LOGIN: '/login',
}


export default class Routes extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <RouteMiddleware>
            <App>
              <Switch>
                <LoginRequired path={ROUTE_PATH.HOME} component={HomePage} />
                <Route path={ROUTE_PATH.LOGIN} component={LoginPage} />
                <Redirect from={ROUTE_PATH.ROOT} to={ROUTE_PATH.HOME} />
              </Switch>
            </App>
          </RouteMiddleware>
        </Router>
      </Provider>
    );
  }
}