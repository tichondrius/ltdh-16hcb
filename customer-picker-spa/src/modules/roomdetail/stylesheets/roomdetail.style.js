import styled, { css } from 'styled-components';
import { Card } from 'material-ui/Card';



export const OverallScore = styled.div`
    width: 34px;
    height: 34px;
    display: flex;
    margin-left: 16px;
    border: 1px solid;
    justify-content: center;
    align-items: center;
    background: #E91E63;
    & > span {
        font-size: 12px;
        display: block;  
        text-align: center;
        color: #FFFF;
        font-weight: bold;
      }
`;

export const TestFlexColumn = styled.div`
display: flex;
margin-bottom: 10px;
flex-direction: column;
align-items: center;

`


export const InformationContainer = styled.div`
display: flex;
margin-bottom: 10px;
flex-direction: column;


`
export const ContainerDetailInforStyled = styled.div`
padding: 0 15px;
padding-top: 20px;
flex: 5;
margin-bottom: 50px;
@media(max-width: 840px){
  padding: 10px;
  padding-top: 20px;
}
`;
export const IconStartWrapper = styled.div`
padding: 5px;
height: 40px;
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;

`
export const CommentStyled = styled(Card)`

margin-top: 5px;
`

export const DividerHoz = styled.div`
width: 100%;
height: 100%;
border-right-width: thin;
border-right-style: dotted;
border-right-color: coral;
`


export const MapContainerStyled = styled(Card)`

display: flex;
height: 150px;
justify-content: center;
align-items: flex-end;
border: 8px solid white;
margin-bottom: 1px;
`
export const ImageContainerStyled = styled(Card)`

display: flex;
height: 500px;
justify-content: center;
align-items: flex-end;
border: 8px solid white;
margin-bottom: 1px;
`
export const BoldText = styled.span`

margin-left: 10px;
font-weight: bold;
padding: 0 15px;
padding-top: 20px;
margin-bottom: 10px;
`;
export const DiscountPrice = styled.span`

margin-left: 10px;
font-weight: bold;
padding-top: 5px;
padding: 0 15px;
color: red;
text-decoration: line-through;
`;
export const CurrentPrice = styled.span`

margin-left: 10px;
font-weight: bold;
padding: 0 15px;
color: green;
padding-top: 5px;

`;

export const HeadingInfoStyled = styled.h2`
color: rgb(0,188,212);
padding-left: 16px;
padding-right: 16px;
margin-bottom: 5px;
font-size: 18px;
`;

