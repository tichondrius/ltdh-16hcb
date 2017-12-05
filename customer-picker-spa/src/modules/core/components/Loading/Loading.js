import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import { LoadingWrapper } from '../../stylesheets/core.styles';

const LoadingComponent = () => (
  <LoadingWrapper>
    <CircularProgress size={60} thickness={7} />
  </LoadingWrapper>
);

export default LoadingComponent;