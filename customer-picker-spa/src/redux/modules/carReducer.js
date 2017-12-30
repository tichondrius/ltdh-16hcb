const FETCHING_CAR = 'car/FETCHING_CAR';
const FETCH_CAR_SUCCESS = 'car/FETCH_CAR_SUCCESS';
const FETCH_CAR_FAIL = 'car/FETCH_CAR_FAIL';
const FLUSH_CAR_DATA = 'car/FLUSH_CAR_DATA';
const CAR_UPDATED = 'car/CAR_UPDATED';
const CAR_CREATED = 'car/CAR_CREATED';


export const fetchingCar = () => ({
  type: FETCHING_CAR,
});

export const fetchCarSuccess = (cars) => ({
  type: FETCH_CAR_SUCCESS,
  cars,
});

export const fetchCarFail = (errors) => ({
  type: FETCH_CAR_FAIL,
  errors,
});

export const flushCar = () => ({
  type: FLUSH_CAR_DATA,
});

export const updateCar = (car) => ({
  type: CAR_UPDATED,
  car,
})

export const addCar = (car) => ({
  type: CAR_CREATED,
  car,
})

export const carActionCreator = {
  fetchingCar,
  fetchCarSuccess,
  fetchCarFail,
  flushCar,
  updateCar,
  addCar,
};

const initialState = {
  cars: null,
  isFetching: false,
  errors: null, 
};

const carReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCHING_CAR: 
      return {
        ...state,
        isFetching: true,
        errors: null,
      }
    case FETCH_CAR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cars: action.cars,
      }
    case FETCH_CAR_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      }
    case CAR_UPDATED:
      return {
        ...state,
        cars: state.cars.map(car => {
          if (car._id === action.car._id) {
            return action.car;
          } else return car;
        })
      }

    case CAR_CREATED:
      return {
        ...state,
        cars: state.cars.find(car => car._id === action.car._id)
          ? state.cars
          : [...state.cars, action.car] 
      };
    case FLUSH_CAR_DATA:
      return initialState;

    default: return state;
  }
}

export default carReducer;