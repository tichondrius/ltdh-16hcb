import styled, { css } from 'styled-components';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
export const IntroducePanelStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TopPanelStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  items-align: center;
  width: 100%;
  align-items: center;
  
`
export const BranchStyled = styled.div`
  color: rgb(0, 188, 212);
  font-size: 30px;
  flex: 4;
  text-align: right;
  padding-right: 10px;
  

`
export const BranchDescStyled = styled.div`
  color: #007fad;
  font-size: 20px;
  flex: 6;
  text-align: left;
  padding-left: 10px;
  border-left: 1px solid black;
`

export const BottomPanelStyled = styled.div`
  flex: 1;
  flex-direction: column;
  
`

export const InfoMoreStyled = styled(Card)`
  flex: 1;
  padding: 10px;
`

export const HeadingInfoStyled = styled.h2`
  color: rgb(0,188,212);
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 5px;
  font-size: 18px;
`

export const DescInfoStyled = styled(CardText)`
  
`
