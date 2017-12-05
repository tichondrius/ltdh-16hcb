import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './modules/core/components'
import { LoginPage } from './modules/login/containers';
import { HomePage } from './modules/home/containers';

import { RoomDetailPage } from './modules/roomdetail/containers';

import { SearchPage  } from './modules/search/containers';
import configureStore from './redux/configureStore'

import LoginRequired from './utils/LoginRequired';
import RouteMiddleware from './utils/RouteMiddleware';
import Route from './utils/Route';

export const ROUTE_PATH = {
  ROOT: '/',
  SEARCH: '/search', 
  HOME: '/home',
  LOGIN: '/login',
  PAGE1: '/page1',
  PAGE2: '/page2',
  ROOMDETAILS: '/room/:id'
}
const FakeLogin = () => (
  <h2>Login</h2>
);
const FakePage1 = () => (
  <h2>Page1 no login required</h2>
);
const FakePage2 = () => (
  <h2>Page 2 login required</h2>
);

export default class Routes extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <RouteMiddleware>
            <App>
              <Switch>
                <Route path={ROUTE_PATH.HOME} component={HomePage} />
                <Route path={ROUTE_PATH.SEARCH} component={SearchPage} />
                <Route path={ROUTE_PATH.LOGIN} component={LoginPage} />
                <Route path={ROUTE_PATH.PAGE1} component={FakePage1} />
                <Route path={ROUTE_PATH.ROOMDETAILS} component={RoomDetailPage} />
                
                <LoginRequired path={ROUTE_PATH.PAGE2} exact component={FakePage2} />
                <Redirect from={ROUTE_PATH.ROOT} to={ROUTE_PATH.HOME} />
              </Switch>
            </App>
          </RouteMiddleware>
        </Router>
      </Provider>
    );
  }
}

