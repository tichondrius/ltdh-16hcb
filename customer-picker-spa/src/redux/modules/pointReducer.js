export const FETCHING_POINT = 'point/FETCHING_POINT';
export const FETCH_POINT_SUCCESS = 'point/FETCH_POINT_SUCCESS';
export const FETCH_POINT_FAIL = 'point/FETCH_POINT_FAIL';
export const FLUSH_POINT_DATA = 'point/FLUSH_POINT_DATA';
export const POINT_UPDATED = 'point/POINT_UPDATED';
export const POINT_CREATED = 'point/POINT_CREATED';
export const CREATING_POINT = 'point/creation/CREATING_POINT';
export const CREATE_POINT_SUCCESS = 'point/creation/CREATE_POINT_SUCCESS';
export const CREATE_POINT_FAIL = 'point/creation/CREATE_POINT_FAIL';
export const FLUSH_CREATION = 'point/creation/FLUSH_CREATION';


export const fetchingPoint = () => ({
  type: FETCHING_POINT,
});

export const fetchPointSuccess = (points) => ({
  type: FETCH_POINT_SUCCESS,
  points,
});

export const fetchPointFail = (errors) => ({
  type: FETCH_POINT_FAIL,
  errors,
});

export const flushPoint = () => ({
  type: FLUSH_POINT_DATA,
});

export const updatePoint = (point) => ({
  type: POINT_UPDATED,
  point,
})

export const addPoint = (point) => ({
  type: POINT_CREATED,
  point,
})

export const creatingPoint = (infoId, location, real_address) => ({
  type: CREATING_POINT,
  infoId,
  location,
  real_address,
});


export const createPointSuccess = (point) => ({
  type: CREATE_POINT_SUCCESS,
  point
});

export const createPointFail = (errors) => ({
  type: CREATE_POINT_FAIL,
  errors,
});

export const flushCreation = () => ({
  type: FLUSH_CREATION,
})

export const pointActionCreator = {
  fetchingPoint,
  fetchPointSuccess,
  fetchPointFail,
  flushPoint,
  updatePoint,
  addPoint,
  creatingPoint,
  createPointFail,
  createPointSuccess,
  flushCreation
};


const initialCreation = {
  isCreating: false,
  errors: null,
  success: null,
}
const initialState = {
  points: null,
  isFetching: false,
  errors: null, 
  creation: initialCreation,
};

const pointReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCHING_POINT: 
      return {
        ...state,
        isFetching: true,
        errors: null,
      }
    case FETCH_POINT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        points: action.points,
      }
    case FETCH_POINT_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      }
    case POINT_UPDATED:
      return {
        ...state,
        points: state.points.map(point => {
          if (point._id === action.point._id) {
            return action.point;
          } else return point;
        })
      }

    case POINT_CREATED:
      return {
        ...state,
        points: state.points.find(point => point._id === action.point._id)
          ? state.points
          : [...state.points, action.point] 
      };
    case CREATING_POINT:
      return {
        ...state,
        creation: {
          isCreating: true,
          errors: null,
          success: null,
        }
      }
    case CREATE_POINT_FAIL:
      return {
        ...state,
        creation: {
          isCreating: false,
          errors: action.errors,
          success: false,
        }
      }
    case CREATE_POINT_SUCCESS: 
      return {
        ...state,
        creation: {
          isCreating: false,
          errors: null,
          success: action.point,
        }
      }
    case FLUSH_CREATION:
      return {
        ...state,
        creation: initialCreation,
      }
    case FLUSH_POINT_DATA:
      return initialState;

    default: return state;
  }
}

export default pointReducer;