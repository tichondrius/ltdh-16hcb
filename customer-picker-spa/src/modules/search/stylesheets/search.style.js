import styled, { css } from 'styled-components';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import mapImage from '../../../images/map-access.jpg';

export const MapContainerStyled = styled(Card)`
  background-image: url(${mapImage});
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  border: 8px solid white;
  margin-bottom: 10px;
`



export const IconStartWrapper = styled.div`
  padding: 5px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

`
export const StarItem = styled.div`
  width: 34px;
  height: 34px;
  border: 2px solid #E91E63;
  justify-content: center;
  align-items: center;
  display: flex;
 
  & > span {
    display: block;  
    text-align: center;
    color: #E91E63;
    font-weight: bold;
  }
`

export const RatingItem = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  display: flex;
  background:  ${props => props.backgroundColor ? props.backgroundColor : '#FFF' };
 
  & > span {
    font-size: 12px;
    display: block;  
    text-align: center;
    color: #FFF;
    font-weight: bold;
  }
`

export const CostSliderWrapper = styled.div`
  padding: 15px;

  & > span {
    text-align: center;
    margin: 0 auto;
  }
`

export const CardBodyWrapper = styled.div`
  padding: 15px;
`



