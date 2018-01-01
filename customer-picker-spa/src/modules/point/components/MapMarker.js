import React from 'react';
import PropTypes from 'prop-types';

import { MARKER_TYPE } from '../../../utils/enums';
import carImageMarker from '../../../images/car-marker.png';
import customerImageMarker from '../../../images/customer-marker.png';

const MapMarker = props => {
    const { type, handleClick } = props;
    let srcMarker = '';
    switch(type) {
        case MARKER_TYPE.CAR:
            srcMarker = carImageMarker;
            break;
        case MARKER_TYPE.CUSOMTER:
            srcMarker = customerImageMarker
            break;
    }
    return (
      <div>
        <img src={srcMarker} style={{cursor: 'pointer'}} onClick={() => props.handleClick()} />
      </div>
    )
}

MapMarker.propTypes = {
    type: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

MapMarker.defaultProps = {
    handleClick: () => {},
}

export default MapMarker;

