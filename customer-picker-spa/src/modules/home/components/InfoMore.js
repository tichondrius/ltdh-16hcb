import React from 'react';

import { 
  BottomPanelStyled, InfoMoreStyled, HeadingInfoStyled, DescInfoStyled,
} from '../stylesheets/homepage.style';

const InfoMore = ({title, content}) => (
  <InfoMoreStyled>
    <HeadingInfoStyled>{title}</HeadingInfoStyled>
    <DescInfoStyled>{content}</DescInfoStyled>
  </InfoMoreStyled>
);

export default InfoMore;