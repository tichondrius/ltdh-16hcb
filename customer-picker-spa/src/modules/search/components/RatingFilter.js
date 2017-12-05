import React from 'react';

import { IconStartWrapper, RatingItem } from '../stylesheets/search.style';

const RatingFilter = (props) => {
  const  { onClick } = props;
  const points = ["0", "7", "7.5", "8", "8.5"];
  const colors = ["#E91E63", "#F44336", "#8BC34A", "#4CAF50", "#009688"];  
  const renderStart = (point, color) => { console.log(color); return(
    <RatingItem key={point} backgroundColor={color}    onClick={() => onClick(point)}>
      <span>{point}+</span>
    </RatingItem>
  )};
  return (
    <IconStartWrapper>
      {
        points.map((point, index) => renderStart(point, colors[index]))
      }
    </IconStartWrapper>
  );
};

export default RatingFilter;