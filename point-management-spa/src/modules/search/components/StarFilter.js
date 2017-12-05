import React from 'react';

import { IconStartWrapper, StarItem } from '../stylesheets/search.style';

const StarFilter = (props) => {
  const  { onClick } = props;
  const starts = [1, 2, 3, 4, 5];  
  const renderStart = (starValue) => (
    <StarItem key={starValue} onClick={() => onClick(starValue)}>
      <span>{starValue}</span>
    </StarItem>
  );
  return (
    <IconStartWrapper>
      {
        starts.map(starValue => renderStart(starValue))
      }
    </IconStartWrapper>
  );
};

export default StarFilter;