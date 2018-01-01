import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom'
import { authLogin } from '../../../redux/modules/authReducer'

import {
  ContainerWrapperStyled,
  TextFieldStyled, ButtonStyled,
  LoadingProgressStyled,
  ContentBlockStyled,
  ContentBlockAllStyled,
  ContentBlockLStyled,
  ContentBlockRStyled, ButtonWrapper} from '../../core/stylesheets/core.styles'
import { IntroducePanelStyled,
  TopPanelStyled, BranchStyled, BranchDescStyled, BottomPanelStyled
  } from '../stylesheets/homepage.style';

import { InfoMore } from '../components'; 
import { ROUTE_PATH } from '../../../Routes';


const HomePage = (props) => {
  return (
    <DocumentTitle title="GrabFake - Định vị toạ độ điểm">
      <ContainerWrapperStyled>
        <h2>Trang chủ</h2>
      </ContainerWrapperStyled>    
    </DocumentTitle>
  );
}

export default HomePage;