const FETCHING_POINT = 'point/FETCHING_POINT';
const FETCH_POINT_SUCCESS = 'point/FETCH_POINT_SUCCESS';
const FETCH_POINT_FAIL = 'point/FETCH_POINT_FAIL';
const FLUSH_POINT_DATA = 'point/FLUSH_POINT_DATA';
const POINT_UPDATED = 'point/POINT_UPDATED';
const POINT_CREATED = 'point/POINT_CREATED';


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

export const pointActionCreator = {
  fetchingPoint,
  fetchPointSuccess,
  fetchPointFail,
  flushPoint,
  updatePoint,
  addPoint,
};

const initialState = {
  points: null,
  isFetching: false,
  errors: null, 
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
    case FLUSH_POINT_DATA:
      return initialState;

    default: return state;
  }
}

export default pointReducer;