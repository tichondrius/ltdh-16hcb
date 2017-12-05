import React from 'react';

import {
    ContainerWrapperStyled,
    TextFieldStyled, ButtonStyled,
    LoadingProgressStyled,
    ContentBlockStyled,
    ContentBlockAllStyled,
    ContentBlockLStyled,
  } from '../../core/stylesheets/core.styles';

import { 
   HeadingInfoStyled, MapContainerStyled,OverallScore,IconStartWrapper,BoldText,TestFlexColumn
} from '../stylesheets/roomdetail.style';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 


const InforRoom = ({title, address,background}) => (

  <Row>
      <Column md="4" sm = "4">
        <MapContainerStyled style={{backgroundImage:`url(${background})`}}>
            <ButtonStyled label="Đến bản đồ"></ButtonStyled>
        </MapContainerStyled>
      </Column>
      <Column md="8" sm = "8">
        <HeadingInfoStyled>{title}</HeadingInfoStyled>
        <HeadingInfoStyled>{address}</HeadingInfoStyled>
        <IconStartWrapper>
            <OverallScore >
                    <span>{8}+</span>
            </OverallScore>
            <BoldText>{8}</BoldText>
        </IconStartWrapper>
      
      </Column>
  </Row>
);

export default InforRoom;