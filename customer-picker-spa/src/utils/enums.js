const ENUMS = {
  TRANSPORTATION_TYPE: {
    NORMAL: 'normal',
    PREMIUM: 'premium', 
  },
  CAR_STATUS: {
    FREE: 'free',
    BUSY: 'busy',
  },
  TYPE_USER: {
    TELEPHONLIST: 'telephonlist',
    CUSTOMER_PICKER: 'customer_picker',
    CAR_DRIVEN: 'car_driven',
  },
  POINT_STATUS: {
    NO_CAR_FOUND: 'no_car_found',
    NOT_CAR_YET: 'not_car_yet',
    INCOMING: 'incoming',
    ISTRANSFERING: 'is_transfering',
    COMPLETE: 'complete',
  },
  INFO_STATUS: {
    NEW: 'new',
    CREATED_POINT: 'created_point'
  },
  SOCKET_METHOD: {
    SERVER_SEND_POINT_REQUEST: 'server/Request_Point',
    SERVER_CAR_UPDATED: 'server/Car_Updated',
    SERVER_CAR_ADDED: 'server/Car_Added',
    SERVER_INFO_ADDED: 'server/Info_Added',
    SERVER_INFO_UPDATED: 'server/Info_Updated',
    SERVER_POINT_ADDED: 'server/Point_Added',
    SERVER_POINT_UPDATED: 'server/Point_Updated',
  },
  GEO_CODING_TYPE_ERROR: {
    NOT_FOUND: 'not_found',
    FORMAT_ERROR: 'format_error',
  },
  MARKER_TYPE: {
    CUSOMTER: 'customer',
    CAR: 'car',
  }
}

module.exports = ENUMS;