import styled, { css } from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Slider from 'material-ui/Slider';

export const BodyWrapperStyled = styled.div`
  min-height: calc(100vh - 0px);
  overflow: overlay;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background: #fff;
`;

export const ContentBlockStyled = styled.div`
  display: inline-block;
  margin-bottom: ${props => props.noMarginBottom ? 0 : 20}px;
  width: 100%;
`;

export const ContentBlockAllStyled = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media(max-width: 840px){
    flex-direction: column;
    padding: 3px;
  }
`;

export const ContainerWrapperStyled = styled.div`
  padding: 0 15px;
  padding-top: 20px;
  flex: 1;
  margin-bottom: 50px;
  @media(max-width: 840px){
    padding: 10px;
    padding-top: 20px;
  }
`;

export const ContentBlockLStyled = styled.div`
  flex: 1;
  margin-right: 10px;
  @media(max-width: 840px){
   margin-right: 0px;
   margin-bottom: 5px;
  }
`;

export const ContentBlockRStyled = styled.div`
  flex: 0 0 45%;
  margin-left: 10px;
  @media(max-width: 840px){
    margin-left: 0px;
    margin-bottom: 5px;
   }
  ${props => props.barCode && css`
    text-align: center;
  `}
  ${props => props.noMargin && css`
    margin: 0px;
  `}
`;

export const SiteWrapperStyled = styled.div`

`;

export const TextFieldStyled = styled(TextField)`
  
`

export const ButtonStyled = styled(RaisedButton)`
  
`

export const LoadingProgressStyled = styled(LinearProgress)`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ButtonWrapper = styled.div`
  margin: 0 auto;
`
export const CardStyled = styled(Card)`
`

export const CardTitleStyled = styled(CardTitle)`

`
export const CardHeaderStyled = styled(CardHeader)`
  & > div {
    & > span {
      font-weight: 600;
    }
  }
`
export const SliderStyled = styled(Slider)`
   & > div {
     margin-top: 10px !important;
     margin-bottom: 10px !important;
   }
`

export const ErrorPanelStyled = styled.div`
 & > li {
   color: #E91E63;
 }
`

export const LoadingWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`