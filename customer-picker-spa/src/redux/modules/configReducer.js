export const APP_PERSISTED = 'config/PERSISTED';
export const APP_SOCKET_CONNECTED = 'config/APP_SOCKET_CONNECTED';


export const persistedDone = () => ({
  type: APP_PERSISTED,
})

export const socketConnected = () => ({
  type: APP_SOCKET_CONNECTED,
})  

const initialState = {
  isPersisted: false,
  isSocketConnected: false,   
}


export default function config (state = initialState, action) {
  switch(action.type) {
    case APP_SOCKET_CONNECTED: 
      return {
        ...state,
        isSocketConnected: true,
      }
    case APP_PERSISTED: 
      return {
        ...state,
        isPersisted: true,
      };
    default: return state;
  }
}