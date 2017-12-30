const FETCHING_INFO = 'info/FETCHING_INFO';
const FETCH_INFO_SUCCESS = 'info/FETCH_INFO_SUCCESS';
const FETCH_INFO_FAIL = 'info/FETCH_INFO_FAIL';
const FLUSH_INFO_DATA = 'info/FLUSH_INFO_DATA';
const INFO_UPDATED = 'info/INFO_UPDATED';
const INFO_CREATED = 'info/INFO_CREATED';


export const fetchingInfo = () => ({
  type: FETCHING_INFO,
});

export const fetchInfoSuccess = (infos) => ({
  type: FETCH_INFO_SUCCESS,
  infos,
});

export const fetchInfoFail = (errors) => ({
  type: FETCH_INFO_FAIL,
  errors,
});

export const flushInfo = () => ({
  type: FLUSH_INFO_DATA,
});

export const updateInfo = (info) => ({
  type: INFO_UPDATED,
  info,
})

export const addInfo = (info) => ({
  type: INFO_CREATED,
  info,
})

export const infoActionCreator = {
  fetchingInfo,
  fetchInfoSuccess,
  fetchInfoFail,
  flushInfo,
  updateInfo,
  addInfo,
};

const initialState = {
  infos: null,
  isFetching: false,
  errors: null, 
};

const infoReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCHING_INFO: 
      return {
        ...state,
        isFetching: true,
        errors: null,
      }
    case FETCH_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        infos: action.infos,
      }
    case FETCH_INFO_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      }
    case INFO_UPDATED:
      return {
        ...state,
        infos: state.infos.map(info => {
          if (info._id === action.info._id) {
            return action.info;
          } else return info;
        })
      }

    case INFO_CREATED:
      return {
        ...state,
        infos: state.infos.find(info => info._id === action.info._id)
          ? state.infos
          : [...state.infos, action.info] 
      };
    case FLUSH_INFO_DATA:
      return initialState;

    default: return state;
  }
}

export default infoReducer;