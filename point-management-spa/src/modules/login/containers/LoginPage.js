import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { authLogin, flushErrorLogin } from '../../../redux/modules/authReducer'

import { ContainerWrapperStyled, TextFieldStyled, ButtonStyled, LoadingProgressStyled, ErrorPanelStyled } from '../../core/stylesheets/core.styles'
import { PaperStyled, } from '../stylesheets/login.page.style'
import { ROUTE_PATH } from '../../../Routes';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  componentWillMount() {
    this.props.flushError();
  }
  handleLogin = () => {
    const { username, password } = this.state;
    this.props.login(username, password);
  }
  handleChangeText = (fieldName, value) => {
    const state = {};
    state[fieldName] = value;
    this.setState(state);
  }  
  render() {
    const { error, isLogging, isAuth } = this.props;
    const { username, password } = this.state;
    if (isAuth) {
      return (
        <Redirect to={ROUTE_PATH.HOME} />
      )
    }
    return (
      <DocumentTitle title="Booking App - Login">
        <ContainerWrapperStyled>
        
          
          <PaperStyled>
             {
           Array.isArray(error) && error.length > 0 &&
           <ErrorPanelStyled>
              { error.map(err => (
                <li>
                  {err}
                </li>
              ))}
           </ErrorPanelStyled>
         }
            <TextFieldStyled
              fullWidth={true}
              hintText="Username"
              floatingLabelText="Input your username"
              value={username}
              onChange={(event, value) => this.handleChangeText('username', value)}
            /><br />
            <TextFieldStyled
              fullWidth={true}
              hintText="Password"
              floatingLabelText="Input your password"
              onChange={(event, value) => this.handleChangeText('password', value)}
              value={password}
            /><br />
            <ButtonStyled disabled={isLogging} onClick={this.handleLogin}  label="Đăng nhập" primary={true} fullWidth={true}/>
            {
              isLogging && <LoadingProgressStyled mode="indeterminate"/>
            }
          </PaperStyled>
        </ContainerWrapperStyled>    
      </DocumentTitle>
    );
  }
  
};

export const mapPropsToState = (state) => ({
  error: state.auth.errorMessage,
  isLogging: state.auth.isLogging,
  isAuth: state.config.isPersisted && Boolean(state.auth.token),
})

export const mapProps = dispatch => ({
  login: (username, password) => dispatch(authLogin(username, password)),
  flushError: () => dispatch(flushErrorLogin()),
})

export default connect(mapPropsToState, mapProps)(LoginPage);