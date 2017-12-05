import React from 'react';
import {
    ContainerWrapperStyled,
    TextFieldStyled, ButtonStyled,
    LoadingProgressStyled,
    ContentBlockStyled,
    ContentBlockAllStyled,
    ContentBlockLStyled,
    SliderStyled 
  } from '../../core/stylesheets/core.styles';

import { 
   HeadingInfoStyled, MapContainerStyled,OverallScore,IconStartWrapper,BoldText,
   CommentStyled,TestTest,TestFlexColumn,DiscountPrice,CurrentPrice
   
} from '../stylesheets/roomdetail.style';
import { CommentLists } from '../components'; 
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 

const PriceComp = ({ text,discountPrice,currentPrice }) =>{
    return(     <TestFlexColumn>
        <HeadingInfoStyled>
           {text}
        </HeadingInfoStyled>
        <DiscountPrice >
            {discountPrice}
         </DiscountPrice>
         <CurrentPrice>{currentPrice}</CurrentPrice>
         <ButtonStyled>Book Room</ButtonStyled>
        </TestFlexColumn>);
   
    

}


export default PriceComp;