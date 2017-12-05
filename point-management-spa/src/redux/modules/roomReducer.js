export const FETCHED_ROOMBYID = 'room/FETCHEDGETBYID';
export const FETCH_ROOM_BYID = 'room/FETCHGETBYID';
export const FETCHING_ROOMS = 'room/FETCHING_ROOMS';
export const FETCH_ROOMS_FAIL = 'room/FETCH_ROOMS_FAIL';
export const FETCH_ROOMS_SUCCESS = 'room/FETCH_ROOMS_SUCCESS';


export const fetchingRooms = () => ({
  type: FETCHING_ROOMS
});

export const fetchRoomsFail = (errors) => ({
  type: FETCH_ROOMS_FAIL,
  errors,
});

export const fetchRoomsSuccess = (rooms) => ({
  type: FETCH_ROOMS_SUCCESS,
  rooms,
})   

export const FetchByID = (roomID) => ({
    type: FETCH_ROOM_BYID,
    roomID
  })
  
  export const FetchedFullFilledByID = (room) => ({
    type: FETCHED_ROOMBYID,
    room
  })
  


  const initialState = {
    rooms: {
      rooms: null,
      isFetching: false,
      errors: null,
    },
    room:{
        title: null,
        description: null,
        currentPrice: null
    },
    fetching: false,
    fetched: false,
    errorMessage: null,
  }
  
  const roomReducer = (state = initialState, action = {}) => {
    switch(action.type) {
      case FETCHING_ROOMS: 
        return {
          ...state,
          rooms: {
            ...state.rooms,
            rooms: null,
            errors: null,
            isFetching: true,
          }
        }
      case FETCH_ROOMS_FAIL:
        return {
          ...state,
          rooms: {
            ...state.rooms,
            isFetching: false,
            errors: action.errors,
          }
        };
      
      case FETCH_ROOMS_SUCCESS:
        return {
          ...state,
          rooms: {
            ...state.rooms,
            isFetching: false,
            rooms: action.rooms,
          },
        };
      case FETCH_ROOM_BYID:
        return {
          ...state,
          fetching: true,
        }
        case FETCHED_ROOMBYID:
        console.log(action.room);
        
            return{
                ...state,
                fetching: false,
                fetched: true,
                room : action.room.room
            }
  
     
      default:
        return state;
  
    }
  }
  
  export default roomReducer;
