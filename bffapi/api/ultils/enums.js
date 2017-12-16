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
    POINT_MANAGEMENT: 'point_management',
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
}

module.exports = ENUMS;