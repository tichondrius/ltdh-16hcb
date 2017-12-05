import React from 'react';
import AppBar from 'material-ui/AppBar';

import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';

import { HeaderWrapperStyled } from '../../stylesheets/header.style';
import { openDrawer, closeDrawer, toggleDrawer } from '../../../../redux/modules/uiReducer';
import { authLogin, authLogout } from '../../../../redux/modules/authReducer'
import { LoginButton, LoggedButton } from '../../components';
import { ROUTE_PATH } from '../../../../Routes';

const Header = (props) => {
  const { changeOpenDrawer, changeCloseDrawer, isDrawerOpening,
    wasLogged, login, logout, history, changeStateDrawer } = props;
  const renderMenuItem = (item) => (
    <MenuItem key={item} onClick={() => changeCloseDrawer()}>{item}</MenuItem>
  );
  const renderListMenuItem = (items) => {
    return items.map((item) => renderMenuItem(item));
  }
  const changeRoute = (routePath) => {
    changeCloseDrawer();
    props.history.push(routePath);
  }
  const iconRight = wasLogged ?  
    <LoggedButton onLogout={() => logout()}/> : 
    <LoginButton onClick={() => props.history.push(ROUTE_PATH.LOGIN)}/>
  return (
    <HeaderWrapperStyled>
      <AppBar
        onLeftIconButtonTouchTap={() => changeStateDrawer()}
        iconElementRight={iconRight}
        title="Chọn toạ độ vị trí điểm"
      />
      <Drawer open={isDrawerOpening}>
        <MenuItem onClick={() => changeRoute(ROUTE_PATH.HOME)}>
          Trang chủ
        </MenuItem>
        <MenuItem onClick={() => changeRoute(ROUTE_PATH.LOGIN)}>
          Login
        </MenuItem>
        <MenuItem onClick={() => changeRoute(ROUTE_PATH.SEARCH)}>
          Tìm kiếm
        </MenuItem>
        <MenuItem onClick={() => changeRoute(ROUTE_PATH.PAGE1)}>
          Page1 (No login required)
        </MenuItem>
        <MenuItem onClick={() => changeRoute(ROUTE_PATH.PAGE2)}>
          Page2 (Login required)
        </MenuItem>
      </Drawer>
    </HeaderWrapperStyled>)
};


const mapStateToProps = (state) => ({
  isDrawerOpening: state.ui.isDrawerOpening,
  wasLogged: state.config.isPersisted && Boolean(state.auth.token),
});

const mapDispatchToProps = dispatch => ({
  changeStateDrawer: () => dispatch(toggleDrawer()),
  changeOpenDrawer: () => dispatch(openDrawer()),
  changeCloseDrawer: () => dispatch(closeDrawer()),
  login: (username, password) => {
    dispatch(authLogin(username, password));
  },
  logout: () => dispatch(authLogout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));